import _ from 'lodash';

module.exports = function (value) {
  if (!_.isUndefined(value)) { return; }

  throw new Error(`Value required returned undefined`);
}
