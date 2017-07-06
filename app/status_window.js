const electron = require('electron');
const { BrowserWindow } = electron;

const options = {
        width: 300,
        height: 500,
        resizable: false,
        frame: false,
        alwaysOnTop: true,
        show: false
    };

class StatusWindow extends BrowserWindow {

    constructor() {
        super(options);
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur() {
        this.hide();
    }
}

module.exports = StatusWindow;