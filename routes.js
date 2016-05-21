'use strict';

const controller = require('./controller');

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: controller.index
  },
  {
    method: 'POST',
    path: '/ahoy',
    config: controller.ahoy
  }
]