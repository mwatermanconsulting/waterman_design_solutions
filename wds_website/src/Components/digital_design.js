import React, { Component } from 'react';
import Helmet from 'react-helmet';
import print from '../images/backgrounds/bg-print.png';
import print_s1 from '../images/photos/photo-print-s1.png';
import wyp from '../images/photos/photo-print-wyp.png';
import guyuaba from '../images/photos/photo-print-guyuaba.png';
import ketchhot from '../images/photos/photo-print-ketchhot.png';
import hcnrg from '../images/photos/photo-print-hcnrg.png';
import bb from '../images/photos/photo-print-bb-brochure.png';
import avandia from '../images/photos/photo-print-avandia.png';
import donolow from '../images/photos/photo-print-donolow.png';
import wtt from '../images/photos/photo-web-wtt.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class digital_design extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="Printed materials help brand your business. It supports your social media and ad word marketing.  It covers a larger audience that respond to these marketing tools differently. WDS takes care of each marketing aspect, from web design to corporate identity to tangible materials such as business cards, postcards, annual reports, magazines and more." />
                <meta charSet="utf-8" />
            <title>Digital Design</title>
            <link rel="canonical" href="http://watermandesignsolutions.com/digital_design" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Digital Design
                    </div>
                        <img className="flex-image-container width-100" src={print}  alt="Graphic Design" />     
                </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                WDS has extensive digital design experience, including branding, online advertising, social media content, and print media.
                </div>
            </section>
            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75 flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15 margin-left-2" >
                    How does a company visually communicate to show that their users are valued? Empathy will uncover small details that make a big difference, and this is where the designer comes in.</div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout margin-left-15per margin-top-25sm" src={print_s1}  alt="Finding Truth" /> 
                    </div>
            </section>

            <section className="flex-layout-section-full flex-layout-column margin-top-75 margin-top-50sm">
              
                    <div className="header-title-sm-center">
                            The Value of Digital Design
                    </div>
                    <div className="margin-top-25 align-self-center content-block-65">
                        <p className="content-text-21 text-align-left">
                            Digital design is a support for marketing campaigns. Branding provides a comfort and familiarity, putting your users at ease with visuals that tell a story. WDS takes care of each marketing aspect, from web design to corporate identity to tangible printed collateral. </p>
                    </div>
                
            </section>

             <section className="flex-layout-section-full flex-layout-center-center margin-top-50 margin-top-50sm ">
                <div className="align-center align-items-center">
                    <ul className="grid-clients-wrapper align-items-center">
                    <li  className="grid-clients-box image subtitle text-white"  data-content=" Women's Yellow Pages">
                        <img className="width-100" src={wyp}  alt="Women's Yellow Pages" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Ketchhot">
                        <img className="width-100 height-100"  src={ketchhot}  alt="Ketchhot" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Body Bouquet"> 
                        <img className="width-100 height-100" src={bb}  alt="Body Bouquet" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Avandia">
                        <img className="width-100 height-100" src={avandia}  alt="Avandia" />
                        </li>
                    
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Guyuaba">
                        <img className="width-100 height-100" src={guyuaba}  alt="Roos Foods" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="HCNRG">
                        <img className="width-100 height-100" src={hcnrg}  alt="HCNRG" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Donolow Database">
                        <img className="width-100 height-100" src={donolow}  alt="Donolow Database" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="World Team Tennis">
                        <img className="width-100 height-100" src={wtt}  alt="World Team Tennis" />
                       </li>
                </ul>
                </div>
            </section>

            <div className="hr-line width-70"></div>

            <section className="flex-layout-section-full">
                <div className="grid-2col-text-center width-75 align-self-center">
                        <div className="grid-title header-title-sm-center content-text-24 margin-bottom-20">
                            Digital design services include: 
                        </div>
                        <div className="item content-text-18 ">
                            - Business Identity
                        </div>
                        <div className="item content-text-18">
                            - High Fidelity prototypes 
                        </div>
                        
                        <div className="item content-text-18">
                            - Logo design 
                        </div>
                        <div className="item content-text-18">
                            - Promotional products
                        </div>
                        <div className="item content-text-18">
                            - Publications
                        </div>
                        <div className="item content-text-18">
                            - Trade show marketing materials
                        </div>
                       

                    </div>
                </section>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className="content-block-55  text-align-center "> 
                       <img className="photo-container  " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div>
                          <p className="callout-text text-white text-align-center">  WDS designed and produced a monthly magazine called "Combat Robot Magazine"</p>
                    </div>
                </div>
            </section>     
            </div>
        </div>
        )
    }
}

export default digital_design;