# Too Dope Todo List
Simple CRUD todo list with MongoDB connectivity to store, create, edit, and delete tasks. Complete with stylish 'glass' components.

**Link to project repo:** https://github.com/yiremorlans/too-dope

![alt tag](https://github.com/yiremorlans/too-dope/blob/main/todolist.gif)

## How It's Made:

**Tech used:** MEEN Stack - Mongoose(w/MongoDB), Express.js, EJS, Node.js, JavaScript, CSS, Nodemon

Install and require all dependencies as well as dev dependency for the project. Set up port to listen on local host. MongoDB connection was established, and incorporated Schemas to handle writing to database via Mongoose. The sever.js file was fleshed out to include middleware, via EJS as the view engine. The routes in server.js were established with get and post requests, instead of incorporating put and delete. Eliminated the need for client side JS by making use of form inputs via EJS on the front-end. I went beyond basic functionality in the CSS and incorporated SVG generated background with back-drop filter blur, and shadows to create an upscaled look. 

## Lessons Learned:

The use of mongoose definitely streamlined the process of creating schemas to incorporate into the build. EJS is a good introductory to templating languages. However, I believe incorporating React into future CRUD builds will streamline many aspects of building client side functionality. A framework like TailwindCSS will also help build more flexible components rather than vanilla CSS.

## Examples:
Take a look at another example of CRUD apps that I have in my own portfolio:

**Fan fave Futurama quotes:** https://github.com/yiremorlans/Futurama-fanfavorite-quotes

