/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    avatar: {
      type: 'binary'
    },
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      email: true,
      unique: true,
      required: true
    },
    status: {
      type: 'string',
      in: ['admin', 'member', 'visitor'],
      defaultsTo: 'visitor'
    },
    connected: {
      type: 'boolean',
      defaultsTo: false
    }
  },
  beforeCreate: function(values, cb) {
    console.log(values);
    cb();
  },
  afterCreate: function(values, cb) {
    console.log(values);
    console.log("after");
    cb();
  }
};

