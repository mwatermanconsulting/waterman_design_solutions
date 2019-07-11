import React, { Component } from 'react'
import motorola_bg from '../images/backgrounds/bg-motorola.png';
import motorola_logo from '../images/icon-motorola-white.svg'; 
import motorola_s1 from '../images/photos/photo-motorola-s1.png';
import motorola_s4 from '../images/photos/photo-motorola-s4.png';
import motorola_s6 from '../images/photos/photo-motorola-s6.png';
import motorola_s2 from '../images/photos/photo-Motorola_2.png';
import motorola_s3 from '../images/photos/photo-motorola-s3.png';
import motorola_s5 from '../images/photos/photo-motorola-s5.png';
import results from '../images/graphic-ux.svg';
import motorola_beforeafter from '../images/photos/photo-motorola-beforeafter.png';
import motorola_before_basic from '../images/photos//photo-motorola-before-basic.png';
import motorola_start from '../images/photos/photo-jump-surfboard.png';
import callcenter from '../images/photos/photo-motorola-s2.png';


class case_study_1 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full image-background-border-tb">
                <section className="flex-layout-row width-100"> 
                    <div className="header-text-left header-title-cs align-self-center text-white">
                        Case Study - Motorola</div>
                    <img className="header-text-right align-self-center" src={motorola_logo}  alt="Motorola Logo" /> 

                    <img className="flex-image-container" src={motorola_bg}  alt="Motorola background" /> 
                </section>
                <div className="container-section padding-20 flex-layout-center-center border-top-5 border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                Goal: To solve the UI problems that were plaguing Motorola's SurfBoard product line. 
                </div>
            </div>
                <section className="content-header flex-layout-center-center flex-layout-column">
                    <div className="flex-layout-center-center margin-top-50 title text-align-center content-block-60">
                            Case Study - Motorola
                    </div>
                    <div className="content-block-55 margin-top-25 flex-layout-align-items-center">
                        <p className="content-text-24">
                            WDS was hired after two failed attempts to design a modern user-centric interface for the the high-end Cable modem the MOTOROLA DOCSIS 3.1, Model MB8600. Through methodology research findings and walking in the users' shoes, WDS's solutions became industry standard, surviving two buyouts, even presenting to Google stakeholders and marketing teams to justify our endeavor mid-development. The design solutions were adopted by both companies.</p>
                             
                        <p className="content-text-24"> 
                            The design solutions led the industry since 2013 and many of the solutions are now standard across the product line and adopted by the competitors. WDS goal of returning Motorola as the industry standard was accomplished, under the Arris name. Below is the story on how WDS accomplished this feat.</p>
                    </div>
                </section>
                <div className="flex-layout-section-full margin-top-75">
                     <div className="container-image-block flex-layout-center-center">
                        <img className="photo-container-cs-sb1 width-100" src={motorola_s1} alt="StubHub Show me the Numbers"/>
                    </div>
                </div>

                <section className="flex-layout-section-full flex-section-align-center margin-top-150">
                    <section className="content-block-cs"> 
                        <div className="title">
                            Backstory
                        </div>
                        <div className="subtitle margin-top-5">
                            High return rate, losing customer loyalty
                        </div>
                            <div className="content-block-cs content-text-18 margin-top-15"> 
                            <p className="content-text-18">
                            Motorola was facing a high return rate on a product line with a monthly rise in call center calls. 
                            There was political pressure to release the new DOCSIS 3.1 tech on the SurfBoard product line. The product team knew that if they released the new tech without fixing the current problems with the interface, the product line would lose money. But, after 18 months and two failed attempts the pressure was on the home division to correct the problems get this technology to market before their competitors.
                            </p>
                            </div>
                    </section>
                    <section className="flex-layout-column margin-top-75">
                            <div className="flex-layout-center-center container-image-block">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_before_basic} alt="Questions"/> 
                            </div>
                    </section>
                    <section className="flex-layout-column margin-top-50">
                        <div className="title">
                                Methodology Begins</div>
                        <div className="subtitle margin-top-5">
                                Finding the Truth - Business Perspective</div>
                        <div className="content-block-cs">
                            <p className="content-text-18 margin-top-15">
                                Finding the truth in business means a deep understanding of the business, project and competition. Understanding the business and the project is one of the keys to a successful project. Gathering requirements, interviewing stakeholders and gathering design elements, such as marketing materials and style guides. </p>
                            
                            <p className="content-text-18">
                                WDS had Motorola purchase all the competitors modems. Many times, as was with the case of Motorola competition is ignored. One of the highlights in the beginning phases of the methodology is enlightening the stakeholders on their competition. WDS will revisit the competition as solutions begin to materialize. WDS goal for all our clients is to be a leader. Being a leader is not possible without knowing your competition.</p>
                        </div>
                    </section>
                </section>
                    
                    <section className="grid-callout grey margin-top-50 border-tb-5">
                        <div className="grid-callout-text grid-placeself-center">
                            <div className="callout-text txt-white padding"> 
                            For the average user the interface on the Motorola modems was very intimating. The UI was outdated and unbranded, leaving the user confused and frustrated. Keeping the call center very busy.</div>
                        </div>
                        <div className="grid-callout-photo width-100 grid-placeself-center">
                              <img src={callcenter} alt="Case Study Image 2"/> 
                        </div>
                    </section>
                <main className="flex-layout-section-full flex-section-align-center ">
                    <div className="flex-layout-column margin-top-100">
                        <section className="content-header flex-layout-column flex-items-justified-center">
                            <div className="title">
                                UX Plan
                            </div>
                            <div className="subtitle margin-top-5">
                                Finding the Truth - Customer Perspective
                            </div>
                            <div className="content-block-cs margin-top-25">
                            <p className="content-text-18">
                                The user base for the modems was broad and it was difficult to apply our normal methodology of observing and interviewing users. Instead WDS was inspired by the Bill Gates Quote “Your most unhappy customers are your greatest source of learning.” WDS requested three months of call center calls and a week to "ghost" call center calls. With this information we started to see patterns and begin to establish a numeric based error system to uncover the truth to the problems. In this phase and to becoming the user. Emphasizing with the task they need to complete. Viewing the problems and issues through the eyes of the user.</p> 
                            
                            <p className="content-text-18">
                                As WDS uncovered the truth about users, a connection developed and personalities traits began to take shape and take form into personas and journey maps 
                            </p>
                            </div>
                        </section>
                        
                        
                    <section className="content-header flex-layout-column border-top-1 border-bottom-1 margin-top-100">

                        <div className="title">
                            Master Plan
                        </div>
                        <div className="subtitle margin-top-5">
                            Solving the the Problems
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18 margin-top-15">
                                WDS noticed early in the project that the organization of inputs did not make sense. When the team information expert reviewed the interface and made suggested changes we learned that there was two set of users. The consumer who would purchase the product and the cable operators doing home internet connection. WDS would not be allowed to move ANY input. Originally we thought this requirement was limiting, instead it forced us to adapt our solutions. Sometime being forced to change course opens new possibilities designing a final product the was beyond the scope and expectations of the customers and shareholders. </p>

                        <section className="grid-callout margin-top-50">    
                            <div className="grid-callout-text"> 
                                <ul className="content-text-18">
                                    <p className="subtitle-case">User Pain Points:</p>
                                    <li><a href="#solution1">Interface was Intimidating</a></li>
                                    <li><a href="#solution1">Guidance and Support</a></li>
                                    <li><a href="#solution1">Design was outdated</a></li>
                                    <li><a href="#solution2">Starting point is confusing</a></li>
                                    <li><a href="#solution3">WiFi setup frustrating and confusing</a></li> 
                                    <li><a href="#solution4">Use of unfamiliar acronyms</a></li> 
                                    <li><a href="#solution5">Responsive Design</a></li> 
                                    <li><a href="#solution6">Cognitive Overload - two many inputs and information per section</a></li>
                                </ul> 
                            </div>
                                <ul className="content-text-18">
                                    <p className="subtitle-case">Business Pain Points:</p>
                                    <li><a id="solution7">Product, marketing and home division not communicating</a></li>
                                    <li><a id="solution1"></a>Current UI was not following Motorola brand standards</li>
                                    <li><a id="solution8"></a>Google Buyout</li> 
                                    <li>< a id="solution1">Competitors UI looked more modern</a>, but like Motorola little thought into help section. <br/>this was an area we could stand out </li>
                                    <li>Entire project file size needed to be under 1mb </li>
                                </ul>

                                <p className="content-text-18">
                                <i>Below is the roadmap WDS used to for its design and business solutions</i></p>         
                            </section>
                        </div>
                    </section>
                    <section className="content-header flex-layout-column margin-top-100 ">
                        <div className="title">
                            Solutions
                        </div>
                        <div id="design"  className="subtitle margin-top-50">
                            <a id="solution1"></a> Solution #1 - New Design
                        </div>
                        <div className="content-block-cs margin-top-15">
                            <p className="content-text-18"> A design and updated user interface was designed to solves many of the pain points. The new design brings motorola product UI to new century. WDS wanted to present a design that was not only modern, simple and branded, but would bring back credibility to the product line.</p>
             
                        </div>
                    </section>
                    <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_s2} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </section>
                    <section className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle margin-top-15 margin-bottom-20">
                        <a id="solution2"></a> Solution #2 - Start/Launch Page
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">Starting the user journey on basic section was unexpected and confusing. The redesign started the user on a section with global icons and allowed them to choose where they wanted to go. The redesign relieved the confusion and replaced it to make the user feel comfortable.</p>
                        </div>
                    </section>
                    <section className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_start} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </section>
                    <section className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle margin-top-15">
                        <a id="solution3"></a> Solution #3 - Quick Start
                        </div>
                    <div className="content-block-cs">
                            <p className="content-text-18">One of the hardest challenges was the simplifying the WiFi section. Work flows could not be simplified by organizing the inputs in a logical order, due to the limitation of two user types: cable operators and consumers. We needed to approach this differently, and as a result the "WiFi Quick Start" idea was born. Working closely with developers, we attempted to reduce the number of questions the user needed to answer to set up their WiFi. Currently the user needed to fill out nine inputs to complete the task. The goal was to reduce the user inputs from 9 to 5 and eliminate the need to input the mac number. The only way to accomplish this was for a developer to create an algorithm to automate the process with little user input.</p>

                            <p className="content-text-18">The challenge was accepted and delivered. The best part was this algorithm was then scaled to use for a mobile app.</p>  
                    </div>
                    </section>
                    
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_s3} alt="Motorola Start Page"/>
                        <p className="margin-top-15"><i> 
                            Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle margin-top-15">
                        <a id="solution4"></a>Solution #4 - Self Explanatory Web Based Interface
                    </div>
                    <div className="content-block-cs">
                        <p className="content-text-18">
                            WDS knew for this project to be a success the customer needed to feel supported and guided. A new approach to the help treatment needed to be developed. None of the competitors solutions to the guide the user through help sections, especially any form of in-context help, one even had the nerve to offer on-line help. WDS solved this problem elegantly, allowing the user to click on the help link and a row opens below to reveal the answers. This solution tested very well during the testing phase</p>
                    </div>
                    </div>
                    
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={motorola_s6} alt="Motorola Start Page"/>
                        <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="subtitle-case margin-top-15 margin-bottom-20">
                            Solution #5 - Mobile Application Design Solution
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">
                                Stakeholders were thrilled that one of WDS design solutions was a companion IOS application The quick start algorithm could also be used for determining best placement for the Modem. WDS designed and developed work flows and testing for the new application.</p> 
                        </div>
                    </div>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50 border-bottom-1">
                        <img className="photo-container-cs-sb1" src={motorola_beforeafter} alt="Motorola Start Page"/>
                        <p className="margin-top-15"><i> 
                                Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i></p>
                    </div>
                    <div className="content-header flex-layout-column margin-top-100">
                        <div className="title">
                            Deployment
                        </div>
                        <div className="subtitle margin-top-15">
                            Preparing for the Handoff
                        </div>
                        <div className="content-block-cs">
                            <p className="content-text-18">
                            Final handoff consisted of cleaning up CSS and HTML code and implementing .asp tags for the final build. A pattern library and documentation, including best of practices, was created for the CSS files. Most importantly, the final build size was a shade under 1Mb. 
                            </p> 
                        </div>
                        <div className="content-header flex-layout-column">
                            <div className="title margin-top-75">
                                Business Design Solutions
                            </div>
                            <div className="subtitle subtitle-case margin-top-5 margin-bottom-20">
                                WDS Solutions 
                            </div>
                        <div className="content-header flex-layout-column margin-top-100">
                            <div className="subtitle margin-top-15 margin-bottom-20">
                                Business Solution #1 - Communication Issues
                            </div>
                            <div className="content-block-cs">
                                <p className="content-text-18">
                                    How did a global brand like Motorola allow a such a poorly designed, non-branded user interface on a consumer product? It was mind boggling. Our first question to the stakeholders was, "how did this product UI fall through the cracks?" This issue exposed a large communication issue between product, marketing and home division. WDS set-up sprint cycle meetings every three weeks with milestones. These meetings ran the course of the project and established a strong relationship between the teams that was previously non-existant.  </p> 
                            </div>
                        </div>
                            <div className="content-header flex-layout-column margin-top-50">
                                <div className="subtitle margin-top-15 margin-bottom-20">
                                    Business Solution #2 - Google Buyout
                                </div>
                                <div className="content-block-cs">
                                <p className="content-text-18">
                                In the middle of the project, Google bought out Motorola. We were notified that our project was under review and we would need to present it to Google Marketing and Product teams. Six months into the project WDS had the team running smoothly with a purpose. Motorola's marketing and product teams were familiar with the project and, along with WDS, made a killer presentation to the Google executives.  </p> 
                                </div>
                            </div>
                            <div className="content-block-cs ">
                                <p className="content-text-18">
                                The greatest challenge WDS faced during this time was the uncertainty of the project.  Even through two buyouts the design solutions were adopted by each company. The design solutions created by WDS was considered industry-standard since 2013 and many of the solutions are now standard across the product line and adopted by competitors. WDS's goal of making Motorola an industry standard was accomplished, just under the Arris name.</p>
                            
                                <p className="content-text-18">
                                Two Users - Cable Operators and average consumers. One of the most confusing elements of the UI was the acronyms and the task flow, for the average consumer. For the cable operator they were comforting and expected. Changing the interface, but moving or changing names would affect the cable operators. The solutions would need to be invisible to the cable operators. </p>

                            <p className="content-text-18">Presenting findings and asking questions of the stakeholders alway uncovers unforeseen challenges.</p>
                         </div>
                        </div>     
                        <div className="subtitle margin-top-15 margin-bottom-20">
                            Results
                        </div>
                            <div className="content-block-cs">
                                <p className="content-text-18">One of the issues that surprized us the most was the design of the user interface. WDS figured all Motorola public facing products would be branded. WDS solved this by correcting the communication issues between the teams, specifically marketing, product and home division. At the start of the project WDS organized monthly and milestone meetings between the teams. Product, marketing and home division communication was still strong well after WDS left. The approved design was going to be adapted to the rest of the product line.</p> 
                                        
                            <ul className="content-text-18">
                                <li>Entire project under 1mb</li>
                                <li>First css style sheet in Motorola Products </li>
                                <li>Pattern Library </li> 
                                <li>Style Guide </li>
                                <li>Communication between teams improved</li>
                            </ul><p className="subtitle">Results:</p> 
                            <ul className="content-text-18">
                                <li>Consumers rejoiced!</li>
                                <li>Return rate dropped dramatically in a few months after launch </li>
                                <li>Positive reviews by <a href="https://www.cnet.com/reviews/motorola-sbg6782-ac-surfboard-extreme-cable-modem-review/" >Cnet</a> and <a href="https://www.youtube.com/watch?v=cqTHxAN6cRwYouTube">YouTube</a> </li> 
                                <li>Style Guide </li>
                                <li>Communication between teams improved</li>
                            </ul>      
                        </div>
                    </div>
                   
                </div>
                </main>
                     <div className="grid-callout border-top-5 grey margin-top-50"> 
                        <div className="grid-callout-text grid-placeself-center width-70">
                            <p className="callout-text">
                                "The Surfboard eXtreme has a robust and self-explanatory Web interface with lots of features, including showing level of interference for its Wi-Fi networks." - Cnet review</p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center width-100">
                             <img className="photo-" src={results} alt="Finding the Truth - Business Perspective"/>
                        </div>
                    </div>
            </div>                               
                            )
                        }
                    }
export default case_study_1;