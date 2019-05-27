import React, { Component } from 'react'
import motorola_bg from '../images/bg-motorola.png';
import motorola_logo from '../images/icon-motorola-white.svg'; 
import motorola_s1 from '../images/photos/photo-motorola-s1.png';
import motorola_s2 from '../images/photos/photo-Motorola_2.png';
import results from '../images/graphic-ux.svg';
import motorola_beforeafter from '../images/photos/photo-motorola-beforeafter.png';
import motorola_before_wireless from '../images/photos//photo-motorola-before-wireless.png';
import motorola_before_basic from '../images/photos//photo-motorola-before-basic.png';
import motorola_start from '../images/photos/photo-jump-surfboard.png';
import callcenter from '../images/photos/photo-motorola-s2.png';


class case_study_1 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full">
                <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-layout-row width-100"> 
                        <h1 className="header-text-left align-self-center text-white">Motorola</h1>
                        <img className="header-text-right align-self-center" src={motorola_logo}  alt="Motorola Logo" /> 
                        <img className="flex-image-container" src={motorola_bg}  alt="Motorola background" /> 
                     </div>
                </div> 
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
                        <img className="photo-container-cs-sb1" src={motorola_s1} alt="StubHub Show me the Numbers"/>
                    </div>
                </div>
                <div className="flex-layout-section-full flex-section-align-center margin-top-150">
                    <div className="content-block-cs">
                        <div className="content-block-cs"> 
                            <div className="title">
                                Backstory
                            </div>
                            <div className="subtitle margin-top-25">
                                High return rate, losing customer loyalty
                                </div>
                            <div className="content-block-cs content-text-18 margin-top-25"> Just before the home division of Motorola was sold to Google, the      home division of Motorola attempted to fix the problems that were plaquing SURFboard modems. The return rate was                    reaching close to twenty percent and large increase in call center volume. DOCSIS 3.1 technology for the SURFboard product line     was put onhold until the problems related to the product line were solved. After 18 months and two failed attempts management       team decided to find a vendor that was a true UX designer with a proven methodology with design skills. After an initial             consultation, WDS was hired to to use their methodology to figure out what went wrong and come to a design solution.
                            </div>
                        </div>
                    </div>
                    <div className="flex-layout-column margin-top-100">
                        <div className="title">
                            Methodology Begins</div>
                        <div className="subtitle">
                            Finding the Truth - Business Perspective</div>
                        <div className="content-block-cs">
                            <p className="content-text-18">In order to search for the truth a good research plan needs to be implemented. </p>
                            <p className="content-text-18">Understanding the business is one of the keys in a successful project. Gathering requirements, meeting stakeholders and gathering design elements, such as marketing materials and style guides. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. This is a critical and often overlooked part finding the truth.</p>
                                        
                        <ul className="content-text-18 margin-top-50">
                            <span className="subtitle">Research Findings:</span>
                            <li>Current UI was not following Motorola brand standards</li>
                            <li>Marketing, Product and Home division did not communicate</li> 
                            <li>Competitors UI looked more modern, put little thought into help </li>
                            <li>Entire project file size needed to be under 1mb </li>
                        </ul>                              
                        </div>
                    </div>
                    <div className="container-grid-2col-full flex-layout-column margin-top-100 grey ">
                        <div className="grid-item-a-self">
                            <p className="callout-text"> Current user interface was not designed with motorola branding, creating confusion as to where they were, keeping the call center very busy and wasting money.</p>
                        </div>
                    <div className="item-b container-image-block">
                              <img className="photo-container" src={callcenter} alt="Case Study Image 2"/> 
                    </div>
                    </div>
                    <div className="content-header flex-layout-column flex-items-justified-center margin-top-100">
                        <div className="title">
                            UX Plan</div>
                        <div className="subtitle-case margin-top-15">
                            Finding the Truth - Customer Perspective
                        </div>
                        <div className="content-block-cs margin-top-25">
                            <p className="content-text-18">The best method of finding the truth is to film the user in their natural habitat, using the product. In the case of Motorola this was not possible, due to the large usage base. Instead WDS adapted its methodology to study a three month block of call center calls, as well as ghosting call center calls for a week. With this information we started to see patterns and begin to establish a numeric based error system to uncover the truth to the problems. In this phase it is critical to become the user. Emphazing with the task they need to complete. Viewing the problems and issues through the eyes of the user. Another pattern that is always uncovered is user personalities types. Which leads to the creation of personas, journey maps and task flows. </p>
                        </div>
                    </div>
                    <div className="flex-layout-column margin-top-100">
                        <div className="flex-layout-center-center container-image-block">
                            <img className="photo-container-cs-sb1" src={motorola_before_basic} alt="Questions"/> 
                        </div>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="title">
                            Challenges
                        </div>
                        <div className="subtitle">
                            Asking Questions and Unforseen Issues
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">Two Users - Cable Operators and average consumers. One of the most confusing elements of the UI was the acronyms and the task flow, for the average consumer. For the cable operator they were comforting and expected. Changing the interface, but moving or changing names would affect the cable operators. The solutions would need to be invisible to the cable operators. </p>

                            <p className="content-text-18">Presenting findings and asking questions of the stakeholders alway uncovers unforseen challenges.</p>

                        <ul className="content-text-18">Unforseen Issues:
                            <li>No communication between teams </li>
                            <li>Responsive UI with IE 9 compatibility </li> 
                            <li>Two User Types</li>
                            <li>Entire project under 1mb</li>
                        </ul>     

                        </div>
                    </div>     
                    <div className="content-header flex-layout-column border-top-1 border-bottom-1 margin-top-100">
                        <div className="title">
                            Master Plan
                        </div>
                        <div className="subtitle margin-top-15">
                            Solving the the Problems
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">Two Users - Cable Operators and average consumers. One of the most confusing elements of the UI was the acronyms and the task flow, for the average consumer. For the cable operator they were comforting and expected. Changing the interface, but moving or changing names would affect the cable operators. The solutions would need to be invisible to the cable operators. </p>

                            <p className="content-text-18">Presenting findings and asking questions of the stakeholders alway uncovers unforseen challenges.</p>

                    <div className="container-grid-2col-full width-100 margin-top-15">    
                        <div className="grid-item-a"> 
                            <ul className="content-text-18">User Pain Points:
                                <li>No communication between teams </li>
                                <li>Responsive UI with IE 9 compatibility </li> 
                                <li>Two User Types</li>
                                <li>Entire project under 1mb</li>
                            </ul> 
                            </div>
                             <ul className="grid-item-b content-text-18">Business Pain Points:
                                <li>No communication between teams </li>
                                <li>Responsive UI with IE 9 compatibility </li> 
                                <li>Two User Types</li>
                                <li>Entire project under 1mb</li>
                            </ul>         
                        
                        </div>
                        </div>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100 ">
                        <div className="title">
                            Solutions
                        </div>
                        <div className="subtitle margin-top-150">
                            Solution #1 - New Design
                        </div>
                        <div className="content-block-cs margin-top-15">
                            <p className="content-text-18">Pain point #1 - Design out-of-date and confusing - A new user interface was designed to solves many of the pain points. The new design brings motorola product UI to new century. WDS wanted to present a design that was not only modern, simple and branded, but would bring back credibility to the product line.</p>
            
                            <p className="content-text-18">Business Pain Point #1 At the beginning of the design phase WDS help facilitate communication between product, marketing and the home division. By coordinating meetings between the teams. WDS issue this is was a missed opportunity by marketing and product to brand this customer facing touchpoint. This design was approved during our kickoff meeting   </p>  
                        </div>
                    </div>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_s2} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle">
                            Solution #2 - Start/Launch Page
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">Starting the user journey on basic section was unexpected and confusing. The redesign started the user on a section with familiar icons and allowed them to choose where they wanted to go. The redesign relieved the confusion and replaced it with comfort and knowing</p>
                        </div>
                    </div>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_start} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle">
                            Quick Start
                        </div>
                    <div className="content-block-cs">
                            <p className="content-text-18">The hardest challenge was the simplifying the Wifi sections. Not being able to simplify the work flow. by organizing the inputs in a logical order. We were forced to think outside the wifi section and that is "Wifi Quick Start" idea was born. The goal was to reduce the user inputs from 9 to 5 and eliminate the need to input the mac number. The only way to accomplish this was for t a developer to create an algorithm to automate the process with little user input.</p>

                            <p>The challenge was accepted and delivered. The best part was this algorithm was then scaled to use for a mobile app</p>  
                    </div>
                    </div>
                    
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_s2} alt="Motorola Start Page"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle margin-top-15">
                            Solution #3 - Self Explanatory Web Based Interface
                    </div>
                    <div className="content-block-cs">
                        <p className="content-text-18">WDS knew for this project to be a success the customer needed to feel supported and guided. A new approach to help needed to be developed. None of the competitors solutions to the guide the user through help sections, especially any form of in-context help, one even had the nerve to offer on-line help. WDS solved this problem elegantly, allowing the user to clink on the help link and a row opens below to reveal the answers. This solution tested very well during the testing phase</p>
                    </div>
                    </div>
                    
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_s2} alt="Motorola Start Page"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle">
                            Mobile Application Design Solution
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">Stakeholders were thrilled that one of WDS design solutions was a companion IOS application The quick start algorithm could also be used for determining best placement for the Modem. WDS designed and developed work flows and testing for the new application.</p> 
                        </div>
                    </div>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50 border-bottom-1">
                        <img className="photo-container-cs-sb1" src={motorola_beforeafter} alt="Motorola Start Page"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container-cs-sb1" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>

                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="title">
                            Deployment
                        </div>
                        <div className="subtitle margin-top-15">
                            Highlights of Project
                        </div>
                            <div className="content-block-cs">
                                <p className="content-text-18">One of the issues that surprized us the most was the design of the user interface. WDS figured all Motorola public facing products would be branded. WDS solved this by correcting the communication issues between the teams, specifically marketing, product and home division. At the start of the project WDS organized monthly and milestone meetings between the teams. Product, marketing and home division communication was still strong well after WDS left. The approved design was going to be adapted to the rest of the product line.</p> 
                                        
                            <ul className="content-text-18">Project Highlights:
                                <li>Entire project under 1mb</li>
                                <li>First css style sheet in Motorola Products </li>
                                <li>Pattern Library </li> 
                                <li>Style Guide </li>
                                <li>Communication between teams improved</li>
                            </ul>     
                        </div>
                    </div>
                    <div className="container-grid-2col-photo border-3px bottom-border grey" style={{height:'450px'}}>
                            <div className="item-a-nb">
                                <p className="call-out-text" style={{width:'900px'}}>A few months after completing the project, We contacted the team to check-in and make sure they were still doing the blog and emails. They said there was no need to push for more users, they currently had 172 users and there were only 175 analysts in the company. In 5 months the reporting tool went from a 1% total usage to 98% and the team couldn't be happier. 
                                </p>
                            </div>
                            <div className="item-b">
                                <img src={results} alt="Finding the Truth - Business Perspective"/>
                            </div>
                        </div>

                    
                    

                
                
                    
                </div>    
            </div>                               
                            )
                        }
                    }
export default case_study_1;