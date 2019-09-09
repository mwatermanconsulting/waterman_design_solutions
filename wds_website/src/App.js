import React, { Component } from 'react';
import './stylesheets/css/main.css';
import { Layout, Button, Header, Navigation, Drawer, Content, Icon } from 'react-mdl';
import Main from './Components/main';
import logo from './images/WDS-logo-banner.svg'
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      //Header //

      <div className="container-grid">
        <Layout>
            <Header className="header content-text-18 red text-white flex-layout-row" title={<Link style={{textDecoration: 'none',
            color: 'white'}} to="/"><img src={logo} height="65px" alt="header" style={{marginLeft:'4%'}} /></Link>} scroll >
             <div style={{marginRight:'1.5%', marginTop:'.5%'}}>
                <div class="dropdown">
                  <button class="dropbtn">Why WDS
                    
                  </button>
                  <div className="dropdown-content content-text" >
                    <a href="./why_wds">Why WDS</a>
                    <a href="./case_studies">Success Stories (Case Studies)</a>
                    <a href="./clients">Clients</a>
                    <a href="./core_offerings">Core Offerings</a>
                    <a href="./history">History</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">Services
                    
                  </button>
                  <div className="dropdown-content content-text">
                    <a href="./services">Services Overview </a>
                    <a href="./ux_design">UX Design</a>
                    <a href="./ui_design">UI Design</a>
                    <a href="./css_solutions">CSS Solutions</a>
                  </div>
              </div>
              
              <div class="dropdown">
                  <button class="dropbtn">Methodology
                    
                  </button>
                  <div class="dropdown-content content-text">
                    <a href="./methodology">Methodology Overview </a>
                    <a href="./finding_truth">Finding the Truth</a>
                    <a href="./innovative_solutions">Innovative Solutions</a>
                    <a href="./strategy_insight">Strategy and Insight</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">Design Solutions
                  </button>
                  
                  <div class="dropdown-content content-text">
                    <a href="./design_solutions">Design Overview</a>
                    <a href="./website_design">Website Design</a>
                    <a href="./print_design">Graphic Design</a>
                    <a href="./video_production">Video Production</a>
                  </div>
                </div>
              </div>

                <div class="dropdown" style={{marginLeft:'-1%', marginTop:'.5%'}}>
                  <button class="dropbtn"> <a dropbtn href="./contact" className="menu  no-decoration">Contact</a>

                   
                  </button>
                  <div class="dropdown-content">
             
             
                  </div>
                </div> 
              
                
            </Header>
            <Drawer className="mobile-menu" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">
            Waterman Consulting</Link>}>
                <Navigation>
                  <Link to="/why_wds">Why WDS</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/methodology">Methodology</Link>
                  <Link to="/design_solutions">Design Solutions</Link>
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
              <li><a className="text-black" href="./strategy_insight">Strategy and Insights</a></li>
              <li><a className="text-black" href="./design_systems">Design Systems</a></li>
              
              </ul>
          </div>
          <div className="grid-footer-item-3 text-white subtitle-menu">
                Methodology
              <ul>
              <li><a className="text-black" href="./methodology">Overview</a></li>
              <li><a className="text-black" href="./finding_truth">Finding the Truth</a></li>
              <li><a className="text-black" href="./innovative_solutions">Innovative Solutions</a></li>
              <a href="./strategy_insight">Strategy and Insight</a>
              </ul>
          </div>
          <div className="grid-footer-item-4 text-white subtitle-menu"> 
                Design Solutions
              <ul>
              <li><a className="text-black" href="./design_solutions">Overview</a></li>
              <li><a className="text-black" href="./website_design">Website Design</a></li>
              <li><a className="text-black" href="./print_design">Graphic Design</a></li>
              <li><a className="text-black" href="./video_production">Video Production</a></li>
              </ul>
          </div> 
          
            <div className="grid-footer-item-5 subtitle-menu text-white">
                Social Media
              <ul>
              <li><a href="./news_insights">Overview</a></li>
              <li><a href="./">Blog</a></li>
              <li><a href="./">News</a></li>
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
