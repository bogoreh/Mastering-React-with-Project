import { useState } from 'react';
import AppointmentList from '../components/AppointmentList';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { 
      id: 1, 
      patientName: 'John Doe', 
      patientId: 'P001',
      doctorName: 'Dr. Sarah Johnson', 
      specialty: 'Cardiology',
      date: '2024-01-15', 
      time: '10:00 AM', 
      type: 'Consultation', 
      status: 'confirmed' 
    },
    { 
      id: 2, 
      patientName: 'Jane Smith', 
      patientId: 'P002',
      doctorName: 'Dr. Michael Chen', 
      specialty: 'Neurology',
      date: '2024-01-15', 
      time: '11:30 AM', 
      type: 'Follow-up', 
      status: 'pending' 
    },
    { 
      id: 3, 
      patientName: 'Robert Brown', 
      patientId: 'P003',
      doctorName: 'Dr. Lisa Rodriguez', 
      specialty: 'Pediatrics',
      date: '2024-01-15', 
      time: '2:00 PM', 
      type: 'Surgery', 
      status: 'confirmed' 
    },
    { 
      id: 4, 
      patientName: 'Sarah Wilson', 
      patientId: 'P004',
      doctorName: 'Dr. David Kim', 
      specialty: 'Orthopedics',
      date: '2024-01-16', 
      time: '9:00 AM', 
      type: 'Checkup', 
      status: 'cancelled' 
    },
  ]);

  const handleEdit = (appointment) => {
    console.log('Edit appointment:', appointment);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(a => a.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id 
        ? { ...appointment, status: newStatus }
        : appointment
    ));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>Appointment Management</h1>
        <button className="btn btn-primary">
          + Schedule New Appointment
        </button>
      </div>
      
      <AppointmentList 
        appointments={appointments}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Appointments;