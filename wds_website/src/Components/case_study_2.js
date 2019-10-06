import React, { Component } from 'react' 
import Helmet from 'react-helmet';
import stubhub_bg from '../images/backgrounds/bg-stubhub.png';
import stubhub_logo_white from '../images/icon-logo-stubhub-white.svg'
import stubhub_before_s1 from '../images/photos/photo-stubhub-before-2.png';
import sally from '../images/photos/photo_sally.jpg';
import stubhub_s1 from '../images/photos/photo-stubhub-s1.png';
import stubhub_before_2 from '../images/photos/photo-stubhub-before-kpi.png';
import stubhub_slow from '../images/photos/photo-stubhub-turtle.png';
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
            <div>
            <Helmet>
                <meta name="description" content="case studies for motorola, pfizer, osisoft, stubhub. Describes " />
                <meta name="keywords" content="case studies, stubhub business intelligence platform, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>Case Study - StubHub</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/case_study_2" />
            </Helmet>
            
            <div className="flex-layout-column flex-layout-section-full image-background-border-top">
                <section className="flex-layout-row height-60-mobile width-100"> 
                    <div className="header-text-left header-title-cs align-self-center text-white">
                        Case Study - StubHub
                    </div>
                        <img className="header-text-right align-self-center width-10" src={stubhub_logo_white}  alt="StubHub Case Study Logo Image" /> 
                        <img className="flex-image-container width-100" src={stubhub_bg}  alt="StubHub Case Study " /> 
                         
                </section> 
            
                <section className="container-section padding-20 m border-bottom-5 border-top-5 callout-color-dark">
                <div className="callout-text-lg">
                        Goal: To design a custom on-demand business intelligence platform. 
                </div>
                </section>
                <section className="flex-layout-section-fixed-sm margin-top-75">
                    <div className="content-header flex-layout-center-center"> 
                        <div className="content-block-65 subtitle"> 
                        StubHub was developing an internal business intelligence platform. Their initial two releases were not successful and after a year gained little user traction. StubHub turned to WDS for the answers and six months later WDS turned this failure into a success. 
                        </div>
                    </div>
                </section>  
                <section className="flex-layout-section-full margin-top-50">
                     <div className="container-image-block flex-layout-center-center flex-layout-column">
                        <img className="photo-container-cs-sb1 margin-top-25sm" src={stubhub_s1} alt="Don't make me hover for numbers"/>
                        <div className="margin-top-15 caption width-70"><i> 
                            I don't want to have to hover over the little dots!</i></div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center margin-top-100">
                    <div className="title content-block-65">
                        Backstory
                    </div>
                    <div className="subtitle content-block-65 margin-top-10">
                        A Small Silo Team
                    </div>
                    <div className="content-block-65 margin-top-15">
                        <p className="content-text-18">
                             The analysts at StubHub were dissatisfied with the new IBM suite of business intelligence tools that the company recently purchased. They found the platform to be difficult, confusing and cumbersome. One analyst proposed an idea to the CTO that they should internally build their own business intelligence platform. She agreed and told him to hire a team and make it happen. The new manager hired a team of six developers and they developed an MVP (Minimum Viable Product).</p> 
                        <p className="content-text-18"> 
                            The first MVP was well received. For the next iteration the team subcontracted a UX/UI company to design and develop a full featured business intelligence platform. In 14 months the new version was released. Unfortunately, the new business intelligence platform was not well received and suffered from a poor adoption rate. </p>
                        <p className="content-text-18"> 
                            The team was given one last chance to get it right. They realized they needed to find a UX company that could solve the adoption rate problem and at the same time bring the team credibility with a professional design. The team contracted WDS after learning about their success with the Motorola project. WDS embedded Michael to lead the project, working closely with the StubHub team. </p>  
                        </div>
                </section> 
                
                <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full align-items-center margin-top-15sm" >
                    <div className="title content-block-65">
                        Methodology Begins
                    </div>
                    <div className="subtitle content-block-65 margin-top-10">
                        Finding the Truth - Business Perspective
                    </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                            The first part of the WDS methodology was to research and fully understanding the business objectives by gathering business requirements, marketing materials and style guides. Then communication is established with strategies and coordinating stakeholder interviews and meetings. During the initial meeting with the stakeholders, WDS asked "how many users are currently on the platform?", the answer was "only one."
                            </p>
                            
                            <p className="content-text-18">The answer to how many analysts were using the tool? One.</p>
                        </div>    
                </section>
                
                <section className="flex-layout-section-full margin-top-25">
                     <div className="container-image-block flex-layout-center-center flex-layout-column">
                        <img className="photo-container-cs-sb1" src={stubhub_before_s1} alt="Only one user"/>
                        <div className="margin-top-15 caption width-70"> <i>Old interface design which boasts of having 1 user</i></div>
                    </div>
                </section>
                
                <section className="flex-layout-section-full align-items-center margin-top-100">       
                    <div className="title content-block-65">
                        UX Plan
                    </div>
                    <div className="subtitle content-block-65 margin-top-10">
                        Finding the Truth - User Perspective
                    </div>
                    <div className="content-block-65 margin-top-15">
                        <p className="content-text-18"> 
                        The easiest way to uncover the truth is by observing users in action. There were two questions that WDS needed an answer to, "Why only one user?" and "What was the underlying issue that caused the analysts to ignore the platform?" WDS was trying to understand how they could observe the users if no one was using the platform. To understand this problem further they focused their attention on the current UI and conducted a design critique, forming a hypothesis on the problems. This hypothesis helped formed a series of interview questions for the analysts. The unique part of StubHub project was that they could interview the users directly, helping them understand their workflows, design and issues they were having with the business intelligence platforms they were using. WDS wanted to understand the problems with the IBM platform as well as the current Stubhub offering. Their goal was to design an application for the analysts, and to reach that goal they needed to understand the users pain points and expectations.
                        </p>
            
                        <p className="content-text-18">
                            A total of 25 analysts from 8 different countries were interviewed. A SUS UI test was also presented to analysts for the current UI. The same analysts would be interviewed on 4 separate testing occasions, keeping the user in the loop throughout the entire process.  </p>
                    </div>     
                            <ul className="dashed content-text-18 content-block-65">
                                <p className="text-bold content-text-18">UX Deliverables</p>
                                <li>UX findings</li>
                                <li>User Personas</li>
                                <li>User Stories</li>
                                <li>Work Flows</li>
                                <li>Journey Maps</li>
                                <li>SUS testing results</li>
                            </ul>
                    </section>

                    <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">   
                        <div className="title content-block-65">
                            Challenges
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                            Understanding the Problems
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                                The discovery phase revealed that the analysts were not using the business intelligence platform for two reasons. The first issue was that the numbers were hidden in the chart displays. They needed to roll over data points to see the numbers. Most analysts need to compare numbers, making the current platform unusable. The second issue was the 3 minute download time for each report. WDS discovered that the analysts' workflow was that the they would request data reports on an array of interests, such as venue analysis. Once the the report was prepared and ready to be consumed the analysts would chose their report from a list and then the report would load the data visually in some form of chart. This process frustrated the analysts, and a 3 minute long download time was unacceptable. This was the largest issue and the reason that only 1 analyst was using the platform. </p>
                                
                                <p className="content-text-18">
                               WDS understood that if the team could not get the download time to under a minute, the project would be a failure. WDS met with the team explaining that we could design the most unique elegant business intelligence platform and no one will use it with a 3 minute download time. The engineers must solve the download time problem. They challenged the team to find an answer to the download time if they wanted WDS to continue working on the project. The team accepted the challenge and completely refactored the backend to be fast, efficient and secure, reducing the download time from 3 minutes to under 30 seconds. </p>
                            <p className="subtitle">Other issues:</p>
                            <p className="content-text-18">- Need for evangelization to market the newly designed reporting tool</p>
                            <p className="content-text-18">- Project lead goes on a six week sabbatical leave</p>
                            <p className="content-text-18">-  WDS needs to solve the KPI riddle</p>
                            <p className="content-text-18">- How to speed up the load time</p>               
                        </div>
                        
                    </section>
                    <div className="flex-layout-section-full margin-top-25">
                        <div className="container-image-block align-items-center flex-layout-column">
                            <img className="photo-container-cs-sb1" src={stubhub_slow} alt="Understanding the truth"/>
                            <div className="margin-top-15 caption width-70"><i>3 Minute Wait Time is unacceptable!</i></div>
                        </div>
                    </div>

                    <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">   
                        <div className="title content-block-65">
                            Master Plan
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                            Solving the Issues
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                                Most failures arise from a disconnect between what the user wants/expects and what they are offered. After the initial research and development of personas, the challenges were met head on. Here are the issues that WDS and StubHub agreed on: </p>
                </div>
                
                    <div className="flex-layout-row flex-layout-justified-sb content-block-65">
                    
                    <div className="flex-items-align-top margin-top-25 content-block-65">
                            
                            <ul className="dashed content-block-65">
                                    <p className="subtitle-case">User Pain Points:</p>
                                
                                    <li><a href="#solution1">Current UI confusing and out of date</a> </li> 
                                    <li><a href="#solution2">Data displays did not show the numbers</a></li>
                                    <li><a href="#solution3">Customizable dashboard </a></li>
                                    <li><a href="#solution4">Too many unused features</a></li>
                                    <li><a href="#solution5">KPI section was unintelligible</a></li>
                                    <li><a href="#solution6">Get more users</a></li>
                                    </ul> 
                            </div>
                            <div className="flex-layout-center-center content-block-65 flex-items-align-top margin-top-25">

                                <ul className="dashed content-block-65">
                                    <p className="subtitle-case">Business Pain Points:</p>
                                    <li><a href="#solution6">One user</a> </li> 
                                    <li><a href="#solution6">WDS needs lead project end-to-end</a></li>
                                    <li><a href="#solution1">Responsive design</a></li>
                                    <li><a href="#solution4">Feature bloat</a></li>
                                    <li><a href="#solution1">Reports are customizable and interface needs to be fluid</a></li>
                                    <li><a href="#solution1">Two sets of users (Analysts and VP's)</a></li>
                                    </ul> 
                            </div>
                        </div>
                    </section>
                <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">  
                        <div className="title content-block-65">
                            Design Solutions
                        </div>
                        <div className="title content-block-65 margin-top-50">
                            The New StubHub Design
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                        <a id="solution1"></a> 
                            The StubHub Intelligence Platform Redesign
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                             In order to gain user traction, WDS needed to rethink data visualization design. Their research showed them that almost all data visualization platforms were cold and sterile. The majority of designs were grey interfaces with crude user interactions. WDS decided to have a unique design, especially for data visualization. When it came time to present to StubHub they were unusually nervous. To their surprise the design was well received and from that point on the CTO called the WDS designer "pretty Michael". WDS explained during the meeting that the design was a modern take on data visualization, the new UI was simple with the StubHub branding. The new design was inviting, bringing a sense of comfort to the user and most importantly the design incorporated larger numbers into the design.
                             </p>
            
                            <p className="content-text-18">
                                This design incorporated three elements: the user, the business and the current climate. The climate and the need to get user attention quickly led to a fully responsive design and branded with the StubHub colors. </p>  
                        </div>
                    </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_1} alt="Stub Hub Newly Design Reporting Tool"/>
                            <div className="margin-top-15 caption width-70"><i> Approved Design for the New Stubhub Reporting Tool</i></div>
                        </div>

                        <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                        <section className="flex-layout-section-full align-items-center"> 
                            <div className="title content-block-65">
                                <a id="solution2"></a> 
                                Show me the Numbers
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                                <a id="solution2"></a> 
                                Meeting Users Expectations
                            </div>
                            <div className="content-block-65 margin-top-15">
                                <p className="content-text-18">
                                One of the major complaints about the the previous data tool was how the numbers in the charts were displayed. The numbers were not displayed until the analysts hovered over a data point on a chart. Most analysts were frustrated by this feature, because their workflow involved comparing numbers, which was currently impossible. The WDS solution to the problem was to design the interface so that the numbers were dominant and seamless in the design. The numbers were large and prominent allowing it to be the primary design factor. Understanding that analyst only scanned for highs and lows, those numbers were extracted from the chart and displayed in 72 point bold font allowing the primary reporting numbers to be clearly shown. </p>
                            
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_after_4} alt="Show me the Numbers"/>
                            <div className="margin-top-15 caption width-70">
                                Numbers became an important part of the design. Biggest complaint from analyst was not seeing the numbers clearly.</div>
                        </section>

                        <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>
                    
                        <section className="flex-layout-section-full align-items-center"> 
                            <div className="title content-block-65">
                                <a id="solution2"></a> 
                                    The Value of Personas
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                                <a id="solution2"></a> 
                                   Targeting the Right Users
                            </div>
                            <div className="float-left content-block-65 margin-top-15">
                                <p className="content-text-18">
                                The WDS team is always excited when they introduce personas to companies. If they nail the persona and the persona story, an understanding begins to take place. For many companies this is the first time they conceptualize someone using their product or service. StubHub was an interesting presentation, as they learned the valuable lesson on making assumptions about their audience. </p>

                                <p className="content-text-18"><div className="float-right ">
                                    <img className="width-100" src={sally} alt="The value of Personas"/>
                                </div>
                                When WDS made their persona presentation to StubHub, they were surprised by the teams reaction. They fully expected them to choose one of the analyst personas. Instead StubHub chose the executive  named "Sally."  WDS began to ask questions to get an understanding of what the workflows were between the analysts and Sally. They discovered that the analysts prepared monthly reports for the executives. The reports contained data analysis along with excel data, and charts were rarely included.
                                This insight made WDS realize that the current design was not meeting Sally's needs or expectations. The approved design was originally designed for the analysts. They needed to rethink the design, possibly even a redesign was in order. </p>

                                
                                <p className="content-text-18">
                                    WDS solved the persona problem by incorporating a data table into a new design. The solution also had to take into account  the data table would not be visible on all the reports. WDS planned from the start to require the design to be responsive and fluid. Adding the data table enhanced the visuals of the design and platform. More importantly, the solution expanded the accessibility of the platform to executives. The extra table made the display accessible to anyone by showing numbers shown in a more granular fashion. The analysts were thrilled that the table was added because it eased the work flow of the analyst, aided by the report creation. </p>
                            </div>
                            <div className="content-text-18 content-block-65 margin-top-25 margin-bottom-25sm border-2 padding">
                                “(WDS) are thoughtful designers who helped transform our reporting project from a technical tool for pulling data into a place where users at all levels of our organization can find insights about our business.”<br/>
                                    -Michael Johnston Stubhub, Impact-Focused Technologist Specializing in Data
                        </div>
                        </section>
                        
                        <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                        <section className="flex-layout-section-full align-items-center"> 
                        <div className="title content-block-65 margin-top-15">
                            <a id="solution3"></a> 
                                Customizable Dashboard Design 
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                            <a id="solution3"></a> 
                                Designing for the Users 
                            </div>
                            <div className="content-block-65 margin-top-15">
                                <p className="content-text-18">
                                 Almost every analyst interviewed requested a customizable dashboard, an area on the platform that they could organize and save reports as a snapshot. Research showed them the implementation of dashboard design solutions by competitors was lacking features and very laborious to the users to build a display. WDS simplified the dashboard creation by developing a one click solution. Now the users just had to right click to add any report to the dashboard page and added drag and drop functionality to allow the dashboard to be fully customizable. </p>  
                            </div>
                        </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_dashboard} alt="Customizable Dashboard"/>
                            <div className="margin-top-15 caption width-70"><i>The biggest feature request a simple, customizable data dashboard</i></div>
                        </div>

                        <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="title content-block-65 margin-top-15">
                            <a id="solution4"></a> 
                                Organize Features
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                            <a id="solution4"></a> 
                                Consolidating User Workflow
                            </div>
                            <div className="content-block-65 margin-top-15">
                                <p className="content-text-18">Software bloat is a common issue, especially on mature platforms. Bloat starts from user disconnect and assuming user needs without research, testing, or analytics. A large issue with the old design was dedicating valuable real estate to unused options. A data visualization platform should be clean, allowing the charts and data to to be consumed without being distracted by an options ribbon across the top of the design. After connecting with the analysts WDS discovered these options were only used by power users. </p>
                                
                                <p className="content-text-18">The options ribbon was a favorite for many of the stakeholders, including the decision makers. WDS attempted on a few occasions to justify  designs decisions without success. They turned to the analysts for answers with another round of interviews focused on the platform's options. With data in hand they met again with the decision makers, proving to them that under 1% of the analysts were using these options. Another point  made was that the persona Sally would never use these options. The data was able to convince the stakeholders that placing these features in an options button was meeting the needs of majority of users.  </p>
            
                                <p className="subtitle">A key to a good data visualization displays is removing the clutter!! </p>  
                            </div> 
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <img className="photo-container-cs-sb1" src={stubhub_weekly_metrics} alt="The option button"/>
                            <div className="margin-top-15 caption width-70"><i>Clicking on the option button, open the option panel</i></div>
                        </section>

                        <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="title content-block-65 margin-top-15">
                            <a id="solution5"></a> 
                                KPI Section Design
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                             Rising to the Challenge
                                
                            </div>
                            <div className="content-block-65 margin-top-15">
                                <p className="content-text-18">The KPI section is one of the most important features of any data visualization tools, providing key information for the decision makers. The design for this section needed to be clean and provide information that could be consumed at a glance. This section would stay open for hours on end. The issue with the current design was that it was unintelligible and unusable.</p>

                        
                                <p className="content-text-18">The design solution for this section simmered in the WDS team creative subconsciousness for weeks. How can this page be laid out logically and still contain all the relevant information? Then one day Michael from WDS was taking a walk in the city the layout appeared to him in a flash of creativity. </p>
                            </div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                            <p className="subtitle">The New KPI </p>
                            <img className="photo-container-cs-sb1" src={stubhub_company_kpis} alt="The new clean KPI section<"/>
                            <div className="margin-top-15 caption width-70"><i>The new clean KPI section</i></div>
                        </section>
                        <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                        <p className="subtitle">The Old KPI </p>
                            <img className="photo-container-cs-sb1" src={stubhub_before_2} alt="The old KPI section"/>
                            <div className="margin-top-15 caption width-70"><i>Confusing and incoherent</i></div>
                        </section>

                        <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                        <section className="flex-layout-section-full align-items-center">
                            <div className="title content-block-65 margin-top-15">
                            <a id="solution5"></a> 
                                Telemetry, Analytics and Data
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                                Keeping Users in the Loop
                            </div>
                            <div className="content-block-65 margin-top-15">
                                <p className="content-text-18">Part of WDS methodology is to evangelize the importance of data. Data can give insights on user behavior that can used to dictate design decisions. </p>

                                <p className="content-text-18">After implementing telemetry tags and cookies the team began to see the importance and power of data. WDS developed a telemetry strategy and worked with StubHub to implement the plan.</p>
                            </div>
                        </section>

                         <div className="thin-hr content-block-65 align-self-center hrline-spacing"></div>

                        <section className="flex-layout-section-full align-items-center margin-top-15sm">
                            <div className="title content-block-65">
                            <a id="solution6"></a> 
                                Results
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                                More Users!!
                            </div>
                            <div className="content-block-65 margin-top-25">
                                <p className="content-text-18">
                                    The goal: Pull in more users through marketing and communication.</p>

                                <p className="content-text-18">
                                    WDS suggested to the team to start a monthly blog and newsletter. WDS provided email templates and content suggestions of story telling. Lines of communication were opened between the analysts by including them in milestone meetings and testing sessions. The team was mentored on the importance of talking and conversing with the analysts. WDs and StubHub were impressed with the final results. </p>

                                <p className="content-text-18">
                                    A few months after completing the project, WDS contacted StubHub to make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users using the platform out of 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier.  </p>
                            </div>
                        </section>
                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25 margin-bottom-100">
                            <img className="photo-container-cs-sb1" src={stubhub_results} alt="98% usage rate in under 5 months "/>
                            <div className="margin-top-15 caption width-70">
                                <i>StubHub happily emailed WDS this screenshot six months after release </i></div>
                        </div>
                        <div className="container-bottom-callout">
                        
                    </div>

        <section className="flex-layout-section-full align-items-center grey border-top-5">
                <div className="grid-2col-text-photo align-self-center width-70 margin-top-50 margin-bottom-50" > 
                    <div className="2col-text grid-placeself-center ">
                        <div className="content-block">
                            <p className="content-header"> 
                              A few months later...</p>
                            <p className="content-text-18 margin-top-15 ">  
                            
                           
                                A follow-up call to StubHub led to an astonishing reveal. There was no need to push for more users because 172 out of the 175 analysts were using the reporting tool, up to 98%, a 97% increase in 5 months. StubHub was thrilled with WDS design solutions and  with the results.
</p> 

                        </div>
                    </div>              
                    <div className="col2-photo grid-placeself-center width-100">
                        <img className="flex-image-container " src={thumbsUp}  alt="StubHub follow up 97% growth in users!" /> 
                    </div>
                </div>
            </section> 
                    
                    
                    </div>
                </div>    
                                              
                                        )
                                    }
                                }
export default case_study_2;