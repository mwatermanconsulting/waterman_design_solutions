import React, { Component } from 'react';
import './stylesheets/css/main.css';
import './stylesheets/css/mui.css';
import { Layout, Button, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList, } from 'react-mdl';
import Main from './Components/main';
import logo from './images/WDS-logo.svg'
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      //Header //

      <div className="container-grid">
        <Layout>
            <Header className="header red text-white" title={<Link style={{textDecoration: 'none',
            color: 'white'}} to="/"><img src={logo} height="65px" alt="header" /></Link>} scroll>
                <Navigation className="text-white" style={{ color: 'white'}}>
                    <Link to="/why_wds">Why WDS</Link>
                    <Link to="/practices">Practices</Link>
                    <Link to="/methodology">Methodology</Link>
                    <Link to="/design_solutions">Design Solutions</Link>
                    <Link to="/news_insights">News & Insights</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">
            Waterman Consulting</Link>}>
                <Navigation>
                  <Link to="/services">Services</Link>
                  <Link to="/clients">Clients</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
      <Content>
          <div className="page-content" />
            <Main/>
      </Content>
      <Footer className="red flex-layout-center-center">
      <FooterSection className="flex-layout-center-center" type="center">
          <FooterDropDownSection title="Why">
              <FooterLinkList>
                  <a href="./why-wds">Why Waterman Design Solutions</a>
                  <a href="./case_studies">Success (Case Studies)</a>
                  <a href="./clients">Clients</a>
                  <a href="./core_offerings">Core Offerings</a>
                  <a href="./about">About</a>
              </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Practices">
              <FooterLinkList>
                  <a href="./practices">Practices</a>
                  <a href="./strategy_insight">Strategy & Insight</a>
                  <a href="./ux">User Experience</a>
                  <a href="./style_guide">Style Guides & Design Stystems</a>
                  <a href="./marketing_telementry">Marketing & Telemetry</a>
              </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Methodology">
              <FooterLinkList>
                  <a href="./methodology">Overview</a>
                  <a href="./finding_truth">Finding the Truth</a>
                  <a href="./innovative_solutions">Innovative Solutions</a>
                  <a href="./css_solutions">CSS</a>
                  <a href="./communication_insights">Communications Insights</a>
                  <a href="./project_management">Project Management</a>
              </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Design Solutions">
              <FooterLinkList>
                  <a href="./design_solutions">Overview</a>
                  <a href="./branding">Branding</a>
                  <a href="./digital_design">Digital Design</a>
                  <a href="./ui_design">UI Design</a>
                  <a href="./marketing">Marketing</a>
                  <a href="./print_design">Print Design</a>
                  <a href="./video_production">Video</a>
              </FooterLinkList>
          </FooterDropDownSection>
      </FooterSection>
      <FooterDropDownSection title="News & Insights">
              <FooterLinkList>
                  <a href="./news_insights">Overview</a>
                  <a href="./">Blog</a>
                  <a href="./">News</a>
                  <a href="./">Industry Stuff</a>
                  <a href="./test_area">Playground</a>
              </FooterLinkList>
          </FooterDropDownSection>
   </Footer>
 </Layout>
</div>

    );
  }
}

export default App;
