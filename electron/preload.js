const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadTelemetry: () => ipcRenderer.invoke("load-file", "telemetry.json")
});
