import * as React from 'react';
import ColorButton from '../containers/ColorButton';

const SegmentColors: React.FunctionComponent = () => (
	<div className="SegmentColors">
		<ColorButton color="hsl(0, 70%, 70%)" />
		<ColorButton color="hsl(50, 70%, 70%)" />
		<ColorButton color="hsl(100, 70%, 70%)" />
		<ColorButton color="hsl(150, 70%, 70%)" />
		<ColorButton color="hsl(200, 70%, 70%)" />
		<ColorButton color="hsl(250, 70%, 70%)" />
		<ColorButton color="hsl(300, 70%, 70%)" />
	</div>
);

export default SegmentColors;
