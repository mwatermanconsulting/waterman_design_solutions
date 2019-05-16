import React, { Component } from 'react' ;
import practice from '../images/bg-services.svg';
import services2 from '../images/photo-services-s2.png';
import services3 from '../images/photo-services-s3.png';
import services4 from '../images/photo-services-s4.png';
import services5 from '../images/photo-services-s5.png';
import services6 from '../images/photo-services-s6.png';

class practices extends Component {
    render () {
        return(
        <div className="flex-layout-column margin-bottom-50"> 
            <div className="flex-section-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom grey">
                        <img className="image-size-100 container image-size-100" src={practice}  alt="Why WDS background image" /> 
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
                        <h2 className="margin-top-50" style={{ marginLeft: '30%' }}>Services Include</h2>
                    </div>
            <div className="flex-layout-column flex-layout-justified-sb" style={{ width: '40%' }}>
                <div className="flex-layout-row"> 
                    <div className="content-header flex-layout-column">
                        <h3 className="subtitle">Services and Insights</h3>
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
                <div className="flex-layout-row"> 
                    <div className="content-header flex-layout-column">
                        <h3 className="subtitle">UX Design</h3>
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
                        <h3 className="subtitle">Marketing and Analytics</h3>
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
                    <div className="content-header flex-layout-column padding-bottom-100">
                        <h3 className="subtitle">Design</h3>
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
            <div className="flex-layout-section-full thin-hr margin-top-50"></div>
                </div>
                    <div className="flex-layout-row flex-layout-center-center"> 
                        <div className="content-header flex-layout-column flex-sh-500">
                            <h3 className="subtitle">Strategy and Insight</h3>
                                <div className="content-block-services">
                                    <p className="content-text-18"> An experience strategy provides the direction to design and build an experience that truly resonates with your audience.</p>
                                    <p>Harnessing the power of observation-based insights and leveraging your users' wants, needs, and emotional connection points, we develop solutions that go beyond best practices. </p>
                                    <p>We then take those solutions back to your users and get meaningful, individual feedback. </p>
                                    <p>This is the primary foundation that successfully supports your product or service.</p>
                                    <p>Learn More</p>
                                </div>
                        </div>
                        <div className="flex-layout-column">
                            <div className="container-image-block">
                                <img className="photo-container" src={services2}  alt="Your Business is Our Joy" /> 
                            </div>
                            
                        </div>
                </div>

                <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                    <div className="flex-layout-row-reverse flex-layout-center-center margin-top-50" >
                        <div className="content-header flex-layout-column flex-sh-500" style={{marginLeft: "150px" }}>
                            <h3 className="subtitle" style={{marginLeft: "20px" }}>Marketing and Design Metrics</h3>
                                <div className="content-block-services-reverse">
                                    <p className="content-text-18"> The WDS Digital Marketing team researches, ideates, implements and optimizes sophisticated web marketing solutions tailored to the specific goals 
                                        and objectives of each of our clients.
                                        What sets us apart is a genuine understanding of your users. Combining proven digital marketing strategies and user observations, we create and run organized digital marketing 
                                        campaigns that deliver. Our team cuts through the clutter to create and measure impactful strategies. We ensure your digital marketing campaigns align with your business objectives, 
                                        and leverage opportunities for innovation and differentiation.</p>
                                </div>
                        </div>
                        <div className="flex-layout-column padding-bottom-50">
                            <div className="container-image-block">
                                <img className="photo-container" src={services3}  alt="Your Business is Our Joy" /> 
                            </div>
                        </div>
                    </div>
                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>
                    <div className="flex-layout-row flex-layout-center-center margin-top-50 padding-bottom-50"> 
                        <div className="content-header flex-layout-column flex-sh-500">
                            <h3 className="subtitle">User Experience Design</h3>
                                <div className="content-block-services">
                                        <p className="content-text-18"> When design determines success, understanding the user is paramount. We design to connect people with what matters most to them. </p>
                                        <p>Our design experts use experience strategy and insight to define how software functions and build workflows for the ways that people will experience it. 
                                            From inception through launch, we obsess over every detail.</p>
                                        <p>For the visual representation, we create a uniquely identifiable and recognizable design by incorporating elements like brand, familiar fonts and emotions that resonate with users.</p>
                                        <p>Learn More </p>     
                                </div>
                        </div>
                        <div className="flex-layout-column">
                            <div className="container-image-block">
                                <img className="photo-container" src={services4}  alt="Your Business is Our Joy" /> 
                            </div>
                        </div>
                    </div>

                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                    <div className="flex-layout-section-full flex-layout-center-center margin-top-50 padding-bottom-50"> 
                        <div className="content-header flex-layout-column width-50">
                            <h3 className="sub-title">Featured Service: Design Systems</h3>
                                <div className="content-block">
                                        <p className="content-text-18"> At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, 
                                        and letting software teams focus on solving tough problems instead of the small stuff. </p>
                                        <p>Learn more about design systems » </p>
                                </div>
                        </div>
                    </div>

                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                    <div className="flex-layout-section-full flex-layout-center-center margin-top-100 padding-bottom-50"> 
                        <div className="content-header flex-layout-column width-50">
                            <h3 className="sub-title">Featured Service: CSS Development and Support</h3>
                                <div className="content-block">
                                        <p className="content-text-18"> At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, 
                                        and letting software teams focus on solving tough problems instead of the small stuff. </p>
                                        <p>Learn more about design systems » </p>
                                </div>
                        </div>
                    </div>

                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                    <div className="flex-layout-row-reverse flex-layout-center-center margin-top-50 padding-bottom-50"> 
                        <div className="content-header flex-layout-column flex-sh-500" style={{marginLeft: "150px" }}>
                            <h3 className="subtitle">CX Customer Experience</h3>
                                <div className="content-block-services" >
                                        <p className="content-text-18">  What is customer experience? </p>
                                        <p>Customer experience (CX) is defined by interactions between a customer and an organization throughout their business relationship. An interaction can include awareness, discovery, cultivation, advocacy, purchases and service.</p>
                                        <p>Customer experience is an integral part of Customer Relationship Management (CRM) and the reason why it’s important is because a customer who has a positive experience with a business is more likely to become a repeat and loyal customer.</p>
                                        <p>Learn More </p>     
                                </div>
                        </div>
                        <div className="flex-layout-column">
                            <div className="container-image-block">
                                <img className="photo-container" src={services5}  alt="Your Business is Our Joy" /> 
                            </div>
                        </div>
                    </div>

                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                    <div className="flex-layout-row flex-layout-center-center"> 
                        <div className="content-header flex-layout-column flex-sh-500" >
                            <h3 className="subtitle">Design and Marketing</h3>
                                <div className="content-block-services" >
                                        <p className="content-text-18"> When design determines success, understanding the user is paramount. We design to connect people with what matters most to them. </p>
                                        <p>Our design experts use experience strategy and insight to define how software functions and build workflows for the ways that people will experience it. 
                                            From inception through launch, we obsess over every detail.</p>
                                        <p>For the visual representation, we create a uniquely identifiable and recognizable design by incorporating elements like brand, familiar fonts and emotions that resonate with users.</p>
                                        <p>Learn More </p>     
                                </div>
                        </div>
                    <div className="flex-layout-column">
                        <div className="container-image-block">
                              <img className="photo-container" src={services6} alt="consulting"/> 
                        </div>
                    </div>
                    </div>

                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                <div className="flex-layout-section-full">
                     <div className="flex-layout-column"> 
                        <div className="flex-layout-center-center margin-top-50"> 
                             <div className="content-header flex-layout-center">
                                <div className="content-text" style={{ width: '40%' }}>
                                    <h3><b> In todays market design is more critical to your business success, competition and user expectations have increased. 
                                            Your only chance of survival is understanding both your users and competition.</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default practices;