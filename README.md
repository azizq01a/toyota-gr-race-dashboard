# toyota-gr-race-dashboard
Real-time race analytics and AI strategy dashboard for Toyota GR Cup telemetry.

# 🏎️ Toyota GR Race Dashboard — *PitPilot AI*

### Real-time Race Analytics & AI Strategy Dashboard  
**Category:** Real-Time Analytics  
**Hackathon:** Hack the Track – Presented by Toyota GR Cup  
**Team:** azizq01a  

---

## 🚀 Overview

**PitPilot AI** is an intelligent race analysis and strategy platform built for the **Toyota GR Cup Series**.  
It transforms raw telemetry data into **actionable insights** — giving teams and drivers a powerful edge during and after races.

The dashboard integrates **AI-driven analytics**, **lap performance tracking**, and **real-time strategy simulation** for both **engineers** and **drivers**.

---

## 🎯 Key Features

- ⚙️ **Automated Data Processing**
  - Reads zipped or CSV telemetry data from the GR datasets.
  - Normalizes inconsistent column names automatically.

- 🧠 **AI Insights & Recommendations**
  - Provides lap-by-lap performance analysis.
  - Highlights differences in speed, balance, and consistency.
  - Generates improvement suggestions for drivers.

- 📊 **Interactive Dashboard**
  - Built with modern front-end visualization tools.
  - Dynamic telemetry charts, speed comparison graphs, and session summaries.

- ⚡ **Real-Time Strategy Mode**
  - Simulates pit-stop timing and tire strategies.
  - Predicts performance deltas and fuel efficiency.

- 🔔 **Smart Notifications**
  - Alerts when driver performance deviates from optimal pace.
  - Identifies potential understeer/oversteer patterns or speed loss zones.

---
## 🧩 Project Structure
pitpilot/
├── backend/ # Data processing & AI analysis (Python)
├── frontend/ # Dashboard UI (HTML/JS/Chart.js)
├── electron/ # Desktop wrapper for the full app
├── utils/ # Helper scripts & API integrations
├── main.css # Global styling
└── README.md
---

## 🧠 AI Analysis Example

**Input (CSV):**
LAP_NUMBER;LAP_TIME;KPH;Speed_calc_kph;Diff_%
1;2:38.824;136.4;131.466277;-3.617099
2;2:28.919;145.5;140.210450;-3.635430
3;2:28.798;145.6;140.324467;-3.623306

**Output (JSON):**
```json
{
  "track": "GR_Cup_Test",
  "laps": 3,
  "average_speed": 140.67,
  "ai_recommendations": [
    "Lap 1 shows reduced consistency — increase corner exit throttle control.",
    "Speed variance stabilized after Lap 2 — maintain tire temperature window.",
    "Overall performance gain possible by optimizing turn 3–4 braking point."
  ]
}

🖥️ How to Run Locally
1️⃣ Clone the repository

git clone https://github.com/azizq01a/toyota-gr-race-dashboard.git
cd toyota-gr-race-dashboard/electron

2️⃣ Install dependencies

npm install

3️⃣ Start the application

npm start

