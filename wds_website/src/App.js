import React, { Component } from 'react';
import './stylesheets/css/main.css';
import { Layout, Button, Header, Navigation, Drawer, Content, Icon } from 'react-mdl';
import Main from './Components/main';
import logo from './images/WDS-logo.svg'
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      //Header //

      <div className="container-grid">
        <Layout>
            <Header className="header content-text-18 red text-white flex-layout-row" title={<Link style={{textDecoration: 'none',
            color: 'white'}} to="/"><img src={logo} height="65px" alt="header" /></Link>} scroll >
              
            <ul style={{display:'flex'}}>
            <li className="dropdown">
              <a href="./why_wds" class="dropbtn" style={{fontSize:'18px'}}>Why</a>
              <div class="dropdown-content">
                <a href="./why_wds">Why WDS</a>
                <a href="./case_studies">Success Stories (Case Studies)</a>
                <a href="./clients">Clients</a>
                <a href="./core_offerings">Core Offerings</a>
                <a href="./history">History</a>
              </div>
              </li>
              <li class="dropdown">
              <a href="./services" class="dropbtn" style={{fontSize:'18px'}}>Services</a>
              <div class="dropdown-content">
                <a href="./services">Services Overview </a>
                <a href="./ux_design">UX Design</a>
                <a href="./ui_design">UI Design</a>
                <a href="./css_solutions">CSS Solutions</a>
                
                <a href="./social_media">Social Media Marketing</a>
                <a href="./design_systems">Design Systems</a>
              </div>
              </li>
              <li class="dropdown">
              <a href="./methodology" class="dropbtn" style={{fontSize:'18px'}}>Methodology</a>
              <div class="dropdown-content">
                <a href="./methodology">Methodology Overview </a>
                <a href="./finding_truth">Finding the Truth</a>
                <a href="./innovative_solutions">Innovative Solutions</a>
                <a href="./strategy_insight">Strategy & Insight</a>
                <a href="./communication_insights">Communication Insights</a>
              </div>
              </li>
              <li class="dropdown">
              <a href="./design_solutions" class="dropbtn" style={{fontSize:'18px'}}>Design</a>
              <div class="dropdown-content">
                <a href="./design_solutions">Design Overview</a>
                <a href="./website_design">Website Design</a>
                <a href="./print_design">Print Design</a>
                <a href="./video_production">Video Production</a>
              </div>
              </li>
              <li class="dropdown">
              <a href="./contact" class="dropbtn" style={{fontSize:'16px'}}>Contact</a>
              </li>

          </ul>
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
      <footer className="container-footer red padding border-top-5">
      <div className="grid-footer">
      <div className="grid-footer-item-1">
          <div className="subtitle-menu text-white">
               Why
              <ul>
                 <li> <a className="text-black" href="./why_wds">Why WDS</a></li>
                 <li><a className="text-black" href="./case_studies">Case Studies</a></li>
                 <li><a className="text-black" href="./clients">Clients</a></li>
                 <li><a className="text-black" href="./core_offerings">Core Offerings</a></li>
                 <li><a className="text-black" href="./history">History</a></li>
              </ul>
          </div>
        </div>
          <div className="subtitle-menu text-white grid-footer-item-2">
              Services
              <ul className="text-black">
              <li><a className="text-black" href="./services">Overview</a></li>
              <li><a className="text-black" href="./ux_design">UX Design </a></li>
              <li><a className="text-black" href="./ui_design">UI Design</a></li>
              <li><a className="text-black" href="./css_solutions">CSS Solutions</a></li>
              <li><a className="text-black" href="./strategy_insight">Strategy & Insights</a></li>
              <li><a className="text-black" href="./design_systems">Design Systems</a></li>
              
              </ul>
          </div>
          <div className="grid-footer-item-3 text-white subtitle-menu">
                Methodology
              <ul>
              <li><a className="text-black" href="./methodology">Overview</a></li>
              <li><a className="text-black" href="./finding_truth">Finding the Truth</a></li>
              <li><a className="text-black" href="./innovative_solutions">Innovative Solutions</a></li>
              <li><a className="text-black" href="./communication_insights">Communications Insights</a></li>
              </ul>
          </div>
          <div className="grid-footer-item-4 text-white subtitle-menu"> 
                Design Solutions
              <ul>
              <li><a className="text-black" href="./design_solutions">Overview</a></li>
              <li><a className="text-black" href="./website_design">Website Design</a></li>
               <li><a className="text-black" href="./print_design">Print Design</a></li>
              <li><a className="text-black" href="./marketing">Marketing</a></li>
              <li><a className="text-black" href="./video_production">Video</a></li>
              </ul>
          </div> 
          
            <div className="grid-footer-item-5 subtitle-menu text-white">
                Social Media Junk
              <ul>
              <li><a href="./news_insights">Overview</a></li>
              <li><a href="./">Blog</a></li>
              <li><a href="./">News</a></li>
              <li><a href="./test_area">Playground</a></li>
              </ul>
        </div>
    </div>
    </footer>
 </Layout>
</div>

    );
  }
}

export default App;
