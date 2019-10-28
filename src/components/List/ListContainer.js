import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList, createAction_addColumn } from '../../redux/columnsRedux.js';
//import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
    test: 'sssssssssss',

  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
