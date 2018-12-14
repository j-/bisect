import { Reducer } from 'redux';

import {
	isActionHoverSegment,
} from './actions';

export interface ReducerState {
	hoveredSegmentId: number | null;
}

const DEFAULT_STATE: ReducerState = {
	hoveredSegmentId: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionHoverSegment(action)) {
		const { segmentId } = action.data;
		return {
			...state,
			hoveredSegmentId: segmentId,
		};
	}

	return state;
};

export default reducer;

export const isAnySegmentHovered = (state: ReducerState) => (
	state.hoveredSegmentId !== null
);

export const getHoveredSegmentId = (state: ReducerState) => (
	state.hoveredSegmentId
);

export const isSegmentHovered = (state: ReducerState, segmentId: number) => (
	getHoveredSegmentId(state) === segmentId
);
