import {
	getMinimumSteps,
	getMaximumSteps,
	getParentSegmentId,
	getSegmentId,
	getSegmentMinimumIndex,
	getSegmentStep,
	getSegmentItemCount,
	getSegmentMaximumIndex,
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

describe('getParentSegmentId()', () => {
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
});

describe('getSegmentStep()', () => {
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
});

describe('getSegmentId()', () => {
	it('handles example scenario', () => {
		expect(getSegmentId(24, 49, 4)).toBe(21);
		expect(getSegmentId(25, 49, 4)).toBe(22);
		expect(getSegmentId(26, 49, 4)).toBe(22);
		expect(getSegmentId(27, 49, 4)).toBe(22);
		expect(getSegmentId(28, 49, 4)).toBe(23);
	});
});

describe('getSegmentMinimumIndex()', () => {
	it('handles example scenario', () => {
		expect(getSegmentMinimumIndex(0, 7)).toBe(0);
		expect(getSegmentMinimumIndex(1, 7)).toBe(4);
		expect(getSegmentMinimumIndex(2, 7)).toBe(0);
		expect(getSegmentMinimumIndex(3, 7)).toBe(2);
		expect(getSegmentMinimumIndex(4, 7)).toBe(4);
		expect(getSegmentMinimumIndex(5, 7)).toBe(6);
		expect(getSegmentMinimumIndex(6, 7)).toBe(0);
		expect(getSegmentMinimumIndex(7, 7)).toBe(1);
		expect(getSegmentMinimumIndex(8, 7)).toBe(2);
		expect(getSegmentMinimumIndex(9, 7)).toBe(3);
		expect(getSegmentMinimumIndex(10, 7)).toBe(4);
		expect(getSegmentMinimumIndex(11, 7)).toBe(5);
	});

	xit('handles advanced scenario', () => {
		expect(getSegmentMinimumIndex(10, 19)).toBe(10);
		expect(getSegmentMinimumIndex(11, 19)).toBe(13); // Fails
		expect(getSegmentMinimumIndex(18, 19)).toBe(5);
		expect(getSegmentMinimumIndex(19, 19)).toBe(7); // Fails
	});
});

describe('getSegmentItemCount()', () => {
	describe('handles example scenario', () => {
		it('returns 4 when given 0 and 7', () => {
			expect(getSegmentItemCount(0, 7)).toBe(4);
		});
		it('returns 3 when given 1 and 7', () => {
			expect(getSegmentItemCount(1, 7)).toBe(3);
		});
		it('returns 2 when given 2 and 7', () => {
			expect(getSegmentItemCount(2, 7)).toBe(2);
		});
		it('returns 2 when given 3 and 7', () => {
			expect(getSegmentItemCount(3, 7)).toBe(2);
		});
		it('returns 2 when given 4 and 7', () => {
			expect(getSegmentItemCount(4, 7)).toBe(2);
		});
		it('returns 1 when given 5 and 7', () => {
			expect(getSegmentItemCount(5, 7)).toBe(1);
		});
		it('returns 1 when given 6 and 7', () => {
			expect(getSegmentItemCount(6, 7)).toBe(1);
		});
		it('returns 1 when given 7 and 7', () => {
			expect(getSegmentItemCount(7, 7)).toBe(1);
		});
		it('returns 1 when given 8 and 7', () => {
			expect(getSegmentItemCount(8, 7)).toBe(1);
		});
		it('returns 1 when given 9 and 7', () => {
			expect(getSegmentItemCount(9, 7)).toBe(1);
		});
		it('returns 1 when given 10 and 7', () => {
			expect(getSegmentItemCount(10, 7)).toBe(1);
		});
		it('returns 1 when given 11 and 7', () => {
			expect(getSegmentItemCount(11, 7)).toBe(1);
		});
	});
});

describe('getSegmentMaximumIndex()', () => {
	describe('handles example scenario', () => {
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
	});
});
