phaser3-base
============
Phaser3-base is a boilerplate project for setting up a full production deployment
of a Phaser 3 game with a server, database, frontend UI, and container-ized deployment
via docker.

Technology Buzzwords!
---------------------
* Backend: Node.js 8
* Frontend Library: React.js
* JavaScript Syntax: ES6
* Database: MongoDB
* Web Server: Nginx
* Game Framework: Phaser 3
* Bundling: Webpack 4
* Transpiling: Babel
* Package Manager: Yarn
* Containers: Docker

Installing
----------
* Install Docker from [https://www.docker.com/get-started]
* clone this repository
* make any necessary/desired changes to the config files


    docker-compose up --build



Notes
-----
##### Server Stuff
* Nginx is our reverse proxy, Express is handling static file serving