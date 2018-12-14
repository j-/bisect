import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootReducerState, getSelectedSegmentId } from './index';

/* Set items */

export interface ActionSetItems extends Action<'SetItems'> {
	data: {
		items: string[];
	};
}

export const isActionSetItems = (action: Action): action is ActionSetItems => (
	action.type === 'SetItems'
);

export const setItems = (items: string[]): ActionSetItems => ({
	type: 'SetItems',
	data: {
		items,
	},
});

/* Hover segment */

export interface ActionHoverSegment extends Action<'HoverSegment'> {
	data: {
		segmentId: number | null;
	};
}

export const isActionHoverSegment = (action: Action): action is ActionHoverSegment => (
	action.type === 'HoverSegment'
);

export const hoverSegment = (segmentId: number): ActionHoverSegment => ({
	type: 'HoverSegment',
	data: {
		segmentId,
	},
});

export const removeHoverSegment = (): ActionHoverSegment => ({
	type: 'HoverSegment',
	data: {
		segmentId: null,
	},
});

/* Select segment */

export interface ActionSelectSegment extends Action<'SelectSegment'> {
	data: {
		segmentId: number | null;
	};
}

export const isActionSelectSegment = (action: Action): action is ActionSelectSegment => (
	action.type === 'SelectSegment'
);

export const selectSegment = (segmentId: number): ActionSelectSegment => ({
	type: 'SelectSegment',
	data: {
		segmentId,
	},
});

export const removeSelectSegment = (): ActionSelectSegment => ({
	type: 'SelectSegment',
	data: {
		segmentId: null,
	},
});

/* Set segment color */

export interface ActionSetSegmentColor extends Action<'SetSegmentColor'> {
	data: {
		segmentId: number;
		color: string | null;
	};
}

export const isActionSetSegmentColor = (action: Action): action is ActionSetSegmentColor => (
	action.type === 'SetSegmentColor'
);

export const setSegmentColor = (segmentId: number, color: string): ActionSetSegmentColor => ({
	type: 'SetSegmentColor',
	data: {
		segmentId,
		color,
	},
});

export const clearSegmentColor = (segmentId: number): ActionSetSegmentColor => ({
	type: 'SetSegmentColor',
	data: {
		segmentId,
		color: null,
	},
});

/* Thunks */

type SetCurrentSegmentColor = ActionCreator<ThunkAction<void, RootReducerState, void, ActionSetSegmentColor>>

export const setCurrentSegmentColor: SetCurrentSegmentColor = (color: string) => (
	(dispatch, getState) => {
		const state = getState();
		const segmentId = getSelectedSegmentId(state);
		if (segmentId === null) {
			return;
		}
		dispatch<ActionSetSegmentColor>(
			setSegmentColor(segmentId, color)
		);
	}
);
