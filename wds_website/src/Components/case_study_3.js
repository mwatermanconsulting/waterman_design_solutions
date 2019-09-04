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
            <div className="flex-layout-column flex-layout-section-full image-background-border-top">
            <section className="flex-layout-row height-60-mobile width-100"> 
                <div className="header-text-left header-title-cs align-self-center text-white">
                    Case Study - Pfizer
                    </div>
                        <img className="header-text-right logo-cs-mobile align-self-center width-10" src={pfizer_logo}  alt="Stubhub Case Study Logo Image" /> 
                        <img className="flex-image-container" src={pfizer_bg}  alt="Stubhub Case Study " />  
                        
                </section>
                <section className="flex-layout-section-full align-items-center margin-top-100">
                    <div className="title content-block-55">
                            Back Story
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                            Pfizer for Professional
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        WDS was contracted to do UX consulting and development work for at the time the largest healthcare portal website called Pfizer for Professionals or PFP. At launch the site consisted of 1,400 pages. Our job was to organize and simplify the website for the doctors. This contract lasted for almost 40 months and one our our employees was hired.</p> 
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>

                <section className="flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-55">
                        Unknown Problems
                    <p className="subtitle content-block-55 margin-top-15">
                        Finding the Truth - What is the Problem?
                   </p></div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18"> 
                        The CMS System that won the Pfizer bid was a custom Documentum solution, built by a company in Ohio. The software was called SiteBuilder and was the CMS solution for a team of developers working on the Pfizer Pro Portal. WDS observed the developers struggling with this CMS platform. We started interviewing the developers and found out the system was extremely buggy. Working on the system first hand we observed the system crashing during check ins, pushes and builds. The system rarely gave meaningful error messages and many times developers sat there for hours watching a spinning icon, wondering if the application crashed or was processing. If you stopped the process in the middle there was a chance you would lose your work. Many times only partial changes made up to the server and there was no consistency to the errors. What worked one day didn't mean it word work the next. The developers strategically created workarounds for the most basic tasks. Customer support was extremely poor.</p>
                    </div>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                    <img className="width-50 margin-top-50" src={cms} alt="Finding the Truth - Business Perspective"/>
                    <p className="margin-top-15"><i> Custom CMS system issues costing developers time and Pfizer money</i></p>
                </div>   
                </section>
            
                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                
                <section className="flex-layout-section-full align-items-center"> 
                    <div className="content-header content-block-55 flex-layout-column" >
                        <div className="title">
                        Research CMS Problems
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Understanding the Issues
                    </div>
                </div>
                    <p className="content-block-55 content-text-18 margin-top-15 ">
                        WDS started to understand this was a major issue for Pfizer and the team, slowing down the update process. WDS began documenting lost man hours and overtime costs associated with the developers waiting on the CMS system. We knew that Pfizer was unaware of the issues and we wanted to make a strong case against this CMS system.
                        </p>
                    <img className="margin-top-50 width-50" src={documentum} alt="Finding the Truth - Business Perspective"/>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                
                <section className="flex-layout-section-full align-items-center"> 
                    <div className="title content-block-55">
                         Research Findings
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                         Pfizer Stakeholder Presentation
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        WDS presented our findings to the CTO and many c-suite managers. WDS was questioned heavily on why this meeting was needed and who authorized it. Our team explained that we saw a problem that needed to be solved and this is what our business does, uncover design and business problems. We presented to them the developers journey and work flows. The frustration and lost time involved with the simplest of tasks. We just focused on two developers in the Philly office. We proved that on average the developers wasted 28% of their time due to the buggy nature of the application. Also we found that the company only delivered on half the features that were contractual promised.</p> 
                    </div>
                </section>

            <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
           
            <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Solutions
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        CMS Alternatives
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        After presenting the issues WDS, Pfizer requested us to find some CMS alternatives for pfizer and the team. Two weeks later we presented three alternatives with the pros and cons of each. Pfizer choose the Microsoft solution. </p>
                        <p className="content-text-18">
                        Interesting Story - WDS was overseeing the transition from one CMS system to another. Another consulating firm was hired to refactor all the files and prepare for the move to the Sharepoint environment. This involved migrating all the HTML files from .jsp to .asp. The consulting firm contacting WDS to get advice on promoting CSS changes on Sitebuilder. WDS learned from experience not to touch the CSS file, we had workarounds for styling and gave up on making changes to the CSS file and made all changes CSS changes in-line. We advised them against promoting CSS changes through sitebuider environment because the system will verify every file and currently there was over 5,000 files. The last time the changes took over 5 hours to complete. Considering that was at the start of the project we told them between 8-11 hours to promote the file.</p>
                        <p className="content-text-18">
                         We were told that is crazy 8-11 to promote one file, we told them but the sitebuilder environemnt was unstable. Of course everyone in the meeting just laughed at us and telling us we didn't know what we were talking about. But it was the insanity of the program and not our logic. The managers and vendor talked and said it could be completed in under 2 hours. The push would begin at 6pm and end at 8pm. At 4am WDS received a phone call that began "we will never doubt you again,could you tell us how to force this file onto the server. Its been 10 hours and we don't know if we are any closer than we were during the first hour". We explained they needed to contact the server hosting company in NJ and have them directly place the file on the server. We instructed them to go there in person to ensure it will be completed by the start of business. The company bought us and the team breakfast all week. Even though they didn't believe us, we kept our team on call just in case and it saved them.</p>
                    </div>
               
            </section>
            
            
                <div className="grid-callout border-top-5  grey margin-top-100">
                       <div className="grid-callout-text grid-placeself-center width-70" >
                       <div className="title align-items-center text-white margin-top-15">
                         Results
                    </div>
                       <div className="subtitle text-white margin-top-15">
                        Pfizer and the developers were happy
                    </div>
                    <div className="content-block-75 margin-top-15">
                        <p className="content-text-18 text-white">
                        Pfizer quickly froze the project. Needing to refactor 8,000 files from .jsp to .asp an outside vendor was brought in to help with the transition. Pfizer estimates that WDS saved them close to 250,000 by bringing to light the unseen problems. 
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