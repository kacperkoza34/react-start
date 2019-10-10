import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';



const Card = props => (

     <section className={styles.component}>
        <h4>{props.title}</h4>
     </section>
  )



export default Card;
