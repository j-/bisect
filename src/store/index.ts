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

export interface RootReducerState {
	items: string[];
}

const DEFAULT_STATE: RootReducerState = {
	items: [],
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
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

export const getItems = (state: RootReducerState) => (
	state.items
);

export const countItems = (state: RootReducerState) => (
	getItems(state).length
);

export const getMinimumSteps = (state: RootReducerState) => (
	calculateMinimumSteps(countItems(state))
);

export const getMaximumSteps = (state: RootReducerState) => (
	calculateMaximumSteps(countItems(state))
);
