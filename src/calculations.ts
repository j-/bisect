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

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return a `segmentId`.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │ (4) │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const index = 2;
 *     const count = 4;
 *
 *     getSegmentId(index, count, 1) === 1
 *     getSegmentId(index, count, 2) === 4
 *
 */
export const getSegmentId = (index: number, count: number, step: number): number => (
	// This segment's index within this step
	getStepSegment(index, count, step) +
	// Count of all prior segments
	Math.max(0, getStepSegmentCount(step) - 2)
);

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

/**
 * For any `segmentId` and `count`, returns a triple containing the index of the
 * first and last items therein as well as the total number of items therein.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┬─────┐
 *     │  Index 0  │     │     │  6  │
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
 *     const count = 5;
 *
 *     getSegmentDimensions(0, count) === [0, 2, 3]
 *     getSegmentDimensions(1, count) === [3, 4, 2]
 *     getSegmentDimensions(2, count) === [0, 1, 2]
 *
 */
export const getSegmentDimensions = (segmentId: number | null, count: number): [number, number, number] => {
	if (segmentId === null) {
		return [0, count - 1, count];
	}
	const parentId = getParentSegmentId(segmentId);
	const [parentMin, parentMax] = getSegmentDimensions(parentId, count);
	const isFirst = (
		// Segment has no parent if it's in the first step
		parentId === null ?
			// If this is the first step, segment 0 comes first
			segmentId === 0 :
			// Otherwise, figure out if this step is first
			segmentId === 2 * parentId + 2
	);
	const indexPivot = getPivotIndex(parentMin, parentMax);
	const indexMin = isFirst ? parentMin : indexPivot + 1;
	const indexMax = isFirst ? indexPivot : parentMax;
	return [indexMin, indexMax, indexMax - indexMin + 1];
};

/**
 * Gets the index for the item at the beginning of this segment.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │  4  │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const segmentId = 1;
 *     const count = 4;
 *
 *     getSegmentMinimumIndex(segmentId, count) === 2
 *
 */
export const getSegmentMinimumIndex = (segmentId: number, count: number): number => (
	getSegmentDimensions(segmentId, count)[0]
);

/**
 * Gets the index for the item at the end of this segment.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │  4  │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const segmentId = 1;
 *     const count = 4;
 *
 *     getSegmentMaximumIndex(segmentId, count) === 3
 *
 */
export const getSegmentMaximumIndex = (segmentId: number, count: number): number => (
	getSegmentDimensions(segmentId, count)[1]
);

/**
 * Gets the number of items within this segment.
 *
 * @example
 *
 *     ┌           ┌─────┬─────┐
 *     │  Index 0  │     │  2  │
 *     ├           │  0  ├─────┤
 *     │  Index 1  │     │  3  │
 *     ├           ├─────┼─────┤
 *     │  Index 2  │     │  4  │
 *     ├           │ (1) ├─────┤
 *     │  Index 3  │     │  5  │
 *     └           └─────┴─────┘
 *
 *     const segmentId = 1;
 *     const count = 4;
 *
 *     getSegmentItemCount(segmentId, count) === 2
 *
 */
export const getSegmentItemCount = (segmentId: number, count: number): number => (
	getSegmentDimensions(segmentId, count)[2]
);
