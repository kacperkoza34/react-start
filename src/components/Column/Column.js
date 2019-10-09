import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';




const Column = props => (
     <section className={styles.component}>
        <h3 className={styles.title}>{props.title}</h3>
        <Card title='teset' />
     </section>
  )

  Column.propTypes = {
  title: PropTypes.node.isRequired,
  };

export default Column;
