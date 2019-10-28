import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { getCards } from '../../redux/cardRedux.js';
//import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
  cards: getCards(state,state),

});


export default connect(mapStateToProps)(SearchResult);
