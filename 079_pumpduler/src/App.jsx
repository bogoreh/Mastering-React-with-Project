import React, { useState } from 'react'
import PumpCard from './components/PumpCard'
import PumpForm from './components/PumpForm'
import ScheduleList from './components/ScheduleList'
import './styles/App.css'

function App() {
  const [pumps, setPumps] = useState([
    {
      id: 1,
      name: 'Main Pump A',
      status: 'running',
      nextMaintenance: '2024-02-15',
      pressure: '45 PSI',
      flowRate: '120 L/min'
    },
    {
      id: 2,
      name: 'Backup Pump B',
      status: 'idle',
      nextMaintenance: '2024-03-01',
      pressure: '0 PSI',
      flowRate: '0 L/min'
    },
    {
      id: 3,
      name: 'Cooling Pump C',
      status: 'maintenance',
      nextMaintenance: '2024-01-20',
      pressure: '38 PSI',
      flowRate: '95 L/min'
    }
  ])

  const [schedules, setSchedules] = useState([
    {
      id: 1,
      pumpId: 1,
      task: 'Routine Maintenance',
      date: '2024-02-15',
      assignedTo: 'John Doe',
      priority: 'high'
    },
    {
      id: 2,
      pumpId: 2,
      task: 'Inspection',
      date: '2024-03-01',
      assignedTo: 'Jane Smith',
      priority: 'medium'
    }
  ])

  const addPump = (newPump) => {
    const pump = {
      ...newPump,
      id: Date.now(),
      status: 'idle'
    }
    setPumps([...pumps, pump])
  }

  const updatePumpStatus = (pumpId, status) => {
    setPumps(pumps.map(pump => 
      pump.id === pumpId ? { ...pump, status } : pump
    ))
  }

  const addSchedule = (newSchedule) => {
    const schedule = {
      ...newSchedule,
      id: Date.now()
    }
    setSchedules([...schedules, schedule])
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Pumpduler</h1>
        <p>Pump Management & Scheduling System</p>
      </header>

      <main className="app-main">
        <div className="dashboard">
          <section className="pumps-section">
            <div className="section-header">
              <h2>Pump Status</h2>
              <span className="pump-count">{pumps.length} Pumps</span>
            </div>
            <div className="pumps-grid">
              {pumps.map(pump => (
                <PumpCard 
                  key={pump.id} 
                  pump={pump} 
                  onStatusUpdate={updatePumpStatus}
                />
              ))}
            </div>
          </section>

          <div className="right-panel">
            <PumpForm onAddPump={addPump} />
            <ScheduleList 
              schedules={schedules} 
              pumps={pumps}
              onAddSchedule={addSchedule}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App