import { Users, Stethoscope, Calendar, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: <Users size={24} />, label: 'Total Patients', value: '1,234' },
    { icon: <Stethoscope size={24} />, label: 'Doctors', value: '48' },
    { icon: <Calendar size={24} />, label: 'Appointments Today', value: '56' },
    { icon: <Activity size={24} />, label: 'Available Beds', value: '128' },
  ];

  const recentAppointments = [
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', time: '11:30 AM', status: 'Pending' },
    { id: 3, patient: 'Robert Brown', doctor: 'Dr. Williams', time: '2:00 PM', status: 'Confirmed' },
    { id: 4, patient: 'Sarah Wilson', doctor: 'Dr. Davis', time: '3:45 PM', status: 'Cancelled' },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>Hospital Dashboard</h1>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
              <div style={{ color: '#4CAF50' }}>
                {stat.icon}
              </div>
              <h3>{stat.label}</h3>
            </div>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="table-container">
        <h2>Recent Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Doctor</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patient}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.time}</td>
                <td>
                  <span className={`status-badge status-${appointment.status.toLowerCase()}`}>
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;