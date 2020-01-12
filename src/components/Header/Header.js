import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Search from '../Search/SearchContainer';



const Header = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>
      <Container>
        <div className={styles.wrapper}>
          <NavLink exact to='/' className={styles.logo}>{ReactHtmlParser(settings.header.icon)}</NavLink>
          <Search />
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/react-start/test'>Info</NavLink>
          <NavLink exact to='/react-start/faq'>FAQ</NavLink>
        </div>
      </Container>
    </h2>
  </header>
);

export default Header;
