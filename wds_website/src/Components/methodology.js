import React, { Component } from 'react' ;
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import method from '../images/backgrounds/bg-methodology.svg';
import stayinlane from '../images/graphic-stayinlane.svg';
import methodology2 from '../images/photos/photo-methodology-s2.png';
import methodology3 from '../images/photos/photo-methodology-s3.png';
import methodology4 from '../images/photos/photo-methodology-s4.png';
import methodology5 from '../images/photos/photo-methodology-s5.png';
import methodology6 from '../images/photos/photo-methodology-s6.png';
import methodology7 from '../images/photos/photo-methodology-s7.png';
import methodology8 from '../images/photos/photo-methodology-s8.png';
import methodology9 from '../images/photos/photo-methodology-s9.png';
import methodology10 from '../images/photos/photo-methodology-s10.png';
import methodology11 from '../images/photos/photo-methodology-s11.png';
import methodology12 from '../images/photos/photo-methodology-s12.png';
import methodology13 from '../images/photos/photo-methodology-s13.png';
import method1 from '../images/photos/photo-methodology-s1.png';
import featured from '../images/photos/photo-methodology-featured-motorola.png';


class methodology extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="EMPATHY and PASSION are the core of our business and the heart of the WDS UX methodology. UX methodology produces answers and empathetic designs that connect and resonates with users and uncovers unarticulated user needs that drives business transformation. WDS methodology has been successful for project for Motorola, StubHub and OsiSoft" />
                <meta charSet="utf-8" />
            <title>Methodology</title>
            <link rel="canonical" href="http://watermandesignsolutions.com/methodology" />
            </Helmet>
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container-master flex-item-bottom">
                        <img className="flex-image-container-master image-size-100" src={method}  alt="Method WDS background" /> 
                    </div>
                </div> 
            </div>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 padding-15sm red">
                <div className="callout-text-lg">
                            What is the role of empathy in your business?
                    </div>
                </section>
                <section className="grid-callout yellow-bg"> 
                <div className="grid-callout-text grid-placeself-center container-text-callout-top">
                    <p className="callout-text">
                            EMPATHY and PASSION are the core  values of the business and the heart of methodology
                            </p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container width-100" src={method1}  alt="Customer Service" /> 
                        </div>
                    
                </section>
                <section className="content-header flex-layout-section-full flex-layout-column align-items-center">
                    <div className="content-header flex-layout-column content-block-60">    
                        <div className="header-title margin-top-75"> 
                            WDS Goal: Uncovering the Truth
                        </div>
                        <p className="content-text-21 content-block-75 align-self-center margin-top-50">
                            The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of UI design. For more than a decade, WDS has refined a scalable, flexible methodology that centers on answering questions about customers.<br/><br/>This is accomplished by connecting and understanding people, observing their daily workflow,  interviewing and conversing with them, which identifies  needs, behaviors and aspirations. <br></br>WDS provides a perspective on customers that clients typically have never seen. </p>

                        <p className="content-text-21 content-block-75 align-self-center">
                            WDS methodology produces answers and empathetic designs that connect and resonates with users and uncovers unarticulated user needs that drives business transformation. </p>
                    </div>
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-full align-items-center flex-layout-column">
                        <div className="header-title-sm-center text-black flex-layout-center"> 
                            The WDS UX Methodology
                        </div>
                    
                </section>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50 margin-top-25sm">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Design Review
                        </div>
                        <div className="subtitle margin-top-10">
                            Uncovering Design Problems
                        </div>
                        <div className="margin-top-15">
                           
                            <p className="content-text-18"> 
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology2}  alt="Design Review" />   
                                </div> 
                                A design review is a process to evaluate and critique the current design. The review examines specific features that have been implemented and/or evaluates an MVP and the user work flow. Design reviews can be modeled after the five elements of the user experience with an evaluation of these elements from abstract concepts to concrete stages.

                                <ul className="dashed  margin-left-10 margin-top-15 content-text-18" style={{marginTop:'15px'}}>
                                    <li><b>Surface</b> - everything visually the <br/> "Look and Feel"  of the site or app</li>
                                    <li><b>Skeleton</b> - Make structure concrete: <br/>Do the components make sense?</li>
                                    <li><b>Structure</b> - how components fit together and behave </li>
                                    <li><b>Scope</b> -  initial requirements</li>
                                    <li><b>Strategy</b> - where it all begins, the reason for the site/app, what the users want </li> 
                                </ul>
                            </p>
                           
                            </div>  
                        </div>
                    </section> 

                    <div className="hr-line"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                             Research
                        </div>
                        <div className="subtitle margin-top-10">
                             Understanding the Business
                        </div>
                        <div className="margin-top-15">
                            
                            <p className="content-text-18">
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology3}  alt="Research" /> 
                                </div>  
                            At the beginning of the methodology, WDS sets the foundation for success by developing an
                            understanding of the business, the industry, competition analysis and relevant trends. This is the basis for how subsequent phases are approached, including secondary research, interviewing stakeholders and subject matter experts. </p>

                            <ul className="dashed content-text-18">
                                <li>Kickoff Meeting</li>
                                <li>Business Requirements</li>
                                <li>Competition Research</li>
                                <li>Marketing Materials Review</li>
                                <li>Style Guides and Company Standards</li>
                                <li>Stakeholders Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Observation
                        </div>
                        <div className="subtitle margin-top-10">
                            Empathizing with the User
                        </div>
                        <div className="margin-top-15" >
                            <p className="content-text-18">
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology4}  alt="Observation" /> 
                                </div> 
                                Observation provides insight beyond the traditional testing methods by watching users working in real life settings, leading to valuable insights. This is done in a highly unobtrusive way simply by sitting in their offices and video taping how the user is navigating the interface. The goal is to empathize with the user as they complete their the users work flows.
                            </p>
                            <ul className="dashed content-text-18">
                                <li>Choose observers who have deep knowledge of the product or service</li>
                                <li>Observe real actions rather than reported behavior</li>
                                <li>Understand feelings through body language </li>
                                <li>Use the product or prototype</li>
                                <li>Interview users</li>
                                <li>Discover user pain points</li>
                                <li>Empathize with user needs and expectations</li>
                                <li>Understand user work flows</li>
                            </ul>
                        </div>
                        
                    </div>
                       
                </section>
                
                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Capturing Data
                        </div>
                        <div className="subtitle margin-top-10">
                            Understanding the Research
                        </div>
                        <div className="margin-top-15">
                           
                            <p className="content-text-18 margin-top-15"> 
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology5}  alt="Capturing Data" />
                                </div> 
                                To understand the research, WDS needs to understand the users and to interpret their actions.  Observers may ask a few very open ended questions, such as, “Why are you doing that?” They carry a list of questions to prompt their own observations: “What problems is the user encountering?” Most of the data is gathered from visual, auditory, and sensory cues.
                            </p>
                        </div>
                        
                    </div>
                        
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Reflection and Analysis
                        </div>
                        <div className="subtitle margin-top-10">
                            Empathizing with Users 
                        </div>
                            <p className="content-text-18 margin-top-15">
                                 <div className="float-right">
                                <img className="photo-container " and src={methodology6}  
                                alt="Reflection and Analysis" /> 
                            </div> 
                            After gathering data in all its forms, UX designers reflect on the user and business research and share data with the team through analysis of workflows, user journeys and pain points. They will ask questions that the team members may or may not be able to answer, resulting in  further observation and research. At this point WDS begins to identify all of its customers’ possible problems and needs.</p>
                    </div>   
                </section>
                
                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Brainstorming for Solutions
                        </div>
                        <div className="subtitle margin-top-10">
                            Turning Ideas into Designs
                        </div>
                        <div className="margin-top-15" >
                           
                            <p className="content-text-18"> 
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology7}  alt="Brainstorming for Solutions" /> 
                                </div>
                            Brainstorming is a valuable part of any methodology process to transform  research into visual representations of possible solutions. Although brainstorming is generally associated with a creative process, it is not undisciplined. The team needs to follow these rules: </p>

                            <ol className="content-text-18">
                                <li>Defer judgment</li>
                                <li>Build on the ideas of others</li>
                                <li>Stay focused on the topic</li>
                                <li>Encourage wild ideas</li>

                            </ol>
                            
                        </div>
                    </div>
                         
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Final Design Presentation
                        </div>
                        <div className="subtitle margin-top-10">
                            Designing with Empathy
                        </div>
                        <div className="margin-top-15">
                            <p className="content-text-18">  
                            <div className="float-right">
                                <img className="photo-container" and src={methodology8}  alt="Final Design Presentation" /> 
                            </div>
                               The final design incorporates all the research findings and design solutions. WDS understands that for a project to be successful, the design needs to incorporate the business core values and branding while simplifying the user experience. This ensures that the project is designed with empathy and meets the user and business expectations. </p>
                            <ul className="dashed content-text-18">

                                <li><a href="../design_solutions" className="no-decoration greenlink">Custom Design Solution</a></li>
                                <li>High fidelity mockup</li>
                                <li>Explanation of design decisions </li>
                                <li>User interactions</li>
                                <li>Problems solved</li>
                                <li>Persona presentation</li>
                                <li>User journey</li>
                            </ul>
                        </div>
                    </div>
                        
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Front-end Development
                        </div>
                        <div className="subtitle margin-top-10">
                            CSS and HTML
                        </div>
                        <div className="margin-top-15">
                            <p className="content-text-18 "> 
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology9}  alt="Front-end Development" /> 
                                </div>
                            In this phase, WDS works closely with the developers, done remotely or with an embedded team. A CSS solution is developed with responsive HTML, working seamlessly with developers on the front-end as they code the back-end working in agile cycles. </p>

                            <ul className="dashed content-text-18">
                                <li><a href="../css_solutions" className="no-decoration greenlink">CSS Solutions</a></li>
                                <li>CSS Development (SaSS and LeSS)</li>
                                <li>HTML development</li>
                                <li>Accessibility Implementation </li>
                                <li>Telemetry/Analytics Implementation</li>
                            </ul>
                        </div>
                    </div>
                         
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            User Testing
                        </div>
                        <div className="subtitle margin-top-10">
                            Always keeping the customer in the loop
                        </div>
                        
                        <div className="margin-top-15" >
                            
                            <p className="content-text-18 margin-top-15sm">
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology10}  alt="User Testing" /> 
                                </div>
                            The testing phase reveals whether questions were answered, user pain points were reduced and expectations were met. This phase will last the entire development phase and continue as necessary.
                            </p>

                            <ul className="dashed content-text-18">

                            <li>Write scalable, tailored testing plans</li>
                                <li>User Questions/Interviews</li>
                                <li><a href="./finding_truth" className="no-decoration greenlink">Observational Fieldwork</a></li>
                                <li>Establish testing relationship with vendors</li>
                                <li>Establish testing relationship with stakeholders</li>
                                <li>Continue testing relationship with users</li>
                                <li>Testing Logic and Navigation</li>
                            </ul>
                        </div>
                        
                    </div>
                        
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Launch
                        </div>
                        <div className="subtitle margin-top-10">
                            With You Until the End
                        </div>
                        <div className="margin-top-15">
                            
                            <p className="content-text-18 margin-top-15sm"> 
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology11}  alt="Launch" /> 
                                </div>
                                At the completion of the project it is important to  business ongoing success that a design strategy road-map is provided that will continue the  success with  users in the future.</p>

                            <ul className="dashed content-text-18">
                                <li><a href="../strategy_insight" className="no-decoration greenlink">Present Findings - The Truth</a></li>
                                <li><a href="../strategy_insight" className="no-decoration greenlink">Present Strategies and Insight</a></li>
                                <li>Use Cases</li>
                                <li>Current Work Flows</li>
                                <li>Document problems</li>
                                <li>Communication Team (Product, Marketing, PM)</li>
                                <li>Business Design Discoveries</li>
                                <li>Pain Points</li>
                            </ul>
                        </div>
                    </div>
                       
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Design Support
                        </div>
                        <div className="subtitle margin-top-10">
                            A Consistent Message
                        </div>
                        
                        <div className="margin-top-15">
                            <p className="content-text-18 ">
                                <div className="float-right">
                                    <img className="photo-container"  src={methodology12}  alt="Design Support" /> 
                                </div>
                                WDS offers customer experience strategies based off the research findings, offering a full line of design services  that ensures cohesion and consistency in the branding message.
                            </p>

                            <ul className="content-text-18 dashed">
                                <li><a href="../design_systems" className="no-decoration greenlink">Style Guides and Design Systems</a> </li>
                                <li><a href="../website_design" className="no-decoration greenlink">Website Design</a></li>
                                <li><a href="../graphic_design" className="no-decoration greenlink">Graphic Design</a></li>
                                <li><a href="../marketing" className="no-decoration greenlink">Marketing</a></li>
                            </ul>
                        </div>
                    </div>     
                </section>
                
                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Core Offerings
                        </div>
                        <div className="subtitle margin-top-10">
                            Business Design Strategies
                        </div>
                        <div className="margin-top-15">
                            
                            <p className="content-text-18"> 
                                <div className="float-right">
                                    <img className="photo-container" and src={methodology13}  alt="Core Offerings" /> 
                            </div>
                                The last part of the WDS methodology is a group of core offerings designed to help spread the business value to your business through workshops and strategies. It is critical to company survival to build a culture of empathy and design. </p>

                            <ul className="dashed content-text-18">
                                <li><a href="../strategy_insight" className="no-decoration greenlink"> Strategies and Insight</a></li>
                                <li>Telemetry</li>
                                <li>Accessibility</li>
                                <li>Business Design Strategies</li>
                                <li>Design Communication </li>
                                <li>Business Design Discoveries</li>
                                <li>Pain Points</li>
                            </ul>
                        </div>
                    </div> 
                </section>

                

                <section className="flex-layout-section-full padding yellow-bg image-background-border-tb margin-top-100">
                    <div className="content-header flex-layout-center width-100">
                        <div className="callout-text text-black">
                            WDS' process is so efficient that it scales from start-up companies to global enterprises. 
                        </div>
                    </div> 
                </section>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50sm margin-bottom-50sm">
                    <div className="float-left flex-layout-center-center content-block-75">
                        <div className="float-left margin-right-5">
                                    <img className="photo-container-border border-3px " and src={featured}  alt="Motorola" /> 
                            </div>
                        <div className="margin-top-50sm margin-top-50">
                            <div className="header-title-sm text-align-left ">
                                The WDS Methodology
                            </div>
                            <div className="subtitle margin-top-10">
                            How WDS Methodology Uncovered and Solved Motorola's Design Problems
                            </div>
                            <div className="content-text-18 margin-top-15"> 
                            A design problem with Motorola Surfboard Cable Modem product line was on the verge of losing money due to high return rate. After two failed attempts and years of complacency, the Motorola stakeholders decided to bring in a consultant with design and UX experience. </div>
                        
                            <div className="float-left-np margin-top-15">
                            <NavLink className='button-area no-decoration' type="button" value="Full Story" to={'case_study_1'}>
                                Full Story 
                            </NavLink>
                            </div>  
                        </div>
                    </div> 
                </section>

                
            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-70 margin-top-50 margin-top-50sm margin-bottom-50" > 
                    <div className="2col-text grid-placeself-center ">
                        <div className="content-block">
                            <p className="callout-text"> 
                                It's best to keep talent in their own lane </p>
                            <p className="content-text-18 margin-top-15 ">  
                            
                            A common design practice is forcing engineers and developers to design apps, products and websites. Taking them out of their untrained lane will get the most out of your employees by allowing them to concentrate on what they do best. 
</p> 

                        </div>
                    </div>              
                    <div className="col2-photo grid-placeself-center width-100">
                        <img className="flex-image-container " src={stayinlane}  alt="Methodology" /> 
                        <p className="caption">Stay in your lane, we all have useful talents!</p>
                    </div>
                </div>
            </section>    
            </div>
        </div>
        )
    }
}

export default methodology;