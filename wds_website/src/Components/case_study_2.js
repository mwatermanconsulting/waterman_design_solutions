import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import stubhub_bg from '../images/backgrounds/bg-stubhub.png';
import stubhub_logo from '../images/icon-logo-stubhub.svg'; 
import motorola_s1 from '../images/photos/photo-Motorola_2.png';
import stubhub_before_s1 from '../images/photos/photo-stubhub-before-2.png';
import stubhub_s1 from '../images/photos/photo-stubhub-s1.png';
import stubhub_before_after from '../images/photos/photo-stubhub-before-after.png';
import stubhub_before_2 from '../images/photos/photo-stubhub-before-kpi.png';
import stubhub_slow from '../images/photos/photo-stubhub-turtle.png';
import stubhub_before_3 from '../images/photos/photo-stubhub-before-topMetrics.png';
import stubhub_after_1 from '../images/photos/photo-stubhub-after-3.png';
import stubhub_after_2 from '../images/photos/photo-stubhub-after-4.png';
import stubhub_after_3 from '../images/photos/photo-stubhub-after-5.png';
import stubhub_after_4 from '../images/photos/photo-stubhub-after-7.png';
import stubhub_after_5 from '../images/photos/photo-stubhub-after-4.png';
import stubhub_results from '../images/photos/photo-stubhub-results.png';
import stubhub_after_13 from '../images/photos/photo-stubhub-after-13.png';
import stubhub_dashboard from '../images/photos/photo-stubhub-future-dashboard2.png';
import thumbsUp from '../images/thumbsup.svg';
import stubhub_s2 from '../images/photos/photo-stubHub-s2.png';
import motorola_bg from '../images/backgrounds/bg-motorola.png';
import motorola_logo from '../images/icon-motorola-white.svg'; 


