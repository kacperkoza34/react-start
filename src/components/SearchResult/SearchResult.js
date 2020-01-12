import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import {withRouter} from "react-router";




class SearchResult extends React.Component {

  static defaultProps = {
    title: settings.defaultSearchResult.title,
    icon: settings.defaultSearchResult.icon,

  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.string,
    reduxCards: PropTypes.array,
    addCard: PropTypes.func,
  }



  render(){
    const { cards, title, icon, changeSearchString} = this.props;
    changeSearchString(this.props.match.params.id);

    return (
      <div className={styles.wrapper}>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>


          <div className={styles.cards}>
            {cards.map(({id, ...cards}) => (
              <Card key={id} {...cards} />
            ))}
          </div>
        </section>
      </div>
    );



  }
}

SearchResult.propTypes = {
  title: PropTypes.node.isRequired,
};

export default withRouter(SearchResult);
