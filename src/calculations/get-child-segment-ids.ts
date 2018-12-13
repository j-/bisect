/**
 * Given a `segmentId`, will return the two next step's `segmentId`s.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┬─────┐
 *     │  Index 0  │     │     │  6  │
 *     ├           │     │ (2) ├─────┤
 *     │  Index 1  │  0  │     │  7  │
 *     ├           │     ├─────├─────┘
 *     │  Index 2  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 3  │     │  4  │
 *     ├           │  1  ├─────┤
 *     │  Index 4  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const segmentId = 2;
 *
 *     getChildSegmentIds(segmentId) === [6, 7]
 *
 */
export const getChildSegmentIds = (segmentId: number | null): [number, number] => (
	// Segment has no parent if it's in the first step
	segmentId === null ?
		// First step has segments 0 and 1
		[0, 1] :
		// Otherwise calculate segment IDs
		[segmentId * 2 + 2, segmentId * 2 + 3]
);
