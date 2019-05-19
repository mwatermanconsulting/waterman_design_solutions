import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import stubhub_bg from '../images/bg-stubhub.png';
import stubhub_logo from '../images/icon-logo-stubhub.svg'; 
import motorola_s1 from '../images/photo-Motorola_2.png';

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
                                        <div className="content-block-half content-text-24"> Stubhub was internally developing a reporting tool for the company. The goal was to create a report on demand reporting tool. After a year of two failed attempts, Stubhub decided to contract the work out and hire WDS to solve their design problems. This project had all the challenges with internal politics, tight deadlines and pressures to save a team kept our interest. 
                                        </div>
                                    </div>
                                </div>
                            <div className="container-grid-cs margin-top-150">
                                <div className="item-a content-header flex-layout-column flex-items-justified-center" >
                                    <div className="title-case margin-bottom-20">Backstory</div>
                                        <div className="subtitle-case margin-bottom-20">A small silo team</div>
                                            <div className="content-block-60">
                                                <p className="content-text-18">The analyst in Stubhub were unhappy with their current data visualization tools. They found the application difficult, confusing and cumbersome. One analyst presented an idea to a VP for a new custom data visualization tool. She told him to gather a team and make it happen.</p> 
                                                <p> The first iteration was designed by the analyst. It was crude, but functional and the idea was sold to a larger shareholder base. For the next phase the small team, added a UX/UI person to the team and a new design and features went live. </p> 
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-b container-image-block">
                                          <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-c content-header flex-layout-column flex-items-justified-center" >
                                    <div className="title-case margin-bottom-20">Methodology Begins</div>
                                        <div className="subtitle-case margin-bottom-20">Finding the Truth - Business Perspective</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">First part of the methodolgy is always to ask a lot of questions. History of the business? Who are their competitiors? What is the problem the application is trying to solve? Who are the users? The most surprising and deflating answers I might ever got was when the team was showing the current reporting tool. When we asked "how many users? They replied, "This week we currently had 1 user visit the reporting tool" Our heart sank, this was a larger challenge they we thought.</p>
                                            </div>
                                    </div>
                                    <div className="flex-layout-column grey-blue padding">
                                    <div className="item-d container-image-block">
                                          <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">The Truth</div>
                                        <div className="subtitle-case margin-bottom-20">Finding the Truth - User Perspective</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18"> The easiest way to the truth is filming the user in action. Since there wasn't anyone using the application, the first question is why? What is wrong with the application? We completed a design review and formed a hypothsis of the problems. The unique part of Stubhub project was we could interview the users directly and ask them what they didn't like about the current tool. What do they want and expect from a data visualization tool? </p>
            
                                                    <p>A total of 25 analysts from 8 different countries were interviewed. A sus test was presented to them for the current UI. These same analyst were included on 4 separate occasions during the process.  </p>  
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Problems</div>
                                        <div className="subtitle-case margin-bottom-20">Presenting the Truth - Business and Design Issues</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Most failures are from a disconnect from what the user wants and expects and what they are offered. The finding that wer presented to the StubHub team:  </p>
            
                                                    <ul>
                                                        <li>Current UI confusing and out of date </li> 
                                                        <li>Data displays did not show the numbers</li>
                                                        <li>We want to see numbers</li>
                                                        <li>Reports take an average of <b>3 minutes to load</b></li>
                                                        <li>Show Us the Numbers</li>
                                                        <li>KPI Section was unintelligible</li>
                                                        <li>Reporting tool queue was confusing </li>
                                                        <li>Many of the current features were not being used</li>
                                                    </ul>
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Challenges</div>
                                        <div className="subtitle-case margin-bottom-20">Unforseen Challenges</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">The largest challenge was over coming the 3 minute what. WDS was honest and telling the team that if they coould not get the time to be under 30 seconds than it a lost cause. WDS could create the most unique user friendly application,  but it won't matter if this challenge could not be solved.  </p>
             
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Quick Start</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Every consultation engagement presents its challenges. Understanding the user and the business is essential. 
                                                    WDS started by doing a creative design critique on the current modem UI. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. </p>
            
                                                    <p>During the research phase, the objective is to use the methodology to find problems, document, research and being to develop a UX action plan. Below is the research plan for Motorola. </p>  
                                            </div>
                                
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">In-Context Help </div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Every consultation engagement presents its challenges. Understanding the user and the business is essential. 
                                                    WDS started by doing a creative design critique on the current modem UI. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. </p>
            
                                                    <p>During the research phase, the objective is to use the methodology to find problems, document, research and being to develop a UX action plan. Below is the research plan for Motorola. </p>  
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Start Page/Home Page </div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Every consultation engagement presents its challenges. Understanding the user and the business is essential. 
                                                    WDS started by doing a creative design critique on the current modem UI. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. </p>
            
                                                    <p>During the research phase, the objective is to use the methodology to find problems, document, research and being to develop a UX action plan. Below is the research plan for Motorola. </p>  
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                <div className="item-e content-header flex-layout-column flex-items-justified-center">
                                    <div className="title-case margin-bottom-20">Solutions</div>
                                        <div className="subtitle-case margin-bottom-20">Mobile Companion App</div>
                                            <div className="content-block-60">
                                                    <p className="content-text-18">Every consultation engagement presents its challenges. Understanding the user and the business is essential. 
                                                    WDS started by doing a creative design critique on the current modem UI. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. </p>
            
                                                    <p>During the research phase, the objective is to use the methodology to find problems, document, research and being to develop a UX action plan. Below is the research plan for Motorola. </p>  
                                            </div>
                                </div>
                                <div className="flex-layout-column grey-blue padding">
                                    <div className="item-f container-image-block">
                                        <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                                    </div>
                                </div>
                                
            
                            </div>
                            
                                
                            </div>    
                        </div>                               
                                        )
                                    }
                                }
export default case_study_2;