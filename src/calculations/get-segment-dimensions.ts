import { getParentSegmentId } from './get-parent-segment-id';
import { getPivotIndex } from './get-pivot-index';

/**
 * For any `segmentId` and `count`, returns a triple containing the index of the
 * first and last items therein as well as the total number of items therein.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┬─────┐
 *     │  Index 0  │     │     │  6  │
 *     ├           │     │  2  ├─────┤
 *     │  Index 1  │  0  │     │  7  │
 *     ├           │     ├─────├─────┘
 *     │  Index 2  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 3  │     │  4  │
 *     ├           │  1  ├─────┤
 *     │  Index 4  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const count = 5;
 *
 *     getSegmentDimensions(0, count) === [0, 2, 3]
 *     getSegmentDimensions(1, count) === [3, 4, 2]
 *     getSegmentDimensions(2, count) === [0, 1, 2]
 *
 */
export const getSegmentDimensions = (segmentId: number | null, count: number): [number, number, number] => {
	if (segmentId === null) {
		return [0, count - 1, count];
	}
	const parentId = getParentSegmentId(segmentId);
	const [parentMin, parentMax, parentCount] = getSegmentDimensions(parentId, count);
	const isFirst = (
		// Segment has no parent if it's in the first step
		parentId === null ?
			// If this is the first step, segment 0 comes first
			segmentId === 0 :
			// Otherwise, figure out if this step is first
			segmentId === 2 * parentId + 2
	);
	const indexPivot = getPivotIndex(parentMin, parentMax);
	const indexMax = isFirst ? indexPivot : parentMax;
	const indexMin = isFirst ? parentMin : Math.min(indexPivot + 1, indexMax);
	const segmentCount = parentCount === 1 ? 0 : indexMax - indexMin + 1;
	return [indexMin, indexMax, segmentCount];
};
