import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import about from './history';
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
import digital_design from './digital_design';
import finding_truth from './finding_truth';
import innovative_solutions from './innovative_solutions';
import marketing from './marketing';
import marketing_telementry from './marketing_telementry';
import methodology from './methodology';
import news_insights from './news_insights';
import practices from './practices';
import print_design from './print_design';
import project_management from './project_management';
import Services from './services';
import strategy_insight from './strategy_insight';
import style_guide from './style_guide';
import test_area from './test_area';
import ux from './ux';
import video_production from './video_production';
import why_wds from './why_wds';



const Main = () => (
  <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/about" component={about} /> 
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
    <Route exact path="/digital_design" component={digital_design} />
    <Route exact path="/finding_truth" component={finding_truth} />
    <Route exact path="/innovative_solutions" component={innovative_solutions} />
    <Route exact path="/marketing" component={marketing} />
    <Route exact path="/marketing_telementry" component={marketing_telementry} />
    <Route exact path="/methodology" component={methodology} />
    <Route exact path="/news_insights" component={news_insights} />
    <Route exact path="/practices" component={practices} />
    <Route exact path="/print_design" component={print_design} />
    <Route exact path="/project_management" component={project_management} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/strategy_insight" component={strategy_insight} />
    <Route exact path="/style_guide" component={style_guide} />
    <Route exact path="/test_area" component={test_area} />
    <Route exact path="/ux" component={ux} />
    <Route exact path="/video_production" component={video_production} />
    <Route exact path="/why_wds" component={why_wds} />

  </Switch>
)

export default Main;
