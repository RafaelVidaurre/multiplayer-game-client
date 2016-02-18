import _ from 'lodash';

export default function (value) {
  if (!_.isUndefined(value)) { return; }

  throw new Error(`Value required returned undefined`);
}
