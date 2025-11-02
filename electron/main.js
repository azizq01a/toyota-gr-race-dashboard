const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    show: false, // Masquer la fenêtre au départ
  });

  // Splash screen
  const splash = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
    alwaysOnTop: true,
  });
  splash.loadFile(path.join(__dirname, "splash.html"));

  setTimeout(() => {
    splash.close();
    win.loadFile(path.join(__dirname, "../frontend/index.html"));
    win.show();
  }, 14000); // 14 secondes splash
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// IPC pour charger fichiers
ipcMain.handle("load-file", async (event, filename) => {
  try {
    const filePath = path.join(__dirname, "assets", filename);
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (err) {
    throw new Error("Impossible de charger le fichier : " + err.message);
  }
});
