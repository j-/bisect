import { getStepSegmentCount } from './get-step-segment-count';

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return the index of the segment within this step.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┬─────┐
 *     │  Index 0  │     │     │  0  │
 *     ├           │     │  0  ├─────┤
 *     │  Index 1  │     │     │  1  │
 *     ├           │ (0) ├─────┼─────┤
 *     │  Index 2  │▒▒▒▒▒│▒▒▒▒▒│▒(2)▒│
 *     ├           │     │ (1) ├─────┤
 *     │  Index 3  │     │     │  3  │
 *     ├           ├─────┼─────┼─────┤
 *     │  Index 4  │     │     │  4  │
 *     ├           │     │  2  ├─────┤
 *     │  Index 5  │     │     │  5  │
 *     ├           │  1  ├─────┼─────┤
 *     │  Index 6  │     │     │  6  │
 *     ├           │     │  3  ├─────┤
 *     │  Index 7  │     │     │  7  │
 *     └           └─────┴─────┴─────┘
 *
 *     const index = 2;
 *     const count = 8;
 *
 *     getStepSegment(index, count, 1) === 0
 *     getStepSegment(index, count, 2) === 1
 *     getStepSegment(index, count, 3) === 2
 *
 */
export const getStepSegment = (index: number, count: number, step: number): number => (
	Math.floor(index / (count / getStepSegmentCount(step)))
);
