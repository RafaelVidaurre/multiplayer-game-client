import store from '../store.js';

export default (state) => {
  let base;

  base = {};
  base.onStateChange = state.onStateChange || function () {};
  base.unsubscribe = store.subscribe(function () {
    base.onStateChange(store.getState());
  });

  return base;
}
