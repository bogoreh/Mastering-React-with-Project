import { Calendar, Clock, User, Stethoscope, Edit, Trash2, Check, X } from 'lucide-react';

const AppointmentList = ({ appointments, onEdit, onDelete, onStatusChange }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'confirmed': return '#28a745';
      case 'pending': return '#ffc107';
      case 'cancelled': return '#dc3545';
      case 'completed': return '#17a2b8';
      default: return '#6c757d';
    }
  };

  return (
    <div className="table-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Appointments</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select 
            className="btn btn-secondary"
            style={{ padding: '8px 15px' }}
          >
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <input 
            type="date" 
            className="btn btn-secondary"
            style={{ padding: '8px 15px' }}
          />
        </div>
      </div>

      <div className="appointments-grid">
        {appointments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <Calendar size={48} style={{ marginBottom: '20px', opacity: 0.5 }} />
            <h3>No appointments scheduled</h3>
            <p>Add new appointments to see them here</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#e3f2fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <User size={18} color="#1976d2" />
                      </div>
                      <div>
                        <div style={{ fontWeight: '500' }}>{appointment.patientName}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>ID: {appointment.patientId}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#f3e5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Stethoscope size={18} color="#7b1fa2" />
                      </div>
                      <div>
                        <div style={{ fontWeight: '500' }}>{appointment.doctorName}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>{appointment.specialty}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} color="#666" />
                      <span>{appointment.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <Clock size={16} color="#666" />
                      <span>{appointment.time}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      background: '#e8f5e9',
                      color: '#2e7d32',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {appointment.type}
                    </span>
                  </td>
                  <td>
                    <select
                      value={appointment.status}
                      onChange={(e) => onStatusChange(appointment.id, e.target.value)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        background: 'white',
                        color: getStatusColor(appointment.status),
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        onClick={() => onEdit(appointment)}
                        className="btn btn-secondary"
                        style={{ padding: '6px 12px' }}
                        title="Edit Appointment"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => onDelete(appointment.id)}
                        className="btn btn-danger"
                        style={{ padding: '6px 12px' }}
                        title="Delete Appointment"
                      >
                        <Trash2 size={16} />
                      </button>
                      {appointment.status === 'pending' && (
                        <button 
                          onClick={() => onStatusChange(appointment.id, 'confirmed')}
                          className="btn btn-primary"
                          style={{ padding: '6px 12px' }}
                          title="Confirm Appointment"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      {appointment.status !== 'cancelled' && (
                        <button 
                          onClick={() => onStatusChange(appointment.id, 'cancelled')}
                          className="btn btn-danger"
                          style={{ padding: '6px 12px' }}
                          title="Cancel Appointment"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;