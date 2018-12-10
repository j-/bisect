import * as React from 'react';
import ItemTableBodyRow from './ItemTableBodyRow';

export interface Props {
	items: string[];
	steps: number;
}

const ItemTableBody: React.FunctionComponent<Props> = ({
	items,
	steps,
}) => (
	<tbody className="ItemTableBody">
		{items.map((item, i) => (
			<ItemTableBodyRow
				key={i}
				item={item}
				index={i}
				count={items.length}
				steps={steps}
			/>
		))}
	</tbody>
);

export default ItemTableBody;
