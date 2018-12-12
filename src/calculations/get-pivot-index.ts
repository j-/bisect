/**
 * Finds the item that is half-way between the two given indexes.
 *
 * @example
 *
 *     ┌─────┬─────┬─────┬─────┬─────┐
 *     │ (0) │  0  │  0  │  0  │  0  │
 *     ├─────┼─────┼─────┼─────┼─────┤
 *     │  1  │ (1) │ (1) │  1  │  1  │
 *     ├─────┼─────┼─────┼─────┼─────┤
 *     │     │  2  │  2  │ (2) │ (2) │
 *     ├╌╌╌╌╌┼─────┼─────┼─────┼─────┤
 *     │     ┆     │  3  │  3  │  3  │
 *     ├╌╌╌╌╌┼╌╌╌╌╌┼─────┼─────┼─────┤
 *     │     ┆     ┆     │  4  │  4  │
 *     ├╌╌╌╌╌┼╌╌╌╌╌┼╌╌╌╌╌┼─────┼─────┤
 *     │     ┆     ┆     ┆     │  5  │
 *     └╌╌╌╌╌┴╌╌╌╌╌┴╌╌╌╌╌┴╌╌╌╌╌┴─────┘
 */
export const getPivotIndex = (minIndex: number, maxIndex: number): number => (
	minIndex + Math.floor((maxIndex - minIndex) / 2)
);
