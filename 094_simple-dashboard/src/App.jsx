import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart as LineChartIcon
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import LineChartComponent from './components/LineChart';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import RecentOrders from './components/RecentOrders';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content" style={{ flex: 1 }}>
        <Header />
        
        {/* Stats Overview */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <StatCard 
            title="Total Revenue"
            value="$24,580"
            change={12.5}
            icon={<DollarSign size={24} />}
            color="#3b82f6"
          />
          <StatCard 
            title="Total Users"
            value="3,248"
            change={8.2}
            icon={<Users size={24} />}
            color="#10b981"
          />
          <StatCard 
            title="Total Orders"
            value="1,654"
            change={5.7}
            icon={<ShoppingCart size={24} />}
            color="#8b5cf6"
          />
          <StatCard 
            title="Growth Rate"
            value="24.3%"
            change={3.1}
            icon={<TrendingUp size={24} />}
            color="#f59e0b"
          />
        </div>
        
        {/* Charts Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ gridColumn: 'span 2' }}>
            <LineChartComponent />
          </div>
          <BarChartComponent />
          <PieChartComponent />
        </div>
        
        {/* Recent Orders */}
        <RecentOrders />
        
        {/* Chart Types Summary */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1rem',
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '0.5rem',
              backgroundColor: '#3b82f620',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3b82f6'
            }}>
              <LineChartIcon size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Line Chart</p>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Trend Analysis</p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1rem',
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '0.5rem',
              backgroundColor: '#8b5cf620',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8b5cf6'
            }}>
              <BarChart3 size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Bar Chart</p>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Comparison</p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1rem',
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '0.5rem',
              backgroundColor: '#10b98120',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}>
              <PieChart size={20} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Pie Chart</p>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;