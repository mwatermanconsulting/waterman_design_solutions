import React, { Component } from 'react' ;
import practice from '../images/backgrounds/bg-services.svg';
import together from '../images/photos/photo-why-wds.png';
import services2 from '../images/photos/photo-services-s2.png';
import services3 from '../images/photos/photo-services-s3.png';
import services4 from '../images/photos/photo-services-s4.png';
import services5 from '../images/photos/photo-services-s5.png';
import services6 from '../images/photos/photo-services-s6.png';

class practices extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head image-background-border-tb">
                <div className="flex-image-container flex-item-bottom grey">
                    <img className="image-size-100 container image-size-100" src={practice}  alt="Why WDS background image" /> 
                </div>
                
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 red">
                <div className="callout-text"> 
                    25 years of problem solving with design. Take a look at a few of our most recent stories of success
                </div>
            </div>
            <div className="container-grid-2col-photo-services yellow-bg"> 
                <div className="item-a-nb content-block-60 content-header flex-layout-column">
                    <h3 className="subtitle text-white">WDS IS YOUR PARTNER FOR EXPERIENCE-DRIVEN TRANSFORMATION</h3>
                    <p>WDS is an end-to-end, experience-driven company that helps organizations navigate complex software transformations. Our team 
                    brings clarity to better understand customers’ needs and to reveal disconnects in your current customer experience. In doing so, we deliver comprehensive experience 
                    enhancements to help you exceed your customer experience and targeted business goals.</p>
                    <p className="content-text-18">We work across verticals and technologies, such as consumer, workplace, financial, healthcare, customer service, mobile development, and ecommerce.</p>
                             
                </div>
                <div className="item-b container-image-block">
                    <img className="flex-image-container" src={together}  alt="Your Business is Our Joy" /> 
                </div>
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column margin-top-50">
                <div className="container-grid-2col-full" style={{ width: '50%' }}>
                    <div className="margin-top-50 title grid-title">
                        Services Include</div>
                <div className="grid-a content-header flex-layout-column">
                    <div className="subtitle">
                        Services and Insights
                </div>
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
                        <li>CSS Methodology, Organization, <br/>best practices and mentoring</li>         
                    </ul>  
                    </div>
                    <div className="grid-b content-header flex-layout-column">
                        <div className="subtitle">
                            UX Design
                        </div>
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
                    <div className="grid-c content-header flex-layout-column">
                        <div className="subtitle">
                            Marketing and Analytics
                        </div>
                    <ul>
                        <li>Marketing Strategy</li>
                        <li>Content Science & Design</li>
                        <li>Experience Data & Analytics</li>
                        <li>Social & Influence Strategy</li>
                        <li>Marketing Technology Design & Strategy</li>
                        <li>Innovation as a Brand</li>       
                    </ul>  
                    </div>
                    <div className="grid-d content-header flex-layout-column">
                        <div className="subtitle">Design</div>
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

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            Strategy and Insight
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            An experience strategy provides the direction to design and build an experience that truly resonates with your audience.</p>
                            <p className="content-text-18">
                                Harnessing the power of observation-based insights and leveraging your users' wants, needs, and emotional connection points, we develop solutions that go beyond best practices. </p>
                            <p className="content-text-18">
                                We then take those solutions back to your users and get meaningful, individual feedback. </p>
                            <p className="content-text-18">
                                This is the primary foundation that successfully supports your product or service.</p>
                                    
                            <p><i>Learn More</i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={services2}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header">
                        <div className="grid-right-content flex-layout-section-full ">
                            <div className="subtitle">
                            Marketing and Design Metrics
                            </div>
                        <div className="content-block-75 content-text-18">
                            <p className="content-text-18"> The WDS Digital Marketing team researches, ideates, implements      and optimizes sophisticated web marketing solutions tailored to the specific goals 
                                and objectives of each of our clients.</p>
                            <p className="content-text-18">What sets us apart is a genuine understanding of your users.         Combining proven digital marketing strategies and user observations, we create and run          organized digital marketing campaigns that deliver. Our team cuts through the clutter to        create and measure impactful strategies. We ensure your digital marketing campaigns align       with your business objectives, and leverage opportunities for innovation and                    differentiation.</p>      
                            <p><i>Learn More</i></p>
                        </div>
                    </div>
                        <div className="grid-left-photo container-image-block">
                            <img className="photo-container" src={services3}  alt="Your Business is Our Joy" /> 
                        </div>     
                    </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            User Experience Design
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> When design determines success, understanding the user is paramount. We design to connect people with what matters most to them. </p>
                            <p className="content-text-18">Our design experts use experience strategy and insight to define how software functions and build workflows for the ways that people will experience it. 
                            From inception through launch, we obsess over every detail.</p>
                            <p className="content-text-18">For the visual representation, we create a uniquely identifiable and recognizable design by incorporating elements like brand, familiar fonts and emotions that resonate with users.</p>
                                           
                                    
                            <p><i>Learn More</i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={services4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>


                    {/* <div className="flex-layout-section-full flex-layout-center-center margin-top-50 padding-bottom-50"> 
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
                    </div> */}

             <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header">
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                            CX Customer Experience
                        </div>
                        <div className="content-block-75 content-text-18">
                        <div className="content-block-services" >
                            <p className="content-text-18">  What is customer experience? </p>
                            <p className="content-text-18">Customer experience (CX) is defined by interactions between a customer and an organization throughout their business relationship. An interaction can include awareness, discovery, cultivation, advocacy, purchases and service.</p>
                            <p className="content-text-18">Customer experience is an integral part of Customer Relationship Management (CRM) and the reason why it’s important is because a customer who has a positive experience with a business is more likely to become a repeat and loyal customer.</p>
                            <p className="content-text-18">Learn More </p>     
                        </div>
                        </div>
                    </div>
                    <div className="grid-left-photo container-image-block">
                        <img className="photo-container" src={services5}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>
                </div>
                <div className="flex-layout-section-full padding yellow-bg image-background-border-tb margin-top-100">
                    <div className="content-header flex-layout-center width-100">
                        <div className="callout-text text-black">
                            In todays market design is more critical to your business success, competition and user expectations have increased.<br/> 
                            Your only chance of survival is understanding both your users and competition.
                        </div>
                    </div> 
                </div>
               
                 <div className="container-grid-3col flex-layout-center-center margin-top-100 margin-bottom-100" style={{marginLeft: '15%'}}>
                    <div className="grid-title subtitle margin-bottom-20">
                    
                    Verticals

                    </div>
                    <div className="grid-services-1 content-text-18">
                    <ul>
                        <li>Healthcare</li>
                        <li>Airlines</li>
                        <li>Consumer</li>
                        <li>Retail</li>
                    
                    </ul>

                    </div>
                    <div className="grid-services-2 content-text-18">
                       
                    <ul>
                        <li>Healthcare</li>
                        <li>Airlines</li>
                        <li>Consumer</li>
                        <li>Retail</li>
                    
                    </ul>
                       
                    </div>
                    
                    <div className="grid-services-3 content-text-18">
                        
                    <ul>
                        <li>Healthcare</li>
                        <li>Airlines</li>
                        <li>Consumer</li>
                        <li>Retail</li>
                    
                    </ul>

                    </div>
                  </div>
                
          
            
            </div>
        )
    }
}

export default practices;