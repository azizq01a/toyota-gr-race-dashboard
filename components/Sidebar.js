// components/Sidebar.js
import React from 'react';

export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('strategy')}>Strategy</button>
      <button onClick={() => setPage('telemetry')}>Telemetry</button>
    </div>
  );
}
