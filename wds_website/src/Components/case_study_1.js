import React, { Component } from 'react'
import motorola_bg from '../images/backgrounds/bg-motorola.png';
import motorola_logo from '../images/icon-motorola-white.svg'; 
import motorola_s1 from '../images/photos/photo-motorola-s1.png';
import motorola_s4 from '../images/photos/photo-motorola-s4.png';
import motorola_s6 from '../images/photos/photo-motorola-s6.png';
import motorola_s2 from '../images/photos/photo-Motorola_2.png';
import motorola_s3 from '../images/photos/photo-motorola-s3.png';
import motorola_s5 from '../images/photos/photo-motorola-s5.png';
import motorola_cnet from '../images/photos/photo-motorola-cnet.png';
import motorola_google from '../images/photos/photo-motorola-google.png';
import mary from '../images/photos/photo_mary.jpg';
import motorola_beforeafter from '../images/photos/photo-motorola-beforeafter.png';
import motorola_before_basic from '../images/photos//photo-motorola-before-basic.png';
import motorola_start from '../images/photos/photo-jump-surfboard.png';
import callcenter from '../images/photos/photo-motorola-s2.png';


class case_study_1 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full image-background-border-top">
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
                            WDS was hired after two failed attempts to design a modern user-centric interface for the the high-end Cable modem the MOTOROLA DOCSIS 3.1, Model MB8600. Our UX methodology uncovered previously unknown problems. Providing solutions that simplified and guided the users through their tasks interface. The redesign exceeded the stakeholders expectations surviving two buyouts. WDS and Motorola marketing and product team presented to Google stakeholders and marketing teams two months into the Motorola buyout to justify our endeavor mid-development. The design solutions were adopted by both companies, with many of the solution becoming industry standards.</p>
                             
                        <p className="content-text-18"> 
                            The design solutions we developed allowed became industry standards. The solutions have been adopted and still in use since 2013. Many of the solutions are now standard across the product line and adopted by the competitors. WDS goal of returning Motorola as the industry standard was accomplished, now under the Arris name. Below is the story on how WDS accomplished this feat.</p>
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
                            Motorola was facing a high return rate on a product line with a monthly rise in call center calls and product returns. 
                            There was political pressure to release the new DOCSIS 3.1 tech on the SurfBoard product line. The product managers understood that if they released the new tech without solving the current problems with the interface, the product line would lose money. Motorola attempted to solve their UI problems by contracting two different UX designers over an 18 month period. Unhappy, with the results from both UX designers the pressure was high on the home division to release the product before their competitors. WDS presented to Motorola, showing our design portfolio, and explaining our UX methodology we we're hired. Michael was embedded on the Motorola team too effective communicate with product, marketing, developers and stakeholders.
                            
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
                                One of our first requirements was to request Motorola to purchase all their competitors modems. This was the first time Motorola was presented with a competitors comparison study. This is a common business problems with our clients, ignoring their competition. The competitors comparison study is one of the highlights of the methodology, as it enlightens the stakeholders on their competition. WDS will the revisit the competitors research as our solutions begin to materialize. WDS goal for all our clients is to be the industry leader. Being a leader requires knowledge of your competition, which is not possible without first knowing your competition.</p>
                        </div>
                    </section>
                    <section className="grid-callout grey margin-top-50 border-tb-5">
                        <div className="callout-text align-self-center justify-self-center content-block-75 text-white" >
                            For the average user, the interface on the Motorola modems was very intimidating. The UI was outdated and unbranded, leaving the user confused and frustrated. This kept the call center very busy.
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
                                Initially there was a problem, the user base for the modems was broad and it was difficult to apply our normal methodology of observing and interviewing users. WDS methodology is flexible and scalable our experience and drew from our past experiences. Remembering that  unhappy customers are your greatest source of learning. Our research uncovered a problem with the high volume of call center calls.  WDS requested three months of call center calls and a week to "ghost" some live calls. Soon WDS starting to uncover patterns and with a numeric based scoring system we uncovered and documented the problems on a priority scale. Spending the time researching the call center logs we empathized with the users. Envisioning walking in their shows as they tried to complete the tasks involved with setting up a modem. Viewing the problems and issues through the eyes of the user.</p> 
                            
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
                                Solving the Problems
                            </div>
                            <div className="content-block-55">
                                <p className="content-text-18 margin-top-15">
                                    WDS noticed early in the project that the organization of required user inputs did not make sense. When the team IA expert reviewed the interface and made suggested changes we learned that there was an issue, there was two distinct set of users. One one end there was the consumer market, the ones who would purchase the product. One the other end was the cable operators, such as Comcast providing home installation. WDS would not be allowed to move ANY input, due to the cable operator familiarity with the interface. Originally we thought this requirement was limiting, instead it forced us to adapt and reevaluate our design solutions. This forced us to change course which opened new possibilities. This helped the success of final product design. As the solutions were beyond the scope and expectations of the customers and stakeholders.</p> 
                                
                                 <p className="subtitle text-align-center margin-top-50">This is the roadmap WDS used to for its design and business solutions</p>

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
                                    <li><a href="#deploy">Need CSS Solution</a></li> 
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
                            WDS presented a responsive empathetic design that was modern, simple and branded. The design included solutions that would simplify the interface and reduce customer returns and return consumer loyalty.</p>

                            <p className="content-text-18"> 
                            The redesign was created with empathy. The design was welcoming, with an intuitive guided experience. The new design featured a new home page, a new UI, a simplified quick start section and a footer that allowed the user to jump to any section, after completion of a task. Solving all the business and users problems. </p>
             
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

                    <section className="flex-layout-section-full align-items-center"> 
                            <div className="title content-block-55">
                                <a id="solution2"></a> 
                                    Introduction of Mary
                            </div>
                            <div className="subtitle content-block-55 margin-top-10">
                                <a id="solution2"></a> 
                                  Using Personas to bridge the Gap with the Developers
                            </div>
                            <div className="float-left content-block-55 margin-top-15">
                                <p className="content-text-18">
                                    One of the toughest aspects of being a contractor is communication and acceptance. Especially, on an established team such as the one at Motorola. These were the developers that originally designed the application and many were not happy that another UX designer was hired. They had already been through two failed attempts and fully expected to the same results with WDS.</p>

                                <p className="content-text-18"><div className="float-right ">
                                    <img className="width-100" src={mary} alt="Finding the Truth - Business Perspective"/>
                                </div>
                                To open the lines of communication we introduced a persona named "Mary". During our research we were surprised to uncover that a large majority of complaints to the call center were women. We started questioning the developers if they get phones calls from their Mother in Law for tech help. Over 75% responded that they do indeed get those type of phones calls.</p>

                                
                                <p className="content-text-18">The persona of "Mary" was a mother of three, who worked a full time job. Mary's user journey was as follows, On her way home from work Mary needed to stop at Best Buy to replace her broken modem. After her purchase she rushed to get home and make dinner for the kids. Her plan was to get dinner started and while it was cooking she would set-up the modem. Giving her twenty minutes before dinner was ready. This was the first time Mary ever connected a modem, she was not very computer literate and computers intimated her. The challenge to us and the team was to simplify and guide Mary so she could complete her task. </p>
                            </div>
                            <div className="content-text-18 content-block-55 margin-top-25">
                                Mary was well received by Motorola and she helped the developers understand the design solution that were being presented to them. Many times during meetings and development of the design solutions the developers and stake holders would push back, questioning our direction. WDS would only needed to reply, "if we implement this solution; will you get a phone call from Mary?" Causing the developer to stop and think about how the solution solve a problem and to understand we are developing this redesigned interface for real people. Solving the original problem of disconnect between those building the product and those using the product. 
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
                             A new landing/home page was designed to comfort the users and provide a visual display of their custom settings. The redesign started the user on a section with global easily recognizable icons and allowing what task they wanted to complete. Previously the customer was drop in the basic settings page, causing confusion and hesitation. The redesign relieved the confusion making the user feel comfortable. Once the user has finished setting up the modem the home screen becomes a data display. </p>
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
                            One of the biggest challenges we faced was the simplifying the WiFi section. Work flows could not be simplified by organizing the inputs in a logical order, due to the limitation of two unique users, cable operators and consumers. We needed to approach this differently, and as a result the "WiFi Quick Start" idea was born. </p>
                            
                            <p className="content-text-18">Working closely with developers, we attempted to reduce the number of questions the user needed to answer to set up their WI-FI. Currently the user needed to fill out nine inputs to complete the task. The goal was to reduce the user inputs from 9 to 5 and eliminate the need to input the 12 digit mac number, losing this number was a common issue. We solve this issue by challenging the developers to create an algorithm to automate the mac number and reduce the WI-FI user inputs down to 5.</p>

                            <p className="content-text-18">The quick start idea was game changing. With the industry adopting this approach within a year.</p>  
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
                             The most effective design solutions are born from empathy, walking in the user shoes. WDS knew for this project to be a success the customer needed to feel supported and guided. A new approach to the help treatment needed to be developed. Our competitor research revealed that  none of the competitors had a good help section solution> One that guides the user through help sections, especially any form of in-context help, one even had the nerve to offer on-line help. WDS solved this problem elegantly, allowing the user to click on the help link in any user user input to reveal the answers. This solution tested very well during the testing phase and was a begin reason for the projects success.</p>
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
                            WDS solutions for the guidance and support started with the help section. Next we added page introductions to each section presenting to the users an overview and instructions. The issues of terms and acronyms our solution was solved by rollovers.  </p>
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
                                Stakeholders were thrilled that one of WDS design solutions was a companion IOS application. The quick start algorithm could also be used for determining best placement for the Modem. WDS designed and developed the mobile interface. We created new user work flows for the mobile application.</p> 
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
                                    How did a global brand like Motorola allow a such a poorly designed, non-branded user interface on a consumer product, go to market? It was mind boggling. Our first question to the stakeholders was, "how did this product UI fall through the cracks?" This issue exposed a large communication issue between product, marketing and home division. WDS set-up sprint cycle meetings every three weeks along with milestones meetings with the product and marketing departments. These meetings ran the course of the project and established a strong relationship between the teams that was previously non-existent. These meetings help establish a transparency allowing the product and marketing teams to understand, not use the users, but the business case for the redesign </p> 
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
                        <section className="flex-layout-column margin-top-50">
                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-50" src={motorola_google} alt="Questions"/> 
                        
                        </div>
                    </section>

                        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                        <section className="content-header flex-layout-column align-items-center">
                            <div className="subtitle content-block-55">
                              <a id="user"></a> Personas
                            </div>
                            <div className="content-block-55 margin-top-15">
                              <p className="content-text-18">
                                The home division, managers and developers were out of touch with their users. WDS developed a persona to alleviate this issue. After our initial research we decided on a user called "Sally". Sally really helped bridge the gap between WDS and the developers. WDS made her personality a mother in-law, who was not very tech savvy. Knowing that many engineers and developers get calls from their mother in-laws asking for computer help it was the perfect personality to bring empathy to the team. Many times when we proposed solution and we got push back from the team we would ask; "If we don't implement this solution, would you get a phone call from Sally?"  </p> 
                            </div>
                          
                        </section>

                      <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                      <section className="content-header flex-layout-column align-items-center">
                         <div className="title content-block-55">
                            Deployment
                        </div>
                        <a id="deploy"></a>
                        <div className="subtitle content-block-55 margin-top-25">
                            Preparing for the Handoff
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            WDS always uses the golden rule when we hand a project off. We try to come up with use cases and future problems. Final handoff for Motorola consisted of CSS and HTML package  and implementing .asp tags for the final build. A pattern library and documentation, including best of practices, was created for the CSS files. Most importantly, the final build size was 985kb, phew. 
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
                   
                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                            <p className="callout-text-white text-align-center">
                                "The Surfboard eXtreme has a robust and self-explanatory Web interface with lots of features, including showing level of interference for its Wi-Fi networks." - CNET review</p><img  src={motorola_cnet} alt="CNET review"/>
                        </div>
                        
                        </section>
                    </div>
                    
                                          
                            )
                        }
                    }
export default case_study_1;