module.exports = (object, property, type) -> {
  let prop;

  prop = object[property];

  if (_.isUndefined(object[property])) {
    throw new Error(`Property "${property} has to be defined"`);
  }

  switch(type.toLowerCase()) {
    case 'string':
      if (!_.isString(prop)) {
        throw new Error(`Property "${property}" must be a String`);
      }
      break;
  }
}
