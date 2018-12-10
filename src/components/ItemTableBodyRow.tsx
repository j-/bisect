import * as React from 'react';

import {
	getSegmentId,
	getSegmentMinimumIndex,
	getSegmentItemCount,
	getParentSegmentId,
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
		const minimumIndex = getSegmentMinimumIndex(segmentId, count);
		if (index !== minimumIndex) {
			// This is not the first item in the segment.
			// Exit early.
			continue;
		}
		const parentId = getParentSegmentId(segmentId);
		const itemsInParent = (
			// Parent ID will be null if this segment is in the first step.
			parentId === null ?
				// All items are in the parent segment.
				count :
				// Count the number of items in the parent.
				getSegmentItemCount(parentId, count)
		);
		if (itemsInParent === 1) {
			// Parent was already a single item.
			// Exit early.
			continue;
		}
		const itemsInSegment = getSegmentItemCount(segmentId, count);
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
