import React, { useEffect, useState } from 'react';
import TelemetryChart from './TelemetryChart.js';
import { fetchData } from '../utils/api.js';

export default function Dashboard({ telemetryData, setTelemetryData }) {
  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setTelemetryData(result);
    };

    loadData(); // تحميل البيانات عند بداية المكون

    const interval = setInterval(loadData, 1000); // تحديث كل ثانية
    return () => clearInterval(interval);
  }, [setTelemetryData]);

  const latest = telemetryData[telemetryData.length - 1] || {};

  return (
    <div className="dashboard">
      <h2>Live Telemetry</h2>
      <div>Speed: {latest.speed || 0} km/h</div>
      <div>RPM: {latest.rpm || 0}</div>
      <div>Fuel: {latest.fuel || 0}%</div>
      <div>Tire Temp: {latest.tireTemp || 0}°C</div>
      <TelemetryChart telemetryData={telemetryData} />
    </div>
  );
}
