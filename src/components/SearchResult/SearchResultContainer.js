import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { getCards } from '../../redux/cardRedux.js';
import{createAction_changeSearchString} from '../../redux/searchStringRedux';
//import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
  cards: getCards(state,state),

});


const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);
