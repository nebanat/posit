# posit

[![Build Status](https://travis-ci.org/nebanat/posit.svg?branch=master)](https://travis-ci.org/nebanat/posit)
[![Coverage Status](https://coveralls.io/repos/github/nebanat/posit/badge.svg?branch=master)](https://coveralls.io/github/nebanat/posit?branch=master)

*POSTIT**
> - A web application that allows users to create groups and send broadcast messages

**TECH STACK**
>- Back-end: Node/Express + Sequelize/Postgres
> - In-between: es6, Babel, eslint, Mocha/Chai + chai-http 

**STRUCTURE**
> - template: contains HTML/CSS/BOOTSTRAP Template files
> - client: contains React/Redux implementation of the frontend
> - server: container express/postgres implementation of the backend

**INSTALLATION**
> - Clone the repo
> - Run `npm install` to install dependencies/dev-dependencies
> - Setup Postgres
> - setup your db according to settings in `server/config/config.json`
> - then run `$ sequelize db:migrate`
> - Run `npm run exec` to start server