import * as React from 'react';
import ItemTable from './ItemTable';

const items = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Blue',
	'Indigo',
	'Violet',
];

const App: React.FunctionComponent = () => (
	<div className="App">
		<ItemTable
			items={items}
			steps={3}
		/>
	</div>
);

export default App;
