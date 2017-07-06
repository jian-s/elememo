const electron = require('electron');
const settings = require('./settings');
const { Tray, Menu, app } = electron;

class StatusTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);

        this.mainWindow = mainWindow;
        this.setToolTip('Timer App');
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
    }

    onClick(event, bounds) {
        const { x, y } = bounds;

        const { height, width} = this.mainWindow.getBounds();

        if(this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        } else {
            this.mainWindow.setBounds(settings.bounds(x, y, height, width));
            this.mainWindow.show();
        }
    }

    onRightClick() {
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => {
                    app.quit();
                }
            }
        ]);
        this.popUpContextMenu(menuConfig);
    }
}

module.exports = StatusTray;