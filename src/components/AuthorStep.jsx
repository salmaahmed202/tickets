import React, { useState, useEffect } from 'react'
import { Search, Plus } from 'lucide-react'

const AuthorStep = ({ formData, updateFormData, onNext }) => {
  const [ticketData, setTicketData] = useState({ users: [], organizations: [] })
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    fetch('/ticketData.json')
      .then((res) => res.json())
      .then((data) => setTicketData(data))
      .catch((err) => console.error('Error loading ticket data:', err))
  }, [])

  const filteredUsers = ticketData.users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleUserSelect = (user) => {
    updateFormData({ author: user })
  }

  const handleOrganizationChange = (org) => {
    updateFormData({ organization: org })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Author</h2>

        <div className="space-y-4">
          {/* Organization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization
            </label>
            <select
              value={formData.organization}
              onChange={(e) => handleOrganizationChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select organization</option>
              {ticketData.organizations.map((org) => (
                <option key={org.id} value={org.name}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setShowCreateForm(false)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                !showCreateForm
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Create from existing
            </button>
            <button
              onClick={() => setShowCreateForm(true)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                showCreateForm
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Create new user
            </button>
          </div>

          {/* Existing users */}
          {!showCreateForm ? (
            <div>
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => handleUserSelect(user)}
                    className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.author?.id === user.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                    <div className="text-sm text-gray-400">{user.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Create new user form */
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Plus className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">
                  Create New User
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!formData.author}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default AuthorStep
