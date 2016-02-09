import React from 'react';
import render from 'react-dom';

import store from './store.jsx';

render(<Application store={store} />, document.getElementById('app-wrapper'))
