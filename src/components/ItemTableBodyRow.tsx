import * as React from 'react';

import {
	getSegmentId,
	getSegmentDimensions,
} from '../calculations';

export interface Props {
	item: string;
	index: number;
	count: number;
	steps: number;
}

const buildSegments = (index: number, count: number, steps: number) => {
	const children: React.ReactChild[] = [];

	for (let step = 1; step <= steps; step++) {
		const segmentId = getSegmentId(index, count, step);
		const [indexMin,, itemsInSegment] = getSegmentDimensions(segmentId, count);
		if (index !== indexMin || itemsInSegment === 0) {
			// This is not the first item in the segment,
			// or this segment is smaller than 1 item.
			// Exit early.
			continue;
		}
		children.push(
			<td key={step} rowSpan={itemsInSegment}>
				{segmentId}
			</td>
		);
	}

	return children;
};

const ItemTableBodyRow: React.FunctionComponent<Props> = ({
	item,
	index,
	count,
	steps,
}) => (
	<tr className="ItemTableBodyRow">
		<td>{item}</td>
		{buildSegments(index, count, steps)}
	</tr>
);

export default ItemTableBodyRow;
