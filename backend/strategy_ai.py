import numpy as np

class StrategyAI:
    def __init__(self):
        pass

    def recommend(self, fuel, tire_wear, track_temp, lap, total_laps):
        score = 0

        if tire_wear > 70:
            score += 30
        if fuel < 10:
            score += 25
        if track_temp > 45:
            score += 20
        if lap > total_laps - 10:
            score += 10

        if score >= 40:
            return "🔁 Pit Stop NOW!"
        elif score >= 20:
            return "⚠️ Prepare Pit Soon"
        else:
            return "✅ Keep racing"
