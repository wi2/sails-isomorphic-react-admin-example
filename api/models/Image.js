/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    small: {
      type: 'binary',
      required: true
    },
    medium: {
      type: 'binary',
      required: true
    },
    big: {
      type: 'binary'
    },

  }
};

