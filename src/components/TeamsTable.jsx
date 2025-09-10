import React, { useEffect, useState } from "react";
import "./TeamsTable.css";

const TeamsTable = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("/teamData.json")
      .then((res) => res.json())
      .then((data) => setTeamData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="team-table-container">
      <div className="table-header">
        <h3>Teams</h3>
      </div>

      <div className="table-wrapper">
        <table className="team-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Level</th>
              <th>Team</th>
              <th>Type</th>
              <th>num tickets</th>
              <th>Total SLA</th>
              <th>Delayed SLA</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {teamData.length === 0 ? (
              <tr>
                <td colSpan="9">Loading data...</td>
              </tr>
            ) : (
              teamData.map((member) => (
                <tr key={member.id}>
                  <td>
                    <input type="checkbox" defaultChecked={member.selected} />
                  </td>
                  <td><span className="member-name">{member.name}</span></td>
                  <td>{member.level}</td>
                  <td>{member.team}</td>
                  <td>{member.type}</td>
                  <td>{member.numTickets}</td>
                  <td>{member.totalSLA}</td>
                  <td>{member.delayedSLA}</td>
                  <td>{member.dateTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamsTable;
