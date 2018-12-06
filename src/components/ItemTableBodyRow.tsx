import * as React from 'react';

export interface Props {
	item: string;
	index: number;
	steps: number;
}

const ItemTableBodyRow: React.FunctionComponent<Props> = ({
	item,
	index,
	steps,
}) => (
	<tr className="ItemTableBodyRow">
		<td>{item}</td>
	</tr>
);

export default ItemTableBodyRow;
