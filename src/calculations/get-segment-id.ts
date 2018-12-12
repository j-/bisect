import { getStepSegment } from './get-step-segment';
import { getStepSegmentCount } from './get-step-segment-count';

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return a `segmentId`.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┬─────┐
 *     │  Index 0  │     │     │  6  │
 *     ├           │     │  2  ├─────┤
 *     │  Index 1  │     │     │  7  │
 *     ├           │ (0) ├─────┼─────┤
 *     │  Index 2  │▒▒▒▒▒│▒▒▒▒▒│▒(8)▒│
 *     ├           │     │ (3) ├─────┤
 *     │  Index 3  │     │     │  9  │
 *     ├           ├─────┼─────┼─────┤
 *     │  Index 4  │     │     │ 10  │
 *     ├           │     │  4  ├─────┤
 *     │  Index 5  │     │     │ 11  │
 *     ├           │  1  ├─────┼─────┤
 *     │  Index 6  │     │     │ 12  │
 *     ├           │     │  5  ├─────┤
 *     │  Index 7  │     │     │ 13  │
 *     └           └─────┴─────┴─────┘
 *
 *     const index = 2;
 *     const count = 8;
 *
 *     getSegmentId(index, count, 1) === 0
 *     getSegmentId(index, count, 2) === 3
 *     getSegmentId(index, count, 3) === 8
 *
 */
export const getSegmentId = (index: number, count: number, step: number): number => (
	// This segment's index within this step
	getStepSegment(index, count, step) +
	// Count of all prior segments
	Math.max(0, getStepSegmentCount(step) - 2)
);
