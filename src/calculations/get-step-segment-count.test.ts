import { getStepSegmentCount } from './get-step-segment-count';

it('handles step 1', () => {
	expect(getStepSegmentCount(1)).toBe(2);
});

it('handles step 2', () => {
	expect(getStepSegmentCount(2)).toBe(4);
});

it('handles step 3', () => {
	expect(getStepSegmentCount(3)).toBe(8);
});

it('handles step 4', () => {
	expect(getStepSegmentCount(4)).toBe(16);
});

it('handles step 5', () => {
	expect(getStepSegmentCount(5)).toBe(32);
});

it('handles step 6', () => {
	expect(getStepSegmentCount(6)).toBe(64);
});

it('handles step 7', () => {
	expect(getStepSegmentCount(7)).toBe(128);
});
