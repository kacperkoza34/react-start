import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';





class List extends React.Component {

  state = {
    columns: this.props.columns || [],
  }

  static propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    //console.log(this.props.title);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} background={this.props.background} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
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
