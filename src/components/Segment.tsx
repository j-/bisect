import * as React from 'react';
import * as classNames from 'classnames';
import './Segment.css';

export interface Props {
	segmentId: number;
	isHovered: boolean;
	onMouseOver: () => void;
	onMouseOut: () => void;
}

const Segment: React.FunctionComponent<Props> = ({
	segmentId,
	isHovered,
	onMouseOver,
	onMouseOut,
}) => (
	<div
		className={classNames('Segment', isHovered && 'Segment--hovered')}
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
	>
		{segmentId}
	</div>
);

export default Segment;
