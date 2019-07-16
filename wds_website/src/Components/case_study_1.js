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
                <section className="container-section padding-20  border-top-5 border-bottom- callout-color-dark">
                <div className="callout-text-lg">
                    Goal: To solve the UI problems that were plaguing Motorola's SurfBoard product line. 
                </div>
                </section>
                <section className="flex-layout-column align-items-center">
                    <div className="margin-top-50 content-block-55 title">
                            Case Study - Motorola
                    </div>
                    <div className="content-block-55 margin-top-25">
                        <p className="content-text-18">
                            WDS was hired after two failed attempts to design a modern user-centric interface for the the high-end Cable modem the MOTOROLA DOCSIS 3.1, Model MB8600. Through methodology research findings and walking in the users' shoes, WDS's solutions became industry standard, surviving two buyouts, even presenting to Google stakeholders and marketing teams to justify our endeavor mid-development. The design solutions were adopted by both companies.</p>
                             
                        <p className="content-text-18"> 
                            The design solutions led the industry since 2013 and many of the solutions are now standard across the product line and adopted by the competitors. WDS goal of returning Motorola as the industry standard was accomplished, under the Arris name. Below is the story on how WDS accomplished this feat.</p>
                    </div>
                </section>
                <section className="flex-layout-section-full margin-top-75">
                     <div className="container-image-block flex-layout-center-center">
                        <img className="photo-container-cs-sb1 width-100" src={motorola_s1} alt="StubHub Show me the Numbers"/>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                
                <section className="flex-layout-section-full align-items-center">
                    <div className="content-block-55"> 
                        <div className="title">
                            Backstory
                        </div>
                        <div className="subtitle margin-top-5">
                            High return rate, losing customer loyalty
                        </div>
                            <div className="content-block-100 margin-top-15"> 
                            <p className="content-text-18">
                            Motorola was facing a high return rate on a product line with a monthly rise in call center calls. 
                            There was political pressure to release the new DOCSIS 3.1 tech on the SurfBoard product line. The product managers knew that if they released the new tech without fixing the current problems with the interface, the product line would lose money. But, after 18 months and two failed attempts the pressure was on the home division to correct the problems and get this new technology to market before their competitors.
                            </p>
                            </div>
                        </div>
                    </section>
                    <section className="flex-layout-column flex-layout-center-center margin-top-75">
                            <div className="container-image-block flex-layout-center-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_before_basic} alt="Questions"/> 
                            </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-column align-items-center margin-bottom-75">
                        <div className="title content-block-55">
                                Methodology Begins</div>
                        <div className="subtitle content-block-55 margin-top-15">
                                Finding the Truth - Business Perspective</div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-15">
                                Finding the truth in business means a deep understanding of the business, the project and the competition. Understanding the business and the project is one of the keys to a successful project. Gathering requirements, interviewing stakeholders and gathering design elements, such as marketing materials and style guides. This information begins to the process to finding the truth </p>
                            
                            <p className="content-text-18">
                                One of the first requirements required Motorola to purchase all the competitors modems. Usually, as was with the case of Motorola competition is ignored. The competitors research is one of the highlights of the methodology as it enlightens the stakeholders on their competition. WDS will revisit the competition as solutions begin to materialize. WDS goal for all our clients is to be a leader. Being a leader is not possible without knowing your competition.</p>
                        </div>
                    </section>
                    <section className="grid-callout grey margin-top-50 border-tb-5">
                        <div className="grid-callout-text margin-top-75">
                            <div className="callout-text  content-block-55 txt-white padding" style={{marginLeft: '13%', marginTop: '5%'}}> 
                            For the average user the interface on the Motorola modems was very intimating. The UI was outdated and unbranded, leaving the user confused and frustrated. Keeping the call center very busy.</div>
                        </div>
                        <div className="grid-callout-photo width-100">
                              <img src={callcenter} alt="Case Study Image 2"/> 
                        </div>
                    </section>
                    <section className="flex-layout-section-full align-items-center flex-layout-column margin-top-75">
                        <div className="content-header content-block-55 title">
                            UX Plan
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Finding the Truth - Customer Perspective
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                                The user base for the modems was broad and it was difficult to apply our normal methodology of observing and interviewing users. WDS methodology is flexible and adaptable our we turned to a quote by the Bill Gates Quote “Your most unhappy customers are your greatest source of learning.”Remembering what a stakeholder told us about the high volume of call center calls, WDS requested three months of call center calls and a week to "ghost" call center calls. With this information we started to see patterns and begin to establish a numeric based error system to uncover and document the truth to the problems. In this phase and to becoming the user. Emphasizing with the task they need to complete. Viewing the problems and issues through the eyes of the user.</p> 
                            
                            <p className="content-text-18">
                                As WDS uncovered the truth about users, a connection developed and personalities traits began to take shape and take form into personas and journey maps. A customer/user persona would be needed for this project to be a success. A bridge of empathy between the user and Motorola's developers. The persona of Sally was born.  
                            </p>
                            </div>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                        
                        <section className="content-header align-items-center flex-layout-column">
                            <div className="title content-block-55">
                                Master Plan
                            </div>
                            <div className="subtitle content-block-55 margin-top-5">
                                Solving the the Problems
                            </div>
                            <div className="content-block-55">
                                <p className="content-text-18 margin-top-15">
                                    WDS noticed early in the project that the organization of inputs did not make sense. When the team information expert reviewed the interface and made suggested changes we learned that there was two set of users. The consumer who would purchase the product and the cable operators doing home internet connection. WDS would not be allowed to move ANY input. Originally we thought this requirement was limiting, instead it forced us to adapt our solutions. Sometime being forced to change course opens new possibilities designing a final product the was beyond the scope and expectations of the customers and shareholders.</p> 
                                
                                 <p className="content-text-18">This is the roadmap WDS used to for its design and business solutions</p>

                        <div className="grid-2col-list margin-top-50">    
                            <div className="list-left"> 
                                <ul className="dashed content-text-18 margin-left-75">
                                    <p className="subtitle-case">User Pain Points:</p>
                                    <li><a href="#solution1">Interface Intimidating</a></li>
                                    <li><a href="#solution10">Guidance and Support</a></li>
                                    <li><a href="#solution1">Design Outdated</a></li>
                                    <li><a href="#solution2">Starting Point Confusing</a></li>
                                    <li><a href="#solution3">WiFi Section Main Issue</a></li> 
                                    <li><a href="#solution10">Terms and Acronyms Confusing</a></li> 
                                    <li><a href="#solution1">Responsive Design Solution</a></li> 
                                    <li><a href="#solution10">Cognitive Overload</a></li>
                                </ul> 
                            </div>
                            <div className="list-right"> 
                                <ul className="dashed content-text-18 margin-left-75">
                                    <p className="subtitle-case">Business Pain Points:</p>
                                    <li><a href="#solution7">Communication Issues Between Teams </a></li>
                                    <li><a href="#solution9">No Mobile Presence </a></li>
                                    <li><a href="#solution1">UI Not Branded</a> </li>
                                    <li><a href="#solution8">Google Buyout</a></li> 
                                    <li><a href="#user">Disconnection with the User</a></li>
                                    <li><a href="#solution1">Need CSS Solution</a></li> 
                                    <li><a href="#solution1">Competitors UI are better</a></li>
                                    <li><a href="#results">Entire project file size needed to be under 1mb</a></li>
                                </ul>
                            </div>    
                        </div>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header align-items-center flex-layout-column">
                        <div className="title content-block-55">
                            Design Solutions
                        </div>
                        <div className="subtitle content-block-55 margin-top-50">
                            New Design
                        </div>
                        <div className="content-block-55 margin-top-15">

                            <p className="content-text-18"> 
                            WDS presented a responsive empathetic design that was modern, simple and branded. The design included solutions that would simplify the interface and reduce customer returns and return Motorola's credibility.</p>
             
                        </div>
                    </section>
                    <section className="flex-layout-column  margin-top-50">
                        <div className="container-image-block flex-layout-column align-items-center">
                        <a id="solution1"></a> 
                            <img className="photo-container-cs-sb1 width-100" src={motorola_s2} alt="Questions"/> 
                        <div>   
                            <p className="margin-top-15"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i>
                            </p>
                        </div>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="subtitle content-block-55">
                        <a id="solution2"></a>
                             Start/Home Page
                        </div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-15">
                             A new landing/home page was designed to comfort the users. The redesign started the user on a section with global icons and allowed them to choose where they wanted to go. The redesign relieved the confusion and replaced it to make the user feel comfortable. Once the user has connected the unit this screen becomes a data display. </p>
                        </div>
                    </section>
                    <section className="flex-layout-column flex-layout-center-center margin-top-50">
                            <div className="container-image-block flex-layout-column align-items-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_s5} alt="Questions"/> 
                            <div>   
                            <p className="margin-top-15"><i> New home screen and data KPI dashboard.</i></p>
                            </div>
                            </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header align-items-center flex-layout-column ">
                        <div className="subtitle content-block-55 margin-top-15">
                        <a id="solution3"></a> 
                            WiFi Quick Start
                        </div>
                    <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            One of the biggest challenges we faced was the simplifying the WiFi section. Work flows could not be simplified by organizing the inputs in a logical order, due to the limitation of two unique users cable operators and consumers. We needed to approach this differently, and as a result the "WiFi Quick Start" idea was born. </p>
                            
                            <p className="content-text-18">Working closely with developers, we attempted to reduce the number of questions the user needed to answer to set up their WiFi. Currently the user needed to fill out nine inputs to complete the task. The goal was to reduce the user inputs from 9 to 5 and eliminate the need to input the 12 digit mac number, losing this number was a common issue. The only way to accomplish this was for a developer to create an algorithm to automate the process with little user input.</p>

                            <p className="content-text-18">The quick start idea was game changing. It took over a year for the industry to adopt this approach</p>  
                    </div>
                    </section>
                    
                    <section className="flex-layout-column margin-top-50">
                            <div className="container-image-block flex-layout-column align-items-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_s4} alt="Questions"/> 
                            <div>   
                            <p className="margin-top-15"><i> Quick start section semi-automated the process for WiFi connection. Reducing the user inputs from 9 to 5.</i></p>
                            </div>
                            </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="subtitle content-block-55 margin-top-15">
                        <a id="solution4"></a>In Context Help
                    </div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15">
                            These solution were born from empathy and walking in the user shoes. WDS knew for this project to be a success the customer needed to feel supported and guided. A new approach to the help treatment needed to be developed. None of the competitors solutions to the guide the user through help sections, especially any form of in-context help, one even had the nerve to offer on-line help. WDS solved this problem elegantly, allowing the user to click on the help link and a row opens below to reveal the answers. This solution tested very well during the testing phase</p>
                    </div>
                    </section>

                    <section className="flex-layout-column margin-top-50">
                            <div className="container-image-block flex-layout-column align-items-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_s6} alt="Questions"/> 
                            <div>   
                            <p className="margin-top-15"><i> A one click help solution, guiding the user has never been so eloquent</i></p>
                            </div>
                            </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="subtitle margin-top-15 content-block-55">
                        <a id="solution10"></a>Guidance and Support
                    </div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15">
                            Our solutions for guidance and support was to simplify and understand any question the user may have right on the interface. While walking in the shoes of the user we understood how the user felt uncared-for. Unfamiliar terms and the use use of acronyms just added to the cognitive overload and frustration as user tried to complete their tasks.</p>
                        
                            <p className="content-text-18 margin-top-15">
                            WDS solutions for the guidance and support started with the help section. Next we added page introductions to each section presenting to the users an overview and instructions. The issues of terms and acronyms our solution was solved by rollovers </p>
                    </div>
                    </section>

                    <section className="flex-layout-column margin-top-50">
                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-100" src={motorola_s3} alt="Questions"/> 
                        <div>   
                            <p className="margin-top-15"><i> Page introductions and rollovers for tech terms and acronyms provided the users guidance and support </i></p>
                        </div>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="subtitle content-block-55">
                        <a id="solution3"> </a> 
                                Mobile Application Solution
                        </div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-15">
                                Stakeholders were thrilled that one of WDS design solutions was a companion IOS application The quick start algorithm could also be used for determining best placement for the Modem. WDS designed and developed work flows and testing for the new application.</p> 
                        </div>
                    </section>
                   
                    <section className="flex-layout-column  margin-top-50">
                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-100" src={motorola_beforeafter} alt="Questions"/> 
                        <div>   
                            <p className="margin-top-15"><i> 
                                A mobile companion application for modem placement and interference  </i></p>
                        </div>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="content-header flex-layout-column align-items-center">
                            <div className="title content-block-55">
                                Business Design Solutions
                            </div>
                        <div className="content-header flex-layout-column align-items-center">
                            <div className="subtitle margin-top-50 content-block-55">
                            <a id="solution3"> </a>
                                Communication Issues
                            </div>
                            <div className="content-block-55">
                                <p className="content-text-18 margin-top-15">
                                    How did a global brand like Motorola allow a such a poorly designed, non-branded user interface on a consumer product, go to market? It was mind boggling. Our first question to the stakeholders was, "how did this product UI fall through the cracks?" This issue exposed a large communication issue between product, marketing and home division. WDS set-up sprint cycle meetings every three weeks along with milestones meetings. These meetings ran the course of the project and established a strong relationship between the teams that was previously non-existent. </p> 
                            </div>
                        </div>
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                       
                        <section className="content-header flex-layout-column align-items-center">
                            <div className="subtitle content-block-55">
                             <a id="solution7"></a> Google Buyout
                            </div>
                                <div className="content-block-55">
                                <p className="content-text-18 margin-top-15">
                                In the middle of the project, Google bought out Motorola. We were notified that our project was under review and we would need to present it to Google Marketing and Product teams. Six months into the project WDS had the team running smoothly with a purpose. Motorola's marketing and product teams were familiar with the project and, along with WDS, made a killer presentation to the Google executives.  </p> 
                                </div>
                           
                        </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="content-header flex-layout-column align-items-center">
                            <div className="subtitle content-block-55">
                              <a id="user"></a> Personas
                            </div>
                            <div className="content-block-55">
                              <p className="content-text-18">
                                The home division, managers and developers were out of touch with their users. WDS developed a persona to alleviate this issue. After our initial research we decided on a user called "Sally". Sally really helped bridge the gap between WDS and the developers. WDS made her personality a mother in-law, who was not very tech savvy. Knowing that many engineers and developers get calls from their mother in-laws asking for computer help it was the perfect personality to bring empathy to the team. Many times when we proposed solution and we got push back from the team we would ask; "If we don't implement this solution, would you get a phone call from Sally?"  </p> 
                            </div>
                          
                        </section>

                      <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                      <section className="content-header flex-layout-column align-items-center">
                         <div className="title content-block-55">
                            Deployment
                        </div>
                        <div className="subtitle content-block-55 margin-top-25">
                            Preparing for the Handoff
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            WDS always uses the golden rule when we hand a project off. We try to come up with use cases and future problems. Final handoff for Motorola consisted of CSS and HTML cleanup and implementing .asp tags for the final build. A pattern library and documentation, including best of practices, was created for the CSS files. Most importantly, the final build size was 985kb, phew. 
                            </p>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-100"></div>

                    <section className="content-header flex-layout-column align-items-center"> 
                        <div className="title content-block-55">
                                Results
                        </div>
                        <a id="results"></a>
                            <div className="content-block-55 margin-top-25">
                                <p className="content-text-18">One of the issues that surprized us the most was the design of the user interface. WDS figured all Motorola public facing products would be branded. WDS solved this by correcting the communication issues between the teams, specifically marketing, product and home division. At the start of the project WDS organized monthly and milestone meetings between the teams. Product, marketing and home division communication was still strong well after WDS left. The approved design was going to be adapted to the rest of the product line. The design today may look different, branded under the Arris name, but many of the design solution we implemented are still in use today.
                                </p>
                                <p className="content-text-18"> The original design did not take the user into account. It was cold and uninviting there was know empathy and little guidance for the user. Our main goal was to design an inviting familiar interface that would guide the user through their tasks. There are very few people that enjoy setting up their WiFi. We knew we reached our goal when CNet reviewed the interface and stated "The Surfboard eXtreme has a robust and self-explanatory Web interface". Self explanatory is the goal for any UX prpject. 
                                </p>
                          <div className="grid-2col-list margin-top-25">     
                                        
                            <ul className="list-left content-text-21">
                                <li>Lowered return rate by <b>40%</b></li>
                                <li>Entire project under 1mb</li>
                                <li>First css style sheet in Motorola Products </li>

                                <li>Style Guide </li>
                            </ul>
                            <ul className="list-right content-text-18">
                                <li>Reduced Customer Service calls by <b>70%</b></li>
                                <li>Return rate dropped dramatically in a few months after launch </li>
                                <li>Positive reviews by <a href="https://www.cnet.com/reviews/motorola-sbg6782-ac-surfboard-extreme-cable-modem-review/" >Cnet</a> and <a href="https://www.youtube.com/watch?v=cqTHxAN6cRwYouTube">YouTube</a> </li> 
                                <li>Communication between teams improved</li>
                            </ul>      
                        </div>
                    </div>
                    </section>
                   
                     <div className="grid-callout grey margin-top-150"> 
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