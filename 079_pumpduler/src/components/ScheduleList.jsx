import React, { useState } from 'react'

const ScheduleList = ({ schedules, pumps, onAddSchedule }) => {
  const [showForm, setShowForm] = useState(false)
  const [newSchedule, setNewSchedule] = useState({
    pumpId: '',
    task: '',
    date: '',
    assignedTo: '',
    priority: 'medium'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newSchedule.pumpId && newSchedule.task && newSchedule.date) {
      onAddSchedule(newSchedule)
      setNewSchedule({
        pumpId: '',
        task: '',
        date: '',
        assignedTo: '',
        priority: 'medium'
      })
      setShowForm(false)
    }
  }

  const getPumpName = (pumpId) => {
    const pump = pumps.find(p => p.id === pumpId)
    return pump ? pump.name : 'Unknown Pump'
  }

  const getPriorityClass = (priority) => {
    return priority === 'high' ? 'high-priority' : 
           priority === 'medium' ? 'medium-priority' : ''
  }

  return (
    <div className="card">
      <div className="section-header">
        <h3>Maintenance Schedule</h3>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
          style={{ width: 'auto' }}
        >
          {showForm ? 'Cancel' : 'Add Schedule'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <div className="form-group">
            <label>Pump</label>
            <select
              name="pumpId"
              value={newSchedule.pumpId}
              onChange={(e) => setNewSchedule({...newSchedule, pumpId: parseInt(e.target.value)})}
              required
            >
              <option value="">Select Pump</option>
              {pumps.map(pump => (
                <option key={pump.id} value={pump.id}>
                  {pump.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Task</label>
            <input
              type="text"
              name="task"
              value={newSchedule.task}
              onChange={(e) => setNewSchedule({...newSchedule, task: e.target.value})}
              placeholder="Enter task description"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={newSchedule.date}
              onChange={(e) => setNewSchedule({...newSchedule, date: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={newSchedule.assignedTo}
              onChange={(e) => setNewSchedule({...newSchedule, assignedTo: e.target.value})}
              placeholder="Assign to technician"
            />
          </div>
          
          <div className="form-group">
            <label>Priority</label>
            <select
              name="priority"
              value={newSchedule.priority}
              onChange={(e) => setNewSchedule({...newSchedule, priority: e.target.value})}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Add Schedule
          </button>
        </form>
      )}

      <div className="schedule-list">
        {schedules.map(schedule => (
          <div 
            key={schedule.id} 
            className={`schedule-item ${getPriorityClass(schedule.priority)}`}
          >
            <div className="schedule-header">
              <div className="schedule-task">{schedule.task}</div>
              <span className={`status-badge ${getPriorityClass(schedule.priority)}`}>
                {schedule.priority}
              </span>
            </div>
            <div className="schedule-details">
              <div><strong>Pump:</strong> {getPumpName(schedule.pumpId)}</div>
              <div><strong>Date:</strong> {schedule.date}</div>
              <div><strong>Assigned To:</strong> {schedule.assignedTo}</div>
            </div>
          </div>
        ))}
        
        {schedules.length === 0 && (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            No schedules found. Add a new schedule to get started.
          </p>
        )}
      </div>
    </div>
  )
}

export default ScheduleList