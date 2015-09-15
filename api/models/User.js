/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstname: 'string',
    lastname: 'string',
    email: {
      type: 'string',
      email: true,
      unique: true
    },
    status: {
      type: 'string',
      in: ['admin', 'member', 'visitor']
    },
    connected: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

