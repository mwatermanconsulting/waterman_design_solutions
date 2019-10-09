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
                <meta name="description" content="EMPATHY and PASSION are the core of our business and the heart of the WDS UX methodology. Our UX methodology produces answers and empathetic designs that connect and resonates with users and uncovers unarticulated user needs that drives business transformation. WDS methodology has been successful for project for Motorola, StubHub and OsiSoft" />
                <meta charSet="utf-8" />
            <title>Methodology</title>
            <link rel="canonical" href="http://watermandesignsolutions.com/methodology" />
            </Helmet>
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container image-size-100" src={method}  alt="Method WDS background" /> 
                    </div>
                </div> 
            </div>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 padding-15sm red">
                <div className="callout-text-lg">
                            What is the role of empathy in your business?
                    </div>
                </section>
                <section className="grid-callout yellow-bg"> 
                <div className="grid-callout-text grid-placeself-center width-70 margin-top-15sm">
                    <p className="callout-text padding-sm">
                            EMPATHY and PASSION are the core  values of our business and the heart of our methodology
                            </p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container width-100" src={method1}  alt="Customer Service" /> 
                        </div>
                    
                </section>
                <section className="content-header flex-layout-section-full flex-layout-column align-items-center">
                    <div className="content-header flex-layout-column content-block-60">    
                        <div className="title-center margin-top-75"> 
                            WDS Goal: Uncovering the Truth
                        </div>
                        <p className="content-text-21 content-block-75 align-self-center margin-top-25">
                            The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of UI design. For more than a decade, WDS has refined a scalable, flexible methodology that centers on answering questions about customers.<br/><br/>This is accomplished by connecting and understanding people, observing their daily workflow,  interviewing and conversing with them, which identifies  needs, behaviors and aspirations. <br></br>WDS provides a perspective on customers that clients typically have never been seen. </p>

                        <p className="content-text-21 content-block-75 align-self-center">
                            WDS methodology produces answers and empathetic designs that connect and resonates with users and uncovers unarticulated user needs that drives business transformation. </p>
                    </div>
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-full align-items-center flex-layout-column">
                        <div className="title text-black flex-layout-center margin-top-25sm"> 
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
                            <div className="float-right">
                                <img className="container-image-500" and src={methodology2}  alt="Design Review" />   
                            </div> 
                            <p className="content-text-18 margin-top-15sm">
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

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                             Research
                        </div>
                        <div className="subtitle margin-top-10">
                             Understanding the Business
                        </div>
                        <div className="margin-top-15">
                            <div className="float-right">
                                <img className="container-image-500" and src={methodology3}  alt="Research" /> 
                            </div> 
                            <p className="content-text-18 margin-top-15sm"> 
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

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Observation
                        </div>
                        <div className="subtitle margin-top-10">
                            Empathizing with the User
                        </div>
                        
                        <div className="margin-top-15" >
                            <div className="float-right">
                                 <img className="container-image-500" and src={methodology4}  alt="Observation" /> 
                            </div> 
                            <p className="content-text-18 margin-top-15sm">
                                Observation provides insight beyond the traditional testing methods, watching users working in real life settings, leads to valuable insights. This is done in a highly unobtrusive way simply by sitting in their offices and video taping how the user is navigating the interface. The goal is to empathize with the user as they complete their the users work flows.
                            </p>
                            <ul className="dashed content-text-16">
                                <li>Well chosen observers have deep knowledge of product or service</li>
                                <li>Observers rely on real actions rather than reported behavior</li>
                                <li>Understand the users feelings through body language </li>
                                <li>Use of actual product or prototype</li>
                                <li>Interview users</li>
                                <li>Discover user pain points</li>
                                <li>Empathize with users needs and expectations</li>
                                <li>Understanding of user work flows</li>
                            </ul>
                        </div>
                        
                    </div>
                       
                </section>
                
                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Capturing Data
                        </div>
                        <div className="subtitle margin-top-10">
                            Understanding the Research
                        </div>
                        <div className="margin-top-15 margin-top-15sm">
                            <div className="float-right">
                                <img className="container-image-500" and src={methodology5}  alt="Capturing Data" /> 

                            </div> 
                            <p className="content-text-18 margin-top-15 margin-top-15sm">
                                To understand the research WDS needs to understand the users and to interpret their actions.  Observers may ask a few very open ended questions, such as, “Why are you doing that?” They carry a list of questions to prompt their own observations: “What problems is the user encountering?” Most of the data is gathered from visual, auditory, and sensory cues, which is done using videography, audio recordings and notes as tools to begin reflecting on the results.
                            </p>
                        </div>
                        
                    </div>
                        
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Reflection and Analysis
                        </div>
                        <div className="subtitle margin-top-10">
                            Empathizing with Users 
                        </div>
                            <div className="float-right">
                                <img className="container-image-500 margin-top-15sm" and src={methodology6}  
                                alt="Reflection and Analysis" /> 
                            </div> 
                            <p className="content-text-18 margin-top-15sm"> 
                            After gathering data in many forms, the UX designers return to reflect on the user and business research and share the data with the team through analysis of workflows, user journeys and pain points. They will ask questions that the team members may or may not be able to answer resulting in  further observation and research. At this point WDS begins to identify all of its customers’ possible problems and needs.</p>
                    </div>   
                </section>
                
                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Brainstorming for Solutions
                        </div>
                        <div className="subtitle margin-top-10">
                            Turning Ideas into Designs
                        </div>
                        <div className="margin-top-15" >
                            <div className="float-right">
                                    <img className="container-image-500" and src={methodology7}  alt="Brainstorming for Solutions" /> 
                            </div>
                            <p className="content-text-18 margin-top-15sm">
                            Brainstorming is a valuable part of any methodology process, used specifically to transform  research into graphic, visual representations of possible solutions. Although brainstorming is generally associated with a creative process, it is not undisciplined. The team needs to follow these rules: </p>

                            <ol style={{marginleft:'15%'}}>
                                <li>Defer judgment</li>
                                <li>Build on the ideas of others</li>
                                <li>Stay focused on the topic</li>
                                <li>Encourage wild ideas</li>

                            </ol>
                            
                        </div>
                    </div>
                         
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Final Design Presentation
                        </div>
                        <div className="subtitle margin-top-10">
                            Designing with Empathy
                        </div>
                        <div className="margin-top-15">
                            <div className="float-right">
                                    <img className="container-image-500" and src={methodology8}  alt="Final Design Presentation" /> 
                            </div>

                            <p className="content-text-18 margin-top-15sm"> 
                               The final design incorporates all the research findings and design solutions. WDS understands for a project to be successful the design needs to incorporate the business core values and branding, while simplifying the user experience. This ensures that the project is designed with empathy and meets the user and business expectations. </p>
                            <ul className="dashed">

              <li><a href="../design_solutions">Custom Design Solution</a></li>
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

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Front-end Development
                        </div>
                        <div className="subtitle margin-top-10">
                            CSS and HTML
                        </div>
                        <div className="margin-top-15">
                            <div className="float-right">
                                    <img className="container-image-500" and src={methodology9}  alt="Front-end Development" /> 
                            </div>

                            <p className="content-text-18 margin-top-15sm"> 
                            In this phase WDS works closely with the developers with an embedded team or remotely. A CSS solution is developed with responsive HTML, working seamlessly with developers on the front-end as they code the back-end working in your agile cycles. </p>

                            <ul className="dashed">
                                <li><a href="../css_solutions">CSS Solutions</a></li>
                                <li>CSS Development (SaSS and LeSS)</li>
                                <li>HTML development</li>
                                <li>Accessibility Implementation </li>
                                <li>Telemetry/Analytics Implementation</li>
                            </ul>
                        </div>
                    </div>
                         
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            User Testing
                        </div>
                        <div className="subtitle margin-top-10">
                            Always keeping the customer in the loop
                        </div>
                        
                        <div className="margin-top-15" >
                            <div className="float-right">
                                    <img className="container-image-500" and src={methodology10}  alt="User Testing" /> 
                            </div>
                            <p className="content-text-18 margin-top-15sm">
                            The testing phase reveals whether questions were answered, user pain points were reduced and expectations were met. This phase will last the entire development phase and never stop.
                            </p>

                            <ul className="dashed content-text-18">

                            <li>Write scalable, tailored testing plans</li>
                                <li>User Questions/Interviews</li>
                                <li><a href="./finding_truth">Observational Fieldwork</a></li>
                                <li>Establish testing relationship with vendors</li>
                                <li>Establish testing relationship with stakeholders</li>
                                <li>Continue testing relationship with users</li>
                                <li>Testing Logic and Navigation</li>
                            </ul>
                        </div>
                        
                    </div>
                        
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            Launch
                        </div>
                        <div className="subtitle margin-top-10">
                            With You Until the End
                        </div>
                        <div className="margin-top-15">
                            <div className="float-right">
                                    <img className="container-image-500" and src={methodology11}  alt="Launch" /> 
                            </div>
                            <p className="content-text-18 margin-top-15sm"> 
                                At the completion of the project it is important to  business ongoing success that a design strategy road-map is provided that will continue the  success with  users in the future.</p>

                            <ul className="dashed content-text-18">
                                <li><a href="../strategy_insight">Present Findings - The Truth</a></li>
                                <li><a href="../strategy_insight">Present Strategies and Insight</a></li>
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

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Design Support
                        </div>
                        <div className="subtitle margin-top-10">
                            A Consistent Message
                        </div>
                        
                        <div className="margin-top-15">
                            <div className="float-right">
                                    <img className="container-image-500"  src={methodology12}  alt="Design Support" /> 
                            </div>

                            <p className="content-text-18 margin-top-15sm">
                                WDS offers customer experience strategies based off the research findings, offering a full line of design services  that ensures cohesion and consistency in your branding message.
                            </p>

                            <ul className="content-text-18 dashed">
                                <li><a href="../style_guide">Style Guides and Design Systems</a> </li>
                                <li><a href="../style_guide">Website Design</a></li>
                                <li><a href="../style_guide">Graphic Design</a></li>
                                <li><a href="../style_guide">Marketing</a></li>
                                <li><a href="../style_guide">Video</a></li>
                            </ul>
                        </div>
                    </div>     
                </section>
                
                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Core Offerings
                        </div>
                        <div className="subtitle margin-top-10">
                            Business Design Strategies
                        </div>
                        <div className="margin-top-15">
                            <div className="float-right">
                                <img className="container-image-500" and src={methodology13}  alt="Core Offerings" /> 
                            </div>
                            <p className="content-text-18"> 
                                The last part of the WDS methodology is core offerings designed to help spread the business value to your business through workshops and strategies. It is critical to company survival to build a culture of empathy and design. </p>

                            <ul className="dashed">
                                <li><a href="../strategy_insight"> Strategies and Insight</a></li>
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
                <section className="flex-layout-section-full align-items-center margin-tb-100">
                    <div className="grid-2col-photo-text align-self-center width-100 margin-left-15per">
                    <div className="col2-photo width-70 grid-placeself-center margin-top-50sm">
                       <a href= "./case_study_1"><img src={featured} className="border-3px width-100" alt="Case Study 2"/></a> 
                    </div>
                    <div className="2col-text grid-placeself-center width-100">
                    <div className="title margin-top-25sm">
                         WDS Methodology
                    </div>
                    <div className="subtitle margin-top-15 content-block-75">
                        How WDS Methodology Uncovered and Solved Motorola's Problems
                    </div>
                        <p className="content-text-18 margin-top-15"> 
                        A design problem with Motorola Surfboard Cable Modem product line was on the verge of losing money due to high return rate and a high spike in call center calls. After two failed attempts and years of complacency, Motorola stakeholders decided to bring in a consultant with design and UX experience with a proven methodology. </p>
                        
                        <div className="float-left">
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
                            <p className="content-header"> 
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