import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Segment from '../components/Segment';
import { RootReducerState, isSegmentHovered } from '../store';
import { hoverSegment, removeHoverSegment } from '../store/actions';

interface StateProps {
	isHovered: boolean;
}

interface DispatchProps {
	onMouseOver: () => void;
	onMouseOut: () => void;
}

interface OwnProps {
	segmentId: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state, { segmentId }) => ({
	isHovered: isSegmentHovered(state, segmentId),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { segmentId }) => ({
	onMouseOver: () => {
		dispatch(hoverSegment(segmentId));
	},
	onMouseOut: () => {
		dispatch(removeHoverSegment());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Segment);
