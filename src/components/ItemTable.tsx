import * as React from 'react';
import ItemTableHead from './ItemTableHead';
import ItemTableBody from './ItemTableBody';

export interface Props {
	items: string[];
	steps: number;
}

const ItemTable: React.FunctionComponent<Props> = ({
	items,
	steps,
}) => (
	<table className="ItemTable">
		<ItemTableHead
			steps={steps}
		/>
		<ItemTableBody
			items={items}
			steps={steps}
		/>
	</table>
);

export default ItemTable;
