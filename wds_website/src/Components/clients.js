import React, { Component } from 'react' ;
import designer from '../images/photos/photo-design-s1.png';
import motorola_ba from '../images/photos/photo-motorola-beforeafter.png';
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
            <div className="flex-layout-column">
            <div className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">Clients</div>
                <img className="flex-image-container" src={bgclients}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                        Delivering the most outstanding experience for our clients.
                </div>
            </div>
            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75   flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15" >
                        For over twenty years WDS has worked and partnered with some amazing people and businesses. We hope to see your name in the list below in the near future.</div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center margin-tb-100">
                        <img className="container-photo-callout" src={clients1}  alt="Clients" /> 
                    </div>
                
            </section>

            <section className="content-header flex-layout-center-center flex-layout-column margin-bottom-100">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-50">
                    Our client roster includes Motorola, Google, Pfizer, Stubhub, SmithKline, OsiSoft and many 
                </div>
            </section>
            <section className="flex-layout-section-full flex-layout-center-center">
                <div className="align-center align-items-center">
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
            <section className="flex-layout-section-full margin-top-50 flex-layout-center-center">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-75">
                    Check out our case studies
                </div>
            </section>
            <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                                Full Client List</p>

                            <ul className="dashed">
                                <li>Kickoff Meeting</li>
                                <li>Business Requirements</li>
                                <li>Competition Research</li>
                                <li>Marketing Materials Review</li>
                                <li>Style Guides and Company Standards</li>
                                <li>Stakeholders Contact</li>
                            </ul>

                        </div>
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="content-block-55 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">  WDS data visualizations design solutions are being used by the world’s largest brands</p> 
                        <p className="text-align-center margin-top-25" ><button onclick="location.href='./case_study_3';" type="button" value="Learn More" className="button-white margin-top-50 font-size-24">Learn More</button></p> 
                    </div>
                </div>
            </section> 
       
            
                    
        </div>
        
        )
    }
}

export default clients;