/**
 * Least number of steps that can be taken for this item `count`.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │     │
 *     ├           │  1  ├─────┤
 *     │  Index 1  │     │     │
 *     ├           ├─────┼─────┘
 *     │  Index 2  │  1  │
 *     └           └─────┘
 *
 *     const count = 3;
 *
 *     getMinimumSteps(count) === 1
 *
 */
export const getMinimumSteps = (count: number): number => (
	Math.max(Math.floor(Math.log2(count)), 0)
);
