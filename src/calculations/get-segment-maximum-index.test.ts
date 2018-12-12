import { getSegmentMaximumIndex } from './get-segment-maximum-index';

it('returns 3 when given 0 and 7', () => {
	expect(getSegmentMaximumIndex(0, 7)).toBe(3);
});

it('returns 6 when given 1 and 7', () => {
	expect(getSegmentMaximumIndex(1, 7)).toBe(6);
});

it('returns 1 when given 2 and 7', () => {
	expect(getSegmentMaximumIndex(2, 7)).toBe(1);
});

it('returns 3 when given 3 and 7', () => {
	expect(getSegmentMaximumIndex(3, 7)).toBe(3);
});

it('returns 5 when given 4 and 7', () => {
	expect(getSegmentMaximumIndex(4, 7)).toBe(5);
});

it('returns 6 when given 5 and 7', () => {
	expect(getSegmentMaximumIndex(5, 7)).toBe(6);
});

it('returns 0 when given 6 and 7', () => {
	expect(getSegmentMaximumIndex(6, 7)).toBe(0);
});

it('returns 1 when given 7 and 7', () => {
	expect(getSegmentMaximumIndex(7, 7)).toBe(1);
});

it('returns 2 when given 8 and 7', () => {
	expect(getSegmentMaximumIndex(8, 7)).toBe(2);
});

it('returns 3 when given 9 and 7', () => {
	expect(getSegmentMaximumIndex(9, 7)).toBe(3);
});

it('returns 4 when given 10 and 7', () => {
	expect(getSegmentMaximumIndex(10, 7)).toBe(4);
});

it('returns 5 when given 11 and 7', () => {
	expect(getSegmentMaximumIndex(11, 7)).toBe(5);
});
