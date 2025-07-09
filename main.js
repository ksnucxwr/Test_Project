const { app, BrowserWindow, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");

function createWindow() {
    const win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile("index.html");

    autoUpdater.checkForUpdates();

    autoUpdater.on("update-downloaded", () => {
        autoUpdater.quitAndInstall();
    });
}

app.whenReady().then(createWindow);
