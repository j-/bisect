import { Reducer } from 'redux';

import {
	isActionSetSegmentColor,
	ActionSetSegmentColor,
} from './actions';

export interface ReducerState {
	[segmentId: number]: {
		color: string | null;
	};
}

const DEFAULT_STATE: ReducerState = {};

type ActionType = (
	ActionSetSegmentColor
)

const reducer: Reducer<ReducerState, ActionType> = (state = DEFAULT_STATE, action) => {
	if (isActionSetSegmentColor(action)) {
		const { segmentId, color } = action.data;
		return {
			...state,
			[segmentId]: {
				...state[segmentId],
				color,
			},
		};
	}

	return state;
};

export default reducer;

export const getSegmentColor = (state: ReducerState, segmentId: number) => (
	state[segmentId] ? state[segmentId].color : null
);
