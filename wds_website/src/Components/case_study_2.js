import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import stubhub_bg from '../images/bg-stubhub.png';
import stubhub_logo from '../images/icon-logo-stubhub.svg'; 
import motorola_s1 from '../images/photo-Motorola_2.png';
import stubhub_before_s1 from '../images/photo-stubhub-before-2.png';
import stubhub_before_after from '../images/photo-stubhub-before-after.png';
import stubhub_before_2 from '../images/photo-stubhub-before-kpi.png';
import stubhub_before_3 from '../images/photo-stubhub-before-topMetrics.png';
import stubhub_after_1 from '../images/photo-stubhub-after-3.png';
import stubhub_after_2 from '../images/photo-stubhub-after-4.png';
import stubhub_after_3 from '../images/photo-stubhub-after-5.png';
import stubhub_after_4 from '../images/photo-stubhub-after-7.png';
import stubhub_after_5 from '../images/photo-stubhub-after-4.png';
import stubhub_results from '../images/photo-stubhub-results.png';
import stubhub_after_13 from '../images/photo-stubhub-after-13.png';
import stubhub_dashboard from '../images/photo-stubhub-future-dashboard2.png';

class case_study_2 extends Component {
    render () {
        return(
                        <div className="flex-layout-column flex-layout-section-full">
                            <div className="flex-layout-section-full">
                            <div className="image-background-border-tb">
                                <div className="flex-layout-row width-100"> 
                                    <h1 className="image-text-left text-white">StubHub</h1>
                                    <img className="image-text-right" src={stubhub_logo}  alt="Stubhub Case Study Logo Image" /> 
                                    <img className="flex-image-container" src={stubhub_bg}  alt="Stubhub Case Study " /> 
                                 </div>
                            </div> 
                        </div>
                            <div className="flex-layout-section-full">
                                <div className="content-container margin-top-50">
                                    <div className="content-header flex-layout-center-center"> 
                                        <div className="content-block-half content-text-24"> Stubhub was internally developing a reporting tool for the company. The goal was to create a report on demand reporting tool. After a year of two failed attempts, Stubhub decided to contract the work out and hire WDS to solve their design problems. This project had all the challenges with internal politics, tight deadlines and pressures to save a team kept our interest from beginning to final deployment. 
                                        </div>
                                    </div>
                                </div>
                            <div className="container-grid-cs margin-top-150">
                                <div className="item-a content-header flex-layout-column flex-items-justified-center" >
                                    <div className="title-case margin-bottom-20">Backstory</div>
                                        <div className="subtitle-case margin-bottom-20">A Small Silo Team</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">The analyst in Stubhub were unhappy with their current data visualization tools. They found the application difficult, confusing and cumbersome. One analyst presented an idea to a VP for a new custom data visualization tool. She told him to gather a team and make it happen.</p> 
                                                <p> The first iteration was designed by the analyst. It was crude, but functional and the idea was sold to a larger shareholder base. For the next phase the small team, added a UX/UI person to the team and a new design and features went live. </p> 
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-b container-image-block">
                                          <img className="photo-container" src={stubhub_before_after} alt="StubHub Backstory"/>
                                    </div>
                                </div>
                                <div className="item-c content-header flex-layout-column flex-items-justified-center" >
                                    <div className="title-case margin-bottom-20">Methodology Begins</div>
                                        <div className="subtitle-case margin-bottom-20">Finding the Truth - Business Perspective</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">First part of the methodology is always to ask a lot of questions. </p>
                                                    <p>History of the business? Who are their competitors? What is the problem the application is trying to solve? </p>
                                                    <p>The most surprising and deflating answers I might ever gotten was when the team was showing the current reporting tool. When we asked "how many users? They replied, "This week we currently had 1 user visit the reporting tool" Our heart sank, this was a larger challenge they we thought.</p>
                                                    <ul> Business Findings
                                                        <li>1 User</li> 
                                                        <li>WDS need to lead project end-to-end</li>
                                                        <li>Politics in company extremely high about team</li>
                                                        <li>Reporting tool application needed to be a responsive design</li>
                                                        <li>Feature Bloat</li>
                                                        <li>Reports are Customizable</li>
                                                        <li>Two Sets of Users (Analysts & VP's)</li>
                                                    </ul>
                                            </div>
                                    </div>
                                    <div className="flex-layout-column grey-blue padding">
                                    <div className="item-d container-image-block">
                                          <img className="photo-container" src={stubhub_before_s1} alt="Finding the Truth - Business Perspective"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">UX Plan</div>
                                        <div className="subtitle-case margin-bottom-20">Finding the Truth - User Perspective</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18"> The easiest way to the truth is filming the user in action. Since there wasn't anyone using the application, the first question is why? What is wrong with the application? We completed a design review and formed a hypothsis of the problems. The unique part of Stubhub project was we could interview the users directly and ask them what they didn't like about the current tool. What do they want and expect from a data visualization tool? </p>
            
                                                    <p>A total of 25 analysts from 8 different countries were interviewed. A sus test was presented to them for the current UI. These same analyst were included on 4 separate testing occasions during the process.  </p>

                                                    <ul className="content-text-18" style={{marginLeft:'35%'}}><b>UX Deliverables</b>
                                                        <li>UX findings</li>
                                                        <li>User Personas</li>
                                                        <li>User Stories</li>
                                                        <li>Work Flows</li>
                                                        <li>Journey Maps</li>
                                                        <li>SUS testing results</li>
                                                    </ul>
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_before_3} alt="Finding the Truth - User Perspective"/> 
                                    </div>
                                </div> 
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Challenges</div>
                                        <div className="subtitle-case margin-bottom-20">Unforseen Challenges</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">The largest challenge was over coming the 3 minute what. WDS was honest and telling the team that if they could not get the time to be under 30 seconds than it a lost cause. WDS could create the most unique user friendly application,  but it won't matter if this challenge could not be solved. </p>

                                                <p className="content-text-18">How are we going to evangelize and market the newly designed reporting tool?</p>

                                                <p className="content-text-18">Project lead goes on a six week sabbatical leave.</p>

                                                <p className="content-text-18">How is WDS going to solve the KPI riddle?</p>

                                                
             
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_before_2} alt="Stubhub before KPI design"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Master Plan</div>
                                        <div className="subtitle-case margin-bottom-20">Solving the Issues</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Most failures are from a disconnect from what the user wants and expects and what they are offered. The finding that were presented to the StubHub team: </p>
                                                <div className="container-grid-cs">
                                                    <ol> Design Solutions Needed
                                                        <li>Current UI confusing and out of date </li> 
                                                        <li>Data displays did not show the numbers</li>
                                                        <li>Want and Need Dashboard </li>
                                                        <li>Many of the current features were not being used</li>
                                                        <li>KPI Section was unintelligible</li>
                                                        <li>numbers numbers and numbers</li>
                                                        <li>Get more Users</li>
                                                    </ol>

                                                </div>
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src alt="Need Image Here!!!"/> 
                                    </div>
                                </div>
                               
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Solving Pain Point 1 - New Design</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">The new design is a unique take on data visualization. WDS wanted to present a design that was not only modern, simple and branded, but would grab the users attention.  </p>
            
                                                <p>WDS suggested that once this design had gained traction to redesign the site to a more traditional data visualization tool. This design incorporated the three elements that all designers should keep in mind while designing, the user, business and current climate. The climate and the need to get user quickly led to the colorful branded design. This design is fully customizable and branded with the Stubhub colors. </p>  
                                            </div>
                                
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_after_1} alt="Show Me the Numbers"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Solution for Pain Point 2 - Show me the Numbers</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">Numbers take the lead with the new design. Primary reporting numbers are clearly shown. The orange table was added later in the design phase, once the team settled on the persona of Sally the VP. The extra table was added due to the fact that the VP persona would want numbers in a more granual fashion. Understanding the work flow of the analyst the addition of the table eased the work flow of the analyst by aiding in their report creation. </p>
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_after_4} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Solution to Pain Point 3 - Dashboard Design </div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">One of the most requested features was a customizable dashboard page. WDS noticed the implementation of dashboard design solutions by competitors was lacking and laborious. We simplified the dashboard creation by one click to add the dashboard page. </p>  
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_dashboard} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Solution to Pain 4 - Organize Features</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Software bloat is a common issue, especially on mature applications. Bloat starts from user disconnect and assuming user needs without testing or providing analytics. One of the main design issues was dedicating valuable real estate to power users, that were placed in a ribbon on the old design. WDS was able to provide data showing less than 1-0% of the analyst use these tools and through use of the personas was able to convince the stakeholders to place these features in an options button.   </p>
            
                                                    <p>A key to a good data visualization tool is removing clutter!! </p>  
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_after_13} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Solution for Pain Point 5 - KPI Section Design</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">The KPI section is one of the most important features of any data visualization tools. The current design was unintelligible and a common complaint</p>

                                                <p className="content-text-18">The design solution for this section took weeks. Weeks of thinking about it day and night. How can this page be laid out logically and still contain all the relevant information. Then while taking a walk one day it hit me. </p>
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_after_2} alt="consulting"/> 
                                    </div>
                                </div>

                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Results</div>
                                        <div className="subtitle-case margin-bottom-20">Solution for Pain Point 6 - Get More Users</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">The solution to get more users was about marketing and communication.</p>

                                                <p className="content-text-18">WDS suggested to the team to start a monthly blog and email about the current team and about the new tool. We also mentored the team on communication. Talking and conversing with the analysts. The results were nothing short of miraculous </p>

                                                <p className="content-text-18">A few months after completing the project, We contacted the team to check-in and make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users and there were only 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier.  </p>
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={stubhub_results} alt="consulting"/> 
                                    </div>
                                </div>
                                
            
                            </div>
                            
                                
                            </div>    
                        </div>                               
                                        )
                                    }
                                }
export default case_study_2;