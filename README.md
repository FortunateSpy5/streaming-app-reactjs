# streaming-app-reactjs

This project is a simple react app for streaming using some software like [OBS](https://obsproject.com/). It uses [React](https://reactjs.org/) and [Semantic UI](https://semantic-ui.com/) for front-end and [Node.js](https://nodejs.org/) ([json-server](https://github.com/typicode/json-server) and [node-media-server](https://github.com/illuspas/Node-Media-Server)) for backend. Check the links to learn more about them.

### This project uses the following packages:
- axios
- flv.js
- lodash
- react, react-dom, react-redux, react-router-dom, react-scripts
- redux, redux-thunk
- json-server
- node-media-server

### The project is contained in the streams folder and is divided into 3 parts:
- **client** - The React app to handle all the frontend.
- **server** - JSON Server to store the streams database.
- **rtmpserver** - To implement node-media-server to allow users to stream video to the website through some software like OBS.

### Instructions for use:
- Clone the repository and install all the dependencies for all three folders.
- Run all three applications individually with *npm start*.
- In the React app in *https://localhost:3000*, create a new stream or view an existing stream(if any).
- Check the id number of that particular stream in the url.
- Open OBS and initialize the scene. Then go to Settings -> Stream.
- Set Service to *custom* and Server to *rtmp://localhost/live*. Set Stream Key to the id of the stream.
- Start streaming.


This project was done as a part [Modern React with Redux](https://www.udemy.com/course/react-redux/) course on Udemy.
