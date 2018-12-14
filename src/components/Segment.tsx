import * as React from 'react';
import './Segment.css';

export interface Props {
	segmentId: number;
	onMouseOver: () => void;
	onMouseOut: () => void;
}

const Segment: React.FunctionComponent<Props> = ({
	segmentId,
	onMouseOver,
	onMouseOut,
}) => (
	<div
		className="Segment"
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
	>
		{segmentId}
	</div>
);

export default Segment;
