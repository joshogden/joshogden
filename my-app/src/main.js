import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/homePage';
import AboutMe from './views/aboutMe';
import Portfolio from './views/portfolio';
import ContactMe from './views/contactMe';
import TestPage from './views/testpage';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contactme" component={ContactMe} />
    <Route path="/testpage" component={TestPage} />
  </Switch>
);

export default Main;