import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutUs from './aboutus';
import Clients from './clients';
import Contact from './contact';
import Services from './services';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutus" component={AboutUs} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/services" component={Services} />

  </Switch>
)

export default Main;
