// components/StrategyPanel.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

export default function StrategyPanel() {
  const [strategy, setStrategy] = useState({});

  useEffect(() => {
    fetchData('/strategy').then(res => setStrategy(res));
  }, []);

  return (
    <div className="strategy-panel">
      <h2>Strategy Recommendations</h2>
      <pre>{JSON.stringify(strategy, null, 2)}</pre>
    </div>
  );
}
