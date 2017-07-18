# Elememo

Simple Note App for Mac.

### Dev

Using '''mainWindow.loadURL(`http://localhost:4200`);''' in ./index.js file.

Running ng server
~~~
$ npm start
~~~

Start electron
~~~
$ npm run electron
~~~


### Product

Using '''mainWindow.loadURL(`file://${__dirname}/public/index.html`);''' in ./index.js file.

Generate js files
~~~
$ npm run build:prod
~~~

Start electron
~~~
$ npm run electron
~~~

Packaging
Using electron-packager[https://github.com/electron-userland/electron-packager]
~~~
$ npm run build:macos
~~~

Reference to: https://www.christianengvall.se/electron-packager-tutorial/

### Known issue
- When build with aot https://github.com/angular/angular-cli/issues/3854
- Install electron-packager without -g will occur infinite loop issue, better install a global one.
- electron-packager not compatible with npm@5.3 (5.2 works well)
