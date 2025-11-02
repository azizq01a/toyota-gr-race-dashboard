const dataContainer = document.getElementById("table-container");

window.api.getData().then(data => {
  console.log("CSV loaded rows:", data.length);

  // جدول البيانات
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  const header = table.createTHead();
  const headerRow = header.insertRow();
  Object.keys(data[0]).forEach(k => {
    const th = document.createElement("th");
    th.innerText = k;
    th.style.border = "1px solid #444";
    th.style.padding = "5px";
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();
  data.forEach(row => {
    const tr = tbody.insertRow();
    Object.values(row).forEach(val => {
      const td = tr.insertCell();
      td.innerText = val;
      td.style.border = "1px solid #444";
      td.style.padding = "5px";
    });
  });

  dataContainer.appendChild(table);

  // رسم بياني ACCX و ACCY
  function createChart(canvasId, telemetry) {
    const ctx = document.getElementById(canvasId);
    const vehicles = [...new Set(data.map(r => r.vehicle_id))];
    const colors = ["red", "blue", "green", "orange", "purple", "cyan"];

    const datasets = vehicles.map((v, idx) => {
      const points = data
        .filter(r => r.vehicle_id === v && r.telemetry_name === telemetry)
        .map(r => parseFloat(r.telemetry_value));

      return {
        label: v,
        data: points,
        borderColor: colors[idx % colors.length],
        fill: false
      };
    });

    new Chart(ctx, {
      type: "line",
      data: {
        labels: datasets[0] ? datasets[0].data.map((_, i) => i + 1) : [],
        datasets
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "white" } } },
        scales: {
          x: { ticks: { color: "white" }, grid: { color: "#555" } },
          y: { ticks: { color: "white" }, grid: { color: "#555" } }
        }
      }
    });
  }

  createChart("chart-accx", "accx_can");
  createChart("chart-accy", "accy_can");
});
         