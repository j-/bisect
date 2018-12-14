import * as React from 'react';
import Button, { Props as ButtonProps } from './Button';
import './ColorButton.css';

export interface Props extends ButtonProps {
	color: string;
}

const ColorButton: React.FunctionComponent<Props> = ({ color, ...props }) => (
	<Button
		className="ColorButton"
		style={{ backgroundColor: color }}
		{...props}
	/>
);

export default ColorButton;
