const RecentOrders = () => {
  const orders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2024-01-15', amount: '$249.99', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2024-01-14', amount: '$189.50', status: 'Processing' },
    { id: '#ORD-003', customer: 'Robert Johnson', date: '2024-01-14', amount: '$425.00', status: 'Completed' },
    { id: '#ORD-004', customer: 'Emily Wilson', date: '2024-01-13', amount: '$79.99', status: 'Pending' },
    { id: '#ORD-005', customer: 'Michael Brown', date: '2024-01-13', amount: '$320.00', status: 'Completed' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return '#10b981';
      case 'Processing': return '#3b82f6';
      case 'Pending': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '0.75rem', 
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Recent Orders</h3>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          View All
        </button>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Order ID</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Customer</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Amount</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>{order.id}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{order.customer}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{order.date}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>{order.amount}</td>
                <td style={{ padding: '0.75rem' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    backgroundColor: getStatusColor(order.status) + '20',
                    color: getStatusColor(order.status)
                  }}>
                    {order.status}
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

export default RecentOrders;