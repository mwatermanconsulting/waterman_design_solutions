import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import stubhub_bg from '../images/backgrounds/bg-stubhub.png';
import stubhub_logo from '../images/icon-logo-stubhub.svg'; import stubhub_logo_white from '../images/icon-logo-stubhub-white.svg'
import stubhub_before_s1 from '../images/photos/photo-stubhub-before-2.png';
import sally from '../images/photos/photo_sally.jpg';
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
            <div className="flex-layout-column flex-layout-section-full image-background-border-top">
                <section className="flex-layout-row height-60-mobile width-100"> 
                    <div className="header-text-left header-title-cs align-self-center text-white">
                        Case Study - StubHub
                    </div>
                        <img className="header-text-right align-self-center width-10" src={stubhub_logo_white}  alt="StubHub Case Study Logo Image" /> 
                        <img className="flex-image-container width-100" src={stubhub_bg}  alt="StubHub Case Study " /> 
                         
                </section> 
                <section className="container-section padding-20 m border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                        Goal: To design a custom on-demand data reporting tool. 
                </div>
                </section>
                <section className="flex-layout-section-fixed-sm margin-top-75">
                    <div className="content-header flex-layout-center-center"> 
                        <div className="content-block-55 subtitle"> StubHub was developing an internal business intelligence platform. Their initial two releases were not successful and after a year of non-use, StubHub needed answers. Six months later WDS turned this failure into a success. 
                        </div>
                    </div>
                </section>  
                <section className="flex-layout-section-full margin-top-50">
                     <div className="container-image-block flex-layout-center-center flex-layout-column">
                        <img className="photo-container-cs-sb1" src={stubhub_s1} alt="StubHub Show me the Numbers"/>
                        <p className="margin-top-15"> <i>I don't want to have to hover over the little dots!</i></p>
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
                            Every analyst at StubHub were dissatisfied with the new IBM suite of data visualization tools, that the company purchased. They found the platform to be difficult, confusing and cumbersome. One analyst presented an idea to the CTO for a new custom data visualization tool. She agreed and told him to gather a team and make it happen.</p> 
                        <p className="content-text-18"> 
                            The first iteration was designed by the analyst. It was crude but functional, and the idea was to sell the idea to a larger stakeholder base. The next phase the newly formed team  subcontracted a UX/UI company to create a redesign the platform. This version contained many new features and it went live with any any user input. It was not well received by the stakeholders or adopted by the larger StubHub base. </p>
                        <p className="content-text-18"> 
                            The team realized it needed a UX/UI consultant with a proven track record. After an extensive search WDS was hired for design skills and methodology. WDS embedded Michael to work closely with with the StubHUb team and reporting back to WDS. </p>  
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
                            The first part of our methodology is researching and understanding the business. It means gathering business requirements, marketing materials and asking as many questions as necessary to understand the problems. 
                            </p>
                            <p className="content-text-18">
                            Typical questions asked: What's the history of the business? Who are their competitors? What problem is the platform trying to solve? How many users currently use the platform? </p>
                            
                            <p className="content-text-18">The answer to how many analysts were using the tool? One.</p>
                        </div>    
                </section>
                
                <section className="flex-layout-section-full margin-top-25">
                     <div className="container-image-block flex-layout-center-center flex-layout-column">
                        <img className="photo-container-cs-sb1" src={stubhub_before_s1} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"> <i>Old interface design which boasts of having 1 user</i></p>
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
                        <p className="content-text-18"> The easiest way to the truth is observing the users in action. The first question we needed answer to was; why only one user? What was the overlying issue that caused the analysts to ignore the platform? How could we observe the users if no one was using the platform. The first step to understanding was to focus our attention on the current UI and complete a design critique and formed a hypothesis. The hypothesis help formed the series of interview questions used to connect with the analysts.  The unique part of StubHub project was we could interview the users directly and ask them about their needs, wants and expectations about the current tool and what they would do differently if designed a internal business intelligence platform. </p>
            
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
                            <p className="content-text-18">WDS researched data display design reading books by experts and understanding industry standards. Data display is a growing need and it was important to us that we become experts in this field. </p>
                            <p className="content-text-18">The discovery phase revealed that the analysts were not using the data reporting tool because of the 3 minute download time. The workflow was that the analysts would request data reports on an array of interests, such as venue analysis. Once the the report was prepared and ready to be consumed the analysts choose their report from the list the and the report would load the data visually in some form of chart. The analysts refuse to use the platform due to the download time. WDS understood that if the team could not get the download time to under a minute, it would be a failure. We told them that we could design the most unique user friendly platform, but without solving this problem, we would have to respectfully decline creating a design. Challenging the team to work on the back-end issues if they wanted WDS to continue working on the project. The team accepted the challenge and completely refactored the back-end to be fast, efficient and secure. </p>
                            <p className="subtitle">Other issues:</p>
                            <p className="content-text-18">-Need for evangelization to market the newly designed reporting tool.</p>
                            <p className="content-text-18">-Project lead goes on a six week sabbatical leave.</p>
                            <p className="content-text-18">-How is WDS going to solve the KPI riddle?</p>
                            <p className="content-text-18">-How to speed up the load time?</p>               
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
                            <p className="content-text-18">Most failures come from a disconnect between what the user wants/expects and what they are offered. After the initial research and development of personas, challenges were met head on. Here are some of the problems that WDS and StubHub agreed on: </p>
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
                            The StubHub Intelligence Platform Redesign
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                             In order to gain the attention of the analysts and stakeholders WDS needed to rethink data visualization. Our research showed us that almost all data visualization platform were cold and sterile. Having that grey interface with crude user interfaces. We decided to have a unique design, especially for data visualization. When it came time to present to the team and executives we were unusually nervous. To our surprise it was well received and from that point on the CTO called me "pretty Michael". We explained during the meeting that the design was a modern take on data visualization, the new UI was simple with the stubHub blue and orange branding, bringing a sense of comfort, and most important design feature incorporating numbers into the design.</p>
            
                            <p className="content-text-18">
                                This design incorporated three elements: the user, the business and the current climate. The climate and the need to get user attention quickly led to a colorful branded design. The design is fully responsive and branded with the StubHub colors. </p>  
                        </div>
                    </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_1} alt="Stub Hub Newly Design Reporting Tool"/>
                            <p className="margin-top-15"><i> Approved Design for the New Stubhub Reporting Tool</i></p>
                        </div>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center"> 
                            <div className="title content-block-55">
                                <a id="solution2"></a> 
                                Show me the Numbers
                            </div>
                            <div className="subtitle content-block-55 margin-top-15">
                                <a id="solution2"></a> 
                                Designing for the Users
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">
                                One of the major complaints about the the previous data tool was number display. The numbers were not displayed until the analysts hovered over a data point on a chart. Most analysts were frustrated by this feature, because their workflow involved comparing numbers, which was currently impossible. WDS solution was the numbers to dominant the new design. Large and prominent numbers became the primary design factor. Understanding that analyst only scanned for highs and lows, those numbers were extracted from the chart and displayed in 72 point bold font allowing the primary reporting numbers to be clearly shown. </p>
                            
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_4} alt="Show me the Numbers"/>
                            <p className="margin-top-15"> 
                                Numbers became an important part of the design. Biggest complaint from analyst was not seeing the numbers clearly</p>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                    
                        <section className="flex-layout-section-full align-items-center"> 
                            <div className="title content-block-55">
                                <a id="solution2"></a> 
                                    The Value of Personas
                            </div>
                            <div className="subtitle content-block-55 margin-top-10">
                                <a id="solution2"></a> 
                                   Targeting the Right Users
                            </div>
                            <div className="float-left content-block-55 margin-top-15">
                                <p className="content-text-18">
                                We are always excited when we introduce personas to companies. While presenting if we nail the persona story an understanding begins to take place. For many companies this is the first time they conceptualize someone using their product or service. StubHub was an interesting presentation, as we learned the value of assuming our audience </p>

                                <p className="content-text-18"><div className="float-right ">
                                    <img className="width-100" src={sally} alt="Finding the Truth - Business Perspective"/>
                                </div>
                                When we made our persona presentation to StubHub, we were surprised by their reaction. We fully expected them to choose one the analysis personas. Instead they choose the executive that we named "Sally,  We began to ask questions to try to understand what the workflows were between the analysts and Sally. We discovered that Sally would receive monthly
                                 reports, PDF's containing the analysis of the data. The reports rarely contained charts, but always included excel data. It was then that we realized that the current design was not meeting Sally's needs, it was designed for the analysts. We needed to rethink the design, possibly a redesign. Our design was based off the analysis persona and a new design would be needed.</p>

                                
                                <p className="content-text-18">Our solution was to incorporate a data table into design. The solution also had to take into account that the data table would not be visible on all the reports. WDS planned from the start to require the design to be responsive and fluid. Adding the data table actually enhanced the visuals of the design and platform. More importantly, the solution expanded the accessibility of the platform to executives, such as "Sally the VP." The extra table made the display accessible to anyone by showing numbers shown in a more granular fashion. The analysts were thrilled the table was added because it eased the work flow of the analyst by aiding in their report creation. </p>
                            </div>
                            <div className="content-text-18 content-block-55 margin-top-25 border-2 padding">
                                “(WDS) are thoughtful designers who helped transform our reporting project from a technical tool for pulling data into a place where users at all levels of our organization can find insights about our business.”<br/>
                                    -Michael Johnston Stubhub, Impact-Focused Technologist Specializing in Data
                        </div>
                        </section>
                        
                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="flex-layout-section-full align-items-center"> 
                        <div className="title content-block-55 margin-top-15">
                            <a id="solution3"></a> 
                                Customizable Dashboard Design 
                            </div>
                            <div className="subtitle content-block-55 margin-top-15">
                            <a id="solution3"></a> 
                                Meeting Users Expectations 
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">
                                 Almost every analyst we interviewed requested a customizable dashboard. An area on the platform that the they could organize and save reports. T Providing them a snapshot  During our research we noticed the implementation of dashboard design solutions by competitors was lacking feature and very laborious. We simplified the dashboard creation by one click to add any report to the dashboard page and added drag and drop functionality allowing the dashboard to be fully customizable. </p>  
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
                            <div className="subtitle content-block-55 margin-top-15">
                            <a id="solution4"></a> 
                                Consolidating Users Workflow
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">Software bloat is a common issue, especially on mature platforms. Bloat starts from user disconnect and assuming user needs without research, testing, or analytics data. A large issues with the old design was dedicating valuable real estate to unused options. A data visualization platform should be clean allowing the charts and data to to be consumed without being distracted by a options ribbon across the top of the design. After connecting with the analysts we discovered these options were only used by power users. </p>
                                
                                <p className="content-text-18">The options ribbon was a favorite for many of the stakeholders, including the decision makers. WDS attempted on a few occasions to justify our designs decisions, without success. We turned to the analysts for answers with another round of interviews focused on the platform's options. With data in hand we met again with the decision makers showing them the data that less than 1% of the analysts were using these options. Another point we made was that our persona Sally would never use these options. The data was able to convince the stakeholders to that placing these features in an options button, was meeting the needs of majority of users.  </p>
            
                                <p className="subtitle">A key to a good data visualization displays is removing the clutter!! </p>  
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
                            <div className="subtitle content-block-55 margin-top-15">
                            <a id="solution5"></a> 
                                
                            </div>
                            <div className="content-block-55 margin-top-15">
                                <p className="content-text-18">The KPI section is one of the most important features of any data visualization tools. Providing key information for the decision makers. The design for this section needed to be clean and provide information that could be consumed at a glance. This section would stay open for hours on end to the end users. The issue with the current design was that it was unintelligible and unusable</p>

                        
                                <p className="content-text-18">The design solution for this section simmered in our creative consciousness for weeks. How can this page be laid out logically and still contain all the relevant information? Then one day as Michael was taking a walk in the city the layout appeared. </p>
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <p className="subtitle">The New KPI </p><img className="photo-container-cs-sb1" src={stubhub_company_kpis} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15"><i>The new clean KPI section</i></p>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                        <p className="subtitle">The Old KPI </p>
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
                                More Users!!
                            </div>
                            <div className="content-block-55 margin-top-25">
                                <p className="content-text-18">
                                    The goal: Pull in more users through marketing and communication.</p>

                                <p className="content-text-18">
                                    WDS suggested to the team to start a monthly blog and Newsletter. WDS provided email templates and content suggestion of story telling. WDS opened the lines of communication between the analysts by including them in milestone meetings and testing sessions. We mentored the team on the importance of talking and conversing with the analysts. WDs and StubHub were impressed with the final results </p>

                                <p className="content-text-18">
                                    A few months after completing the project, we checked-in with the team to make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users and there were only 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier.  </p>
                            </div>
                        </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25 margin-bottom-100">
                            <img className="photo-container-cs-sb1" src={stubhub_results} alt="Finding the Truth - Business Perspective"/>
                            <p className="margin-top-15 text-align-center margin-bottom-100">
                                <i>StubHub happily emailed WDS this screenshot six months after release </i></p>
                        </div>
                        <div className="container-bottom-callout">
                        
                    </div>
                    
                    <div className="grid-callout border-top-5 grey" >
                          
                            <div className="grid-callout-text grid-placeself-center width-70" >
                                <p className="callout-text-white ">A few months later...
                                <br></br> Following up on the team led to an astonishing reveal. There was no need to push for more users because 172 out of the 175 analysts were using the reporting tool. It went from a 1% to 98% usage and the team couldn't be happier. 
                                </p>
                            </div>
                            
                            <div className="grid-callout-photo grid-placeself-center margin-top-15">
                                <img src={thumbsUp} alt="Finding the Truth - Business Perspective"/>
                            </div>
                            
                    </div>
                </div>    
                                              
                                        )
                                    }
                                }
export default case_study_2;