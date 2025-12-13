import { useState } from 'react';
import PatientList from '../components/PatientList';
import PatientForm from '../components/PatientForm';
import { Plus } from 'lucide-react';

const Patients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 45, gender: 'Male', contact: '+1234567890', status: 'Active' },
    { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', contact: '+1234567891', status: 'Active' },
    { id: 3, name: 'Robert Johnson', age: 58, gender: 'Male', contact: '+1234567892', status: 'Pending' },
    { id: 4, name: 'Emily Davis', age: 28, gender: 'Female', contact: '+1234567893', status: 'Inactive' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  const handleAddPatient = (patientData) => {
    if (editingPatient) {
      setPatients(patients.map(p => 
        p.id === editingPatient.id ? { ...patientData, id: editingPatient.id } : p
      ));
    } else {
      const newPatient = {
        ...patientData,
        id: patients.length + 1
      };
      setPatients([...patients, newPatient]);
    }
    setShowForm(false);
    setEditingPatient(null);
  };

  const handleEditPatient = (patient) => {
    setEditingPatient(patient);
    setShowForm(true);
  };

  const handleDeletePatient = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>Patient Management</h1>
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={20} />
            Add New Patient
          </button>
        )}
      </div>
      
      {showForm ? (
        <PatientForm
          patient={editingPatient}
          onSubmit={handleAddPatient}
          onCancel={() => {
            setShowForm(false);
            setEditingPatient(null);
          }}
        />
      ) : (
        <PatientList
          patients={patients}
          onEdit={handleEditPatient}
          onDelete={handleDeletePatient}
        />
      )}
    </div>
  );
};

export default Patients;