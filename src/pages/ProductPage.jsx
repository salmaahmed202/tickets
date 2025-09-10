import React from 'react'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const ProductPage = () => {
  const chartData = [
    { month: 'Jan', values: [80, 60, 40, 20, 30] },
    { month: 'Feb', values: [90, 70, 50, 25, 35] },
    { month: 'Mar', values: [85, 65, 45, 22, 32] },
    { month: 'Apr', values: [95, 75, 55, 28, 38] },
    { month: 'May', values: [88, 68, 48, 24, 34] },
    { month: 'Jun', values: [92, 72, 52, 26, 36] },
    { month: 'Jul', values: [87, 67, 47, 23, 33] },
    { month: 'Aug', values: [93, 73, 53, 27, 37] },
    { month: 'Sep', values: [89, 69, 49, 25, 35] },
    { month: 'Oct', values: [91, 71, 51, 26, 36] },
    { month: 'Nov', values: [86, 66, 46, 22, 32] },
    { month: 'Dec', values: [94, 74, 54, 28, 38] }
  ]

  const pieData = [
    { label: 'AWS', value: 16, color: '#8b5cf6' },
    { label: 'AWS', value: 20, color: '#8b5cf6' },
    { label: 'AWS', value: 15, color: '#10b981' },
    { label: 'AWS', value: 10, color: '#ef4444' },
    { label: 'AWS', value: 12, color: '#3b82f6' },
    { label: 'AWS', value: 4, color: '#f59e0b' },
    { label: 'AWS', value: 5, color: '#10b981' },
    { label: 'AWS', value: 5, color: '#eab308' }
  ]

  const tableData = [
    { name: 'Rasha', level: 2, team: 'AS400', type: 'Team leader', tickets: 150, totalSLA: 1440, delayedSLA: 250, dateTime: '11/12/2022' },
    { name: 'Rasha', level: 2, team: 'AS400', type: 'Team leader', tickets: 150, totalSLA: 1440, delayedSLA: 250, dateTime: '11/12/2022' },
    { name: 'Rasha', level: 2, team: 'AS400', type: 'Team leader', tickets: 150, totalSLA: 1440, delayedSLA: 250, dateTime: '11/12/2022' },
    { name: 'Rasha', level: 2, team: 'AS400', type: 'Team leader', tickets: 150, totalSLA: 1440, delayedSLA: 250, dateTime: '11/12/2022' }
  ]

  return (
    <div className="product-page">
      <div className="product-header">
        <div className="product-title">
          <h1>Product</h1>
          <p>Welcome to #1ticket management platform in Egypt.</p>
        </div>
        <div className="product-actions">
          <Link to="/add-member" className="btn btn-primary">Add Member</Link>
          <Link to="/add-ticket" className="btn btn-success">New Ticket</Link>
        </div>
      </div>

      <div className="product-content">
        <div className="charts-section">
          <div className="bar-chart-container">
            <div className="chart-header">
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-color" style={{backgroundColor: '#ef4444'}}></span>
                  <span>AWS</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{backgroundColor: '#10b981'}}></span>
                  <span>AWS</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{backgroundColor: '#3b82f6'}}></span>
                  <span>AWS</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{backgroundColor: '#8b5cf6'}}></span>
                  <span>AWS</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{backgroundColor: '#f59e0b'}}></span>
                  <span>AWS</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{backgroundColor: '#eab308'}}></span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
            <div className="bar-chart">
              <div className="y-axis">
                <span>600</span>
                <span>450</span>
                <span>300</span>
                <span>150</span>
                <span>0</span>
              </div>
              <div className="chart-bars">
                {chartData.map((data, index) => (
                  <div key={index} className="bar-group">
                    <div className="bar-stack">
                      <div className="bar-segment" style={{height: '60px', backgroundColor: '#ef4444'}}></div>
                      <div className="bar-segment" style={{height: '40px', backgroundColor: '#10b981'}}></div>
                      <div className="bar-segment" style={{height: '30px', backgroundColor: '#3b82f6'}}></div>
                      <div className="bar-segment" style={{height: '25px', backgroundColor: '#8b5cf6'}}></div>
                      <div className="bar-segment" style={{height: '20px', backgroundColor: '#f59e0b'}}></div>
                      <div className="bar-segment" style={{height: '15px', backgroundColor: '#eab308'}}></div>
                    </div>
                    <span className="bar-label">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pie-chart-container">
            <div className="pie-chart-header">
              <h3>Total services:</h3>
              <div className="total-services">8</div>
            </div>
            <div className="pie-chart">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="20"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#8b5cf6" strokeWidth="20" 
                        strokeDasharray="125.6 377" strokeDashoffset="0" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#10b981" strokeWidth="20" 
                        strokeDasharray="94.2 377" strokeDashoffset="-125.6" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#ef4444" strokeWidth="20" 
                        strokeDasharray="62.8 377" strokeDashoffset="-219.8" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#3b82f6" strokeWidth="20" 
                        strokeDasharray="75.4 377" strokeDashoffset="-282.6" transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#eab308" strokeWidth="20" 
                        strokeDasharray="31.4 377" strokeDashoffset="-358" transform="rotate(-90 100 100)"/>
              </svg>
            </div>
            <div className="pie-legend">
              <div className="pie-legend-item">
                <span className="legend-color" style={{backgroundColor: '#8b5cf6'}}></span>
                <span>AWS</span>
                <span className="legend-value">16</span>
                <span className="legend-color" style={{backgroundColor: '#3b82f6'}}></span>
                <span>AWS</span>
                <span className="legend-value">12</span>
              </div>
              <div className="pie-legend-item">
                <span className="legend-color" style={{backgroundColor: '#8b5cf6'}}></span>
                <span>AWS</span>
                <span className="legend-value">20</span>
                <span className="legend-color" style={{backgroundColor: '#f59e0b'}}></span>
                <span>AWS</span>
                <span className="legend-value">4</span>
              </div>
              <div className="pie-legend-item">
                <span className="legend-color" style={{backgroundColor: '#10b981'}}></span>
                <span>AWS</span>
                <span className="legend-value">15</span>
                <span className="legend-color" style={{backgroundColor: '#10b981'}}></span>
                <span>AWS</span>
                <span className="legend-value">5</span>
              </div>
              <div className="pie-legend-item">
                <span className="legend-color" style={{backgroundColor: '#ef4444'}}></span>
                <span>AWS</span>
                <span className="legend-value">10</span>
                <span className="legend-color" style={{backgroundColor: '#eab308'}}></span>
                <span>AWS</span>
                <span className="legend-value">5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metrics-section">
          <div className="metric-card active">AS400</div>
          <div className="metric-card">AS400</div>
          <div className="metric-card">AS400</div>
          <div className="metric-card">AS400</div>
          <div className="metric-card">AS400</div>
          <div className="metric-card">AS400</div>
          <div className="metric-card">AS400</div>
        </div>

        <div className="table-section">
          <div className="table-header">
            <h2>Product</h2>
            <div className="date-filters">
              <div className="date-filter">
                <label>From</label>
                <select defaultValue="01-01-2022">
                  <option value="01-01-2022">01-01-2022</option>
                </select>
              </div>
              <div className="date-filter">
                <label>To</label>
                <select defaultValue="23-11-2022">
                  <option value="23-11-2022">23-11-2022</option>
                </select>
              </div>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Team</th>
                  <th>Type</th>
                  <th>num tickets</th>
                  <th>Total SLA</th>
                  <th>Delayed SLA</th>
                  <th>Date/Time</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" defaultChecked={index === 0} />
                    </td>
                    <td>
                      <a href="#" className="name-link">{row.name}</a>
                    </td>
                    <td>{row.level}</td>
                    <td>{row.team}</td>
                    <td>{row.type}</td>
                    <td>{row.tickets}</td>
                    <td>{row.totalSLA}</td>
                    <td>{row.delayedSLA}</td>
                    <td>{row.dateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage