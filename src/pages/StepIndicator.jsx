import React from 'react'

const StepIndicator = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <button
            onClick={() => onStepClick(step.number)}
            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              step.number === currentStep
                ? 'bg-blue-600 text-white'
                : step.number < currentStep
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {step.number}
          </button>
          <span className={`ml-2 text-sm font-medium ${
            step.number === currentStep ? 'text-blue-600' : 'text-gray-500'
          }`}>
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 ${
              step.number < currentStep ? 'bg-green-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default StepIndicator