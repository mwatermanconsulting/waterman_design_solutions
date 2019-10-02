import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import bgclients from '../images/backgrounds/bg-clients.png';
import motorola from '../images/icon-logo-motorola.svg';
import osi from '../images/icon-logo-osi.svg';
import pfizer from '../images/icon-logo-pfizer.svg';
import pii from '../images/icon-logo-pii.png';
import smithkline from '../images/icon-logo-smithkline.svg';
import stubhub from '../images/icon-logo-stubhub.svg';
import investorforce from '../images/icon-logo-investorforce.svg';
import ketchhot from '../images/icon-logo-ketchhot.png';
import clients1 from '../images/photos/photo-clients-s1.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class clients extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="WDS client list includes Motorola, StubHub, Pfizer, OsiSoft and more..." />
                <meta name="keywords" content="case studies, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>Clients</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/clients" />
            </Helmet>
            <div className="flex-layout-column">
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">Clients</div>
                <img className="flex-image-container width-100" src={bgclients}  alt="Why WDS background" /> 
            </section>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                “People do not care how much you know until they know how much you care.”<br></br>- Teddy Roosevelt
                </div>
            </div>
            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75   flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15" >
                        For over twenty years WDS has worked and partnered with some amazing people and businesses. Each client has brought a higher level of skills to WDS services.</div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout" src={clients1}  alt="Clients" /> 
                    </div>
                
            </section>

            <section className="content-header flex-layout-center-center flex-layout-column margin-bottom-100">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-50">
                    WDS client roster includes Motorola, Google, Pfizer, Stubhub, SmithKline, OsiSoft and more 
                </div>
            </section>
            <section className="flex-layout-section-full flex-layout-center-center">
                <div className="justify-content-center align-items-center">
                <ul className="grid-clients-wrapper align-items-center content-block-70">
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={motorola}  alt="motorola" /></li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={osi}  alt="osi" />
                    </li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={pfizer}  alt="pfizer" /></li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={ketchhot}  alt="ketchhot" /></li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={pii}  alt="pii" /></li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={smithkline}  alt="smithkline" /></li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={investorforce}  alt="investorforce" /></li>
                    <li  className="grid-clients-box">
                        <img className="width-100 height-100" src={stubhub}  alt="stubhub" /></li>
                </ul>
                </div>
            </section>
            
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">  WDS data visualizations design solutions are being used by the world’s largest brands.</p> 
                        
                    </div>
                </div>
            </section> 
        </div>
       
            
                    
        </div>
        
        )
    }
}

export default clients;