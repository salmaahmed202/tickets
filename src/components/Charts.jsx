import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './Charts.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Charts = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'AS400',
        data: [20, 25, 30, 28, 32, 35, 38, 40, 42, 45, 48, 50],
        backgroundColor: '#3b82f6',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'AS400',
        data: [15, 18, 22, 20, 24, 26, 28, 30, 32, 34, 36, 38],
        backgroundColor: '#ef4444',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'AS400',
        data: [10, 12, 15, 14, 16, 18, 20, 22, 24, 26, 28, 30],
        backgroundColor: '#10b981',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'AS400',
        data: [8, 10, 12, 11, 13, 15, 17, 19, 21, 23, 25, 27],
        backgroundColor: '#f59e0b',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'AS400',
        data: [5, 7, 9, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        backgroundColor: '#8b5cf6',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'AS400',
        data: [12, 14, 16, 15, 17, 19, 21, 23, 25, 27, 29, 31],
        backgroundColor: '#06b6d4',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'AS400',
        data: [18, 20, 22, 21, 23, 25, 27, 29, 31, 33, 35, 37],
        backgroundColor: '#84cc16',
        borderRadius: 4,
        barThickness: 20,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          padding: 15,
          font: {
            size: 12
          }
        }
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 96,
        ticks: {
          stepSize: 24,
          font: {
            size: 12
          }
        },
        grid: {
          color: '#f3f4f6',
        }
      },
    },
  }

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default Charts