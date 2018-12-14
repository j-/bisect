import { connect, MapDispatchToProps } from 'react-redux';
import Segment from '../components/Segment';
import { hoverSegment, removeHoverSegment } from '../store/actions';

interface DispatchProps {
	onMouseOver: () => void;
	onMouseOut: () => void;
}

interface OwnProps {
	segmentId: number;
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { segmentId }) => ({
	onMouseOver: () => {
		dispatch(hoverSegment(segmentId));
	},
	onMouseOut: () => {
		dispatch(removeHoverSegment());
	},
});

export default connect(
	undefined,
	mapDispatchToProps,
)(Segment);
