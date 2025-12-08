import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Socket.io logic
const onlineUsers = new Map();

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  const { userId, username } = socket.handshake.query;
  
  if (userId && username) {
    onlineUsers.set(socket.id, {
      _id: userId,
      username: username,
      socketId: socket.id
    });
    
    // Send list of online users to all clients
    io.emit('users', Array.from(onlineUsers.values()));
    
    // Notify others about new user
    socket.broadcast.emit('userConnected', {
      _id: userId,
      username: username
    });
  }
  
  // Handle incoming messages
  socket.on('sendMessage', (message) => {
    io.emit('message', {
      ...message,
      timestamp: new Date()
    });
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    const disconnectedUser = onlineUsers.get(socket.id);
    if (disconnectedUser) {
      onlineUsers.delete(socket.id);
      
      // Update online users list
      io.emit('users', Array.from(onlineUsers.values()));
      
      // Notify others about disconnection
      io.emit('userDisconnected', disconnectedUser._id);
    }
    
    console.log('Client disconnected:', socket.id);
  });
});

// In socket connection handler
socket.on('typing', (data) => {
  socket.broadcast.emit('typing', data);
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});