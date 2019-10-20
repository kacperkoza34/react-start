import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';



const Card = ({title}) => (

     <section className={styles.component}>
        <h4>{title}</h4>
     </section>
  )



export default Card;
