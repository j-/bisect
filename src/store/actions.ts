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
