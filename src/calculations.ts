/**
 * Least number of steps that can be taken for this item `count`.
 */
export const getMinimumSteps = (count: number) => (
	Math.max(Math.floor(Math.log2(count)), 0)
);

/**
 * Most number of steps that can be taken for this item `count`.
 */
export const getMaximumSteps = (count: number) => (
	Math.max(Math.ceil(Math.log2(count)), 0)
);

/**
 * Given a `segmentId`, will return the previous step's `segmentId`.
 */
export const getParentSegmentId = (segmentId: number) => (
	// Segments 0 and 1 have no parents
	segmentId < 2 ? null :
	// All other segments are step 2 or above
	(segmentId >> 1) - 1
);

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return the index of the segment within this step.
 */
export const getStepSegment = (index: number, count: number, step: number) => (
	Math.floor(index / (count / 2 ** step))
);

/**
 * Given the `index` of the item in question, the `count` of all items, and the
 * `step` of interest, will return a `segmentId`.
 */
export const getSegmentId = (index: number, count: number, step: number) => (
	// This segment's index within this step
	getStepSegment(index, count, step) +
	// Count of all prior segments
	Math.max(0, 2 ** step - 2)
);
