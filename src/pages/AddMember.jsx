import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddMember.css'

const AddMember= () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    team: '',
    password: '',
    confirmPassword: ''
  })

  const teams = ['AS400', 'Development', 'Support', 'Infrastructure', 'QA']
  const levels = ['1', '2', '3', '4', '5']

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // قراءة البيانات القديمة من localStorage أو مصفوفة فاضية
    const existingMembers = JSON.parse(localStorage.getItem("teamData")) || [];
  
    // عمل object للعضو الجديد
    const newMember = {
      id: existingMembers.length + 1,
      name: formData.name,
      email: formData.email,
      level: formData.level,
      team: formData.team,
      type: "Member", // أو Team leader حسب احتياجك
      numTickets: 0,
      totalSLA: 0,
      delayedSLA: 0,
      dateTime: new Date().toLocaleDateString(),
      selected: false,
    };
  
    // تحديث المصفوفة
    const updatedMembers = [...existingMembers, newMember];
  
    // حفظ البيانات في localStorage
    localStorage.setItem("teamData", JSON.stringify(updatedMembers));
  
    console.log("Updated JSON:", updatedMembers);
  
    navigate("/"); // أو "/teams" حسب ما تحبي
  };
  

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div className="add-member-form">
      <div className="form-header">
        <h1>Add Member</h1>
        <p>Fill in the details to add a new team member</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="level">Level *</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="">Select Level</option>
                {levels.map(level => (
                  <option key={level} value={level}>Level {level}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="team">Team *</label>
              <select
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                required
              >
                <option value="">Select Team</option>
                {teams.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm password"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-send">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMember