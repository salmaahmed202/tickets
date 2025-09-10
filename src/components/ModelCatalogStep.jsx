// import React, { useState, useEffect } from 'react'
// import { Search } from 'lucide-react'

// const ModelCatalogStep = ({ formData, updateFormData, onNext, onPrevious }) => {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [ticketData, setTicketData] = useState(null)

//   // Load JSON from public folder
//   useEffect(() => {
//     fetch('/TicketData.json')
//       .then(res => res.json())
//       .then(data => setTicketData(data))
//       .catch(err => console.error('Error loading JSON:', err))
//   }, [])

//   if (!ticketData) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <p className="text-gray-600">Loading data...</p>
//       </div>
//     )
//   }

//   const filteredModels = ticketData.models.filter(model =>
//     model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     model.description.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   const handleModelSelect = (model) => {
//     updateFormData({ selectedModel: model })
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-lg font-semibold text-gray-900 mb-4">Model Catalog</h2>
        
//         <div className="space-y-4">
//           {/* Search Input */}
//           <div className="relative">
//             <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Dropdown */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Incident
//             </label>
//             <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//               <option>All categories</option>
//               <option>Address Management</option>
//               <option>System Issues</option>
//               <option>User Support</option>
//             </select>
//           </div>

//           {/* Models List */}
//           <div className="space-y-2 max-h-80 overflow-y-auto border border-gray-200 rounded-lg">
//             {filteredModels.map(model => (
//               <div
//                 key={model.id}
//                 onClick={() => handleModelSelect(model)}
//                 className={`flex items-center space-x-3 p-4 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
//                   formData.selectedModel?.id === model.id
//                     ? 'bg-blue-50 border-l-4 border-l-blue-500'
//                     : 'hover:bg-gray-50'
//                 }`}
//               >
//                 <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                   <span className="text-xs font-medium text-gray-600">IN</span>
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-medium text-gray-900">{model.name}</div>
//                   <div className="text-sm text-gray-500">{model.description}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between">
//         <button
//           onClick={onPrevious}
//           className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//         >
//           Previous
//         </button>
//         <button
//           onClick={onNext}
//           disabled={!formData.selectedModel}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ModelCatalogStep

import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

const ModelCatalogStep = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [ticketData, setTicketData] = useState(null)

  useEffect(() => {
    fetch('/TicketData.json')
      .then(res => res.json())
      .then(data => setTicketData(data))
      .catch(err => console.error('Error loading JSON:', err))
  }, [])

  if (!ticketData) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-600">Loading data...</p>
      </div>
    )
  }

  const filteredModels = ticketData.models.filter(model =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    model.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleModelSelect = (model) => {
    updateFormData({ selectedModel: model })
  }

  const handleDropdownChange = (field, value) => {
    updateFormData({ [field]: value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Model Catalog</h2>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category || ''}
              onChange={(e) => handleDropdownChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select category</option>
              {ticketData.categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Application Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Application
            </label>
            <select
              value={formData.application || ''}
              onChange={(e) => handleDropdownChange('application', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select application</option>
              {ticketData.applications.map(app => (
                <option key={app.id} value={app.name}>{app.name}</option>
              ))}
            </select>
          </div>

          {/* Priority Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              value={formData.priority || ''}
              onChange={(e) => handleDropdownChange('priority', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select priority</option>
              {ticketData.priorities.map(priority => (
                <option key={priority.id} value={priority.name}>{priority.name}</option>
              ))}
            </select>
          </div>

          {/* Models List */}
          <div className="space-y-2 max-h-80 overflow-y-auto border border-gray-200 rounded-lg">
            {filteredModels.map(model => (
              <div
                key={model.id}
                onClick={() => handleModelSelect(model)}
                className={`flex items-center space-x-3 p-4 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                  formData.selectedModel?.id === model.id
                    ? 'bg-blue-50 border-l-4 border-l-blue-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">IN</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{model.name}</div>
                  <div className="text-sm text-gray-500">{model.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!formData.selectedModel}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ModelCatalogStep
