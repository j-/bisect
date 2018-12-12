import { getSegmentDimensions } from './get-segment-dimensions';

/**
 * Gets the index for the item at the end of this segment.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │  4  │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const segmentId = 1;
 *     const count = 4;
 *
 *     getSegmentMaximumIndex(segmentId, count) === 3
 *
 */
export const getSegmentMaximumIndex = (segmentId: number, count: number): number => (
	getSegmentDimensions(segmentId, count)[1]
);
