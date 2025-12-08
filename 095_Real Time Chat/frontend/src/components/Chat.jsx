import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Message from './Message';
import './Chat.css';

const Chat = ({ user, onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const socketRef = useRef();
  const messagesEndRef = useRef();
  const typingTimeoutRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:5000', {
      query: { userId: user._id, username: user.username }
    });

    // Load previous messages (you can implement API call here)
    const sampleMessages = [
      {
        text: "Welcome to the chat! 👋",
        sender: "System",
        senderId: "system",
        timestamp: new Date(Date.now() - 3600000)
      },
      {
        text: "This is a professional dark theme chat application.",
        sender: "System",
        senderId: "system",
        timestamp: new Date(Date.now() - 1800000)
      }
    ];
    setMessages(sampleMessages);

    socketRef.current.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    socketRef.current.on('users', (usersList) => {
      setUsers(usersList);
    });

    socketRef.current.on('userConnected', (userData) => {
      setUsers(prev => [...prev, userData]);
      // Show connection notification
      addSystemMessage(`${userData.username} joined the chat`);
    });

    socketRef.current.on('userDisconnected', (userId) => {
      const disconnectedUser = users.find(u => u._id === userId);
      if (disconnectedUser) {
        setUsers(prev => prev.filter(u => u._id !== userId));
        addSystemMessage(`${disconnectedUser.username} left the chat`);
      }
    });

    socketRef.current.on('typing', (data) => {
      if (data.userId !== user._id) {
        setTypingUsers(prev => {
          const newTyping = prev.filter(u => u.userId !== data.userId);
          return [...newTyping, { userId: data.userId, username: data.username }];
        });
        
        // Clear typing indicator after 3 seconds
        setTimeout(() => {
          setTypingUsers(prev => prev.filter(u => u.userId !== data.userId));
        }, 3000);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addSystemMessage = (text) => {
    const message = {
      text,
      sender: "System",
      senderId: "system",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const handleTyping = () => {
    socketRef.current.emit('typing', {
      userId: user._id,
      username: user.username
    });

    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      // Stop typing indicator
    }, 1000);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        sender: user.username,
        senderId: user._id,
        timestamp: new Date()
      };
      
      socketRef.current.emit('sendMessage', message);
      setNewMessage('');
    }
  };

  const getTypingText = () => {
    if (typingUsers.length === 0) return null;
    if (typingUsers.length === 1) {
      return `${typingUsers[0].username} is typing...`;
    }
    if (typingUsers.length === 2) {
      return `${typingUsers[0].username} and ${typingUsers[1].username} are typing...`;
    }
    return `${typingUsers.length} people are typing...`;
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="user-profile">
          <div className="user-avatar">{user.username[0].toUpperCase()}</div>
          <div className="user-info">
            <div className="username">{user.username}</div>
            <div className="status">
              <div className="status-dot"></div>
              <span>Online</span>
            </div>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </div>
        
        <div className="online-users">
          <h3>Active Users ({users.length})</h3>
          <div className="users-list">
            {users.map(u => (
              <div key={u._id} className="user-item">
                <div className="status-dot"></div>
                <span>{u.username}</span>
                {u.username === user.username && (
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>(You)</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="chat-main">
        <div className="chat-header">
          <h2>Professional Chat</h2>
          {getTypingText() && (
            <div style={{ 
              fontSize: '14px', 
              color: 'var(--primary)', 
              marginTop: '4px',
              fontStyle: 'italic'
            }}>
              {getTypingText()}
            </div>
          )}
        </div>
        
        <div className="messages-container">
          {messages.map((msg, index) => (
            <Message 
              key={index} 
              message={msg} 
              isOwn={msg.senderId === user._id}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={sendMessage} className="message-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
              handleTyping();
            }}
            placeholder="Type your message here..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;