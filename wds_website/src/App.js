import React, { Component } from 'react';
import './stylesheets/css/main.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList, } from 'react-mdl';
import Main from './Components/main';
import logo from './images/WDS-logo.svg'
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      //Header //

      <div className="flex-container100">
        <Layout>
            <Header className="header" title={<Link style={{textDecoration: 'none',
            color: 'black'}} to="/"><img src={logo} width="100" height="50" alt="bad hair cut" /></Link>} scroll>
                <Navigation style={{ color: 'black'}}>
                    <Link to="/services">Services</Link>
                    <Link to="/Clients">Clients</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/aboutus">About US</Link>
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


   
      <Footer className="red">
      <FooterSection type="middle">
          <FooterDropDownSection title="Services">
              <FooterLinkList>
                  <a href="./">User Interface Design</a>
                  <a href="./">User Experience Reasearch</a>
                  <a href="./">Design</a>
                  <a href="./">PaaS</a>
                  <a href="./">SaaS</a>
                  <a href="./">Communication</a>
                  <a href="./">Marketing</a>
              </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Details">
              <FooterLinkList>
                  <a href="./">Specs</a>
                  <a href="./">Tools</a>
                  <a href="./">Resources</a>
              </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Technology">
              <FooterLinkList>
                  <a href="./">How it works</a>
                  <a href="./">Patterns</a>
                  <a href="./">Usage</a>
                  <a href="./">Products</a>
                  <a href="./">Contracts</a>
              </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="FAQ">
              <FooterLinkList>
                  <a href="./">Questions</a>
                  <a href="./">Answers</a>
                  <a href="./">Contact Us</a>
              </FooterLinkList>
          </FooterDropDownSection>
      </FooterSection>
      <FooterSection type="bottom" logo="Title">
          <FooterLinkList>
              <a href="./">Help</a>
              <a href="./">Privacy & Terms</a>
          </FooterLinkList>
      </FooterSection>
   </Footer>
 </Layout>
</div>

    );
  }
}

export default App;
