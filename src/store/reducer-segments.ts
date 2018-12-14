import { Reducer } from 'redux';

import {
	isActionHoverSegment,
	ActionHoverSegment,
	isActionSelectSegment,
	ActionSelectSegment,
	isActionSetItems,
	ActionSetItems,
} from './actions';

export interface ReducerState {
	hoveredSegmentId: number | null;
	selectedSegmentId: number | null;
}

const DEFAULT_STATE: ReducerState = {
	hoveredSegmentId: null,
	selectedSegmentId: null,
};

type ActionType = (
	ActionHoverSegment |
	ActionSelectSegment |
	ActionSetItems
)

const reducer: Reducer<ReducerState, ActionType> = (state = DEFAULT_STATE, action) => {
	if (isActionHoverSegment(action)) {
		const { segmentId } = action.data;
		return {
			...state,
			hoveredSegmentId: segmentId,
		};
	}

	if (isActionSelectSegment(action)) {
		const { segmentId } = action.data;
		return {
			...state,
			selectedSegmentId: segmentId,
		};
	}

	if (isActionSetItems(action)) {
		return {
			...state,
			hoveredSegmentId: null,
			selectedSegmentId: null,
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

export const isAnySegmentSelected = (state: ReducerState) => (
	state.selectedSegmentId !== null
);

export const getSelectedSegmentId = (state: ReducerState) => (
	state.selectedSegmentId
);

export const isSegmentSelected = (state: ReducerState, segmentId: number) => (
	getSelectedSegmentId(state) === segmentId
);
