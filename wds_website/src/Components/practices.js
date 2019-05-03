import React, { Component } from 'react' ;
import backgroundServices from '../images/enchilada.png';
import practice from '../images/why-practices-bg.png';
import joy from '../images/jump-for-joy.gif';
import marketingpic from '../images/marketing-pic.png';
import consultingpic from '../images/consulting-pic.png';

import stayinyourlane from '../images/stayinyourlane.png';

class practices extends Component {
    render () {
        return(
            
          
        <div className="flex-layout-column margin-bottom-50"> 
            <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container container" src={practice}  alt="Why WDS background image" /> 
                    </div>
                </div> 
            </div>
            <div className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="flex-layout-content-container flex-layout-column margin-top-25 flex-layout-center-center">
                    <div className="content-header flex-layout-column">    
                        <h3 className="subtitle flex-layout-center">WDS IS YOUR PARTNER FOR EXPERIENCE-DRIVEN TRANSFORMATION</h3>
                    <div className="content-block width-100">
                        <p>WDS is an end-to-end, experience-driven company that helps organizations navigate complex software transformations. Our team 
                        brings clarity to better understand customers’ needs and to reveal disconnects in your current customer experience. In doing so, we deliver comprehensive experience 
                        enhancements to help you exceed your customer experience and targeted business goals.</p>
                        <p className="content-text-18">We work across verticals and technologies, such as consumer, workplace, financial, healthcare, customer service, mobile development, and ecommerce.</p>
                    </div>
                    </div>
                </div>
                    <div className="content-header">
                        <h5 className="title-center margin-top-100" style={{ marginLeft: '30%' }}>Services</h5>
                    </div>
            <div className="flex-layout-column flex-layout-justified-sb" style={{ width: '40%' }}>
                <div className="flex-layout-row margin-top-50"> 
                    <div className="content-header flex-layout-column">
                        <h3 className="text">Services and Insights</h3>
                            <ul>
                                <li>Digital Transformation</li>
                                <li>Journey Maps</li>
                                <li>Contextual Inquiry</li>
                                <li>Affinity Diagramming</li> 
                                <li>Personas</li> 
                                <li>Consolidated Workflow Diagrams</li>
                                <li>Design Thinking Mentoring</li>
                                <li>Communication Workshops</li>
                                <li>Engagement Plans</li>
                                <li>CSS Methodology, Organization, best practices and mentoring</li>         
                            </ul>  
                        </div>
                        <div>
                            <div className="content-header flex-layout-column">
                                <h3>UX Design</h3>
                                <div className="flex-layout-center">
                                    <ul>
                                        <li>Interaction Design</li>
                                        <li>Visual Design</li>
                                        <li>Strategic Ideation</li>
                                        <li>Protyping</li> 
                                        <li>Concept Validation</li> 
                                        <li>Wireframe Key Workflows</li>
                                        <li>Design Systems</li>
                                        <li>Style Guides</li>
                                        <li>Pattern Libaries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="flex-layout-row margin-top-50"> 
                        <div className="content-header flex-layout-column">
                            <h3 className="text">Marketing and Analytics</h3>
                                <ul>
                                    <li>Marketing Strategy</li>
                                    <li>Content Science & Design</li>
                                    <li>Experience Data & Analytics</li>
                                    <li>Social & Influence Strategy</li>
                                    <li>Marketing Technology Design & Strategy</li>
                                    <li>Innovation as a Brand</li>       
                                 </ul>  
                        </div>
                        <div>
                            <div className="content-header flex-layout-column">
                                <h3>Design</h3>
                                <div className="flex-layout-center">
                                    <ul>
                                        <li>User Interface Design</li>
                                        <li>Visual Design</li>
                                        <li>Design Metrics</li>
                                        <li>Protyping</li> 
                                        <li>Concept Validation</li> 
                                        <li>Wireframe Key Workflows</li>
                                        <li>Design Systems</li>
                                        <li>Style Guides</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                     <div className="flex-layout-section-full">
                        <div className="flex-layout-column"> 
                            <div className="flex-layout-center-center margin-top-150"> 
                                <div className="content-header flex-layout-center">
                                    <div className="content-text" style={{ width: '40%' }}>
                                        <h3><b> In todays market design is more critical to your business success, competition and user expectations have increased. 
                                                Your only chance of survival is understanding both your users and competition.</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-layout-row flex-layout-center-center"> 
                    <div className="content-header flex-layout-column flex-sh-500">
                        <h3 className="sub-title">Marketing and Design Metrics</h3>
                            <div className="content-block">
                                <p className="content-text-18">  <p> The WDS Digital Marketing team researches, ideates, implements and optimizes sophisticated web marketing solutions tailored to the specific goals 
                                                and objectives of each of our clients.

                                                What sets us apart is a genuine understanding of your users. Combining proven digital marketing strategies and user observations, we create and run organized digital marketing 
                                                campaigns that deliver. Our team cuts through the clutter to create and measure impactful strategies. We ensure your digital marketing campaigns align with your business objectives, 
                                                and leverage opportunities for innovation and differentiation.
                                            </p>
                                <br/></p> 
                            </div>
                        </div>
                        <div className="flex-layout-column">
                            <div className="container-image-block">
                                <img className="flex-image-container" src={joy}  alt="Your Business is Our Joy" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default practices;