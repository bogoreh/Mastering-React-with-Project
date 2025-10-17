import React, { useState } from 'react'

const PumpForm = ({ onAddPump }) => {
  const [formData, setFormData] = useState({
    name: '',
    nextMaintenance: '',
    pressure: '',
    flowRate: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.nextMaintenance) {
      onAddPump(formData)
      setFormData({
        name: '',
        nextMaintenance: '',
        pressure: '',
        flowRate: ''
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="card">
      <h3>Add New Pump</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pump Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter pump name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Next Maintenance</label>
          <input
            type="date"
            name="nextMaintenance"
            value={formData.nextMaintenance}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Pressure (PSI)</label>
          <input
            type="text"
            name="pressure"
            value={formData.pressure}
            onChange={handleChange}
            placeholder="e.g., 45 PSI"
          />
        </div>
        
        <div className="form-group">
          <label>Flow Rate (L/min)</label>
          <input
            type="text"
            name="flowRate"
            value={formData.flowRate}
            onChange={handleChange}
            placeholder="e.g., 120 L/min"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Add Pump
        </button>
      </form>
    </div>
  )
}

export default PumpForm