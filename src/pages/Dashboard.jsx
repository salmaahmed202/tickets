import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const navigate = useNavigate()
  const [dashboardData, setDashboardData] = useState(null)
  const [delayedTickets, setDelayedTickets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsResponse, ticketsResponse] = await Promise.all([
          axios.get('/dashboard-stats.json'),
          axios.get('/delayed-tickets.json')
        ])
        
        setDashboardData(statsResponse.data)
        setDelayedTickets(ticketsResponse.data.tickets)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleTransferTicket = () => {
    navigate('/tickets')
  }

  const handleNewTicket = () => {
    navigate('/Add-ticket-form')
  }

  const handleAddMember = () => {
    navigate('/Add-member')
  }

  const handleSendWarning = (ticketId) => {
    alert(`Warning sent for ticket ${ticketId}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!dashboardData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-red-600">Error loading dashboard data</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to #1ticket management platform in Egypt.</p>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={handleTransferTicket}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Transfer Ticket
          </button>
          <button 
            onClick={handleNewTicket}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            New Ticket
          </button>
          <button 
            onClick={handleAddMember}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="stat-card delayed">
          <div>
            <div className="text-3xl font-bold">{dashboardData.stats.delayedSLA}</div>
            <div className="text-sm opacity-90">Delayed SLA</div>
          </div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="stat-card email">
          <div>
            <div className="text-3xl font-bold">{dashboardData.stats.email}</div>
            <div className="text-sm opacity-90">Email</div>
          </div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>

        <div className="stat-card incident">
          <div>
            <div className="text-3xl font-bold">{dashboardData.stats.incident}</div>
            <div className="text-sm opacity-90">Incident</div>
          </div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>

        <div className="stat-card transfer">
          <div>
            <div className="text-3xl font-bold">{dashboardData.stats.transfer}</div>
            <div className="text-sm">Transfer</div>
          </div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="stat-card request">
          <div>
            <div className="text-3xl font-bold">{dashboardData.stats.request}</div>
            <div className="text-sm">Request</div>
          </div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg">Tickets</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Team</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">product</button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Tickets Delayed SLA</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">From</span>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>01-01-2022</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">To</span>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>23-11-2022</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Ticket ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Team</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">SLA</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Team member</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Warning</th>
                  </tr>
                </thead>
                <tbody>
                  {delayedTickets.map((ticket, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="text-red-500" />
                          <span className="text-sm">{ticket.id}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <div className="text-sm text-blue-600">{ticket.team}</div>
                          <div className="text-xs text-gray-500">{ticket.level}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{ticket.sla}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={ticket.teamMember.avatar} 
                            alt={ticket.teamMember.name}
                            className="w-8 h-8 rounded-full"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-sm font-medium">{ticket.teamMember.name}</div>
                            <div className="text-xs text-gray-500">{ticket.teamMember.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <button 
                          onClick={() => handleSendWarning(ticket.id)}
                          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                        >
                          Send
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Total Tickets:</h3>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-gray-900">{dashboardData.totalTickets}</div>
          </div>
          
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dashboardData.chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dashboardData.chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {dashboardData.chartData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard