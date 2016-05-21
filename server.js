'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const chalk = require('chalk');

const routes = require('./routes');

require('dotenv').config();

server.connection({
  host: 'localhost',
  port: 2345
});

server.route(routes);

server.start(() => {
  console.log(chalk.green(`Server is running at ${server.info.uri}`));
});