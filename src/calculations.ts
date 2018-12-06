export const getMinimumSteps = (count: number) => (
	Math.max(Math.floor(Math.log2(count)), 0)
);

export const getMaximumSteps = (count: number) => (
	Math.max(Math.ceil(Math.log2(count)), 0)
);

export const getParentSegmentId = (segmentId: number) => (
	// Segments 0 and 1 have no parents
	segmentId < 2 ? null :
	// All other segments are step 2 or above
	(segmentId >> 1) - 1
);
