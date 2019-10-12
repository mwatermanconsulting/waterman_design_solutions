import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import didyouknow from '../images/graphic-didyouknow.svg';
import caseStudies from '../images/backgrounds/bg-casestudies.png';
import motorola from '../images/photos/photo-motorola-beforeafter.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'
import stubhub from '../images/photos/photo-stubhub-before-after.png'
import pfizer_logo from '../images/icon-logo-pfizer.svg'
import pfizer from '../images/photos/photo-pfizer-before.png'
import osi_logo from '../images/logo-osi.svg'
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
                        Every great design begins with a great story.
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-column margin-top-50">
                        <div className="title flex-layout-center margin-top-25sm">
                                Customer Success Spotlight</div>
                        <div className="content-block width-100 margin-top-10">
                            <p className="subtitle text-align-center">
                                 See our favorite case study stories and the solutions that made each a success.</p>
                        </div> 
                    </div>
            </section>
            <section className="grid-cs-card flex-layout-section-full margin-top-50 margin-bottom-100">
                <div className="cs-card-1 card-case-studies content-header flex-layout-column flex-sh-500">
                        <div className="container-image-block">
                            <img className="width-100 height-100" src={motorola}  alt="motorola before and after" /> 
                    </div> 
                    <div className="content-block-full margin-top-10"> 
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black" >
                                Motorola</p>
                            <img className="width-20" src={motorola_logo}  alt="motorola logo" /> 
                        </div>
                        <div className="flex-card-content">
                            <div className="content-block">
                                <p><i> Industry: Products</i></p>
                                <p className="content-text-18 content-block-full">
                                    High Volume of returns plaguing Motorola Gateway Router Product Line. After two failed attempts by UX/UI developers, a frustrated management group decided they needed a UX designer to solve the problems.</p>

                                    <div className="float-left-np">
                                        <NavLink className='button-area no-decoration' type="button" value="learn more" to='/case_study_1'>
                                            Read More 
                                        </NavLink>
                                    </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="cs-card-2 card-case-studies content-header flex-layout-column flex-sh-500">
                        <div className="container-image-block">
                        <img className="width-100 height-100" src={stubhub}  alt="StubHub" /> 
                    </div>
                    <div className="content-block-full margin-top-10">
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black" >
                                StubHub</p>
                            <img className="width-20" src={stubhub_logo} style={{width: '15%'}}  alt="StubHub logo" /> 
                        </div>    
                        <div className="flex-card-content" >
                            <div className="content-block">
                                <p><i> Industry: Ecommerce</i></p>
                                    <p className="content-text-18 content-block" >
                                    StubHub had a custom built Business Intelligence Platform that had zero user traction and were searching for answers. Their initial two releases were not successful and after a year of non-use, StubHub needed answers.</p>

                                    <div className="float-left-np">
                                        <NavLink className='button-area no-decoration' type="button" value="learn more" to='/case_study_2'>
                                            Read More 
                                        </NavLink>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                       
                <div className="cs-card-3 card-case-studies content-header flex-layout-column flex-sh-500">
                        <div className="container-image-block">
                        <img className="width-100 height-100" src={pfizer}  alt="Pfizer" /> 
                    </div>  
                    <div className="content-block-full margin-top-10">
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black">Pfizer</p>
                                <img className="width-20" style={{width: '15%'}}  src={pfizer_logo}  alt="pfizer logo" /> 
                        </div>
                        <div className="flex-card-content" >
                            <div className="content-block">
                                <p><i> Industry: Pharmaceutical</i></p>
                                <p className="content-text-18 content-block">
                                    WDS noticed major problems with the DMS solution that Pfizer chose to manage its 25,000 page project. WDS independently  interviewed developers and documented lost time, sitting around watching the spinner...
                                </p>
                                    <div className="float-left-np margin-top-15">
                                        <NavLink className='button-area no-decoration' type="button" value="learn more" to='/case_study_3'>
                                            Read More 
                                        </NavLink>
                                    </div>
                                    
                                
                            </div>
                        </div>
                    </div>   
                </div>
                    <div className="cs-card-4 card-case-studies content-header flex-layout-column flex-sh-500">
                        <div className="container-image-block">
                            <img className="width-100 height-100" src={osi}  alt="Osi before and after" /> 
                        </div>
                        <div className="content-block-full margin-top-10">
                            <div className="flex-card-content flex-layout-center-center flex-layout-justified-sb">
                                <p className="subtitle text-black">OSI</p>
                                <img className="width-20"  style={{width: '20%'}} src={osi_logo}  alt="osi logo" /> 
                            </div>
                            <div className="flex-card-content">
                                <div className="content-block">
                                    <p><i> Industry: Gas and Oil</i></p>
                                    <p className="content-text-18 content-block">
                                        OsiSoft needed an enterprise level CSS solution for their data visualization SaaS initiative. The solution needed to scale and reduce specificity issues. The CSS solution became the company wide standard and foundation for the...
                                                 <br/><br/>
                                                 <div className="float-left-np">
                                        <NavLink className='button-area no-decoration' type="button" value="learn more" to='/case_study_4'>
                                            Read More 
                                        </NavLink>
                                    </div>   
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                        
                </section>
            

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="photo-container margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                    <div className="flex-layout-center-center">
                    <p className="callout-text text-white text-align-center">  WDS designed and developed a UX information site in 2005 called Web First Aid. </p>
                    </div>
                </div>
            </section> 
            </div>    
    </div>


                        
                )
            }
        }
export default case_studies;