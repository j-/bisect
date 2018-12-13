import { getChildSegmentIds } from './get-child-segment-ids';

it('returns 0 and 1 for null segment', () => {
	expect(getChildSegmentIds(null)).toEqual([0, 1]);
});

it('returns 2 and 3 for segment 0', () => {
	expect(getChildSegmentIds(0)).toEqual([2, 3]);
});

it('returns 4 and 5 for segment 1', () => {
	expect(getChildSegmentIds(1)).toEqual([4, 5]);
});

it('returns 6 and 7 for segment 2', () => {
	expect(getChildSegmentIds(2)).toEqual([6, 7]);
});

it('returns 8 and 9 for segment 3', () => {
	expect(getChildSegmentIds(3)).toEqual([8, 9]);
});

it('returns 40 and 41 for segment 19', () => {
	expect(getChildSegmentIds(19)).toEqual([40, 41]);
});

it('returns 102 and 103 for segment 50', () => {
	expect(getChildSegmentIds(50)).toEqual([102, 103]);
});
