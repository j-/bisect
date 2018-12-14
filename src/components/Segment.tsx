import * as React from 'react';
import * as classNames from 'classnames';
import './Segment.css';

export interface Props {
	segmentId: number;
	isHovered: boolean;
	isSelected: boolean;
	color: string | null;
	onMouseOver: () => void;
	onMouseOut: () => void;
	onClick: () => void;
}

const Segment: React.FunctionComponent<Props> = ({
	segmentId,
	isHovered,
	isSelected,
	color,
	onMouseOver,
	onMouseOut,
	onClick,
}) => (
	<div
		className={classNames('Segment', {
			'Segment--hovered': isHovered,
			'Segment--selected': isSelected,
		})}
		style={{
			backgroundColor: color || 'transparent',
		}}
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
		onClick={onClick}
	/>
);

export default Segment;
