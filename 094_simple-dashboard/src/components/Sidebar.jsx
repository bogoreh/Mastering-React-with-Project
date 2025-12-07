import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  BarChart3, 
  Settings,
  TrendingUp,
  Package
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Users size={20} />, label: 'Users' },
    { icon: <ShoppingCart size={20} />, label: 'Orders' },
    { icon: <DollarSign size={20} />, label: 'Revenue' },
    { icon: <BarChart3 size={20} />, label: 'Analytics' },
    { icon: <Package size={20} />, label: 'Products' },
    { icon: <TrendingUp size={20} />, label: 'Growth' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="sidebar" style={{
      width: '240px',
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '1.5rem 0',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <LayoutDashboard size={24} />
          Dashboard
        </h2>
      </div>
      
      <nav>
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href="#" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'all 0.2s',
              borderLeft: '3px solid transparent'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#374151'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;