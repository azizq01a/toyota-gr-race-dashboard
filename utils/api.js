import telemetryData from '../telemetry.json' assert { type: "json" };

export async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(telemetryData), 500); // محاكاة تأخير الشبكة
  });
}
