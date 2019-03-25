import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import why_wds from './why_wds';
import practices from './practices';
import Clients from './clients';
import Contact from './contact';
import Services from './services';
import strategy_insight from './strategy_insight';
import style_guide from './style_guide';
import ux from './ux';



const Main = () => (
  <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/why_wds" component={why_wds} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/practices" component={practices} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/strategy_insight" component={strategy_insight} />
    <Route exact path="/style_guide" component={style_guide} />
    <Route exact path="/ux" component={ux} />
    <Route exact path="/why_wds" component={why_wds} />

  </Switch>
)

export default Main;
