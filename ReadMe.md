# Minimal React JS Boilerplate

## Description
Unopinionated minimal ReactJS boilerplate.

## Features
- Output self-contained react application without server dependency.
- Alternately, allow serving the application through Node.js Express.
- Uses webpack for packing and transpiling all assets (js, sass, images, etc.).
- Use es2015 and stage 2 proposal syntax for client, server, and webpack configuration code.
- Enable Hot Module Replacement (HMR) for all client assets (js, scss, and images).
- Automatic server reload when any server-related code is modified.
- Sourcemaps for client and server code and stylesheets for easier debugging.
- Fully-configured debugging environment for Visual Studio Code (vscode).
- Ensure consistent coding convention through eslint.
- Isomorphic JavaScript (pending)

## Application contents
- React native application
- Node.js Express server

## How to start
How to build, run, or debug the application.

### Prerequisites
- Install Node.js
- Install Nodemon by executing `npm install nodemon -g`
- Install svgstore-cli by executing `npm install svgstore-cli -g`
- Execute `npm init` inside terminal.

### How to start development server
```shell
npm run dev
```

This will clean the dist folder, run webpack, and start a web server at http://localhost:8080/. This will support Hot Replacement Module (HMR) for the react client application. This also automatically restarts the web server if any changes are made in the server source code.

### How to build files for production (with server)
```shell
npm run prod
```

This will clean the dist folder and create an optimized react and server builds inside /dist folder. The server files will be inside /dist/server.

### How to build static html files (without server)
```shell
npm run static
```

This will clean the dist folder and create an optimized react application inside the /dist/app folder. This build can be run on the browser directly from the file system. To do so, open /dist/app/index.html on the web browser.

## Visual Studio Code Debugging
The boilerplate has provisions for debugging the Node.js server using Visual Studio Code. Note that **Node Debug 2** extension must be installed from vscode marketplace.

1. Execute the following inside terminal:
```shell
npm run debug
```
2. Open debug view in vscode sidebar and choose **Nodemon** from the configuration dropdown.
1. Press **F5** on the keyboard to start the debugging session

This configuration will attach the vscode debugger to the running node express server. Any changes to /src/server will automatically restart the web server and any breakpoints set in JavaScript files under this directory will cause vscode to pause execution. At the same time, any changes to /src/app files will automatically trigger the Hot Module Reloading (HMR) in ReactJS and update the relevant components in the client application.

Note though that in this approach, the debugger is attached after the server has already initailized once. If there are errors in the server initialization, the web application will crash before any breakpoints are hit. In scenarios like this, it is better to use Option 2.

## Notes
### SVG sprites
Whenever build scripts are executed, svgstore is executed to process SVG files stored inside `./src/app/assets/icons` directory and combines them into a single SVG file stored inside `./src/app/assets/images/icons.svg`. The generated `icons.svg` is not committed into source control and is only used as an intermediary file which is used by webpack to compile into the /dist/app directory.


## Deployment

### Amazon Web Services (AWS)
1. run `eb init`
1. pending...

Make sure the correct environment variables are set up

| Variable Name | Values                           | Purpose                                   |
| ------------- | -------------------------------- | ----------------------------------------- |
| NODE_ENV      | development, staging, production | Changes the behavior of the webserver     |
| AUTH_USER     | prototype                        | User name used when accessing the website |
| AUTH_PASS     | prototype                        | Password used when accessing the website  |



## Technologies
- Node.js
- Express
- SASS (SCSS)
- Bootstrap
- React
- React-Router
- JSX
- ES6
- Babel
- Webpack
- Nodemon
- Hot Module Replacement (HMR)


## TODO:
- Resolve SVG sprite issue on static build when loading the HTML file from the file system.
