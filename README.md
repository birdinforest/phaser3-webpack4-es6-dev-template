# Phaser 3 Webpack Project Template

A Phaser 3 project template: 
+ Code bunding: Webpack 4. 
+ ES6 transpiling: Babel
+ Dependency manager: NPM
+ Http server in development environment: web-dev-server

Config code spliting to bundle game code and common code separately.

## Requirements

Node.js.

## Install and run
```bash
npm install	                // Install dependencies and launch browser with examples.
npx webpack-dev-server          // Compile and build to debug on brower.
npx webpack                     // Build production package.

```
While server is running, modify game code and save will trigger re-compiling and brower refresh.

Press Ctrl + c to kill webpack-dev-server process.

After build, game code locats in app.bundle.js and other common code in production-dependencies.bundle.js.
While server is running, if game code is modified, only app.bundle.js will be re-compiled.
