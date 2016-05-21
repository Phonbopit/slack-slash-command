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

      if (payload.token !== process.env.SLACK_TOKEN) {
        return reply('unautorized');
      }

      if (payload.text === 'private') {
        return reply(`Ahoy! ${payload.user_name} How are you?`);
      } else {
        return reply({
          response_type: 'in_channel',
          text: 'Ahoy! ${payload.user_name}',
          attachments: [
            { text: 'How are you? ${payload.user_name}' }
          ]
        });
      }
    }
  }
}