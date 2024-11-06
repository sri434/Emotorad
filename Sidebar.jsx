import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Board.</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Schedules</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default Sidebar;
