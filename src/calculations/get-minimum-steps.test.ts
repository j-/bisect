import { getMinimumSteps } from './get-minimum-steps';

it('handles 0', () => {
	expect(getMinimumSteps(0)).toBe(0);
});

it('handles 1', () => {
	expect(getMinimumSteps(1)).toBe(0);
});

it('handles 2', () => {
	expect(getMinimumSteps(2)).toBe(1);
});

it('handles 3', () => {
	expect(getMinimumSteps(3)).toBe(1);
});

it('handles 4', () => {
	expect(getMinimumSteps(4)).toBe(2);
});

it('handles 5', () => {
	expect(getMinimumSteps(5)).toBe(2);
});

it('handles 10', () => {
	expect(getMinimumSteps(10)).toBe(3);
});

it('handles 50', () => {
	expect(getMinimumSteps(50)).toBe(5);
});
