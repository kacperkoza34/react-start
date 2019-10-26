import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


const Header = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.logo}>{ReactHtmlParser(settings.header.icon)}</Link>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/info'>Info</NavLink>
          <NavLink exact to='/faq'>FAQ</NavLink>
        </div>
      </Container>
    </h2>
  </header>
);

export default Header;
