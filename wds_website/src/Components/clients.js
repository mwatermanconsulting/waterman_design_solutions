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
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">
                        For over twenty years WDS has worked and partnered with some amazing people and businesses. We hope to see your name in the list below in the near future.</div>        
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={clients1}  alt="shaking hands" /> 
                </div>
            </div>

            <section className="content-header flex-layout-center-center flex-layout-column margin-bottom-100">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-50">
                    Our client roster includes Motorola, Pfizer, Stubhub, SmithKline, OsiSoft and many more. 
                </div>
                <div className="content-block-50 margin-top-50">
                    <img className="width-100" src={motorola_ba}  alt="motorola before and after" /> 
                </div>
            </section>
            <section className="flex-layout-section-full flex-layout-center-center">
                <div className="align-center align-items-center">
                    <ul className="grid-clients-wrapper align-items-center  width-70">
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
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-75">Our team builds systems for billion-dollar companies.
                </div>
                <div className="content-block-services margin-top-25 flex-align-center margin-bottom-50" style={{marginLeft: '25%'}} >
                    <p className="content-text-18 content-block-75">
                        WDS is behind the design and experience of some of the most complex software in the world. 
                        It takes discipline and expertise to design data visualizations tools for the energy sector, the industrial internet, and design solutions for global big-box retailers, and we’ve delivered on these and more. With a passion for automation and ops, our development teams drive operational excellence and commit high-quality code.
                    </p> 
                </div>
                          
            </section>
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className="width-75 margin-top-50 align-center  margin-bottom-50"> 
                       <a href="../communication_insights"> <img className="width-70 align-center margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="content-header text-white flex-layout-column flex-layout-center-center"> WDS data visualizations design solutions are being used by the world’s largest brands <p><i><a href="../case_study_3">Learn More</a> </i></p> </p>
                    </div>
                </div>
            </section> 
       
            
                    
        </div>
        
        )
    }
}

export default clients;