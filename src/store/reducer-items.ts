import { Reducer } from 'redux';

import {
	getMinimumSteps as calculateMinimumSteps,
} from '../calculations/get-minimum-steps';

import {
	getMaximumSteps as calculateMaximumSteps,
} from '../calculations/get-maximum-steps';

import {
	isActionSetItems,
} from './actions';

export interface ReducerState {
	items: string[];
}

const DEFAULT_STATE: ReducerState = {
	items: [],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetItems(action)) {
		const { items } = action.data;
		return {
			...state,
			items,
		};
	}

	return state;
};

export default reducer;

export const getItems = (state: ReducerState) => (
	state.items
);

export const countItems = (state: ReducerState) => (
	getItems(state).length
);

export const getMinimumSteps = (state: ReducerState) => (
	calculateMinimumSteps(countItems(state))
);

export const getMaximumSteps = (state: ReducerState) => (
	calculateMaximumSteps(countItems(state))
);
