import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';


class List extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
      </section>
    )
  }
}

export default List;
