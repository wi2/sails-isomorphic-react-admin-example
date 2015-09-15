
module.exports = function(def) {
  var res = [];
  var definition = sails.models[def].definition;
  console.log(definition);
  console.log(sails.models[def].associations);
  for (var prop in definition) {
    res.push( prepare(def, definition[prop], prop) );
  }
  return res;
}

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
  return res;
}
