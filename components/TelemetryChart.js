// components/TelemetryChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function TelemetryChart({ data }) {
  return (
    <LineChart width={800} height={400} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="speed" stroke="#8884d8" />
      <Line type="monotone" dataKey="rpm" stroke="#82ca9d" />
    </LineChart>
  );
}
