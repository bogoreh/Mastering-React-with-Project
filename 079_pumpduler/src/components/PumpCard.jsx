import React from 'react'

const PumpCard = ({ pump, onStatusUpdate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'status-running'
      case 'idle': return 'status-idle'
      case 'maintenance': return 'status-maintenance'
      default: return 'status-idle'
    }
  }

  return (
    <div className="card pump-card">
      <div className="pump-header">
        <h3 className="pump-name">{pump.name}</h3>
        <span className={`status-badge ${getStatusColor(pump.status)}`}>
          {pump.status}
        </span>
      </div>

      <div className="pump-details">
        <div className="detail-item">
          <div className="detail-label">Pressure</div>
          <div className="detail-value">{pump.pressure}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Flow Rate</div>
          <div className="detail-value">{pump.flowRate}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Next Maintenance</div>
          <div className="detail-value">{pump.nextMaintenance}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Pump ID</div>
          <div className="detail-value">#{pump.id}</div>
        </div>
      </div>

      <div className="pump-actions">
        <button 
          className="btn btn-sm btn-success"
          onClick={() => onStatusUpdate(pump.id, 'running')}
        >
          Start
        </button>
        <button 
          className="btn btn-sm btn-warning"
          onClick={() => onStatusUpdate(pump.id, 'idle')}
        >
          Stop
        </button>
        <button 
          className="btn btn-sm btn-danger"
          onClick={() => onStatusUpdate(pump.id, 'maintenance')}
        >
          Maintenance
        </button>
      </div>
    </div>
  )
}

export default PumpCard