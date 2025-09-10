import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import './StatsCards.css'

ChartJS.register(ArcElement, Tooltip, Legend)

const StatsCards = () => {
  const doughnutData = {
    datasets: [
      {
        data: [16, 20, 15, 10],
        backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#ef4444'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  const statsData = [
    { label: 'AS400', value: 16, color: '#9ca3af' },
    { label: 'AS400', value: 20, color: '#8b5cf6' },
    { label: 'AS400', value: 15, color: '#06b6d4' },
    { label: 'AS400', value: 10, color: '#ef4444' },
  ]

  const memberStats = [
    { label: 'AS400', value: 12, color: '#3b82f6' },
    { label: 'AS400', value: 4, color: '#ef4444' },
    { label: 'AS400', value: 5, color: '#10b981' },
  ]

  return (
    <div className="stats-container">
      <div className="stats-card">
        <div className="stats-header">
          <div className="stats-totals">
            <div className="total-item">
              <span className="total-label">Total Team:</span>
              <span className="total-value">8</span>
            </div>
            <div className="total-item">
              <span className="total-label">Total Member:</span>
              <span className="total-value">80</span>
            </div>
          </div>
        </div>
        
        <div className="chart-stats-wrapper">
          <div className="doughnut-chart">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          
          <div className="stats-lists">
            <div className="stats-column">
              {statsData.map((item, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-indicator" style={{ backgroundColor: item.color }}></div>
                  <span className="stat-label">{item.label}</span>
                  <span className="stat-value">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="stats-column">
              {memberStats.map((item, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-indicator" style={{ backgroundColor: item.color }}></div>
                  <span className="stat-label">{item.label}</span>
                  <span className="stat-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCards