import { Reducer } from 'redux';

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
	Math.floor(Math.log2(countItems(state)))
);

export const getMaximumSteps = (state: RootReducerState) => (
	Math.ceil(Math.log2(countItems(state)))
);
