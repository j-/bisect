import * as React from 'react';
import * as classNames from 'classnames';
import './Segment.css';

export interface Props {
	segmentId: number;
	isHovered: boolean;
	isSelected: boolean;
	onMouseOver: () => void;
	onMouseOut: () => void;
	onClick: () => void;
}

const Segment: React.FunctionComponent<Props> = ({
	segmentId,
	isHovered,
	isSelected,
	onMouseOver,
	onMouseOut,
	onClick,
}) => (
	<div
		className={classNames('Segment', {
			'Segment--hovered': isHovered,
			'Segment--selected': isSelected,
		})}
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
		onClick={onClick}
	>
		{segmentId}
	</div>
);

export default Segment;
