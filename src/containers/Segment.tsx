import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Segment from '../components/Segment';
import { RootReducerState, isSegmentHovered, isSegmentSelected, getSegmentColor } from '../store';
import { hoverSegment, removeHoverSegment, selectSegment } from '../store/actions';

interface StateProps {
	isHovered: boolean;
	isSelected: boolean;
	color: string |  null;
}

interface DispatchProps {
	onMouseOver: () => void;
	onMouseOut: () => void;
	onClick: () => void;
}

interface OwnProps {
	segmentId: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state, { segmentId }) => ({
	isHovered: isSegmentHovered(state, segmentId),
	isSelected: isSegmentSelected(state, segmentId),
	color: getSegmentColor(state, segmentId),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { segmentId }) => ({
	onMouseOver: () => {
		dispatch(hoverSegment(segmentId));
	},
	onMouseOut: () => {
		dispatch(removeHoverSegment());
	},
	onClick: () => {
		dispatch(selectSegment(segmentId));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Segment);
