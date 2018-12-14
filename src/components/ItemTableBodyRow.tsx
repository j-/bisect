import * as React from 'react';
import { getSegmentId } from '../calculations/get-segment-id';
import { getSegmentDimensions } from '../calculations/get-segment-dimensions';
import Segment from '../containers/Segment';
import './ItemTableBodyRow.css';

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
			<td key={step} rowSpan={itemsInSegment} className="ItemTableBodyRow-segment-cell">
				<Segment segmentId={segmentId} />
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
		<td className="ItemTableBodyRow-item-cell">{item}</td>
		{buildSegments(index, count, steps)}
	</tr>
);

export default ItemTableBodyRow;
