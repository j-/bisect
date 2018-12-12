import { getSegmentDimensions } from './get-segment-dimensions';

/**
 * Gets the number of items within this segment.
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
 *     getSegmentItemCount(segmentId, count) === 2
 *
 */
export const getSegmentItemCount = (segmentId: number, count: number): number => (
	getSegmentDimensions(segmentId, count)[2]
);
