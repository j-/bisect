import { getSegmentDimensions } from './get-segment-dimensions';

it('returns full range for null segment', () => {
	expect(getSegmentDimensions(null, 10)).toEqual([0, 9, 10]);
	expect(getSegmentDimensions(null, 30)).toEqual([0, 29, 30]);
});

it('handles first step with 2 items', () => {
	/*
		*     ┌           ┌─────┐
		*     │  Index 0  │  0  │ First = Index 0, Last = Index 0, Count = 1
		*     ├           │─────┤
		*     │  Index 1  │  1  │ First = Index 1, Last = Index 1, Count = 1
		*     └           └─────┘
		*
		*     Count: 2
		*/
	expect(getSegmentDimensions(0, 2)).toEqual([0, 0, 1]);
	expect(getSegmentDimensions(1, 2)).toEqual([1, 1, 1]);
});

it('handles first step with 3 items', () => {
	/*
		*     ┌           ┌─────┐
		*     │  Index 0  │     │ First = Index 0
		*     ├           │  0  │
		*     │  Index 1  │     │ Last = Index 1, Count = 2
		*     ├           │─────┤
		*     │  Index 2  │  1  │ First = Index 2, Last = Index 2, Count = 1
		*     └           └─────┘
		*
		*     Count: 3
		*/
	expect(getSegmentDimensions(0, 3)).toEqual([0, 1, 2]);
	expect(getSegmentDimensions(1, 3)).toEqual([2, 2, 1]);
});

it('handles 49 items, step 3', () => {
	expect(getSegmentDimensions(6, 49)).toEqual([0, 6, 7]);
	expect(getSegmentDimensions(7, 49)).toEqual([7, 12, 6]);
	expect(getSegmentDimensions(8, 49)).toEqual([13, 18, 6]);
	expect(getSegmentDimensions(9, 49)).toEqual([19, 24, 6]);
	expect(getSegmentDimensions(10, 49)).toEqual([25, 30, 6]);
	expect(getSegmentDimensions(11, 49)).toEqual([31, 36, 6]);
	expect(getSegmentDimensions(12, 49)).toEqual([37, 42, 6]);
	expect(getSegmentDimensions(13, 49)).toEqual([43, 48, 6]);
});

it('handles 49 items, step 4', () => {
	expect(getSegmentDimensions(14, 49)).toEqual([0, 3, 4]);
	expect(getSegmentDimensions(15, 49)).toEqual([4, 6, 3]);
	expect(getSegmentDimensions(16, 49)).toEqual([7, 9, 3]);
	expect(getSegmentDimensions(17, 49)).toEqual([10, 12, 3]);
	expect(getSegmentDimensions(18, 49)).toEqual([13, 15, 3]);
	expect(getSegmentDimensions(19, 49)).toEqual([16, 18, 3]);
	expect(getSegmentDimensions(20, 49)).toEqual([19, 21, 3]);
	expect(getSegmentDimensions(21, 49)).toEqual([22, 24, 3]);
	expect(getSegmentDimensions(22, 49)).toEqual([25, 27, 3]);
	expect(getSegmentDimensions(23, 49)).toEqual([28, 30, 3]);
	expect(getSegmentDimensions(24, 49)).toEqual([31, 33, 3]);
	expect(getSegmentDimensions(25, 49)).toEqual([34, 36, 3]);
	expect(getSegmentDimensions(26, 49)).toEqual([37, 39, 3]);
	expect(getSegmentDimensions(27, 49)).toEqual([40, 42, 3]);
	expect(getSegmentDimensions(28, 49)).toEqual([43, 45, 3]);
	expect(getSegmentDimensions(29, 49)).toEqual([46, 48, 3]);
});

it('handles 49 items, step 5', () => {
	expect(getSegmentDimensions(30, 49)).toEqual([0, 1, 2]);
	expect(getSegmentDimensions(31, 49)).toEqual([2, 3, 2]);
	expect(getSegmentDimensions(32, 49)).toEqual([4, 5, 2]);
	expect(getSegmentDimensions(33, 49)).toEqual([6, 6, 1]);
	expect(getSegmentDimensions(34, 49)).toEqual([7, 8, 2]);
	expect(getSegmentDimensions(35, 49)).toEqual([9, 9, 1]);
	expect(getSegmentDimensions(36, 49)).toEqual([10, 11, 2]);
	expect(getSegmentDimensions(37, 49)).toEqual([12, 12, 1]);
	expect(getSegmentDimensions(38, 49)).toEqual([13, 14, 2]);
	expect(getSegmentDimensions(39, 49)).toEqual([15, 15, 1]);
	expect(getSegmentDimensions(40, 49)).toEqual([16, 17, 2]);
	expect(getSegmentDimensions(41, 49)).toEqual([18, 18, 1]);
	expect(getSegmentDimensions(42, 49)).toEqual([19, 20, 2]);
	expect(getSegmentDimensions(43, 49)).toEqual([21, 21, 1]);
	expect(getSegmentDimensions(44, 49)).toEqual([22, 23, 2]);
	expect(getSegmentDimensions(45, 49)).toEqual([24, 24, 1]);
	expect(getSegmentDimensions(46, 49)).toEqual([25, 26, 2]);
	expect(getSegmentDimensions(47, 49)).toEqual([27, 27, 1]);
	expect(getSegmentDimensions(48, 49)).toEqual([28, 29, 2]);
	expect(getSegmentDimensions(49, 49)).toEqual([30, 30, 1]);
	expect(getSegmentDimensions(50, 49)).toEqual([31, 32, 2]);
	expect(getSegmentDimensions(51, 49)).toEqual([33, 33, 1]);
	expect(getSegmentDimensions(52, 49)).toEqual([34, 35, 2]);
	expect(getSegmentDimensions(53, 49)).toEqual([36, 36, 1]);
	expect(getSegmentDimensions(54, 49)).toEqual([37, 38, 2]);
	expect(getSegmentDimensions(55, 49)).toEqual([39, 39, 1]);
	expect(getSegmentDimensions(56, 49)).toEqual([40, 41, 2]);
	expect(getSegmentDimensions(57, 49)).toEqual([42, 42, 1]);
	expect(getSegmentDimensions(58, 49)).toEqual([43, 44, 2]);
	expect(getSegmentDimensions(59, 49)).toEqual([45, 45, 1]);
	expect(getSegmentDimensions(60, 49)).toEqual([46, 47, 2]);
	expect(getSegmentDimensions(61, 49)).toEqual([48, 48, 1]);
});

it('handles 49 items, step 6', () => {
	expect(getSegmentDimensions(66, 49)).toEqual([4, 4, 1]);
	expect(getSegmentDimensions(67, 49)).toEqual([5, 5, 1]);
});

it('handles segments smaller than 1 item', () => {
	expect(getSegmentDimensions(68, 49)).toEqual([6, 6, 0]);
	expect(getSegmentDimensions(69, 49)).toEqual([6, 6, 0]);
});
