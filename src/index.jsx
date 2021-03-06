import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store';

import '@blueprintjs/core/dist/blueprint.css';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);
