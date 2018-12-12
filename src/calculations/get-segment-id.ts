import { getStepSegment } from './get-step-segment';
import { getStepSegmentCount } from './get-step-segment-count';

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return a `segmentId`.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │ (4) │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const index = 2;
 *     const count = 4;
 *
 *     getSegmentId(index, count, 1) === 1
 *     getSegmentId(index, count, 2) === 4
 *
 */
export const getSegmentId = (index: number, count: number, step: number): number => (
	// This segment's index within this step
	getStepSegment(index, count, step) +
	// Count of all prior segments
	Math.max(0, getStepSegmentCount(step) - 2)
);
