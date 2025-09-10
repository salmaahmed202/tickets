import React, { useState } from 'react'
import './TeamTabs.css'

const TeamTabs = () => {
  const [activeTab, setActiveTab] = useState('AS400')
  
  const tabs = ['AS400', 'AS400', 'AS400', 'AS400', 'AS400', 'AS400', 'AS400']

  return (
    <div className="team-tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab ${activeTab === tab && index === 0 ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default TeamTabs