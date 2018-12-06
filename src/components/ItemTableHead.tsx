import * as React from 'react';

export interface Props {
	steps: number;
}

const ItemTableHead: React.FunctionComponent<Props> = ({ steps }) => {
	const children: React.ReactChild[] = [];

	for (let i = 0; i < steps; i++) {
		children.push(
			<th key={i}>
				Step {i + 1}
			</th>
		);
	}

	return (
		<thead className="ItemTableHead">
			<tr>
				<th>Items</th>
				{children}
			</tr>
		</thead>
	);
};

export default ItemTableHead;
