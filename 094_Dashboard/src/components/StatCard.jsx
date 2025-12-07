const StatCard = ({ title, value, change, icon, color }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      flex: 1,
      minWidth: '200px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827' }}>{value}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
            <span style={{ 
              color: change >= 0 ? '#10b981' : '#ef4444',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
            </span>
            <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>from last month</span>
          </div>
        </div>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '0.5rem',
          backgroundColor: color + '20',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color
        }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;