import {
	getMinimumSteps,
	getMaximumSteps,
} from './calculations';

describe('getMinimumSteps()', () => {
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
});

describe('getMaximumSteps()', () => {
	it('handles 0', () => {
		expect(getMaximumSteps(0)).toBe(0);
	});
	it('handles 1', () => {
		expect(getMaximumSteps(1)).toBe(0);
	});
	it('handles 2', () => {
		expect(getMaximumSteps(2)).toBe(1);
	});
	it('handles 3', () => {
		expect(getMaximumSteps(3)).toBe(2);
	});
	it('handles 4', () => {
		expect(getMaximumSteps(4)).toBe(2);
	});
	it('handles 5', () => {
		expect(getMaximumSteps(5)).toBe(3);
	});
	it('handles 10', () => {
		expect(getMaximumSteps(10)).toBe(4);
	});
	it('handles 50', () => {
		expect(getMaximumSteps(50)).toBe(6);
	});
});
