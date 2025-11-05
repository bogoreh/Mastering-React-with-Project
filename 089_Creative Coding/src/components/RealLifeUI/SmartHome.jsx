import React, { useState } from 'react';
import './SmartHome.css';

const SmartHome = () => {
  const [devices, setDevices] = useState({
    livingRoom: { lights: false, temperature: 22, tv: false },
    bedroom: { lights: false, temperature: 20, ac: false },
    kitchen: { lights: false, oven: false, temperature: 21 },
    security: { cameras: true, alarm: false, doors: true }
  });

  const [energyUsage, setEnergyUsage] = useState(45);

  const toggleDevice = (room, device) => {
    setDevices(prev => ({
      ...prev,
      [room]: {
        ...prev[room],
        [device]: !prev[room][device]
      }
    }));

    // Update energy usage
    setEnergyUsage(prev => prev + (devices[room][device] ? -5 : 5));
  };

  const adjustTemperature = (room, change) => {
    setDevices(prev => ({
      ...prev,
      [room]: {
        ...prev[room],
        temperature: Math.max(16, Math.min(30, prev[room].temperature + change))
      }
    }));
  };

  const RoomCard = ({ title, room, icon }) => (
    <div className="room-card">
      <div className="room-header">
        <span className="room-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      
      <div className="room-controls">
        <div className="control-group">
          <label>Lights</label>
          <button 
            className={`toggle-btn ${devices[room].lights ? 'on' : 'off'}`}
            onClick={() => toggleDevice(room, 'lights')}
          >
            {devices[room].lights ? '💡 ON' : '💡 OFF'}
          </button>
        </div>

        <div className="control-group">
          <label>Temperature</label>
          <div className="temp-control">
            <button onClick={() => adjustTemperature(room, -1)}>-</button>
            <span>{devices[room].temperature}°C</span>
            <button onClick={() => adjustTemperature(room, 1)}>+</button>
          </div>
        </div>

        {room === 'livingRoom' && (
          <div className="control-group">
            <label>TV</label>
            <button 
              className={`toggle-btn ${devices[room].tv ? 'on' : 'off'}`}
              onClick={() => toggleDevice(room, 'tv')}
            >
              {devices[room].tv ? '📺 ON' : '📺 OFF'}
            </button>
          </div>
        )}

        {room === 'bedroom' && (
          <div className="control-group">
            <label>AC</label>
            <button 
              className={`toggle-btn ${devices[room].ac ? 'on' : 'off'}`}
              onClick={() => toggleDevice(room, 'ac')}
            >
              {devices[room].ac ? '❄️ ON' : '❄️ OFF'}
            </button>
          </div>
        )}

        {room === 'kitchen' && (
          <div className="control-group">
            <label>Oven</label>
            <button 
              className={`toggle-btn ${devices[room].oven ? 'on' : 'off'}`}
              onClick={() => toggleDevice(room, 'oven')}
            >
              {devices[room].oven ? '🔥 ON' : '🔥 OFF'}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="smart-home">
      <div className="home-header">
        <h2>🏠 Smart Home Control</h2>
        <div className="energy-usage">
          <div className="energy-meter">
            <div 
              className="energy-fill"
              style={{ width: `${energyUsage}%` }}
            ></div>
          </div>
          <span>Energy: {energyUsage}%</span>
        </div>
      </div>

      <div className="security-panel">
        <h3>🔒 Security System</h3>
        <div className="security-controls">
          <button 
            className={`security-btn ${devices.security.alarm ? 'armed' : 'disarmed'}`}
            onClick={() => toggleDevice('security', 'alarm')}
          >
            {devices.security.alarm ? '🚨 ARMED' : '🛡️ DISARMED'}
          </button>
          <button 
            className={`security-btn ${devices.security.cameras ? 'on' : 'off'}`}
            onClick={() => toggleDevice('security', 'cameras')}
          >
            {devices.security.cameras ? '📹 CAMERAS ON' : '📹 CAMERAS OFF'}
          </button>
          <button 
            className={`security-btn ${devices.security.doors ? 'locked' : 'unlocked'}`}
            onClick={() => toggleDevice('security', 'doors')}
          >
            {devices.security.doors ? '🔒 DOORS LOCKED' : '🔓 DOORS UNLOCKED'}
          </button>
        </div>
      </div>

      <div className="rooms-grid">
        <RoomCard title="Living Room" room="livingRoom" icon="🛋️" />
        <RoomCard title="Bedroom" room="bedroom" icon="🛏️" />
        <RoomCard title="Kitchen" room="kitchen" icon="👨‍🍳" />
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button 
            className="action-btn"
            onClick={() => {
              setDevices(prev => ({
                ...prev,
                livingRoom: { ...prev.livingRoom, lights: true },
                bedroom: { ...prev.bedroom, lights: true },
                kitchen: { ...prev.kitchen, lights: true }
              }));
            }}
          >
            💡 All Lights On
          </button>
          <button 
            className="action-btn"
            onClick={() => {
              setDevices(prev => ({
                ...prev,
                livingRoom: { ...prev.livingRoom, lights: false },
                bedroom: { ...prev.bedroom, lights: false },
                kitchen: { ...prev.kitchen, lights: false }
              }));
            }}
          >
            🌙 All Lights Off
          </button>
          <button 
            className="action-btn"
            onClick={() => {
              setDevices(prev => ({
                ...prev,
                livingRoom: { ...prev.livingRoom, temperature: 22 },
                bedroom: { ...prev.bedroom, temperature: 20 },
                kitchen: { ...prev.kitchen, temperature: 21 }
              }));
            }}
          >
            🌡️ Reset Temperatures
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;