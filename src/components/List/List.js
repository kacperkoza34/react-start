import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';



class List extends React.Component {

  static propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  }

  static defaultProps = {
  children: <p>I can do all the things!!!</p>,
  }

  render() {
    console.log(this.props.title);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} background={this.props.background} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column text={'first'}/>
          <Column text={'second'}/>
          <Column text={'third'}/>
        </div>


      </section>
    )
  }
}

export default List;
