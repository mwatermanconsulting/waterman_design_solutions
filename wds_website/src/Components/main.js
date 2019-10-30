import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import history from './history';
import branding from './branding';
import case_studies from './case_studies';
import case_study_1 from './case_study_1';
import case_study_2 from './case_study_2';
import case_study_3 from './case_study_3';
import case_study_4 from './case_study_4';
import clients from './clients';
import communication_insights from './communication_insights';
import contact from './contact';
import core_offerings from './core_offerings';
import css_solutions from './css_solutions';
import design_solutions from './design_solutions';
import website_design from './website_design';
import finding_truth from './finding_truth';
import innovative_solutions from './innovative_solutions';
import marketing from './marketing';
import methodology from './methodology';
import graphic_design from './graphic_design';
import Services from './services';
import strategy_insight from './strategy_insight';
import design_systems from './design_systems';
import ui_design from './ui_design';
import ux from './ux_design';
import test_area from './test_area';
import video_production from './video_production';
import why_wds from './why_wds';
import ScrollToTop from './Utils';




const Main = () => (
  <Switch>
     
)
<ScrollToTop>
    <Route exact path="/" component={home} />
    <Route exact path="/history" component={history} /> 
    <Route exact path="/branding" component={branding} />
    <Route exact path="/case_studies" component={case_studies} />
    <Route exact path="/case_study_1" component={case_study_1} />
    <Route exact path="/case_study_2" component={case_study_2} />
    <Route exact path="/case_study_3" component={case_study_3} />
    <Route exact path="/case_study_4" component={case_study_4} />
    <Route exact path="/clients" component={clients} />
    <Route exact path="/communication_insights" component={communication_insights} />
    <Route exact path="/contact" component={contact} /> 
    <Route exact path="/core_offerings" component={core_offerings} /> 
    <Route exact path="/css_solutions" component={css_solutions} />
    <Route exact path="/design_solutions" component={design_solutions} />
    <Route exact path="/website_design" component={website_design} />
    <Route exact path="/finding_truth" component={finding_truth} />
    <Route exact path="/innovative_solutions" component={innovative_solutions} />
    <Route exact path="/marketing" component={marketing} />
    <Route exact path="/methodology" component={methodology} />
    <Route exact path="/graphic_design" component={graphic_design} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/strategy_insight" component={strategy_insight} />
    <Route exact path="/design_systems" component={design_systems} />
    <Route exact path="/ux_design" component={ux} />
    <Route exact path="/ui_design" component={ui_design} />
    <Route exact path="/test_area" component={test_area} />
    <Route exact path="/video_production" component={video_production} />
    <Route exact path="/why_wds" component={why_wds} />
  </ScrollToTop>

  </Switch>
)

export default Main;
