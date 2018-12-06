export const getMinimumSteps = (count: number) => (
	Math.max(Math.floor(Math.log2(count)), 0)
);

export const getMaximumSteps = (count: number) => (
	Math.max(Math.ceil(Math.log2(count)), 0)
);
