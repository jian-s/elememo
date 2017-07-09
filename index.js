
const electron = require('electron');
const StatusTray = require('./app/status_tray.js');
const StatusWindow = require('./app/status_window.js');
const settings = require('./app/settings.js');

const { app } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
    app.dock.hide();
    mainWindow = new StatusWindow();
    // mainWindow.loadURL(`file://${__dirname}/public/index.html`);
    mainWindow.loadURL(`http://localhost:4200`);

    tray = new StatusTray(settings.iconPath, mainWindow);
});

