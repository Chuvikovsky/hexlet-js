import _ from 'lodash';

export default (arr) => {
  const lastItem = _.last(arr);
  return lastItem;
};
