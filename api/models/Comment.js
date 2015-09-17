/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 50
    },
    message: {
      type: 'text',
      required: true,
      minLength: 5
    },
    post: {
      model: 'post'
    }

  }
};

