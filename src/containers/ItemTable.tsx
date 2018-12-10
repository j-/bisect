import { connect, MapStateToProps } from 'react-redux';
import ItemTable from '../components/ItemTable';
import { RootReducerState, getItems, getMaximumSteps } from '../store';

interface StateProps {
	items: string[];
	steps: number;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	items: getItems(state),
	steps: getMaximumSteps(state),
});

export default connect(
	mapStateToProps,
)(ItemTable);
