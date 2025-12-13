import { Stethoscope, Phone, Mail, Calendar, Edit, Trash2, User, Star } from 'lucide-react';

const DoctorList = ({ doctors, onEdit, onDelete, onViewSchedule }) => {
  const getSpecialtyColor = (specialty) => {
    const colors = {
      'Cardiology': '#ff6b6b',
      'Neurology': '#4ecdc4',
      'Pediatrics': '#45b7d1',
      'Orthopedics': '#96ceb4',
      'Dermatology': '#feca57',
      'Gynecology': '#ff9ff3',
      'General': '#54a0ff',
      'Surgery': '#5f27cd'
    };
    return colors[specialty] || '#6c757d';
  };

  return (
    <div className="table-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Medical Staff</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select 
            className="btn btn-secondary"
            style={{ padding: '8px 15px' }}
          >
            <option>All Specialties</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
          </select>
        </div>
      </div>

      <div className="doctors-grid">
        {doctors.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <Stethoscope size={48} style={{ marginBottom: '20px', opacity: 0.5 }} />
            <h3>No doctors found</h3>
            <p>Add new doctors to see them here</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Specialty</th>
                <th>Contact</th>
                <th>Schedule</th>
                <th>Patients</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: '#e3f2fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#1976d2'
                      }}>
                        {doctor.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '1rem' }}>{doctor.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>
                          ID: {doctor.id} • {doctor.experience} years exp
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                          <Star size={14} color="#ffc107" fill="#ffc107" />
                          <span style={{ fontSize: '0.8rem' }}>{doctor.rating}/5</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      padding: '6px 16px',
                      borderRadius: '20px',
                      background: getSpecialtyColor(doctor.specialty) + '20',
                      color: getSpecialtyColor(doctor.specialty),
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      display: 'inline-block'
                    }}>
                      {doctor.specialty}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={14} color="#666" />
                        <span style={{ fontSize: '0.9rem' }}>{doctor.phone}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail size={14} color="#666" />
                        <span style={{ fontSize: '0.9rem' }}>{doctor.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                        {doctor.scheduleDays}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#666' }}>
                        <Clock size={14} />
                        {doctor.scheduleTime}
                      </div>
                      <button 
                        onClick={() => onViewSchedule(doctor)}
                        className="btn btn-secondary"
                        style={{ padding: '4px 12px', fontSize: '0.8rem', marginTop: '4px' }}
                      >
                        <Calendar size={14} style={{ marginRight: '4px' }} />
                        View Schedule
                      </button>
                    </div>
                  </td>
                  <td>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e7d32' }}>
                        {doctor.patientCount}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#666' }}>Today</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span className={`status-badge status-${doctor.status.toLowerCase().replace(' ', '-')}`}>
                        {doctor.status}
                      </span>
                      {doctor.onCall && (
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '12px',
                          background: '#fff3e0',
                          color: '#e65100',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          On Call
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        onClick={() => onEdit(doctor)}
                        className="btn btn-secondary"
                        style={{ padding: '6px 12px' }}
                        title="Edit Doctor"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => onDelete(doctor.id)}
                        className="btn btn-danger"
                        style={{ padding: '6px 12px' }}
                        title="Delete Doctor"
                      >
                        <Trash2 size={16} />
                      </button>
                      <button 
                        onClick={() => onViewSchedule(doctor)}
                        className="btn btn-primary"
                        style={{ padding: '6px 12px' }}
                        title="View Profile"
                      >
                        <User size={16} />
                      </button>
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

export default DoctorList;