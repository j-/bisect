import { getSegmentStep } from './get-segment-step';

it('handles 0', () => {
	expect(getSegmentStep(0)).toBe(1);
});

it('handles 1', () => {
	expect(getSegmentStep(1)).toBe(1);
});

it('handles 2', () => {
	expect(getSegmentStep(2)).toBe(2);
});

it('handles 3', () => {
	expect(getSegmentStep(3)).toBe(2);
});

it('handles 4', () => {
	expect(getSegmentStep(4)).toBe(2);
});

it('handles 5', () => {
	expect(getSegmentStep(5)).toBe(2);
});

it('handles 6', () => {
	expect(getSegmentStep(6)).toBe(3);
});

it('handles 12', () => {
	expect(getSegmentStep(12)).toBe(3);
});

it('handles 20', () => {
	expect(getSegmentStep(20)).toBe(4);
});

it('handles 50', () => {
	expect(getSegmentStep(50)).toBe(5);
});
