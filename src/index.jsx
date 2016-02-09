import ReactDom from 'react-dom';
import React from 'react';

import store from './store.jsx';
import App from './app.jsx';

ReactDom.render(<App store={store} />, document.getElementById('app-wrapper'))
