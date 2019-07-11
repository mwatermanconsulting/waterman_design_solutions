import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import pfizer_bg from '../images/backgrounds/bg-pfizer.png';
import pfizer_logo from '../images/icon-logo-pfizer.svg'; 
import documentum from '../images/documentum.jpg';
import cms from '../images/CMSheader.jpg';
import sass from '../images/Sass.jpg';
import kendo from '../images/kendo.png';
import design_system from '../images/photos/photo-digital-systems-s3.png';
import thumbsUp from '../images/thumbsup.svg';

class case_study_3 extends Component {
    render () {
        return(
             <div className="flex-layout-column">
                 <div className="flex-layout-column flex-layout-section-full">
                <div className="image-background-border-tb flex-layout-row width-100">
                    <div className="header-title-cs align-self-center header-text-left text-white">
                        Case Study - Pfizer
                    </div>
                        <img className="header-text-right align-self-center" src={pfizer_logo}  alt="Stubhub Case Study Logo Image" /> 
                        <img className="flex-image-container" src={pfizer_bg}  alt="Stubhub Case Study " />  
                </div> 
                        
                </div>
                <section className="flex-layout-section-full flex-section-align-center margin-top-100">
                    <div className="title">
                            Back Story
                    </div>
                    <div className="subtitle margin-top-15">
                            Pfizer for Professional
                    </div>
                    <div className="content-block-85 margin-top-15">
                        <p className="content-text-21">
                        WDS was contracted to do UX consulting work for at the time the largest healthcare portal website called Pfizer for Professionals or PFP. At launch the site consisted of 25,000 pages. Our job was to organize and simplify the website for the doctors. This contract lasted for almost 40 months and one our our employees was hired.</p> 
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>

                <section className="flex-layout-section-full flex-section-align-center flex-layout-column">
                    <div className="title">
                        Unknown Problems
                    <p className="subtitle margin-top-15">
                        Finding the Truth - CMS Issues
                   </p></div>
                    <div className="content-block-85 margin-top-15">
                        <p className="content-text-18"> 
                        The CMS System that won the Pfizer bid was a custom Documentum solution built by a company in Ohio. The software was called SiteBuilder was a custom built solution developed off the documentum technology. WDS observed the developers struggling with this CMS platform. We started interviewing the developers and found out the system was extremely buggy. Crashing during check ins, pushes and builds. The system never gave you errors and many times developers sat there for hours watching a spinning icon. Other times only partial changes made up to the server. Customer support was extremely poor.</p>
                    </div>
                    <div className="container-image-block flex-section-align-center flex-layout-column margin-top-50">
                    <img className="width-50 margin-top-50" src={cms} alt="Finding the Truth - Business Perspective"/>
                    <p className="margin-top-15"><i> Custom CMS system issues costing pfizer money</i></p>
                </div>   
                </section>
            
                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                
                <section className="flex-layout-section-full flex-section-align-center">
                    <div className="content-header flex-layout-column" >
                        <div className="title">
                        Research CMS Problems
                    </div>
                    <div className="subtitle margin-top-15">
                        Understanding the Issues
                    </div>
                </div>
                    <p className="content-block-85 content-text-18 margin-top-15 ">
                        WDS started to understand this was a major issue for Pfizer that affected and slowed updates to the website. WDS began documenting lost man hours and overtime costs associated with developers waiting on the CMS system. We knew it was important so we conducted interviews with stakeholders. We wanted to understand the decision making process and get our hands on the contract pfizer had with the vendor.
                        </p>

                    <img className="margin-top-50 width-50 flex-layout-center-center" src={documentum} style={{marginLeft: '18%'}} alt="Finding the Truth - Business Perspective"/>
             
            </section>

                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                
                <div className="flex-layout-section-full flex-section-align-center">
                    <div className="content-header flex-layout-column">
                        <div className="title">
                         Research Findings
                        </div>
                    <div className="subtitle margin-top-15">
                         Pfizer Stakeholder Presentation
                    </div>
                    <div className="content-block-85 margin-top-15">
                        <p className="content-text-18">
                        WDS presented our findings to the CTO and many c-suite managers. WDS was questioned heavily on why this meeting was needed and who authorized it. Our team explained that we saw a problem that needed to be solved and this is what out business does. We presented to them the daily workflow of a developer working on their CMS system. The frustration and lost time involved with the simplest of tasks. We just focused on two developers in the Philly office. We proved that on average the developers wasted 28% of their time due to the buggy nature of the application. Also we found that the company only delivered on half the features that were contractual promised.</p>
                        
                    </div>
                </div>
            </div>

            <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
           
            <div className="flex-layout-section-full flex-section-align-center">
                <div className="content-header flex-layout-column ">
                    <div className="title">
                        Solutions
                    </div>
                    <div className="subtitle margin-top-15">
                        CMS Alternatives
                    </div>
                    <div className="content-block-cs margin-top-15">
                        <p className="content-text-18">
                        After presenting the issues WDS, Pfizer requested us to find some CMS alternatives for pfizer and the team. Two weeks later we presented three alternatives with the pros and cons of each. Pfizer choose the Microsoft solution  </p>
                    </div>
                </div>
            </div>
            
            
                <div className="grid-callout border-top-5  grey margin-top-100" style={{height:'450px'}}>
                       <div className="grid-callout-text grid-placeself-center width-70" style={{marginLeft:'42%'}}>
                       <div className="title align-items-center text-white margin-top-15">
                         Results
                    </div>
                       <div className="subtitle text-white margin-top-15">
                        Pfizer and the developers were happy
                    </div>
                    <div className="content-block-75 margin-top-15">
                        <p className="content-text-18 text-white">
                        Pfizer quickly froze the project. Needing to refactor 27,000 files from .jsp to .asp an outside vendor was brought in to help with the transition. Pfizer estimates that WDS saved them close to 250,000 by bringing to light the unseen problems. 
                        </p>
                    </div>
                            </div>
                            
                            <div className="grid-callout-photo grid-placeself-center">
                                <img src={thumbsUp} alt="Finding the Truth - Business Perspective"/>
                            </div>     
                            
                    </div>
                </div> 
            
                                              
                                        )
                                    }
                                }
export default case_study_3;