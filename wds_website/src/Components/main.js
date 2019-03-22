import React from 'react';
import { Switch, Route } from 'react-router-dom';

import home from './home';
import why_wds from './why_wds';
import Clients from './clients';
import Contact from './contact';
import Services from './services';
import Portfolio from './portfolio';
import practices from './practices';



const Main = () => (
  <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/why_wds" component={why_wds} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/practices" component={practices} />


  </Switch>
)

export default Main;
