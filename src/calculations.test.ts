import {
	getMinimumSteps,
	getMaximumSteps,
	getParentSegmentId,
	getSegmentId,
	getSegmentMinimumIndex,
	getSegmentStep,
	getSegmentItemCount,
	getSegmentMaximumIndex,
	getSegmentDimensions,
	getPivotIndex,
	getStepSegment,
	getStepSegmentCount,
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

describe('getStepSegmentCount()', () => {
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
});

describe('getStepSegment()', () => {
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

	it('handles 49 items, step 6', () => {
		expect(getStepSegment(0, 49, 6)).toBe(0);
	});
});

describe('getSegmentId()', () => {
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

	it('handles advanced scenario', () => {
		expect(getSegmentMinimumIndex(10, 19)).toBe(10);
		expect(getSegmentMinimumIndex(11, 19)).toBe(13);
		expect(getSegmentMinimumIndex(18, 19)).toBe(5);
		expect(getSegmentMinimumIndex(19, 19)).toBe(7);
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

describe('getPivotIndex()', () => {
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
});

describe('getSegmentDimensions()', () => {
	it('returns full range for null segment', () => {
		expect(getSegmentDimensions(null, 10)).toEqual([0, 9, 10]);
		expect(getSegmentDimensions(null, 30)).toEqual([0, 29, 30]);
	});

	it('handles first step with 2 items', () => {
		/*
		 *     ┌           ┌─────┐
		 *     │  Index 0  │  0  │ First = Index 0, Last = Index 0, Count = 1
		 *     ├           │─────┤
		 *     │  Index 1  │  1  │ First = Index 1, Last = Index 1, Count = 1
		 *     └           └─────┘
		 *
		 *     Count: 2
		 */
		expect(getSegmentDimensions(0, 2)).toEqual([0, 0, 1]);
		expect(getSegmentDimensions(1, 2)).toEqual([1, 1, 1]);
	});

	it('handles first step with 3 items', () => {
		/*
		 *     ┌           ┌─────┐
		 *     │  Index 0  │     │ First = Index 0
		 *     ├           │  0  │
		 *     │  Index 1  │     │ Last = Index 1, Count = 2
		 *     ├           │─────┤
		 *     │  Index 2  │  1  │ First = Index 2, Last = Index 2, Count = 1
		 *     └           └─────┘
		 *
		 *     Count: 3
		 */
		expect(getSegmentDimensions(0, 3)).toEqual([0, 1, 2]);
		expect(getSegmentDimensions(1, 3)).toEqual([2, 2, 1]);
	});

	it('handles 49 items, step 3', () => {
		expect(getSegmentDimensions(6, 49)).toEqual([0, 6, 7]);
		expect(getSegmentDimensions(7, 49)).toEqual([7, 12, 6]);
		expect(getSegmentDimensions(8, 49)).toEqual([13, 18, 6]);
		expect(getSegmentDimensions(9, 49)).toEqual([19, 24, 6]);
		expect(getSegmentDimensions(10, 49)).toEqual([25, 30, 6]);
		expect(getSegmentDimensions(11, 49)).toEqual([31, 36, 6]);
		expect(getSegmentDimensions(12, 49)).toEqual([37, 42, 6]);
		expect(getSegmentDimensions(13, 49)).toEqual([43, 48, 6]);
	});

	it('handles 49 items, step 4', () => {
		expect(getSegmentDimensions(14, 49)).toEqual([0, 3, 4]);
		expect(getSegmentDimensions(15, 49)).toEqual([4, 6, 3]);
		expect(getSegmentDimensions(16, 49)).toEqual([7, 9, 3]);
		expect(getSegmentDimensions(17, 49)).toEqual([10, 12, 3]);
		expect(getSegmentDimensions(18, 49)).toEqual([13, 15, 3]);
		expect(getSegmentDimensions(19, 49)).toEqual([16, 18, 3]);
		expect(getSegmentDimensions(20, 49)).toEqual([19, 21, 3]);
		expect(getSegmentDimensions(21, 49)).toEqual([22, 24, 3]);
		expect(getSegmentDimensions(22, 49)).toEqual([25, 27, 3]);
		expect(getSegmentDimensions(23, 49)).toEqual([28, 30, 3]);
		expect(getSegmentDimensions(24, 49)).toEqual([31, 33, 3]);
		expect(getSegmentDimensions(25, 49)).toEqual([34, 36, 3]);
		expect(getSegmentDimensions(26, 49)).toEqual([37, 39, 3]);
		expect(getSegmentDimensions(27, 49)).toEqual([40, 42, 3]);
		expect(getSegmentDimensions(28, 49)).toEqual([43, 45, 3]);
		expect(getSegmentDimensions(29, 49)).toEqual([46, 48, 3]);
	});

	it('handles 49 items, step 5', () => {
		expect(getSegmentDimensions(30, 49)).toEqual([0, 1, 2]);
		expect(getSegmentDimensions(31, 49)).toEqual([2, 3, 2]);
		expect(getSegmentDimensions(32, 49)).toEqual([4, 5, 2]);
		expect(getSegmentDimensions(33, 49)).toEqual([6, 6, 1]);
		expect(getSegmentDimensions(34, 49)).toEqual([7, 8, 2]);
		expect(getSegmentDimensions(35, 49)).toEqual([9, 9, 1]);
		expect(getSegmentDimensions(36, 49)).toEqual([10, 11, 2]);
		expect(getSegmentDimensions(37, 49)).toEqual([12, 12, 1]);
		expect(getSegmentDimensions(38, 49)).toEqual([13, 14, 2]);
		expect(getSegmentDimensions(39, 49)).toEqual([15, 15, 1]);
		expect(getSegmentDimensions(40, 49)).toEqual([16, 17, 2]);
		expect(getSegmentDimensions(41, 49)).toEqual([18, 18, 1]);
		expect(getSegmentDimensions(42, 49)).toEqual([19, 20, 2]);
		expect(getSegmentDimensions(43, 49)).toEqual([21, 21, 1]);
		expect(getSegmentDimensions(44, 49)).toEqual([22, 23, 2]);
		expect(getSegmentDimensions(45, 49)).toEqual([24, 24, 1]);
		expect(getSegmentDimensions(46, 49)).toEqual([25, 26, 2]);
		expect(getSegmentDimensions(47, 49)).toEqual([27, 27, 1]);
		expect(getSegmentDimensions(48, 49)).toEqual([28, 29, 2]);
		expect(getSegmentDimensions(49, 49)).toEqual([30, 30, 1]);
		expect(getSegmentDimensions(50, 49)).toEqual([31, 32, 2]);
		expect(getSegmentDimensions(51, 49)).toEqual([33, 33, 1]);
		expect(getSegmentDimensions(52, 49)).toEqual([34, 35, 2]);
		expect(getSegmentDimensions(53, 49)).toEqual([36, 36, 1]);
		expect(getSegmentDimensions(54, 49)).toEqual([37, 38, 2]);
		expect(getSegmentDimensions(55, 49)).toEqual([39, 39, 1]);
		expect(getSegmentDimensions(56, 49)).toEqual([40, 41, 2]);
		expect(getSegmentDimensions(57, 49)).toEqual([42, 42, 1]);
		expect(getSegmentDimensions(58, 49)).toEqual([43, 44, 2]);
		expect(getSegmentDimensions(59, 49)).toEqual([45, 45, 1]);
		expect(getSegmentDimensions(60, 49)).toEqual([46, 47, 2]);
		expect(getSegmentDimensions(61, 49)).toEqual([48, 48, 1]);
	});

	it('handles 49 items, step 6', () => {
		expect(getSegmentDimensions(66, 49)).toEqual([4, 4, 1]);
		expect(getSegmentDimensions(67, 49)).toEqual([5, 5, 1]);
	});

	it('handles segments smaller than 1 item', () => {
		expect(getSegmentDimensions(68, 49)).toEqual([6, 6, 0]);
		expect(getSegmentDimensions(69, 49)).toEqual([6, 6, 0]);
	});
});
