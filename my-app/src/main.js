import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/homePage';
import AboutMe from './views/aboutMe';
import Portfolio from './views/portfolio';
import ContactMe from './views/contactMe';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contactme" component={ContactMe} />
  </Switch>
);

export default Main;