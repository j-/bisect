import { combineReducers } from 'redux';
import * as items from './reducer-items';
import * as segments from './reducer-segments';

export interface RootReducerState {
	items: items.ReducerState;
	segments: segments.ReducerState;
}

export default combineReducers<RootReducerState>({
	items: items.default,
	segments: segments.default,
});

export const getItems = (state: RootReducerState) => (
	items.getItems(state.items)
);

export const countItems = (state: RootReducerState) => (
	items.countItems(state.items)
);

export const getMinimumSteps = (state: RootReducerState) => (
	items.getMinimumSteps(state.items)
);

export const getMaximumSteps = (state: RootReducerState) => (
	items.getMaximumSteps(state.items)
);

export const isAnySegmentHovered = (state: RootReducerState) => (
	segments.isAnySegmentHovered(state.segments)
);

export const getHoveredSegmentId = (state: RootReducerState) => (
	segments.getHoveredSegmentId(state.segments)
);

export const isSegmentHovered = (state: RootReducerState, segmentId: number) => (
	segments.isSegmentHovered(state.segments, segmentId)
);

export const isAnySegmentSelected = (state: RootReducerState) => (
	segments.isAnySegmentSelected(state.segments)
);

export const getSelectedSegmentId = (state: RootReducerState) => (
	segments.getSelectedSegmentId(state.segments)
);

export const isSegmentSelected = (state: RootReducerState, segmentId: number) => (
	segments.isSegmentSelected(state.segments, segmentId)
);
