import { getPivotIndex } from './get-pivot-index';

it('returns min/max index when values are equal', () => {
	expect(getPivotIndex(0, 0)).toBe(0);
});

it('returns min index when two items', () => {
	expect(getPivotIndex(0, 1)).toBe(0);
});

it('returns mid index when three items', () => {
	expect(getPivotIndex(0, 2)).toBe(1);
});

it('returns correct index when 4 items', () => {
	expect(getPivotIndex(0, 3)).toBe(1);
});

it('returns correct index when 5 items', () => {
	expect(getPivotIndex(0, 4)).toBe(2);
});

it('returns correct index when 6 items', () => {
	expect(getPivotIndex(0, 5)).toBe(2);
});
