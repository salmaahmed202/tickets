import React, { useState } from "react";
import StatsCards from "../components/StatsCards";
import Charts from "../components/Charts";
import TeamTabs from "../components/TeamTabs";
import TeamsTable from "../components/TeamsTable";
import "./Dashboard.css";
import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
export default function TeamsDashboard() {
  const [showModal, setShowModal] = useState(false);

  // temporary existing teams & levels
  const teams = ["AS400", "SAP", "Oracle", "Azure"];
  const levels = ["Junior", "Mid-Level", "Senior"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "",
    team: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("New Member Data:", formData);
    setShowModal(false); // close modal after submit
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Teams</h1>
          <p>Welcome to #1 ticket management platform in Egypt.</p>
        </div>
        <button className="add-member-btn">
  <Link to="/add-member" style={{ color: "white", textDecoration: "none" }}>
    Add Member
  </Link>
</button>
      </div>

      <div className="dashboard-content">
        <div className="charts-section">
          <Charts />
          <StatsCards />
        </div>

        <TeamTabs />
        <TeamsTable />
      </div>

      {/* Modal for Adding Member */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Member</h2>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="">Select Level</option>
                {levels.map((level, idx) => (
                  <option key={idx} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              <select
                name="team"
                value={formData.team}
                onChange={handleChange}
                required
              >
                <option value="">Select Team</option>
                {teams.map((team, idx) => (
                  <option key={idx} value={team}>
                    {team}
                  </option>
                ))}
              </select>

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <div className="form-actions">
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  
  );
}
