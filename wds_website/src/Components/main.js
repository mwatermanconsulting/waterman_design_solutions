import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';

import WhyWDS from './why_wds';
import AboutUs from './aboutus';
import Clients from './clients';
import Contact from './contact';
import Services from './services';
import Portfolio from './portfolio';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/why_wds" component={WhyWDS} />
    <Route exact path="/aboutus" component={AboutUs} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/portfolio" component={Portfolio} />


  </Switch>
)

export default Main;
