import { getStepSegment } from './get-step-segment';

it('handles 4 items, step 1', () => {
	expect(getStepSegment(0, 4, 1)).toBe(0);
	expect(getStepSegment(1, 4, 1)).toBe(0);
	expect(getStepSegment(2, 4, 1)).toBe(1);
	expect(getStepSegment(3, 4, 1)).toBe(1);
});

it('handles 5 items, step 1', () => {
	expect(getStepSegment(0, 5, 1)).toBe(0);
	expect(getStepSegment(1, 5, 1)).toBe(0);
	expect(getStepSegment(2, 5, 1)).toBe(0);
	expect(getStepSegment(3, 5, 1)).toBe(1);
	expect(getStepSegment(4, 5, 1)).toBe(1);
});

it('handles 49 items, step 2', () => {
	expect(getStepSegment(0, 49, 2)).toBe(0);
	expect(getStepSegment(12, 49, 2)).toBe(0);
	expect(getStepSegment(13, 49, 2)).toBe(1);
});

it('handles 49 items, step 3', () => {
	expect(getStepSegment(0, 49, 3)).toBe(0);
	expect(getStepSegment(6, 49, 3)).toBe(0);
	expect(getStepSegment(7, 49, 3)).toBe(1);
});

xit('handles 49 items, step 6', () => {
	expect(getStepSegment(0, 49, 6)).toBe(0);
	expect(getStepSegment(1, 49, 6)).toBe(1);
	expect(getStepSegment(2, 49, 6)).toBe(2);
	expect(getStepSegment(3, 49, 6)).toBe(3);
	expect(getStepSegment(4, 49, 6)).toBe(4);
	expect(getStepSegment(5, 49, 6)).toBe(5);
});
