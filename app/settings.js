const path = require('path');

module.exports = {
    iconPath : process.platform === 'darwin' ? path.join(__dirname, '/../note.png') : new Error('This is a mac app'),
    bounds: (x, y, height, width) => { 
            return process.platform === 'darwin' ? {
                    x: x - 0.5*width,
                    y: y,
                    height: height,
                    width: width
                } : {
                    x: x - 0.5*width,
                    y: y - height,
                    height: height,
                    width: width
                }
        }
};