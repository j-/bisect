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

export const getStepSegment = (index: number, count: number, step: number) => (
	Math.floor(index / (count / 2 ** step))
);

export const getSegmentId = (index: number, count: number, step: number) => (
	// This segment's index within this step
	getStepSegment(index, count, step) +
	// Count of all prior segments
	Math.max(0, 2 ** step - 2)
);
