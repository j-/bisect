import * as React from 'react';
import ItemTable from '../containers/ItemTable';
import SegmentColors from './SegmentColors';

const App: React.FunctionComponent = () => (
	<div className="App">
		<ItemTable />
		<br />
		<SegmentColors />
	</div>
);

export default App;
