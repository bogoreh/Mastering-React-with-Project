const Doctors = () => {
  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', contact: '+1234567801', status: 'Active' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurology', contact: '+1234567802', status: 'Active' },
    { id: 3, name: 'Dr. Lisa Rodriguez', specialty: 'Pediatrics', contact: '+1234567803', status: 'On Leave' },
    { id: 4, name: 'Dr. David Kim', specialty: 'Orthopedics', contact: '+1234567804', status: 'Active' },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>Doctor Management</h1>
      
      <div className="table-container">
        <h2>Doctors List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.contact}</td>
                <td>
                  <span className={`status-badge status-${doctor.status.toLowerCase().replace(' ', '-')}`}>
                    {doctor.status}
                  </span>
                </td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctors;