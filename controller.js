'use strict';

const logger = require('./logger');

module.exports = {
  index: {
    handler: (request, reply) => {
      reply({message: 'OK'});
    }
  },

  ahoy: {
    handler: (request, reply) => {
      let payload = request.payload;
      logger(payload, 'payload');

      reply('Ahoy! How are you?');
    }
  }
}