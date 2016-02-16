import heroes from './heroes';

/**
* TODO: Maybe convert this to asyncronous loader at some point so that
* we can lazy load stuff
*/

let store = {
  heroes
};

module.exports = {
  get: (storage,resource) => {
    return store[storage][resource];
  }
};
