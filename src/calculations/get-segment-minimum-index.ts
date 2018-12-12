import { getSegmentDimensions } from './get-segment-dimensions';

/**
 * Gets the index for the item at the beginning of this segment.
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
 *     getSegmentMinimumIndex(segmentId, count) === 2
 *
 */
export const getSegmentMinimumIndex = (segmentId: number, count: number): number => (
	getSegmentDimensions(segmentId, count)[0]
);
