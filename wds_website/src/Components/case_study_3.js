import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import pfizer_bg from '../images/backgrounds/bg-pfizer.png';
import pfizer_logo from '../images/icon-logo-pfizer.svg'; 
import documentum from '../images/documentum.jpg';
import cms from '../images/CMSheader.jpg';
import thumbsUp from '../images/thumbsup.svg';

class case_study_3 extends Component {
    render () {
        return(
            <div>
            <Helmet>
            <meta name="description" content="Waterman Design Solutions case study for Pfizer. Find out how WDS, a UX/UI design firm helped Pfizer by uncovering unknown problems on their healthcare portal Pfizer for Professionals." />
               
                <meta name="keywords" content="case studies, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>WDS Case Studies - Pfizer</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/case_study_3" />
            </Helmet>
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
                        WDS was contracted for UX consulting and development work for the largest healthcare portal named Pfizer for Professionals, or PFP. At launch the site consisted of 1,400 pages. The website needed to be organized and simplified for the doctors. The contract lasted for almost 40 months.</p> 
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
                        The WDS method of uncovering business problems is through observation. One day working on the PFP project, WDS observed the developers struggling with the CMS platform provided by Pfizer. Pfizer required every vendor to use the CMS System. The CMS platform was a custom Documentum solution, built by a company in Ohio. The CMS platform was named SiteBuilder. </p>
                        <p className="content-text-18"> 
                         WDS started interviewing the developers and discovered the system was extremely buggy. Working on the system, they found the system crashing during check ins, pushes and builds. The system rarely gave meaningful error messages and many times developers sat there for hours watching a spinning icon, wondering if the application crashed or was processing. Stopping the process while it was processing increased chances that all work would be lost. They observed times when only partial changes made up to the server and there was no consistency to the errors. What worked one day didn't work the next. The developers strategically created workarounds for the most basic tasks. Customer support was extremely poor.</p>
                    </div>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                    <img className="width-50 margin-top-50" src={cms} alt="Finding the Truth - Business Perspective"/>
                    <div className="margin-top-15 caption width-70"><i> Custom CMS system issues costing developers time and Pfizer money</i></div>
                </div>   
                </section>
            
                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                
                <section className="flex-layout-section-full align-items-center"> 
                    <div className="content-header content-block-55 flex-layout-column" >
                        <div className="title">
                        Researching CMS Problems
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Understanding the Issues
                    </div>
                </div>
                    <p className="content-block-55 content-text-18 margin-top-15 ">
                        WDS started to understand scale of the problem and began documenting the issues, including lost man hours  and overtime costs associated with the developers waiting on the CMS system. They researched the documentation, contracts and emails and uncovered breaches in the contract caused by missing and broken features promised in the contract. Pfizer was unaware of the issues and WDS wanted to make a strong case against this CMS system.
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
                        WDS presented findings to the CTO and many C-suite managers. WDS was questioned heavily on why this meeting was needed and who authorized it. Their team explained that they saw a problem that needed to be solved and this is what their business does, uncovering design and business problems. They described  the developer journey and  work flows, the frustration they experienced everyday and the lost time involved with the simplest of tasks. They focused on two developers in the Philly office. WDS presented that on average the developers wasted 28% of their time due to the buggy nature of the application. Also it was found that the vendor only delivered half the features that were contractually promised.</p> 
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
                        After presenting the CMS issues, Pfizer requested that WDS find some CMS alternatives. Two weeks later  three alternatives were presented with the pros and cons of each. Pfizer choose a Microsoft solution. </p>
                        <p className="content-text-18">
                        Interesting story - WDS was overseeing the transition from one CMS system to another. Another consulating firm was hired to refactor all the files and prepare them for the move to the Sharepoint environment. This involved migrating all the HTML files from .jsp to .asp. The consulting firm contacted WDS to get advice on promoting CSS changes on Sitebuilder. WDS learned from experience not to touch the CSS file, with workarounds for styling and gave up on making changes to the CSS file and made all changes CSS changes in-line. They advised them against promoting CSS changes through Sitebuider environment because the system will verify every file and currently there was over 2,000 of them. The last time the changes took over 5 hours to complete. Considering that was at the start of the project, they were told that between 8-11 hours were needed to promote the file.</p>
                        <p className="content-text-18">
                         WDS's advice was ignored saying it is crazy that it would take 8-11 hours to promote one file. They explained how unstable the sitebuilder environment was with CSS files. The managers and vendor left confident that it could be completed in under 2 hours. The plan was to push the CSS changes at 6pm and end at 8pm. At 4am WDS received a phone call that began "we will never doubt you again, could you tell us how to force this file onto the server. Its been 10 hours and we don't know if we are any closer than we were during the first hour". WDS explained that they needed to contact the hosting company in NJ and have them directly place the file on the server. We instructed them to go there in person to ensure it will be completed by the start of business. The company bought WDS and the team breakfast all week. </p>
                    </div>
               
            </section>
            <section className="flex-layout-section-full align-items-center grey border-top-5 margin-top-50 margin-top-50sm">
                <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-bottom-50 " > 
                    <div className="col2-text  grid-placeself-center ">
                        <div className="content-block text-align-center margin-top-15sm">
                            <p className="callout-text "> Pfizer and the developers were happy </p>
                            <p className="callout-text">
                        Pfizer quickly froze the project. Needing to refactor 8,000 files from .jsp to .asp, an outside vendor was brought in to help with the transition. Pfizer estimates that WDS saved them close to 250,000 by bringing to light the unseen CMS problems. 
                        </p>
                    </div>
                </div>
                <div className="col2-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={thumbsUp}  alt="Good job WDS!" /> 
                </div>
            </div>
        </section>
               
                    </div>
                </div> 
            
                                              
                                        )
                                    }
                                }
export default case_study_3;