

module.exports = function(def) {
  var definition = sails.models[def].definition;
  //Promise
  return new Promise(function(resolve, reject) {
    Promise.all(Object.keys(definition).map( assoc => { return prepare(def, definition[assoc], assoc); }) )
    .then( results => { resolve(results); } )
    .catch( err => { reject(err); } )
  });
};

function prepare(def, data, attr) {
  var res = {label: attr};
  var validator = sails.models[def]._validator.validations[attr];
  res.input = data.type;
  switch(data.type) {
    case 'array': res.input = 'checkbox'; break;
    case 'json': res.input = 'text'; break;
  }
  switch(attr) {
    case 'id':
    case 'updatedAt':
    case 'createdAt': res.disabled = true; break;
  }
  if (data.defaultsTo)
    res.defaultsTo = data.defaultsTo;
  if (validator && validator.email){
    res.input = 'email';
    res.email = validator.email;
  }
  if (validator && validator.in) {
    res.in = validator.in;
    res.input = 'choice';
  }
  //Promise
  return new Promise( (resolve, reject) => {
    if (data.alias && data.model)
      sails.models[data.alias].find()
      .then( list => {
        res.input = 'choice';
        res.in = list.map( item => { return [item.id, item[Object.keys(item)[1]]]; });
        resolve(res);
      } )
      .catch( err => { reject(err); } )
    else
      resolve(res);
  });
}
