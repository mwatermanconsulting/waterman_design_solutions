import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import didyouknow from '../images/graphic-didyouknow.svg';
import caseStudies from '../images/backgrounds/bg-casestudies.png';
import motorola from '../images/photos/photo-motorola-before-after.png';
import stubhub from '../images/photos/photo-stubhub-before-after.png'
import pfizer from '../images/photos/photo-pfizer-before.png'
import osi from '../images/photos/photo-osi-before-after.png'

class case_studies extends Component {
    render () {
        return(
             <div>
            <Helmet>
                <meta name="description" content="case studies for motorola, pfizer, osisoft, stubhub" />
                <meta name="keywords" cpntent="case studies, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>Case Studies</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/case_studies" />
            </Helmet>

            <div className="flex-layout-column">
                <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Case Studies
                    </div>
                        <img className="flex-image-container width-100" src={caseStudies}  alt="Case Studies" />     
                </section>
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text-lg">
                        Every great design begins with a great story
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-column margin-top-75">
                        <div className="title flex-layout-center margin-top-25sm">
                                Customer Success Spotlight</div>
                        <div className="content-block width-100 margin-top-10">
                            <p className="subtitle text-align-center">
                                 See our favorite case study stories and the solutions that made each a success.</p>
                        </div> 
                    </div>
            </section>

        
            <div className="cs-container flex-layout-center margin-top-75 content-block-80 align-self-center ">
                <div className="cs-item width-50 margin-top-75 card-case-studies">
                    <div className="flex-layout-section-full container-image-650 flex-layout-center-center ">
                        <img className="width-100" src={motorola}  alt="Motorola" /> 
                        <div className="width-100">
                            <div className="header-title-sm padding-10 margin-top-15">
                                    Motorola

                            </div>
                                <p className="content-text-18 padding-10">
                                    <i> Industry: Products</i></p>
                                <p className="content-text-18 padding-10">
                                    High Volume of returns plaguing Motorola Gateway Router Product Line. After two failed attempts by UX/UI developers, a frustrated management group decided they needed a UX designer to solve the problems.</p>
                        </div>
                            
                        <div className="flex-layout-section-full content-block-75 padding-10">
                        <NavLink className='button-area no-decoration ' type="button" value="learn more" to={'/case_study_1'}>
                            Learn More 
                        </NavLink>

                        </div> 
                     </div>
                </div>


                <div className="cs-item width-50 margin-top-75 card-case-studies">
                    <div className="flex-layout-section-full container-image-650 align-self-center flex-layout-center-center ">
                        <img className="width-100" src={stubhub}  alt="StubHub" /> 
                        <div className="width-100">
                            <div className="header-title-sm padding-10 margin-top-15 ">
                                    StubHub
                            </div>
                                <p className="content-text-18  padding-10">
                                    <i> Industry: Products</i></p>
                                <p className="content-text-18 padding-10">
                                    High Volume of returns plaguing Motorola Gateway Router Product Line. After two failed attempts by UX/UI developers, a frustrated management group decided they needed a UX designer to solve the problems.</p>
                        </div>
                            
                        <div className="flex-layout-section-full content-block-75 padding-10">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/case_study_2'}>
                            Learn More 
                        </NavLink>

                        </div> 
                     </div>
                </div>
            
                <div className="cs-item width-50 margin-top-75 card-case-studies">
                    <div className="flex-layout-section-full container-image-650 align-self-center flex-layout-center-center ">
                        <img className="width-100" src={pfizer}  alt="Pfizer" /> 
                        <div className="width-100 ">
                            <div className="header-title-sm padding-10 margin-top-15 ">
                                    Pfizer
                            </div>
                                <p className="content-text-18 padding-10"><i> Industry: Pharmaceuticals</i></p>
                                <p className="content-text-18 padding-10">
                                WDS noticed major problems with the DMS solution that Pfizer chose to manage its 25,000 page project. WDS independently  interviewed developers and documented lost time, sitting around watching the spinner...</p>
                        </div>
                            
                        <div className="flex-layout-section-full content-block-75 padding-10">
                        <NavLink className='button-area no-decoration ' type="button" value="learn more" to={'/case_study_3'}>
                            Learn More 
                        </NavLink>

                        </div> 
                     </div>
                </div>

                <div className="cs-item width-50 margin-top-75 card-case-studies">
                    <div className="flex-layout-section-full container-image-650 align-self-center flex-layout-center-center  ">
                        <img className="width-100" src={osi}  alt="OsiSoft" /> 
                        <div className="width-100">
                            <div className="header-title-sm padding-10 margin-top-15 ">
                                    OsiSoft
                            </div>
                                <p className="content-text-18 padding-10"><i> Industry: Gas and Oil</i></p>
                                <p className="content-text-18 padding-10">
                                OsiSoft needed an enterprise level CSS solution for their data visualization SaaS initiative. The solution needed to scale and reduce specificity issues. The CSS solution became the company wide standard and foundation for the...</p>
                        </div>
                            
                        <div className="flex-layout-section-full content-block-75 padding-10">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/case_study_4'}>
                            Learn More 
                        </NavLink>

                        </div> 
                     </div>
                </div>
            </div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="photo-container margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 

                      
                    <div className="flex-layout-center-center">
                    <p className="callout-text text-white text-align-center">  WDS designed and developed a UX information site in 2005 called Web First Aid </p>
                    </div>
                </div>
            </section> 
     </div>    
     </div>


                        
                )
            }
        }
export default case_studies;