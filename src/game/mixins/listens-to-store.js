import store from '../store.js';

export default (base) => {
  let self, previousState, currentState;

  self = {
    shouldUpdate: base.shouldUpdate || function () { return true; },
    update: base.update || function () {},
    unsubscribe: store.subscribe(function () {
      previousState = currentState;
      currentState = store.getState();

      if (self.shouldUpdate(previousState, currentState)) {
        self.update(currentState);
      }
    })
  }

  return self;
}
