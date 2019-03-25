import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import about from './about';
import branding from './branding';
import case_studies from './case_studies';
import clients from './clients';
import communication_insights from './communication_insights';
import contact from './contact';
import core_offerings from './core_offerings';
import css_solutions from './css_solutions';
import design_solutions from './design_solutions';
import digital_design from './digital_design';
import finding_truth from './finding_truth';
import innovative_solutions from './innovative_solutions';
import marketing_telementry from './marketing_telementry';
import methodology from './methodology';
import practices from './practices';
import project_management from './project_management';
import Services from './services';
import strategy_insight from './strategy_insight';
import style_guide from './style_guide';
import ui_design from './ui_design';
import ux from './ux';
import why_wds from './why_wds';



const Main = () => (
  <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/about" component={about} /> 
    <Route exact path="/branding" component={branding} />
    <Route exact path="/case_studies" component={case_studies} />
    <Route exact path="/clients" component={clients} />
    <Route exact path="/communication_insights" component={communication_insights} />
    <Route exact path="/contact" component={contact} /> 
    <Route exact path="/core_offerings" component={core_offerings} /> 
    <Route exact path="/css_solutions" component={css_solutions} />
    <Route exact path="/design_solutions" component={design_solutions} />
    <Route exact path="/digital_design" component={digital_design} />
    <Route exact path="/finding_truth" component={finding_truth} />
    <Route exact path="/innovative_solutions" component={innovative_solutions} />
    <Route exact path="/marketing_telementry" component={marketing_telementry} />
    <Route exact path="/methodology" component={methodology} />
    <Route exact path="/practices" component={practices} />
    <Route exact path="/project_management" component={project_management} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/strategy_insight" component={strategy_insight} />
    <Route exact path="/style_guide" component={style_guide} />
    <Route exact path="/ui_design" component={ui_design} />
    <Route exact path="/ux" component={ux} />
    <Route exact path="/why_wds" component={why_wds} />

  </Switch>
)

export default Main;
