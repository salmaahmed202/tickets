import React from 'react';
import './Communication.css';

const Communication = () => {
  const communicationItems = [
    { id: 1, title: 'AS400 message', status: 'Unread', validity: '28/12/2009 00:00 - until further notice' },
    // Note: The comment "// ... other items" should be replaced with additional items if needed
    // Adding a few more items for completeness
    { id: 2, title: 'D/F PILOTATE', status: 'Unread', validity: '28/12/2009 00:00 - until further notice' },
    { id: 3, title: 'AS400 message', status: 'Unread', validity: '28/12/2009 00:00 - until further notice' },
  ];

  return (
    <div className="communication-page">
      <h2>Communication</h2>
      <p>Welcome to #1 ticket management platform in Egypt.</p>
      <div className="filter-section">
        <span>Organization</span> <span>▼</span> <button>Add a filter</button>
      </div>
      <table className="communication-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Validity</th>
          </tr>
        </thead>
        <tbody>
          {communicationItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td style={{ color: item.status === 'Unread' ? 'red' : 'inherit' }}>{item.status}</td>
              <td>{item.validity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Communication;