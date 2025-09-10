import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout