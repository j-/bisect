import { getSegmentMinimumIndex } from './get-segment-minimum-index';

it('handles example scenario', () => {
	expect(getSegmentMinimumIndex(0, 7)).toBe(0);
	expect(getSegmentMinimumIndex(1, 7)).toBe(4);
	expect(getSegmentMinimumIndex(2, 7)).toBe(0);
	expect(getSegmentMinimumIndex(3, 7)).toBe(2);
	expect(getSegmentMinimumIndex(4, 7)).toBe(4);
	expect(getSegmentMinimumIndex(5, 7)).toBe(6);
	expect(getSegmentMinimumIndex(6, 7)).toBe(0);
	expect(getSegmentMinimumIndex(7, 7)).toBe(1);
	expect(getSegmentMinimumIndex(8, 7)).toBe(2);
	expect(getSegmentMinimumIndex(9, 7)).toBe(3);
	expect(getSegmentMinimumIndex(10, 7)).toBe(4);
	expect(getSegmentMinimumIndex(11, 7)).toBe(5);
});

it('handles advanced scenario', () => {
	expect(getSegmentMinimumIndex(10, 19)).toBe(10);
	expect(getSegmentMinimumIndex(11, 19)).toBe(13);
	expect(getSegmentMinimumIndex(18, 19)).toBe(5);
	expect(getSegmentMinimumIndex(19, 19)).toBe(7);
});
