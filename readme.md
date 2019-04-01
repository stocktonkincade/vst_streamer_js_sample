## Overview

This is a sample app that demonstrates registering a background task to handle the connection and events of the `com.microsoft.datastreamerconnect` App Service from within an Electron application. The Windows APIs are all accessed through the [NodeRT](https://github.com/NodeRT/NodeRT) npm modules, and can thusly be handled entirely in JavaScript.

This is loosly based off of the Microsoft Data Streamer AppService UWPComm Sample sample and the [DataStreamerConnect](https://github.com/Microsoft/DataStreamerConnect) sample.

## Environment Setup

* Install VS 2017
* Install [Node](https://nodejs.org/en/download/) *Note:* Vernier uses 32-bit node for their builds

## Build

From within a VS dev cmd prompt, cd to the working directory and exeecute the following commands:

* `>npm install`
* `>.\node_modules\.bin\electron-rebuild.cmd`
* `>npm run build`
* `>npm start`

*Note:* Any time you run `npm install`, you will also need to run `.\node_modules\.bin\electron-rebuild.cmd`. This command will rebuild the NodeRT module dependencies for use with Electron.

## Install

If you want to install the app as an appx, open an Admin PowerShell and run:
* `>Add-AppxPackage -register ./output/AppxManifest.xml`