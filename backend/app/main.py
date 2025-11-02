from fastapi import FastAPI
from pydantic import BaseModel
from strategy_ai import StrategyAI

app = FastAPI()
ai = StrategyAI()

class Telemetry(BaseModel):
    fuel: float
    tire_wear: float
    track_temp: float
    lap: int
    total_laps: int

@app.post("/strategy")
def get_strategy(data: Telemetry):
    decision = ai.recommend(
        data.fuel,
        data.tire_wear,
        data.track_temp,
        data.lap,
        data.total_laps
    )
    return {"recommendation": decision}
