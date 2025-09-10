import React, { useEffect, useState } from 'react'
import { Paperclip } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const IncidentStep = ({ formData, updateFormData, onPrevious }) => {
  const [ticketData, setTicketData] = useState({ priorities: [], applications: [], categories: [] })
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/ticketData.json')
      .then((res) => res.json())
      .then((data) => setTicketData(data))
      .catch((err) => console.error('Error loading ticket data:', err))
  }, [])

  const handleIncidentChange = (field, value) => {
    updateFormData({
      incident: {
        ...formData.incident,
        [field]: value
      }
    })
  }

  const handleSubmit = () => {
    console.log('Submitting ticket:', formData)
    navigate("/");
    alert('Ticket created successfully!')
    
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Incident</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left side */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Machine breakdown"
              value={formData.incident.title}
              onChange={(e) => handleIncidentChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              placeholder="Broken"
              value={formData.incident.description}
              onChange={(e) => handleIncidentChange('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Paperclip className="w-4 h-4" />
            <span>Attach files</span>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-4">
          {/* Creation info */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Creation</label>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <img
                src="https://dummyimage.com/40x40/10b981/ffffff?text=GS"
                alt="Global Support"
                className="w-10 h-10 rounded-full"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-medium text-gray-900">GLOBAL SUPPORT</div>
                <div className="text-sm text-gray-500">2022-08-11 17:42</div>
              </div>
            </div>
          </div>

          {/* SLA */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">SLA</label>
            <div className="text-sm text-gray-600">2022-08-11 17:42</div>
          </div>

          {/* Properties */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Properties</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Environment</label>
                <select
                  value={formData.incident.environment || ''}
                  onChange={(e) => handleIncidentChange('environment', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select environment</option>
                  <option value="production">Production</option>
                  <option value="staging">Staging</option>
                  <option value="development">Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Priority</label>
                <select
                  value={formData.incident.priority}
                  onChange={(e) => handleIncidentChange('priority', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select priority</option>
                  {ticketData.priorities.map((priority) => (
                    <option key={priority.id} value={priority.name}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Application</label>
                <select
                  value={formData.incident.application}
                  onChange={(e) => handleIncidentChange('application', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select application</option>
                  {ticketData.applications.map((app) => (
                    <option key={app.id} value={app.name}>
                      {app.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Category</label>
                <select
                  value={formData.incident.category}
                  onChange={(e) => handleIncidentChange('category', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  {ticketData.categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default IncidentStep
