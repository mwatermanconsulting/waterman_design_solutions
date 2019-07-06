import React, { Component } from 'react' ;
import practice from '../images/backgrounds/bg-services.svg';
import together from '../images/photos/photo-why-wds.png';
import services2 from '../images/photos/photo-services-s2.png';
import services3 from '../images/photos/photo-services-s3.png';
import services4 from '../images/photos/photo-services-s4.png';
import services5 from '../images/photos/photo-services-s5.png';
import services6 from '../images/photos/photo-services-s6.png';
import services7 from '../images/photos/photo-services-s7.png';
import services8 from '../images/photos/photo-services-s8.png';
import services9 from '../images/photos/photo-services-s9.png';

class services extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head image-background-border-tb">
                <div className="flex-image-container flex-item-bottom grey">
                    <img className="flex-image-container image-size-100" src={practice}  alt="Why WDS background image" /> 
                </div> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 red">
                <div className="callout-text"> 
                    Good design matters whether your company focuses on physical goods, digital products, services, or a combination of these.
                </div>
            </section>
            <section className="grid-callout yellow-bg"> 
                <div className="grid-callout-text grid-placeself-center width-70">
                    <p className="callout-text text-black">Introduce this section and explain to the user why they should read farther. Talk about our knowledge and experience across many different verticals on applications, websites, marketing materials and UX services. All our design solutions and services are with the user in mind and money in yor pocket. 
                    </p>     
                </div>
                <div className="grid-callout-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={together}  alt="Services" /> 
                </div>
            </section>
        <main className="flex-layout-section-full flex-layout-center-center flex-layout-column margin-top-75">
            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <p className="title">
                    WDS Services Introduction </p>
                <p className="subtitle content-block-60 margin-top-25">
                    Our services are all-encompassing solutions for your business model and stems out to your website, customer experience,and the visual design of your products and marketing collateral.</p>
            </section>

            <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            User Experience Design
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> When design determines success, understanding the user is paramount. We design to connect people with what matters most to them. </p>
                            <p className="content-text-18">Our design experts use experience strategy and insight to define how software functions and build workflows for the ways that people will experience it. 
                            From inception through launch, we obsess over every detail.</p>
                            <p className="content-text-18">For the visual representation, we create a uniquely identifiable and recognizable design by incorporating elements like brand, familiar fonts and emotions that resonate with users.</p>
    
                            <p><i><a href="../ux_design">Learn More</a> </i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container width-100 marginleft-minus50" src={services4}  alt="Services" /> 
                    </div>           
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                            UI Design & Development
                        </div>
                        <div className="content-block-services content-text-18">
                            <p className="content-text-18 content-block-75"> The WDS Digital Marketing team researches, ideates, implements and optimizes sophisticated web marketing solutions tailored to the specific goals 
                            and objectives of each of our clients.</p>
                            <p className="content-text-18 content-block-75">What sets us apart is a genuine understanding of your users.Combining proven digital marketing strategies and user observations, we create and run organized digital marketing campaigns that deliver. Our team cuts through the clutter to create and measure impactful strategies. We ensure your digital marketing campaigns align with your business objectives, and leverage opportunities for innovation and differentiation.</p>      
                            <p><i><a href="../ui_design">Learn More</a></i></p>
                        </div>
                    </div>
                        <div className="grid-left-photo container-image-block">
                            <img className="photo-container" src={services3}  alt="Services" /> 
                        </div>     
                </section>



                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                                Design Solutions
                        </div>
                        <div className="content-block-services content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            An experience strategy provides the direction to design and build an experience that truly resonates with your audience.</p>
                            <p className="content-text-18">
                            Harnessing the power of observation-based insights and leveraging your users' wants, needs, and emotional connection points, we develop solutions that go beyond best practices. </p>
                            <p className="content-text-18">
                             We then take those solutions back to your users and get meaningful, individual feedback. </p>
                            <p className="content-text-18">
                             This is the primary foundation that successfully supports your product or service.</p>
                                    
                            <p><i><a href="../design_solutions">Learn More</a></i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container marginleft-minus50" src={services2}  alt="Services" /> 
                    </div>     
                </section>
                
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                            Strategy and Insight 
                        </div>
                        
                        <div className="content-block-75" >
                            <p className="content-text-18 content-block-services">WDS gathers knowledge for our clients to learn where best to invest their resources based on what people value.</p>
                            <p className="content-text-18"><a href="../strategy_insight">Learn More</a></p>     
                        </div>
                        
                    </div>
                    <div className="grid-left-photo container-image-block">
                        <img className="photo-container" src={services5}  alt="Services" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            CSS Solutions
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            CSS development, CSS system implementation, mentoring and documentation, including best of practices is what we do best! A tool that sets the standards by how an app is designed.</p>
                                    
                            <p><i><a href="../css_solutions">Learn More</a></i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={services6}  alt="Services" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header" style={{marginLeft:'20%'}}>
                    <div className="grid-right-content flex-layout-section-full ">
                        <div className="subtitle">
                            Customer Experience
                        </div>
                        <div className="content-block-75" >
                            <p className="content-text-18 content-block-75">  The best customer experience starts with the Golden Rule and how you communicate your product — why it exists, who it serves, how it benefits them.</p>
                            <p className="content-text-18"><a href="../core_offerings">Learn More</a> </p>     
                        </div>
                    </div>
                    <div className="grid-left-photo container-image-block">
                            <img className="photo-container marginleft-minus50" src={services7}  alt="Services" /> 
                    </div>     
                </section>
            </main>
                <section className="flex-layout-section-full padding yellow-bg image-background-border-tb margin-top-100">
                    <div className="content-header flex-layout-center width-100">
                        <div className="callout-text text-black">
                            In todays market design is more critical to your business success, competition and user expectations have increased.<br/> 
                            Your only chance of survival is understanding both your users and competition.
                        </div>
                    </div> 
                </section>
                
                <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-top-100 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                        <img className="container-image-500" src={services8}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="subtitle margin-top-25">Featured Service: Design Systems</div>
                            <p className="">At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, and letting software teams focus on solving tough problems instead of the small stuff.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                        <img className="container-image-500"  src={services9}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="subtitle margin-top-25">Featured Service: CSS Support</div>
                            <p className="">At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, and letting software teams focus on solving tough problems instead of the small stuff.</p>
                        </div>
                    </div>
            </section>

            <div className="flex-layout-section-full grey-blue padding-bottom-50">
                <div className="grid-services-list  flex-section-align-center">
                    <div className="margin-top-50 title grid-title">
                        Services Include</div>
                    <div className="grid-services-3">
                        <div className="subtitle">
                            Strategy & Insights
                        </div>
                    <ul>
                        <li>Digital Transformation</li>
                        <li>SaaS Transition</li>
                        <li>Strategic Ideation</li>
                        <li>Journey Maps</li>
                        <li>Contextual Inquiry</li>
                        <li>Affinity Diagramming</li> 
                        <li>Consolidated Workflow Diagrams</li>
                        <li>Design Thinking Mentoring</li>
                        <li>Communication Workshops</li>
                              
                    </ul>  
                    </div>
                    <div className="grid-services-1">
                        <div className="subtitle">
                            UX Design
                        </div>
                    <ul>
                        <li>Interaction Design</li>
                        <li>Visual Design</li>
                        <li>Personas</li>
                        <li>Prototyping</li> 
                        <li>Concept Validation</li> 
                        <li>Consolidated Workflows</li>
                        <li>Design Systems</li>
                        <li>Style Guides</li>
                        <li>Pattern Libraries</li>
                    </ul>
                    </div>
                    <div className="grid-services-4">
                        <div className="subtitle">
                            UI Design & Development
                        </div>
                            <ul>
                                <li>Design Metrics</li>
                                <li>Protyping</li> 
                                <li>Concept Validation</li> 
                                <li>Wireframe Key Workflows</li>
                                <li>CSS Solutions</li>  
                            </ul>
                    </div>
                    <div className="grid-services-5">
                        <div className="subtitle">
                            Marketing & Analytics
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
                    <div className="grid-services-2">
                        <div className="subtitle">
                            Design Solutions
                        </div>
                            <ul>
                                <li>Website Design</li>
                                <li>Visual Design</li>
                                <li>Branding</li>
                                <li>Marketing</li> 
                                <li>Print Design</li> 
                                <li>Video Production</li>
                                <li>Design Systems</li>
                                <li>Style Guides</li>
                            </ul>
                    </div>
                    <div className="grid-services-6">
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
            </div>
               <section className="flex-layout-section-full  yellow-bg">
                   
                 <div className="grid-services-list flex-section-align-center margin-top-100 margin-bottom-100">
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
                </section>
            </div>
        )
    }
}

export default services;