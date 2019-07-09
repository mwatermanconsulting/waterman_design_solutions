import React, { Component } from 'react' ;
import method from '../images/backgrounds/bg-methodology.svg';
import methodolgy_graphic from '../images/graphic-methodology.svg';
import methodology3 from '../images/photos/photo-methodology-s3.png';
import methodology4 from '../images/photos/photo-methodology-s4.png';
import methodology5 from '../images/photos/photo-methodology-s5.png';
import methodology6 from '../images/photos/photo-methodology-s6.png';
import methodology7 from '../images/photos/photo-methodology-s7.png';
import methodology8 from '../images/photos/photo-methodology-s8.png';
import methodology9 from '../images/photos/photo-methodology-s9.png';
import methodology10 from '../images/photos/photo-methodology-s10.png';
import methodology11 from '../images/photos/photo-methodology-s11.png';
import method1 from '../images/photos/photo-methodology-s1.png';
import featured from '../images/photos/photo-methodology-featured-motorola.png';


class methodology extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container image-size-100" src={method}  alt="Method WDS background" /> 
                    </div>
                </div> 
            </div>
            <section className="flex-layout-section-full align-items-center red border-bottom-5" >
                    <div className="container-section-1-primary flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block width-75">
                                <div className=" text-white text-align-center">
                                What is the role of empathy in your business?
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center  width-70">
                            <p className="callout-text text-black">
                            EMPATHY and PASSION are the core of our business and also at the heart of our methodology.
                            </p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container width-100" src={method1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>

            <div className="flex-layout-section-full flex-layout-column align-items-center">

                <section className="flex-layout-content-container flex-layout-column margin-top-100 flex-layout-center-center">
                    <div className="content-header flex-layout-column content-block-100">    
                        <div className="title flex-layout-center"> 
                            WDS reveals the truth
                        </div>
                    <div className="content-block-100 margin-top-15">
                        <p className="content-text-18 text-align-center">
                            The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. For more than a decade, we have refined a scalable, flexible methodology that centers on answering questions about customers by connecting and understanding people, observing their daily workflow, by interviewing and conversing with them we begin to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen. </p>
                    </div>
                    </div>
                </section>
                    <button type="button" className="margin-top-50">We Start by Finding The Truth</button>

                    <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>

                    </div>
                <section className="flex-layout-content-container flex-layout-column flex-layout-center-center">
                    <div className="content-header flex-layout-column content-block-75">    
                        <div className="title flex-layout-center"> 
                            Overview of the WDS Methodology
                        </div>
                    <div className="width-100 margin-top-15">
                    <p className="content-text-18 text-align-center margin-bottom-100">
                        Our methodology has produces answers and empathic designs that connect and resonates with your users. Our methodology uncovers unarticulated user needs and our design solutions and strategies will drive transformation. </p>
                    </div>
                    </div>
                </section>


                <section className="grid-2col-photo-content content-header" >
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            Design Review
                        </div>

                        <div className="subtitle margin-top-15">
                            Uncovering Design Problems
                        </div>

                        <div className="content-block-75 margin-top-15">
                            <p className="content-text-18 content-block-100">
                            A design review is a process to evaluate and critique current design work. The review looks at how specific features have been implemented and/or evaluates a prototype of a project feature or user flow. Design reviews can be modeled after the five elements of the user experience with an evaluation of the elements from abstract concepts to concrete stages.
                            </p>

                            <ul className="dashed content-block-75">
                                <li>Surface - everything visually the "Look and Feel" of the site or app</li>
                                <li>Skeleton - Make structure concrete: Do the components make sense</li>
                                <li>Structure - Gives shape to the scope. How do the components fit togther and behave </li>
                                <li>Scope - requirements</li>
                                <li>Strategy - Where it all begins. <br/>What was the reason for this site/app. What do the users want? </li> 
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology4}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                
                <section className="grid-2col-photo-content margin-top-75 flex-layout-section-full content-header">
                    <div className="grid-left">
                        <div className="title">
                             Research
                        </div>
                        <div className="subtitle margin-top-15">
                             Understanding the Business
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                                The next phase of the methodology establishes the foundation. It is all about the business and how it relates to the users. It's how design relates to the business.</p>

                            <ul className="dashed">
                                <li>Kickoff Meeting</li>
                                <li>Business Requirements</li>
                                <li>Competition Research</li>
                                <li>Marketing Materials Review</li>
                                <li>Style Guides and Company Standards</li>
                                <li>Stakeholders Contact</li>
                            </ul>

                        </div>
                    </div>

                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology3}  alt="Methodology" /> 
                    </div>  

                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header flex-layout-center">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            Observation
                        </div>

                        <div className="subtitle margin-top-15">
                            Empathizing with the User
                        </div>
                        
                        <div className="margin-top-15" >
                            <p className="content-text-18 content-block-55">
                            The people being observed should be carrying out normal routines—playing, eating,relaxing, or working at home or at the office.  A real-life atmosphere—even a slightly stilted one—is still better than the highly artificial setting of a focus-group conference room or a laboratory. For some products and services, our team members may conduct their observations in a highly unobtrusive way simply by planting themselves in their offices and video taping.
                            </p>

                            <ul className="dashed content-block-75 content-text-16">
                                <li>Well chosen observers have deep knowledge of product or service</li>
                                <li>Observers rely on real actions rather than reported behavior</li>
                                <li>Learn the users feelings through body language, </li>
                                <li>Use of actual product or prototype</li>
                                <li className="">Our team are sophisticated, <br/>empathic observers that can see solutions<br/> to unarticulated needs </li>
                                
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology4}  alt="Methodology" /> 
                    </div>     
                </section>

                
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header flex-layout-center">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            Capturing Data
                        </div>

                        <div className="subtitle margin-top-15">
                            Understanding the Research
                        </div>
                        
                        <div className="content-block-75 margin-top-15">
                            <p className="content-text-18 content-block-75">
                            When we wish to know how to interpret people’s actions, observers may ask a few very open-ended questions, such as “Why are you doing that?” They often carry a list of questions to prompt their own observations—for example, “What problems is the user encountering?” But most data are to gathered from visual, auditory, and sensory cues. Thus empathic-design teams very frequently use photography and videography as tools.
                            </p>
                        </div>
                        
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology4}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Reflection and Analysis
                        </div>
                        <div className="subtitle">
                            Empathizing with Users 
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            After gathering data in many forms, the UX designers return to reflect on what they have observed and to review their visual data with the team. Analyzing workflows, user journeys and pain points.They will ask questions that the team members may or may not be able to answer and that may well send them out for further observation. It is at this point that the team tries to identify all of its customers’ possible problems and needs.</p>

                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology5}  alt="Methodology" /> 
                    </div>     
                </section>
                
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header flex-layout-center">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            Brainstorming for Solutions
                        </div>
                        <div className="subtitle">
                            Turning Ideas into Designs
                        </div>
                        <div className="content-block-75" >
                            <p className="content-text-18 content-block-75">
                            Brainstorming is a valuable part of any methodology process; it is used specifically to transform the observations into graphic, visual representations of possible solutions. Although brainstorming is generally associated with a creative process, it is not undisciplined. We tell our team to heed five rules: </p>

                            <ol>
                                <li>defer judgment</li>
                                <li>build on the ideas of others</li>
                                <li>Consolidate workflows</li>
                                <li>Stay focused on the topic</li>
                                <li>Encourage wild ideas</li>

                            </ol>
                            
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                            <img className="photo-container" src={methodology6}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Final Design Presentation
                        </div>
                        <div className="subtitle margin-top-15">
                            Design with Empathy
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                               The final design incorporates all the research findings and design solutions. WDS understands that effective customer experience is one built with empathy and takes into account all of the various touchpoints and tasks during a customer journey. </p>
                            <ul className="dashed">
                                <li><a href="../css_solutions">CSS Solutions</a></li>
                                <li>CSS Development (SaSS and LeSS)</li>
                                <li>HTML development</li>
                                <li>Accessibility Implementation </li>
                                <li>Telemetry/Analytics Implementation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container marginleft-minus50" src={methodology7}  alt="Methodology" /> 
                    </div>     
                </section>


                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title margin-top-15">
                            Front-end Development
                        </div>
                        <div className="subtitle margin-top-15">
                            CSS and HTML
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            In this phase, the work with developers begins. WDS will handle the layout of project developing a simple scalable CSS and responsive HTML. We work seamlessly with the developers as you code the back-end working in your agile cycles. </p>
                            <ul className="dashed">
                                <li><a href="../css_solutions">CSS Solutions</a></li>
                                <li>CSS Development (SaSS and LeSS)</li>
                                <li>HTML development</li>
                                <li>Accessibilty Implementation </li>
                                <li>Telemetry/Analytics Implementation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container marginleft-minus50" src={methodology7}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            User Testing
                        </div>
                        <div className="subtitle margin-top-15">
                            Always keeping the customer in the loop
                        </div>
                        
                        <div className="content-block-75 margin-top-15" >
                            <p className="content-text-18 content-block-75">
                            The testing phase reveals if we answered all the questions, reduced the pain points and matched expectations. This phase will last the entire development phase and never stop.
                            </p>

                            <ul className="dashed">

                            <li>Write scalable, tailored testing plans</li>
                                <li>User Questions/Interviews</li>
                                <li>Observational Fieldwork</li>
                                <li>Establish testing relationship with vendors</li>
                                <li>Establish testing relationship with stakeholders</li>
                                <li>Continue testing relationship with users</li>
                                <li>Testing Logic and Navigation</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology8}  alt="Methodology" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
                </div>


                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Launch
                        </div>
                        <div className="subtitle margin-top-15">
                            With you until the End
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                                At the completion of the project it is important to the businesses ongoing success that we provide a design strategy road-map that will continue the business success with their users in the future.</p>

                            <ul className="dashed">
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
                    <div className="grid-right container-image-block">
                        <img className="photo-container marginleft-minus50" src={methodology9}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            Design Support
                        </div>
                        <div className="subtitle margin-top-15">
                            A consistent message
                        </div>
                        
                        <div className="content-block-services" >
                            <p className="content-text-18 content-block-75">
                                WDS offers customer experience strategies based off the research findings. WDS offers a full line of design services to ensure cohesion and consistency in your branding message.
                            </p>

                            <ul className="dashed">

                                <li><a href="../style_guide">Style Guides and Design Systems</a> </li>
                                <li><a href="../style_guide">Website Design</a></li>
                                <li><a href="../style_guide">Graphic Design</a></li>
                                <li><a href="../style_guide">Social Marketing</a></li>
                                <li><a href="../style_guide">Video</a></li>
                
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={methodology10}  alt="Methodology" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
                </div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                    <div className="title">
                            Core Offering
                        </div>
                        <div className="subtitle">
                            Business Design Strategies
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                                Last part of the methodology is our encore, the core offerings requested by our clients. Our core offerings are design services that bring design to the c-suite and beyond </p>

                            <ul className="dashed">
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
                    <div className="grid-right container-image-block">
                        <img className="photo-container marginleft-minus50" src={methodology11}  alt="Methodology" /> 
                    </div>     
                </section>
            </div>


                <section className="flex-layout-section-full padding yellow-bg image-background-border-tb margin-top-100">
                    <div className="content-header flex-layout-center margin-tb-100 width-100">
                        <div className="callout-text text-black">
                            Our process is so efficient that it scales from start-up companies to global enterprises. 
                        </div>
                    </div> 
                </section>

                <section className="flex-layout-section-full align-items-center margin-tb-100">
                    
                    <div className="grid-2col-photo-text align-self-center width-70 ">
                    <div className="col2-photo width-70 grid-placeself-center">
                       <a href= "./case_study_1"><img src={featured} className="border-3px width-100" alt="Case Study Image 2"/></a> 
                    </div>
                    <div className="2col-text grid-placeself-center width-100 margin-left-75">
                    <div className="title">
                         WDS Methodology in Action
                    </div>
                    <div className="subtitle margin-top-15">
                         WDS Methodology Uncovered and Solved Motorola's Design Problems
                    </div>
                        <p className="content-text-18 margin-top-15"> 
                        A design problem with Motorola Surfboard Cable Modem product line was on the verge of losing money due to high return rate and a high spike in call center calls. After two failed attempts and years of complacency, Motorola stakeholders decided to bring in a consultant with design and UX experience wiht a proven methodology.  <a href= "./case_study_1"> For the full story....</a></p>
                    </div>
                </div>     
            </section>
            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                                We understand the value of connecting with your users </p>
                            <p className="content-text-18 margin-top-15">  
                            
                                WDS has the honour of being the third option on quite a few projects, including the stubhub project. Many times the previous experiences were unsuccessful not meeting business or users needs. It's not easy to follow unsuccessful design projects. Developers and stakeholders are on edge, but our team empathizes with the situation. Once we begin our methodology and advocating for the users we begin connecting with the developers and stakeholders, amazing things begin happen.</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 grid-placeself-center">
                        <img className="flex-image-container" src={methodolgy_graphic}  alt="Thank you WDS!" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
                </div>
            </section>     
            </div>
        )
    }
}

export default methodology;