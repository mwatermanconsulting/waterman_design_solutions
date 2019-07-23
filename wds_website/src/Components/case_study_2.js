import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import stubhub_bg from '../images/backgrounds/bg-stubhub.png';
import stubhub_logo from '../images/icon-logo-stubhub.svg'; 
import stubhub_before_s1 from '../images/photos/photo-stubhub-before-2.png';
import stubhub_s1 from '../images/photos/photo-stubhub-s1.png';
import stubhub_before_2 from '../images/photos/photo-stubhub-before-kpi.png';
import stubhub_slow from '../images/photos/photo-stubhub-turtle.png';
import stubhub_before_3 from '../images/photos/photo-stubhub-before-topMetrics.png';
import stubhub_after_1 from '../images/photos/photo-stubhub-breadth-inventory.png';
import stubhub_company_kpis from '../images/photos/photo-stubhub-company-kpis.png';
import stubhub_after_4 from '../images/photos/photo-stubhub-cbt.png';
import stubhub_results from '../images/photos/photo-stubhub-portal-usage.png';
import stubhub_weekly_metrics from '../images/photos/photo-stubhub-weekly-metrics.png';
import stubhub_dashboard from '../images/photos/photo-stubhub-my-dashboard.png';
import thumbsUp from '../images/thumbsup.svg';
import stubhub_s2 from '../images/photos/photo-stubHub-s2.png';


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
                        <div className="content-block-55 subtitle"> Stubhub was internally developing a data reporting tool for the company. Their initial release was not a successful one and after a year of non-use, Stubhub needed answers. Six months later WDS turned a failure into successful case study.
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
                            The first iteration was designed by the analyst. It was crude but functional, and the idea was sold to a larger shareholder base. In the next phase the small team subcontracted a UX/UI person to create a new design with many new features and it went live. It was not well received by the stakeholders or adopted by the larger Stubhub base. </p>
                        <p className="content-text-18"> 
                            The team realized it need a UX/UI consultant with a proven track record. After an extensive search WDS was hired for design skills and methodology.  </p>  
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
                            The first part of our methodology is researching and understanding the business. It means gathering business requirements, marketing materials and asking a lot of questions. 
                            </p>
                            <p className="content-text-18">Questions asked: What's the history of the business? Who are their competitors? What problem is the application trying to solve? </p>
                            
                            <p className="content-text-18">The most surprising and deflating answers we ever got was  when we asked how many used the current reporting tool, "This week we currently had 1 user visit the reporting tool" Our heart sank.</p>
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
            
                        <p className="content-text-18">A total of 25 analysts from 8 different countries were interviewed. A SUS test was presented to them for the current UI. These same analyst were included on 4 separate testing occasions during the process.  </p>
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
                            <p className="content-text-18">WDS researched the data display and read books by experts trying to find standards. Data display is a growing need and it was important to us that we become experts in this field. </p>
                            <p className="content-text-18">The discovery phase revealed that the analysts were not using the data reporting tool because of the 3 minute download time. WDS told the team that if they could not get the download time under 30 seconds, it would be a lost cause. WDS could create the most unique user friendly application, but the 3 minute wait time was a deal breaker. Nobody would ever wait that long and the team had 36 hours to find a solution. </p>
                            <p className="subtitle">Other concerns and Issues</p>
                            <p className="content-text-18">How are we going to evangelize and market the newly designed reporting tool?</p>
                            <p className="content-text-18">Project lead goes on a six week sabbatical leave.</p>
                            <p className="content-text-18">How is WDS going to solve the KPI riddle?</p>               
                        </div>
                        
                    </section>
                    <div className="flex-layout-section-full margin-top-25">
                        <div className="container-image-block align-items-center flex-layout-column">
                            <img className="photo-container-cs-sb1" src={stubhub_slow} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>3 Minute Wait Time is unacceptable!</i></p>
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
                            <p className="content-text-18">Most failures come from a disconnect between what the user wants/expects and what they are offered. After the initial research and development of personas, challenges were met head on. Here are some of the problems that WDS and Stubhub agreed on: </p>
                        </div>
                        <div className="grid-2col-list margin-top-25">    
                            <div className="list-left  margin-left-75">
                                <span className="subtitle margin-top-15">
                                    Design Pain Points</span>
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
                             The new design is a unique take on data visualization. WDS wanted to present a design that was not only modern, simple and branded, but would grab the users attention.  Numbers were a part of the design and very prominent. This was a unique visual treatment that WDS believed would work.</p>
            
                            <p className="content-text-18">
                                This design incorporated three elements: the user, the business and the current climate. The climate and the need to get user attention quickly led to a colorful branded design. The design is fully responsive and branded with the Stubhub colors. </p>  
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
                                The previous data tool did not show the numbers prominently. The analysts had to hover over graphics in the charts for the numbers to appear. Most analysts were frustrated by this feature, and WDS solved this by allowing the numbers to dominant the new design. Large and prominent numbers became the primary design factor.  Primary reporting numbers are clearly shown. The orange table was added later in the design phase, once the team settled on a persona of "Sally the VP." The extra table was added because the VP persona wanted numbers shown in a more granular fashion. Understanding the work flow of the analyst and the addition of the table eased the work flow of the analyst by aiding in their report creation. </p>
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_4} alt="Show me the Numbers"/>
                            <p className="margin-top-15"> 
                                Numbers became an important part of the design. Biggest complaint from analyst was not seeing the numbers clearly</p>
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
                            <img className="photo-container-cs-sb1" src={stubhub_weekly_metrics} alt="Finding the Truth - Business Perspective"/>
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
                            <img className="photo-container-cs-sb1" src={stubhub_company_kpis} alt="Finding the Truth - Business Perspective"/>
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