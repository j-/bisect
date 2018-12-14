import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { setItems, setSegmentColor } from './store/actions';

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

store.dispatch(
	setSegmentColor(0, 'hsl(100, 80%, 70%)')
);

store.dispatch(
	setSegmentColor(1, 'hsl(0, 80%, 70%)')
);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
