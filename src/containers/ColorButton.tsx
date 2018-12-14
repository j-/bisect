import { connect, MapDispatchToProps } from 'react-redux';
import ColorButton, { Props as P } from '../components/ColorButton';
import { setCurrentSegmentColor } from '../store/actions';
import { ThunkDispatch } from 'redux-thunk';

interface DispatchProps {
	onClick: () => void;
}

// TODO: Figure out how to omit `dispatch` type override
const mapDispatchToProps: MapDispatchToProps<DispatchProps, P> = (dispatch: ThunkDispatch<void, void, any>, { color }) => ({
	onClick: () => (
		dispatch(
			setCurrentSegmentColor(color),
		)
	),
});

export default connect(
	undefined,
	mapDispatchToProps,
)(ColorButton);
