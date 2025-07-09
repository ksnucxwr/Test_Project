const { app, BrowserWindow, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");

function createWindow() {
    const win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile("index.html");

    autoUpdater.checkForUpdates();

    autoUpdater.on("update-available", () => {
        dialog.showMessageBox({ type: "info", message: "新版本正在下载..." });
    });

    autoUpdater.on("update-downloaded", () => {
        dialog.showMessageBox({
            type: "info",
            message: "下载完成，是否安装并重启？",
            buttons: ["是", "否"]
        }).then(res => {
            if (res.response === 0) autoUpdater.quitAndInstall();
        });
    });
}

app.whenReady().then(createWindow);
