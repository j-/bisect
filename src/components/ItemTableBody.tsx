import * as React from 'react';

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
			<tr key={i} className="ItemTableBody-item-row">
				<td>{item}</td>
			</tr>
		))}
	</tbody>
);

export default ItemTableBody;
