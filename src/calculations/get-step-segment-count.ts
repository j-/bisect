/**
 * Returns the number of segments in this step.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  4  │
 *     ├           │  2  ├─────┤
 *     │  Index 1  │     │  4  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │  4  │
 *     ├           │  2  ├─────┤
 *     │  Index 3  │     │  4  │
 *     └           └─────┴─────┘
 *
 *     getStepSegmentCount(1) === 2
 *     getStepSegmentCount(2) === 4
 *
 */
export const getStepSegmentCount = (step: number): number => (
	2 ** step
);
