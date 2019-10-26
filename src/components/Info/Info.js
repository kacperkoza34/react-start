import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore';
import {listData} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero image={listData.image}/>
    <h2>{settings.info.title}</h2>
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;
