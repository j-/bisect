/**
 * Given a `segmentId`, will return the number of steps to get to that segment.
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
 *     getSegmentStep(segmentId) === 3
 *
 */
export const getSegmentStep = (segmentId: number): number => (
	Math.floor(Math.log2(segmentId + 2))
);
