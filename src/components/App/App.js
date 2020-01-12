import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';
import List from '../List/ListContainer';
import SearchResult from '../SearchResult/SearchResultContainer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/react-start/test' component={Info} />
        <Route exact path='/react-start/faq' component={Faq} />
        <Route exact path='/react-start/list/:id' component={List} />
        <Route exact path='/react-start/search/:id' component={SearchResult} />
        <Route exact path='/react-start/search/' component={Home} />


      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
