import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { setItems } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools());

store.dispatch(
	setItems([
		'Red',
		'Orange',
		'Yellow',
		'Green',
		'Blue',
		'Indigo',
		'Violet',
	])
);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
