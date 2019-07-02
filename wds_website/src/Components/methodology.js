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
                            PASSION, HEART and EMPATHY are the real values in our methodology.
                            The goal is to understand the problems and issues of the product, website or application. Our methodology finds the truth and uncovers deeper issues by connecting with your users. </p>
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
                    <div className="content-block-100 margin-top-25">
                        <p className="content-text-18 text-align-center">
                            The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. For more than a decade, we have refined a scalable, flexible methodology that centers on answering questions about customers by connecting and understanding people, observing their daily workflow, by interviewing and conversing with them we begin  to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.. </p>
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
                    <div className="width-100 margin-top-25">
                    <p className="content-text-18 text-align-center">Our methodology has produced lasting results for the clients and       their users. The answers you find will deeply affect your users and your business by clarifying business          design solutions that drive transformation. </p>
                    </div>
                    </div>
                </section>
                
                <section className="grid-2col-photo-content content-header margin-top-100">
                    
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            Research
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            The first phase of the methodology establishes the foundation. It is all about the business and how it relates to the users. It's how design relates to the business.</p>
                        
                                <ul className="dashed">
                                    <li>Kickoff Meeting</li>
                                    <li>Business Requirements</li>
                                    <li>Marketing Materials</li>
                                    <li>Style Guides and Company Standards</li>
                                    <li>Understand business and business needs</li>
                                    <li>Current UI Design Critique</li>
                                    <li>Competition Research</li>
                                    <li>Highlight problems</li>
                                    <li>Develop list of business questions for people in charge</li>
                                </ul>
                                    
                        </div>
                    </div>

                    <div className="grid-right container-image-block">
                        <img className="photo-container marginleft-minus50" src={methodology3}  alt="Methodology" /> 
                    </div>  

                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header flex-layout-center" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                            Discovery
                        </div>
                        
                        <div className="content-block-75" >
                            <p className="content-text-18 content-block-75">
                            The discovery phase is all about the user. The research continues into the discovery phase. During this phase we begin to understand and emphasize with the user and the truth becomes clear.
                            </p>

                            <ul className="dashed content-block-75">
                                <li>Empathize and Understand the User Journey</li>
                                <li>User Questions/Interviews</li>
                                <li>Observational Fieldwork</li>
                                <li>Review Call Center or Support Logs</li>
                                <li>Review Telemetry Data</li>
                                <li>Broader Problem Discovery</li>
                                <li>Discover and Document Pain Points</li>
                                <li>Assemble Communication Team (Managers, marketing, product, stakeholders)</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-left-photo container-image-block">
                        <img className="photo-container" src={methodology4}  alt="Methodology" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            Documentation
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            The documentation phase presents the truth to our clients. It helps them understand and empathize with their customers by introducing personas, use cases and new workflows.</p>

                            <ul className="dashed" >
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
                        <img className="photo-container marginleft-minus50" src={methodology5}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header flex-layout-center" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                            Design Solutions
                        </div>
                        <div className="content-block-75" >
                            <p className="content-text-18 content-block-75">
                            This is the phase that encompasses all the research and discovery findings to simplify and design a user interface based on the user expectations and the business needs.</p>

                            <ul className="dashed">
                                <li>Design Solutions based on research and discovery</li>
                                <li><a href ="ui_design">UI Design</a></li>
                                <li>Consolidate workflows</li>
                                <li>Customer Experience Strategies</li>
                                <li>Content Strategy - Information Achitect</li>

                            </ul>
                            
                        </div>
                    </div>
                    <div className="grid-left-photo container-image-block">
                            <img className="photo-container" src={methodology6}  alt="Methodology" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            Front-end Development
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
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

                <section className="grid-2col-photo-content content-header" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                                User Testing
                        </div>
                        
                        <div className="content-block-75" >
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
                    <div className="grid-left-photo container-image-block">
                        <img className="photo-container" src={methodology8}  alt="Methodology" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
                </div>


                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            Launch
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
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

                <section className="grid-2col-photo-content content-header" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                                Design Support
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
                    <div className="grid-left-photo container-image-block">
                        <img className="photo-container" src={methodology10}  alt="Methodology" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
                </div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
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
                    <div className="subtitle">
                         WDS Methodology Uncovered and Solved Motorola's Design Problems
                        </div>
                        <p className="content-text-18"> 
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