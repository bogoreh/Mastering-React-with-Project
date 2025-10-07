import React from 'react';

const CustomerChart = () => {
  // This is a simplified chart using CSS - in a real app you'd use a charting library
  return (
    <div className="customer-chart">
      <div className="chart-header">
        <h3>Customer Growth</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-color new-customers"></span>
            New Customers
          </div>
          <div className="legend-item">
            <span className="legend-color returning-customers"></span>
            Returning Customers
          </div>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-bars">
          <div className="bar-group">
            <div className="bar returning" style={{ height: '60%' }}></div>
            <div className="bar new" style={{ height: '40%' }}></div>
            <span>Mon</span>
          </div>
          <div className="bar-group">
            <div className="bar returning" style={{ height: '50%' }}></div>
            <div className="bar new" style={{ height: '30%' }}></div>
            <span>Tue</span>
          </div>
          <div className="bar-group">
            <div className="bar returning" style={{ height: '70%' }}></div>
            <div className="bar new" style={{ height: '50%' }}></div>
            <span>Wed</span>
          </div>
          <div className="bar-group">
            <div className="bar returning" style={{ height: '65%' }}></div>
            <div className="bar new" style={{ height: '45%' }}></div>
            <span>Thu</span>
          </div>
          <div className="bar-group">
            <div className="bar returning" style={{ height: '80%' }}></div>
            <div className="bar new" style={{ height: '60%' }}></div>
            <span>Fri</span>
          </div>
          <div className="bar-group">
            <div className="bar returning" style={{ height: '75%' }}></div>
            <div className="bar new" style={{ height: '55%' }}></div>
            <span>Sat</span>
          </div>
          <div className="bar-group">
            <div className="bar returning" style={{ height: '90%' }}></div>
            <div className="bar new" style={{ height: '70%' }}></div>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChart;