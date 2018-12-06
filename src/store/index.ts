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
