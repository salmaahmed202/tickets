import React, { useEffect, useState } from 'react'

const AssignmentStep = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [ticketData, setTicketData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/ticketData.json')
      .then(res => res.json())
      .then(data => {
        setTicketData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to load ticket data:", err)
        setLoading(false)
      })
  }, [])

  const handleAssignmentChange = (value) => {
    if (value.startsWith("user-")) {
      const userId = parseInt(value.replace("user-", ""))
      const user = ticketData?.users.find(u => u.id === userId)
      updateFormData({ assignedUser: user, assignedType: "user" })
    } else if (value.startsWith("org-")) {
      const orgId = parseInt(value.replace("org-", ""))
      const org = ticketData?.organizations.find(o => o.id === orgId)
      updateFormData({ assignedUser: org, assignedType: "organization" })
    } else {
      updateFormData({ assignedUser: null, assignedType: null })
    }
  }

  if (loading) {
    return <p>Loading data...</p>
  }

  if (!ticketData) {
    return <p className="text-red-500">Failed to load ticket data</p>
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Assignment</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assigned to ticket
            </label>
            <select
              value={
                formData.assignedUser
                  ? `${formData.assignedType}-${formData.assignedUser.id}`
                  : ''
              }
              onChange={(e) => handleAssignmentChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select user or organization</option>

              <optgroup label="Users">
                {ticketData.users.map(user => (
                  <option key={`user-${user.id}`} value={`user-${user.id}`}>
                    {user.name}
                  </option>
                ))}
              </optgroup>

              <optgroup label="Organizations">
                {ticketData.organizations.map(org => (
                  <option key={`org-${org.id}`} value={`org-${org.id}`}>
                    {org.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="assignToTicket"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="assignToTicket" className="text-sm text-gray-700">
              Assign to ticket
            </label>
          </div>

          {!formData.assignedUser && (
            <div className="text-sm text-gray-500">
              No user or organization assigned to ticket
            </div>
          )}

          {formData.assignedUser && (
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              {formData.assignedType === "user" && (
                <img
                  src={formData.assignedUser.avatar}
                  alt={formData.assignedUser.name}
                  className="w-10 h-10 rounded-full"
                  referrerPolicy="no-referrer"
                />
              )}
              <div>
                <div className="font-medium text-gray-900">
                  {formData.assignedUser.name}
                </div>
                <div className="text-sm text-gray-500">
                  {formData.assignedType === "user"
                    ? formData.assignedUser.role
                    : "Organization"}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default AssignmentStep
