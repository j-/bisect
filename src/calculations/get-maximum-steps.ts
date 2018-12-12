/**
 * Most number of steps that can be taken for this item `count`.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │     ├─────┤
 *     │  Index 1  │     │  2  │
 *     ├           ├─────┼─────┘
 *     │  Index 2  │     │
 *     └           └─────┘
 *
 *     const count = 3;
 *
 *     getMaximumSteps(count) === 2
 *
 */
export const getMaximumSteps = (count: number): number => (
	Math.max(Math.ceil(Math.log2(count)), 0)
);
