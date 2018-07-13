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
While server is running, editing and saving to trigger re-compiling and brower refresh.

Press Ctrl + c to kill webpack-dev-server process.

In build package, game code locats in app.bundle.js and production-dependencies.bundle.js contains other common module.
While server is running, if game code is modified, only app.bundle.js will be re-compiled.
