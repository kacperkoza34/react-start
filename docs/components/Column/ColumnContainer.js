import {connect} from 'react-redux';
import Column from './Column';
import { getCardsForColumn, createAction_addCard } from '../../redux/cardRedux.js';


const mapStateToProps = (state, props) => ({
  reduxCards: getCardsForColumn(state, state,  props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
