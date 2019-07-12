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
                <section className="image-background-border-tb flex-layout-row width-100">
                    <div className="header-title-cs align-self-center header-text-left text-white">
                        Case Study - StubHub
                    </div>
                        <img className="header-text-right align-self-center" src={stubhub_logo}  alt="Stubhub Case Study Logo Image" /> 
                        <img className="flex-image-container width-100" src={stubhub_bg}  alt="Stubhub Case Study " />  
                </section> 
                <section className="container-section padding-20  border-top-5 border-bottom- callout-color-dark">
                <div className="callout-text-lg">
                        Goal: To design a custom on-demand data reporting tool 
                </div>
                </section>
                <section className="flex-layout-section-fixed-sm margin-top-75">
                    <div className="content-header flex-layout-center-center"> 
                        <div className="content-block-55 subtitle"> Stubhub was internally developing a reporting tool for the company. Their initial release was not successful and after a year Stubhub needed answers. Six months later WDS turned a failure into successful case study.
                        </div>
                    </div>
                </section>  
                <section className="flex-layout-section-full margin-top-50">
                     <div className="container-image-block flex-layout-center-center">
                        <img className="photo-container-cs-sb1" src={stubhub_s1} alt="StubHub Show me the Numbers"/>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center margin-top-100">
                    <div className="title content-block-55">
                        Backstory
                    </div>
                    <div className="subtitle content-block-55 margin-top-25">
                        A Small Silo Team
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                            All the analysts at Stubhub were dissatisfied with the new IBM suite of data visualization tools. They found the application to be difficult, confusing and cumbersome. One analyst presented an idea to a CTO for a new custom data visualization tool. She told him to gather a team and make it happen.</p> 
                        <p className="content-text-18"> 
                            The first iteration was designed by the analyst. It was crude, but functional and the idea was sold to a larger shareholder base. For the next phase the small team, contracted a UX/UI person to the team and a new design and with many new features went live. But it was not well received by the stakeholders or adopted the larger Stubhub base. </p>
                        <p className="content-text-18"> 
                            The team realized it need a UX/UI consultant with a proven track record. After an extensive search WDS was hired for our design skills and methodology.  </p>  
                        </div>
                </section> 
                
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center" >
                    <div className="title content-block-55">
                        Methodology Begins
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Finding the Truth - Business Perspective
                    </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            First part of the methodology is researching and understanding the business. Gathering business requirements, marketing materials and ask a lot of questions. 
                            </p>
                            <p className="content-text-18">Question the Stakeholders. What's the history of the business? Who are their competitors? What is the problem the application is trying to solve? </p>
                            
                            <p className="content-text-18">The most surprising and deflating answers we ever gotten was when the team was showing the current reporting tool. When we asked "how many users? They replied, "This week we currently had 1 user visit the reporting tool" Our heart sank, this was a larger challenge they we thought.</p>
                        </div>    
                </section>
                
                <section className="flex-layout-section-full margin-top-25">
                     <div className="container-image-block flex-layout-center-center flex-layout-column">
                        <img className="photo-container-cs-sb1" src={stubhub_before_s1} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"> <i>Old interface design which boasts of having 1 user</i></p>
                    </div>
                </section>
                
                <section className="grid-callout border-tb-5 grey"> 
                    <div className="grid-callout-text content-block-55 grid-placeself-center">
                    <p className="callout-text">One is a lonely number, when it is the number of current users it's just sad</p>      
                    </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img  src={stubhub_s2}  alt="StubHub Only One" /> 
                    </div>   
                </section>
                
                <section className="flex-layout-section-full align-items-center margin-top-100">       
                    <div className="title content-block-55">
                        UX Plan
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Finding the Truth - User Perspective
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18"> The easiest way to the truth is filming the user in action. Since there wasn't anyone using the application, the first question is why? What is wrong with the application? We completed a design review and formed a hypothesis of the problems. The unique part of Stubhub project was we could interview the users directly and ask them about their needs, wants and expectations about the current tool. What do they want and expect from a data visualization tool? </p>
            
                        <p className="content-text-18">A total of 25 analysts from 8 different countries were interviewed. A sus test was presented to them for the current UI. These same analyst were included on 4 separate testing occasions during the process.  </p>
                    </div>     
                            <ul className="dashed content-text-18 content-block-55">
                                <p className="text-bold content-text-18">UX Deliverables</p>
                                <li>UX findings</li>
                                <li>User Personas</li>
                                <li>User Stories</li>
                                <li>Work Flows</li>
                                <li>Journey Maps</li>
                                <li>SUS testing results</li>
                            </ul>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">   
                        <div className="title content-block-55">
                            Challenges
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Understanding the Problems
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">WDS spent many hours researching data display. Reading books by the experts trying to understand the standards of good data display. Data is a growing need and it was important to us we become experts in a short amount of time. </p>
                            <p className="content-text-18">During the discovery phase it was discovered that the analysts were not using the data reporting tool due to the 3 minute download time. WDS was honest and telling the team that if they could not get the time to be under 30 seconds than it a lost cause. WDS could create the most unique user friendly application, but the 3 minute wait time was a deal breaker. Nobody would ever wait that long and the team had 36 hours to find a solution. Other concerns and Issues</p>
                            <p className="content-text-18">How are we going to evangelize and market the newly designed reporting tool?</p>
                            <p className="content-text-18">Project lead goes on a six week sabbatical leave.</p>
                            <p className="content-text-18">How is WDS going to solve the KPI riddle?</p>               
                        </div>
                        
                    </section>
                    <div className="flex-layout-section-full margin-top-25">
                        <div className="container-image-block align-items-center flex-layout-column">
                            <img className="photo-container-cs-sb1" src={stubhub_slow} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>3 Minute Wait Time is Unacceptable!</i></p>
                        </div>
                    </div>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">   
                        <div className="title content-block-55">
                            Master Plan
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Solving the Issues
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">Most failures are from a disconnect from what the user wants and expects and what they are offered. After all the initial research and personas were created, challenges are being tackled. Here are some of the problems that WDS and Stubhub agreed on: </p>
                        </div>
                        <div className="grid-2col-list margin-top-25">    
                            <div className="list-left  margin-left-75">
                                <span className="subtitle margin-top-15">
                                    Design Solutions Pain Points</span>
                                <ul className="dashed content-text-18 margin-top-5"> 
                                    <li><a href="#solution1">Current UI confusing and out of date</a> </li> 
                                    <li><a href="#solution2">Data displays did not show the numbers</a></li>
                                    <li><a href="#solution3">Customizable dashboard </a></li>
                                    <li><a href="#solution4">Too many unused features</a></li>
                                    <li><a href="#solution5">KPI section was unintelligible</a></li>
                                    <li><a href="#solution6">Get more users</a></li>
                                </ul>
                                    </div>
                                    <div className="list-right margin-left-75">
                                <span className="subtitle">
                                        Business Pain Points</span>
                                <ul className="dashed content-text-18 margin-top-5"> 
                                    <li><a href="#solution6">One user</a> </li> 
                                    <li><a href="#solution6">WDS needs lead project end-to-end</a></li>
                                    <li><a href="#solution1">Responsive design</a></li>
                                    <li><a href="#solution4">Feature bloat</a></li>
                                    <li><a href="#solution1">Reports are customizable and interface needs to be fluid</a></li>
                                    <li><a href="#solution1">Two sets of users (Analysts & VP's)</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">  
                        <div className="title content-block-55">
                            Solutions
                        </div>
                        <div className="subtitle content-block-55 margin-top-50">
                        <a id="solution1"></a> 
                            New StubHub Reporting Tool Design
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                             The new design is a unique take on data visualization. WDS wanted to present a design that was not only modern, simple and branded, but would grab the users attention.  Numbers were a part of the design and very prominent. This was a unique visual treatment and a risk, but the situation required WDS and the team to be brave.</p>
            
                            <p className="content-text-18">
                                This design incorporated the three elements that all designers should keep in mind while designing, the user, business and current climate. The climate and the need to get user quickly led to the colorful branded design. The design is fully responsive and branded with the Stubhub colors. </p>  
                        </div>
                    </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_1} alt="Stub Hub Newly Design Reporting Tool"/>
                            <p className="margin-top-15"><i> Approved Design for the New Stubhub Reporting Tool</i></p>
                        </div>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center"> 
                            <div className="subtitle content-block-55">
                            <a id="solution2"></a> 
                                Show me the Numbers
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">
                                Previous data tool did not show the numbers. The analysts had to rollover the charts for the numbers to appear. Most analysts were frustrated by this feature WDS solved this by allowing the numbers to dominant the new design. Large are prominent the numbers are the primary design factor.  Primary reporting numbers are clearly shown. The orange table was added later in the design phase, once the team settled on the persona of Sally the VP. The extra table was added due to the fact that the VP persona would want numbers in a more granular fashion. Understanding the work flow of the analyst the addition of the table eased the work flow of the analyst by aiding in their report creation. </p>
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_4} alt="Show me the Numbers"/>
                            <p className="margin-top-15"> 
                                Numbers become part of the design. Largest complaint from analyst was not being able to see the numbers clearly</p>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center"> 
                            <div className="subtitle content-block-55 margin-top-15">
                            <a id="solution3"></a> 
                                Customizable Dashboard Design 
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">
                                 One of the most requested features was a customizable dashboard page. WDS noticed the implementation of dashboard design solutions by competitors was lacking feature and laborious. We simplified the dashboard creation by one click to add any report to the dashboard page. </p>  
                            </div>
                        </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_dashboard} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>The biggest feature request a simple, customizable data dashboard</i></p>
                        </div>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="subtitle content-block-55 margin-top-15">
                            <a id="solution4"></a> 
                                Organize Features
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">Software bloat is a common issue, especially on mature applications. Bloat starts from user disconnect and assuming user needs without testing, research or analytics. One of the main design issues was dedicating valuable real estate to power users, the features were placed in a ribbon on the old design. WDS was able to provide data showing less than 1-0% of the analysts were using these tools. Through the use of personas WDS was able to convince the stakeholders to place these features in an options button. </p>
            
                                <p className="content-text-18">A key to a good data visualization displays is removing the clutter!! </p>  
                            </div> 
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_13} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>Clicking on the option button, open the option panel</i></p>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="subtitle content-block-55 margin-top-15">
                            <a id="solution5"></a> 
                                KPI Section Design
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">The KPI section is one of the most important features of any data visualization tools. The current design was unintelligible and a common complaint</p>

                                <p className="content-text-18">The design solution for this section simmered in our creative consciousness for weeks. How can this page be laid out logically and still contain all the relevant information? Then one day as Michael was taking a walk in the city the layout appeared. </p>
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_2} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>The new clean KPI section</i></p>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <p className="margin-top-15"><i>The Old KPI Section</i></p>
                            <img className="photo-container-cs-sb1" src={stubhub_before_2} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>Confusing and incoherent</i></p>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="subtitle content-block-55 margin-top-15">
                                Telemetry, Analytics and Data
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">Part of our methodology is to evangelize the importance of data. Data can give you insights on users behavior that can used to dictate design decisions </p>

                                <p className="content-text-18">After setting up telemetry tags, cookies the team began to see the importance and power of data. WDS developed a telemetry strategy and work with StubHub to implement the plan.</p>
                            </div>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="title content-block-55">
                            <a id="solution6"></a> 
                                Results
                            </div>
                            <div className="subtitle content-block-55 margin-top-15">
                                Get More Users
                            </div>
                            <div className="content-block-55 margin-top-25">
                                <p className="content-text-18">
                                    The solution to get more users was about marketing and communication.</p>

                                <p className="content-text-18">
                                    WDS suggested to the team to start a monthly blog and Newsletter. WDS provided email templates and content suggestion of story telling. WDS opened the lines of communication between the analysts by including them in milestone meetings and testing sessions. We mentored the team on the importance of talking and conversing with the analysts. WDs was impressed The results were nothing short of miraculous </p>

                                <p className="content-text-18">
                                    A few months after completing the project, we checked-in with the team to make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users and there were only 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier.  </p>
                            </div>
                        </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25 margin-bottom-100">
                            <img className="photo-container-cs-sb1" src={stubhub_results} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15 margin-bottom-100">
                                <i>StubHub happily emailed WDS this screenshot six months after release </i></p>
                        </div>
                        <div className="container-bottom-callout">
                        
                    </div>
                    
                    <div className="grid-callout border-top-5 grey" style={{height:'450px'}}>
                          
                            <div className="grid-callout-text grid-placeself-center width-70" style={{padding:'20px'}}>
                                <p className="callout-text ">A few months later...
                                <br></br> Following up on the team led to an astonishing reveal. There was no need to push for more users because 172 out of the 175 analysts were using the reporting tool. It went from a 1% to 98% usage and the team couldn't be happier. 
                                </p>
                            </div>
                            
                            <div className="grid-callout-photo grid-placeself-center">
                                <img src={thumbsUp} alt="Finding the Truth - Business Perspective"/>
                            </div>
                            
                    </div>
                </div>    
                                              
                                        )
                                    }
                                }
export default case_study_2;