import { Action } from 'redux';

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
