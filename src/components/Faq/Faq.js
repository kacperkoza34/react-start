import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore';
import {listData} from '../../data/dataStore';


const Faq = () => (
  <Container>
    <Hero image={listData.image}/>
    <h2>{settings.faq.title}</h2>
    <p>{settings.faq.content}</p>
  </Container>

);


export default Faq;
