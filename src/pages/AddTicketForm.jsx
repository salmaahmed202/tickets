import React, { useState } from 'react'
import StepIndicator from './StepIndicator'
import AuthorStep from '../components/AuthorStep'
import AssignmentStep from '../components/AssignmentStep'
import ModelCatalogStep from '../components/ModelCatalogStep'
import IncidentStep from '../components/IncidentStep'

const AddTicketForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    organization: '',
    author: null,
    assignedUser: null,
    selectedModel: null,
    incident: {
      title: '',
      description: '',
      priority: '',
      application: '',
      category: ''
    }
  })

  const steps = [
    { number: 1, title: 'Author', component: AuthorStep },
    { number: 2, title: 'Assignment', component: AssignmentStep },
    { number: 3, title: 'Model Catalog', component: ModelCatalogStep },
    { number: 4, title: 'Incident', component: IncidentStep }
  ]

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber)
  }

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const CurrentStepComponent = steps[currentStep - 1].component

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <StepIndicator 
            steps={steps} 
            currentStep={currentStep} 
            onStepClick={handleStepClick}
          />
        </div>
        
        <div className="p-6">
          <CurrentStepComponent 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirstStep={currentStep === 1}
            isLastStep={currentStep === steps.length}
          />
        </div>
      </div>
    </div>
  )
}

export default AddTicketForm