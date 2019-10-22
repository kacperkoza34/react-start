import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';




class Column extends React.Component {

  static defaultProps = {
  icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
  }


  render(state){
    const { title, icon, reduxCards, addCard } = this.props;
    //console.log(this.props)
    return (
     <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>


        <div className={styles.cards}>
          {reduxCards.map(({key, ...cards}) => (
            <Card key={key} {...cards} />
          ))}
        </div>



        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>


     </section>
    )
   }
  }

  Column.propTypes = {
  title: PropTypes.node.isRequired,
  };

export default Column;
