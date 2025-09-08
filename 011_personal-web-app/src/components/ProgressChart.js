// src/components/ProgressChart.js
import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = ({ habits }) => {
  // Calculate completion rates for each habit
  const completionRates = habits.map(habit => {
    const completedCount = habit.completed.filter(Boolean).length;
    return (completedCount / habit.completed.length) * 100;
  });

  const doughnutData = {
    labels: habits.map(habit => habit.name),
    datasets: [
      {
        label: 'Completion Rate (%)',
        data: completionRates,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: habits.map((habit, index) => {
      const colors = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ];
      return {
        label: habit.name,
        data: habit.completed.map(day => day ? 1 : 0),
        backgroundColor: colors[index % colors.length],
        borderColor: colors[index % colors.length].replace('0.6', '1'),
        borderWidth: 1,
      };
    }),
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return value === 1 ? 'Done' : '';
          }
        }
      },
    },
  };

  return (
    <div className="progress-chart">
      <h3>Progress Overview</h3>
      
      <div className="chart-container">
        <div className="chart">
          <h4>Completion Rate</h4>
          <Doughnut data={doughnutData} />
        </div>
        
        <div className="chart">
          <h4>Weekly Progress</h4>
          <Bar data={weeklyData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;