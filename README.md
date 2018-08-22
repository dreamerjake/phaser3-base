phaser3-base
============
Phaser3-base is a boilerplate project for setting up a full production deployment
of a Phaser 3 game with a server, database, frontend UI, and container-ized deployment
via docker.  If the stack that this project uses appeals to you, great! If not, there
are many other boilerplates available for Phaser 3.

Technology Buzzwords!
---------------------
* Backend: Node.js 8
* Frontend Library: React.js
* JavaScript Syntax: ES6
* Database: MongoDB
* Object Document Mapper: Mongoose
* Web Server: Nginx
* Game Framework: Phaser 3
* Bundling: Webpack 4
* Transpiling: Babel
* Package Manager: Yarn
* Containers: Docker
* OAuth: Passport.js

Installing
----------
* Install Docker from [docker.com](https://www.docker.com/get-started)
* clone this repository `git clone https://github.com/dreamerjake/phaser3-base.git`
* make any necessary/desired changes to the config files
* run with `docker-compose up --build`

Notes
-----
#### Server Stuff
* Nginx is our reverse proxy, Express is handling static file serving