import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Stethoscope, 
  Calendar,
  Activity
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Dashboard' },
    { path: '/patients', icon: <Users size={20} />, label: 'Patients' },
    { path: '/doctors', icon: <Stethoscope size={20} />, label: 'Doctors' },
    { path: '/appointments', icon: <Calendar size={20} />, label: 'Appointments' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>
          <Activity size={24} />
          MediCare Hospital
        </h2>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;