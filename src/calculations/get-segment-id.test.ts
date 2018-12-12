import { getSegmentId } from './get-segment-id';

it('handles 49 items, step 4', () => {
	expect(getSegmentId(24, 49, 4)).toBe(21);
	expect(getSegmentId(25, 49, 4)).toBe(22);
	expect(getSegmentId(26, 49, 4)).toBe(22);
	expect(getSegmentId(27, 49, 4)).toBe(22);
	expect(getSegmentId(28, 49, 4)).toBe(23);
});

xit('handles 49 items, step 6', () => {
	expect(getSegmentId(4, 49, 6)).toBe(66);
	expect(getSegmentId(5, 49, 6)).toBe(67);
});
