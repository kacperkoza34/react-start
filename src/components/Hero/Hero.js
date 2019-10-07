import React from 'react';
import styles from './Hero.scss';


class Hero extends React.Component {
  render() {
    //const Hero = props => this.props.titleText
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{this.props.titleText}</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="foto"></img>
      </header>
    )
  }
}

export default Hero;
