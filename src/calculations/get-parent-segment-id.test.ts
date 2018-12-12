import { getParentSegmentId } from './get-parent-segment-id';

it('handles 0', () => {
	expect(getParentSegmentId(0)).toBe(null);
});

it('handles 1', () => {
	expect(getParentSegmentId(1)).toBe(null);
});

it('handles 2', () => {
	expect(getParentSegmentId(2)).toBe(0);
});

it('handles 3', () => {
	expect(getParentSegmentId(3)).toBe(0);
});

it('handles 4', () => {
	expect(getParentSegmentId(4)).toBe(1);
});

it('handles 5', () => {
	expect(getParentSegmentId(5)).toBe(1);
});

it('handles 10', () => {
	expect(getParentSegmentId(10)).toBe(4);
});

it('handles 50', () => {
	expect(getParentSegmentId(50)).toBe(24);
});

it('handles 100', () => {
	expect(getParentSegmentId(100)).toBe(49);
});
