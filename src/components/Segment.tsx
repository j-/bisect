import * as React from 'react';
import './Segment.css';

export interface Props {
	segmentId: number;
}

const Segment: React.FunctionComponent<Props> = ({ segmentId }) => (
	<div className="Segment">
		{segmentId}
	</div>
);

export default Segment;
