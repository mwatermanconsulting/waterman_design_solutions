import React, { Component } from 'react'
import motorola_bg from '../images/bg-motorola.png';
import motorola_logo from '../images/icon-motorola-white.svg'; 
import motorola_s1 from '../images/photo-Motorola_2.png';

class case_study_1 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full">
                <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-layout-row width-100"> 
                        <h1 className="image-text-left text-white">Motorola</h1>
                        <img className="image-text-right" src={motorola_logo}  alt="Motorola Logo" /> 
                        <img className="flex-image-container" src={motorola_bg}  alt="Motorola background" /> 
                     </div>
                </div> 
            </div>
                <div className="flex-layout-section-full">
                    <div className="content-container margin-top-50">
                        <div className="content-header flex-layout-center-center"> 
                            <div className="content-block-half content-text-24"> Just before the home division of Motorola was sold to Google, the home division of Motorola attempted to fix the problems that were plaquing their Broad Band Modem lines. The return rate was reaching close to twenty percent and the call center cost was rising monthly. New technology for the broadband line was put on hold until the problems related to the line were solved.
                            </div>
                        </div>
                    </div>
                <div className="container-grid-cs margin-top-150">
                    <div className="item-a content-header flex-layout-column flex-items-justified-center" >
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Backstory</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>High return rate, losing customer loyalty</div>
                                <div className="content-block-60">
                                    <p className="content-text-18">Motorola were facing high return rates on their Broadband modem line. These problems had been plaquing Motorola for years and could not be solved internally. Motorola decided to outsource the UX designer position. After two failed attempts to solve these problems. The management team decided to find a vendor that was a true UX designer with a proven methodology with design skills. After an initial consultation, WDS was hired to to use their methodology to figure out what went wrong and come to a design solution.</p> 
                                    <p className="content-text-18"> To solve these problems it was time to start phase one....research</p> 
                                </div>
                    </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-b container-image-block">
                              <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    <div className="item-c content-header flex-layout-column flex-items-justified-center" >
                        <div className="title-case margin-bottom-20"  style ={{width:'60%'}}>Methodology Begins</div>
                            <div className="subtitle-case margin-bottom-20"  style ={{width:'60%'}}>Finding the Truth - Business Perspective</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">In order to search for the truth a good research plan needs to be implemented. </p>
                                        <p className="content-text-18">Understanding the business is one of the keys in a successful project. Gathering requirements, meeting stakeholders and gathering design elements, such as marketing materials and style guides. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. This is a critical and often overlooked part finding the truth.</p>
                                        
                                        <ul className="content-text-18">Motorola Research Findings:
                                            <li>Current UI was not following Motorola brand standards</li>
                                            <li>Marketing, Product and Home division did not communicate</li> 
                                            <li>Competitors UI looked more modern, put little thought into help </li>
                                            <li>Entire project file size needed to be under 1mb </li>
                                        </ul>                              
                                </div>
                        </div>
                        <div className="flex-layout-column grey-blue padding">
                        <div className="item-d container-image-block">
                              <img className="photo-container" src={motorola_s1} alt="Case Study Image 1"/> 
                        </div>
                    </div>
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20"  style ={{width:'60%'}}>UX Plan</div>
                            <div className="subtitle-case margin-bottom-20"  style ={{width:'60%'}}>Finding the Truth - Customer Perspective</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">The best method of finding the truth is to film the user in their natural habitat, using the product. In the case of Motorola this was not possible, due to the large usage base. Instead WDS adapted its methodology to study a three month block of call center calls, as well as ghosting call center calls for a week. With this information we started to see patterns and begin to establish a numeric based error system to uncover the truth to the problems. In this phase it is critical to become the user. Emphazing with the task they need to complete. Vieiwng the problems and issues through the eyes of the user. Another pattern that is always uncovered is user personalities types. Which leads to the creation of personas, journey maps and task flows. </p>


                                        <ul className="content-text-18">Motorola User Pain Points:
                                            <li>Current UI was confusing</li>
                                            <li>To much information on the page- Cognitive overload.</li> 
                                            <li>Help was non-existent </li>
                                            <li>Wifi setup was the number 1 reason for returns and calls </li>
                                        </ul>     


                                </div>
                    </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20"  style ={{width:'60%'}}>Challenges</div>
                            <div className="subtitle-case margin-bottom-20"  style ={{width:'60%'}}>Asking Questions and Unforseen Issues</div>
                                <div className="content-block-60">
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
                     <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>   
                    
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20"  style ={{width:'60%'}}>Master Plan</div>
                            <div className="subtitle-case margin-bottom-20"  style ={{width:'60%'}}>Solving the the Problems</div>
                                <div className="content-block-60">
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
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="Case Study Image 2"/> 
                        </div>
                    </div>
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20"  style ={{width:'60%'}}>Solutions</div>
                            <div className="subtitle-case margin-bottom-20"  style ={{width:'60%'}}>Design</div>
                                <div className="content-block-60" >
                                        <p className="content-text-18">Designed new modern UI design based on Motorola's marketing and branding specifications. Established cycle between marketing, product and home division. Ensuring UI remains branded in future iterations. The first design solution is the chrome. Header, footer and is based on one page, the basic section. Once approval of the global design the rest of design solution can begin</p>
                                        
                                        <p>A test plan should be developed to ensure the initial design solutions are on target</p> 
                                        
                                        <p>A test plan should be developed to ensure the initial design solutions are on target</p>   
                                </div>
                    </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="Case Study Image 3"/> 
                        </div>
                    </div>
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Solutions</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>Start/Launch Page</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">Starting the user journey on basic section was unexpected and confusing. The redesign started the user on a section with familiar icons and allowed them to choose where they wanted to go. The redesign relieved the confusion and replaced it with comfort and knowing</p>
                                </div>
                    
                    </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Solutions</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>Quick Start</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">The hardest challenge was the simplifying the Wifi sections. Not being able to simplify the work flow. by organizing the inputs in a logical order. We were forced to think outside the wifi section and that is "Wifi Quick Start" idea was born. The goal was to reduce the user inputs from 9 to 5 and eliminate the need to input the mac number. The only way to accomplish this was for t a developer to create an algorythm to automate the process with little user input.</p>

                                        <p>The challenge was accepted and delivered. The best part was this algorythm was then scaled to use for a mobile app</p>  
                                </div>
                    </div>
                    
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Solutions</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>In-Context Help/ acronyms uncovered</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">WDS knew for this project to be a success the customer needed to feel supported and guided. A new approach to help needed to be developed. None of the competitors handled in context help, one even had the nerve to offer on-line help. WDS solved this problem elegantly, allowing the user to clink on the help link and a row opens below to reveal the answers. This solution tested very well during the testing phase</p>

                                </div>
                    </div>
                    
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>

                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Testing</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>Prototypes</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">WDS testing before development saves time and money. All the solutions above were fully tested and retested once changes had been made. Users were tested on each solution using a crude prototype. The user were given a task and observed how they responded and recorded their actions. </p>

                                        <p>During the research phase, the objective is to use the methodology to find problems, document, research and being to develop a UX action plan. Below is the research plan for Motorola. </p>  
                                </div>
                    </div>
                    
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>

                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Solution</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>Mobile Application Design Solution</div>
                                <div className="content-block-60">
                                        <p className="content-text-18">Stakeholders were thrilled that one of WDS design solutions was a companion IOS application The quick start algorithm could also be used for determining best placement for the Modem. WDS designed and developed work flows and testing for the new application.</p> 
                                </div>
                    </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>

                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Deployment</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>Highlights of Project</div>
                                <div className="content-block-60">
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
                    <div className="flex-layout-column grey-blue padding">
                        <div className="item-f container-image-block">
                            <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>

                    <div className="item-e content-header flex-layout-column flex-items-justified-center">
                        <div className="title-case margin-bottom-20" style ={{width:'60%'}}>Results</div>
                            <div className="subtitle-case margin-bottom-20" style ={{width:'60%'}}>Consumers Rejoiced </div>
                                <div className="content-block-60">
                                        <p className="content-text-18">Return rate dropped dramically in the following months. Reviews by CDNet and youtube were extremly positive. </p>

                                        <p>Quotes </p>  
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
export default case_study_1;