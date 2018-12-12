import { getStepSegmentCount } from './get-step-segment-count';

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return the index of the segment within this step.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  0  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  1  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │ (2) │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  3  │
 *     └           └─────┴─────┘
 *
 *     const index = 2;
 *     const count = 4;
 *
 *     getSegmentId(index, count, 1) === 1
 *     getSegmentId(index, count, 2) === 2
 *
 */
export const getStepSegment = (index: number, count: number, step: number): number => (
	Math.floor(index / (count / getStepSegmentCount(step)))
);
