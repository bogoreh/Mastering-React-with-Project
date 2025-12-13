import { Edit, Trash2 } from 'lucide-react';

const PatientList = ({ patients, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <h2>Patient Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.contact}</td>
              <td>
                <span className={`status-badge status-${patient.status}`}>
                  {patient.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button 
                    onClick={() => onEdit(patient)}
                    className="btn btn-secondary"
                    style={{ padding: '5px 10px' }}
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => onDelete(patient.id)}
                    className="btn btn-danger"
                    style={{ padding: '5px 10px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;