class case_study_2 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full">
                <div className="image-background-border-tb flex-layout-row width-100">
                    <div className="header-title align-self-center header-text-left text-white">
                        Case Study - StubHub
                    </div>
                        <img className="header-text-right align-self-center" src={stubhub_logo}  alt="Stubhub Case Study Logo Image" /> 
                        <img className="flex-image-container" src={stubhub_bg}  alt="Stubhub Case Study " />  
                </div> 
                <div className="flex-layout-section-fixed-sm margin-top-75">
                    <div className="content-header flex-layout-center-center"> 
                        <div className="content-block-cs intro-text"> Goal: To design a custom on-demand data reporting tool and to solve
                            <br/> the problem that Stubhub analysts faced 
                        </div>
                    </div>
                </div>  
                <div className="flex-layout-section-full margin-top-50">
                     <div className="container-image-block flex-layout-center-center">
                        <img className="photo-container-cs-sb1" src={stubhub_s1} alt="StubHub Show me the Numbers"/>
                    </div>
                </div>
                <div className="content-header flex-layout-center-center margin-top-50"> 
                    <div className="content-block-cs"> Stubhub was internally developing a reporting tool for the company. The goal was to create a custom on-demand data reporting tool. Their first release was not successful and after a year Stubhub needed answers. Six months later WDS turned a failure into successful case study.
                    </div>  
                </div> 
                <div className="flex-layout-section-full flex-section-align-center flex-section-align-center margin-top-100">
                    <div className="content-header flex-layout-column">
                        <div className="title">
                                Backstory
                        </div>
                        <div className="subtitle margin-top-25">
                                A Small Silo Team
                        </div>
                        </div>
                        <div className="content-block-cs margin-top-15">
                            <p className="content-text-18">Everyone at Stubhub was unhappy the current data visualization application, especially the analysts. They found the application difficult, confusing and cumbersome. One analyst presented an idea to a CTO for a new custom data visualization tool. She told him to gather a team and make it happen.</p> 
                            <p className="content-text-18"> The first iteration was designed by the analyst. It was crude, but functional and the idea was sold to a larger shareholder base. For the next phase the small team, contracted a UX/UI person to the team and a new design and with many new features went live. But it was not well received by the stakeholders or adopted ny the larger Stubhub base. </p> 
                        </div>
                    
                
                <div className="flex-layout-section-full margin-top-100" >
                    <div className="content-header flex-layout-column" >
                        <div className="title">
                                Methodology Begins
                        </div>
                        <div className="subtitle margin-top-25">
                                Finding the Truth - Business Perspective
                        </div>
                        <div className="content-block-cs margin-top-15">
                            <p className="content-text-18">First part of the methodology is always to ask a lot of questions. </p>
                            <p className="content-text-18">Question the Stakeholders. What's the history of the business? Who are their competitors? What is the problem the application is trying to solve? </p>
                            <p className="content-text-18">The most surprising and deflating answers I might ever gotten was when the team was showing the current reporting tool. When we asked "how many users? They replied, "This week we currently had 1 user visit the reporting tool" Our heart sank, this was a larger challenge they we thought.</p>
                        </div>    
                    </div>
                </div>
                <div className="flex-layout-section-full margin-top-25">
                     <div className="container-image-block flex-layout-center-center">
                        <img className="photo-container-cs-sb1" src={stubhub_s2} alt="StubHub Only One"/>
                    </div>
                </div>
                <div className="flex-layout-section-full margin-top-25">
                     <div className="container-image-block flex-layout-center-center flex-layout-column">
                        <img className="photo-container-cs-sb1" src={stubhub_before_s1} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"> <i>Failed Usability Tests</i></p>
                    </div>
                </div>
                <div className="flex-layout-section-full padding grey flex-layout-center-center margin-top-100">
                    <p className="call-out-text">Since there was only one user the first questions to everyone was why?</p>
                </div>
                <div className="container-grid-2col flex-section-align-center margin-top-100">
                    <div className="content-header flex-layout-column" >
                        <div className="title">
                            UX Plan
                        </div>
                        <div className="subtitle margin-top-15">
                            Finding the Truth - User Perspective
                        </div>
                            <div className="content-block-cs margin-top-15">
                                <p className="content-text-18"> The easiest way to the truth is filming the user in action. Since there wasn't anyone using the application, the first question is why? What is wrong with the application? We completed a design review and formed a hypothsis of the problems. The unique part of Stubhub project was we could interview the users directly and ask them what they didn't like about the current tool. What do they want and expect from a data visualization tool? </p>
            
                                <p className="content-text-18">A total of 25 analysts from 8 different countries were interviewed. A sus test was presented to them for the current UI. These same analyst were included on 4 separate testing occasions during the process.  </p>
                            </div>     
                    </div>
                        <div className="item-b green-blue">
                            <ul className="content-text-18 text-white green-blue"><b>UX Deliverables</b>
                                <li>UX findings</li>
                                <li>User Personas</li>
                                <li>User Stories</li>
                                <li>Work Flows</li>
                                <li>Journey Maps</li>
                                <li>SUS testing results</li>
                            </ul>
                        </div>
                    </div>
                        <div className="flex-layout-section-full border-top-1 border-bottom-1 flex-layout-center-center margin-top-100">
                            <p className="content-text-24">A total of 25 analysts from 8 different countries were interviewed. A 
                            System Usability Scale (SUS) test was presented to them<br/> for the current UI. The same analyst were included on 4 separate testing occasions during the process. </p>
                        </div>           
                    <div className="flex-layout-full margin-top-100">
                        <div className="content-header flex-layout-column">
                            <div className="title">
                                Challenges
                            </div>
                            <div className="subtitle margin-top-15">
                                Unforeseen Issues
                            </div>
                            <div className="content-block-cs margin-top-15">
                                <p className="content-text-18">The largest challenge was overcoming the 3 minute wait time for the report to load. WDS was honest and telling the team that if they could not get the time to be under 30 seconds than it a lost cause. WDS could create the most unique user friendly application,  but it won't matter if this challenge could not be solved. </p>
                                <p className="content-text-18">How are we going to evangelize and market the newly designed reporting tool?</p>
                                <p className="content-text-18">Project lead goes on a six week sabbatical leave.</p>
                                <p className="content-text-18">How is WDS going to solve the KPI riddle?</p>               
                            </div>
                        </div>
                    </div>
                    <div className="flex-layout-section-full margin-top-50">
                        <div className="container-image-block flex-layout-column">
                            <img className="photo-container-cs-sb1" src={stubhub_slow} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>3 Minute Wait Time is Unacceptable!</i></p>
                        </div>
                    </div>
                   <div className="flex-layout-full margin-top-100 padding-100 border-top-1 border-bottom-1">
                       <div className="content-header flex-layout-column border-tp">
                            <div className="title">
                                Master Plan
                            </div>
                            <div className="subtitle margin-top-15">
                                Solving the Issues
                            </div>
                                <div className="content-block-cs margin-top-25">
                                    <p className="content-text-18">Most failures are from a disconnect from what the user wants and expects and what they are offered. After all the initial research and personas were created, challenges are being tackled. Here are some of the problems that WDS and Stubhub agreed on: </p>
                                </div>
                                <div className="container-grid-2col-full width-100 margin-top-25">    
                                    <div className="grid-item-a">
                                        <ol> <span className="subtitle">
                                            Design Solutions Pain Points</span>
                                            <li>Current UI confusing and out of date </li> 
                                            <li>Data displays did not show the numbers</li>
                                            <li>Want and Need Dashboard </li>
                                            <li>Many of the current features were not being used</li>
                                            <li>KPI Section was unintelligible</li>
                                            <li>numbers numbers and numbers</li>
                                            <li>Get more Users</li>
                                        </ol>
                                    </div>
                                    <div className="grid-item-b">
                                        <ol> <span className="subtitle">
                                            Business Pain Points</span>
                                            <li>One User </li> 
                                            <li>WDS needs lead project end-to-end</li>
                                            <li>Want and Need Dashboard </li>
                                            <li>Reporting tool application needed to be a responsive design</li>
                                            <li>Feature Bloat</li>
                                            <li>Reports are customizable and interface needs to be fluid</li>
                                            <li>Two Sets of Users (Analysts & VP's)</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-layout-full margin-top-100">
                            <div className="content-header flex-layout-column ">
                                <div className="title">
                                    Solutions
                                </div>
                                <div className="subtitle margin-top-75">
                                    Solution #1 - New Design
                                </div>
                                <div className="content-block-cs margin-top-25">
                                    <p className="content-text-18">A new user interface was designed to solves many of the pain points. The new design is a unique take on data visualization. WDS wanted to present a design that was not only modern, simple and branded, but would grab the users attention.  </p>
            
                                    <p className="content-text-18">WDS suggested that once this design had gained traction to redesign the site to a more traditional data visualization tool. This design incorporated the three elements that all designers should keep in mind while designing, the user, business and current climate. The climate and the need to get user quickly led to the colorful branded design. This design is fully customizable and branded with the Stubhub colors. </p>  
                                </div>
                            </div>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                            <img className="photo-container-cs-sb1" src={stubhub_after_1} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i> Approved Design for the new Stubhub Reporting Tool</i></p>
                        </div>
                        <div className="flex-layout-full margin-top-50">
                            <div className="content-header flex-layout-column ">
                                <div className="subtitle margin-top-15">
                                    Solution #2 - Show me the Numbers
                                </div>
                                <div className="content-block-cs margin-top-25">
                                    <p className="content-text-18">Pain point #2 - Data display did not show the numbers. WDS solved this by allowing the numbers to dominant the new design. Large are prominant the numbers are the primary design factor.  Primary reporting numbers are clearly shown. The orange table was added later in the design phase, once the team settled on the persona of Sally the VP. The extra table was added due to the fact that the VP persona would want numbers in a more granual fashion. Understanding the work flow of the analyst the addition of the table eased the work flow of the analyst by aiding in their report creation. </p>
                                </div>
                            </div>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_4} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"> Largest complaint from analyst was not being able to see the numbers clearly</p>
                        </div>
                        <div className="flex-layout-full margin-top-100">
                            <div className="content-header flex-layout-column">
                                <div className="subtitle margin-top-15">
                                        Solution to Pain Point 3 - Dashboard Design 
                                </div>
                                <div className="content-block-cs margin-top-15">
                                    <p className="content-text-18">Pain point #3 - Need a dashboard. One of the most requested features was a customizable dashboard page. WDS noticed the implementation of dashboard design solutions by competitors was lacking and laborious. We simplified the dashboard creation by one click to add the dashboard page. </p>  
                                </div>
                            </div>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_dashboard} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>The biggest feature request a simple, dashboard</i></p>
                        </div>
                        <div className="flex-layout-full  margin-top-100">
                            <div className="content-header flex-layout-column">
                                <div className="subtitle margin-top-15">
                                    Solution to Pain 4 - Organize Features
                                </div>
                                    <div className="content-block-cs margin-top-15">
                                        <p className="content-text-18">Software bloat is a common issue, especially on mature applications. Bloat starts from user disconnect and assuming user needs without testing or providing analytics. One of the main design issues was dedicating valuable real estate to power users, that were placed in a ribbon on the old design. WDS was able to provide data showing less than 1-0% of the analyst use these tools and through use of the personas was able to convince the stakeholders to place these features in an options button.   </p>
            
                                        <p className="content-text-18">A key to a good data visualization tool is removing clutter!! </p>  
                                    </div>
                            </div>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_13} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>Clicking on the option button, open the option panel</i></p>
                        </div>
                        <div className="flex-layout-full margin-top-100">
                            <div className="content-header flex-layout-column">
                                <div className="subtitle margin-top-15">
                                    Solution for Pain Point 5 - KPI Section Design
                                </div>
                                <div className="content-block-cs margin-top-15">
                                    <p className="content-text-18">The KPI section is one of the most important features of any data visualization tools. The current design was unintelligible and a common complaint</p>

                                    <p className="content-text-18">The design solution for this section took weeks. Weeks of thinking about it day and night. How can this page be laid out logically and still contain all the relevant information. Then while taking a walk one day it hit me. </p>
                                </div>
                            </div>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                            <img className="photo-container-cs-sb1" src={stubhub_after_2} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>The new clean KPI section</i></p>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                            <p className="margin-top-15"><i>The Old KPI Section</i></p>
                            <img className="photo-container-cs-sb1" src={stubhub_before_2} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>Confusing and incoherent</i></p>
                        </div>
                        <div className="flex-layout-full margin-top-100">
                            <div className="content-header flex-layout-column ">
                                <div className="title">
                                    Results
                                </div>
                                <div className="subtitle margin-top-15">
                                        Solution for Pain Point 6 - Get More Users
                                </div>
                                <div className="content-block-cs margin-top-25">
                                    <p className="content-text-18">The solution to get more users was about marketing and communication.</p>

                                    <p className="content-text-18">WDS suggested to the team to start a monthly blog and Newsletter about the current team and about the new tool. We also mentored the team on communication. Talking and conversing with the analysts. The results were nothing short of miraculous </p>

                                    <p className="content-text-18">A few months after completing the project, We contacted the team to check-in and make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users and there were only 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50 margin-bottom-100">
                            <img className="photo-container-cs-sb1" src={stubhub_results} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15 margin-bottom-100"><i>StubHub happily emailed WDS this screenshot six months after release </i></p>
                        </div>
                        <div className="container-bottom-callout">
                        
                    </div>
                    </div>
                    <div className="grid-bottom-callout border-3px bottom-border grey" style={{height:'450px'}}>
                            <div className="grid-bottom-1" style={{padding:'20px'}}>
                                <p className="callout-text">A few months after completing the project, We contacted the team to check-in and make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users and there were only 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier. 
                                </p>
                            </div>
                            
                            <div className="grid-bottom-2">
                                <img src={thumbsUp} alt="Finding the Truth - Business Perspective"/>
                            </div>
                        </div>
                </div>    
                                              
                                        )
                                    }
                                }
export default case_study_2;