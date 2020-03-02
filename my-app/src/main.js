import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './views/homePage';
import AboutMe from './views/aboutMe';
import Portfolio from './views/portfolio';
import ContactMe from './views/contactMe';
import TestPage from './views/testPage';

const Route2 = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return <Route {...props}></Route>
};

const Main = () => (
  <Switch>
    <Route2 exact path="/" component={HomePage} />
    <Route2 path="/aboutme" component={AboutMe} />
    <Route2 path="/portfolio" component={Portfolio} />
    <Route2 path="/contactme" component={ContactMe} />
    <Route2 path="/testpage" component={TestPage} />
  </Switch>
);

export default Main;