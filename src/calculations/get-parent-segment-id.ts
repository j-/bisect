/**
 * Given a `segmentId`, will return the previous step's `segmentId`.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┬─────┐
 *     │  Index 0  │     │     │ (6) │
 *     ├           │     │  2  ├─────┤
 *     │  Index 1  │  0  │     │  7  │
 *     ├           │     ├─────├─────┘
 *     │  Index 2  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 3  │     │  4  │
 *     ├           │  1  ├─────┤
 *     │  Index 4  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const segmentId = 6;
 *
 *     getParentSegmentId(segmentId) === 2
 *
 */
export const getParentSegmentId = (segmentId: number): number | null => (
	// Segments 0 and 1 have no parents
	segmentId < 2 ? null :
	// All other segments are step 2 or above
	(segmentId >> 1) - 1
);
