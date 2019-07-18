import React, { Component } from 'react' ;
import practice from '../images/backgrounds/bg-services.svg';
import starleft from '../images/star-left.svg';
import starright from '../images/star-right.svg';
import together from '../images/photos/photo-why-wds.png';
import services2 from '../images/photos/photo-services-s2.png';
import services3 from '../images/photos/photo-services-s3.png';
import services4 from '../images/photos/photo-services-s4.png';
import services5 from '../images/photos/photo-services-s5.png';
import services6 from '../images/photos/photo-services-s6.png';
import services7 from '../images/photos/photo-services-s7.png';
import services8 from '../images/photos/photo-services-s8.png';
import services9 from '../images/photos/photo-services-s9.png';
import why_handshake from '../images/graphic-why-s2.svg';
import icon_design_solutions from '../images/icon-why-design-solutions.svg';
import icon_design from '../images/icon-why-design.svg';
import icon_strategy from '../images/icon-why-strategy.svg';
import icon_ui from '../images/icon-why-ui.svg';
import icon_ux from '../images/icon-why-ux.svg';
import icon_marketing from '../images/icon-why-marketing.svg';

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
                “The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” –Charles Eames

                </div>
            </section>
            <section className="grid-callout yellow-bg"> 
                <div className="grid-callout-text grid-placeself-center width-70">
                    <p className="callout-text ">
                        A true UX company listens to the customers. Our service list is a testament to our belief in old fashioned customer service.
                    </p>     
                </div>
                <div className="grid-callout-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={together}  alt="Services" /> 
                </div>
            </section>
        <main className="flex-layout-section-full flex-layout-center-center flex-layout-column margin-top-75">
            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <p className="title">
                    WDS Services</p>
                <p className="subtitle text-align-center content-block-60 margin-top-15">
                    Our services are all-encompassing solutions for your business model that stems out to your website to the visual design of your products and marketing collateral ensuring the customer experience is cohesive one.</p>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="grid-2col-photo-content content-header" style={{marginLeft: '9%'}}>
                <div className="grid-left-services flex-layout-section-full">
                    <div className="subtitle content-block-80">
                        User Experience Design
                    </div>
                    <div className="content-block-80 content-text-18 margin-top-25">
                        <p className="content-text-18"> 
                        When design determines success, understanding the user is paramount. We design to connect people with what matters most to them. </p>
                        <p className="content-text-18">
                        Our design experts use experience strategy and insight to define how software functions and build workflows for the ways that people will experience it. 
                        From inception through launch, no detail is missed.</p>
                        <p className="content-text-18">
                        The visual elements, we create will establish your brand as a design leader in your space. By understanding your business, users and competition we will ensure that you have a unique presence that include familiar use of fonts, icons with design solutions that has a certain elegance that resonates with your users emotions.</p>

                        <p><i><a href="../ux_design">Learn More</a> </i></p>
                        </div>
                    </div>
                    <div className="grid-right-services container-image-block" style={{marginTop: '95px'}}>
                        <img className="photo-container" src={services4}  alt="Services" /> 
                    </div>           
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header" style={{marginLeft: '9%'}}>
                    <div className="grid-left-services flex-layout-section-full">
                        <div className="subtitle">
                            UI Design & Development
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            WDS honed its UI design skills by designing websites in 1998. No Longer finding websites a  challenging, we turned to our creative attention to very complex user interfaces on products and applications. Solving difficult UI problems on critical applications used across a wide range of verticals. Our current data applications designs are being used on oil rigs, nuclear reactors and pharmaceutical drug plants. </p>
                            <p className="content-text-18">
                            WDS can take care of the front-end development including CSS & HTML development, working on-site with your team or creating GIT build-packages complete with custom CSS solutions, patterns libraries, style guides, best of practice documentation and design strategies, ensuring and enforcing original design and solutions.</p>      
                            <p><i><a href="../ui_design">Learn More</a></i></p>
                        </div>
                    </div>
                        <div className="grid-right-services container-image-block margin-top-60" style={{marginTop: '62px'}}>
                            <img className="photo-container" src={services3}  alt="Services" /> 
                        </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header" style={{marginLeft: '9%'}}>
                    <div className="grid-left-services flex-layout-section-full">
                        <div className="subtitle">
                                Design Solutions
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
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
                    <div className="grid-right-services container-image-block">
                        <img className="photo-container" src={services2}  alt="Services" style={{marginTop: '5%'}} /> 
                    </div>     
                </section>
                
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header" style={{marginLeft: '9%'}}>
                    <div className="grid-left-services flex-layout-section-full ">
                        <div className="subtitle margin-top-15" >
                            Strategy and Insight 
                        </div>
                        
                        <div className="content-block-75" >
                            <p className="content-text-18 margin-top-15">
                            WDS gathers knowledge for our clients to learn where best to invest their resources based on what people value.</p>
                            <p className="content-text-18"><a href="../strategy_insight">Learn More</a></p>     
                        </div>
                        
                    </div>
                    <div className="grid-right-services container-image-block">
                        <img className="photo-container" src={services5}  alt="Services" /> 
                    </div>     
                </section>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <section className="grid-2col-photo-content content-header" style={{marginLeft: '9%'}}>
                    <div className="grid-left-services flex-layout-section-full">
                        <div className="subtitle">
                            CSS Solutions
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            CSS development, CSS system implementation, mentoring and documentation, including best of practices is what we do best! A tool that sets the standards by how an app is designed.</p>
                                    
                            <p><i><a href="../css_solutions">Learn More</a></i></p>
                        </div>
                    </div>
                    <div className="grid-right-services container-image-block">
                        <img className="photo-container" src={services6}  alt="Services" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header"  style={{marginLeft: '9%'}} >
                    <div className="grid-left-services flex-layout-section-full ">
                        <div className="subtitle">
                            Customer Experience
                        </div>
                        <div className="content-block-75 margin-top-15" >
                            <p className="content-text-18 content-block-75">  The best customer experience starts with the Golden Rule and how you communicate your product — why it exists, who it serves, how it benefits them.</p>
                            <p className="content-text-18"><a href="../core_offerings">Learn More</a> </p>     
                        </div>
                    </div>
                    <div className="grid-right-services-services container-image-block">
                            <img className="photo-container marginleft-minus50" src={services7}  alt="Services" /> 
                    </div>     
                </section>
            </main>
                <section className="flex-layout-section-full padding yellow-bg image-background-border-tb margin-top-100">
                    <div className="content-header flex-layout-center width-100">
                        <div className="callout-text text-black content-block-75">
                        Design Matters <br/> Design matters to your users * Design matters to your bottom line 
                       * Design matters to your competition.<br/>  It should matter to you. 

                        </div>
                    </div> 
                </section>
                
                <section className="grid-callout-2col content-header align-self-center justify-items-center margin-top-100 width-70">
                    <div className="gallery-2col-1 container-image-500">
                        <a href ="./css_solutions"><img className="container-image-500 border-2" src={services8}  alt="CSS Solutions" /> </a>
                        <div className="content-block-auto ">
                            <div className="subtitle margin-top-50">
                                Featured Service: CSS Development and Solutions
                            </div>
                            <p className="content-text-18 margin-top-15">
                                Taming the specificity beast use to be difficult. Our CSS strategy almost eliminates the specificity problems. In fact, our strategy almost eliminates the need for your developers to write CSS. Our advantage is our past experience working with developers and interviewing and observing them working with CSS.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                    <a href ="./design_systems"> <img className="container-image-500 border-2"  src={services9}  alt="Business Solutions" /> </a>
                        <div className="content-block-auto ">
                            <div className="subtitle margin-top-50">
                                Featured Service: Design Systems</div>
                            <p className="content-text-18 margin-top-15">
                                At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, and letting software teams focus on solving tough problems instead of the small stuff.</p>
                        </div>
                    </div>
            </section>

            <div className="flex-layout-section-full margin-top-50 grey-blue padding-bottom-50">
                <section className="grid-services-list  flex-section-align-center">
                    <div className="margin-top-50 margin-bottom-25 content-block-75 grid-services-title title text-align-center" 
                    style={{marginLeft: '1%'}}>
                            Services Include: 
                    </div>
                    <div className="grid-services-3">
                        <img className="width-25" src={icon_strategy}  alt="Strategy and Insights" /> 
                        <div className="subtitle margin-top-5">
                            <a href="./strategy_insight" className="no-decoration">Strategy & Insights</a>
                        </div>
                    <ul className="dashed content-text-16 margin-top-15">
                        <li>Digital Transformation</li>
                        <li>SaaS Transition</li>
                        <li>Strategic Ideation</li>
                        <li>CSS Solutions</li>
                        <li>Design Strategies</li>
                        <li>Design C-Suite Mentoring</li>
                        <li>Empathy Workshops</li>
                        <li>Communication Workshops</li>
                              
                    </ul>  
                    </div>
                    <div className="grid-services-1">
                        <a href="ux_design"><img className="width-25" src={icon_ux}  alt="UX" /> </a>
                        <div className="subtitle margin-top-15">
                           <a href="./ux_design" className="no-decoration">UX Design</a> 
                        </div>
                    <ul className="dashed content-text-16 margin-top-15">
                        <li>Interaction Design</li>
                        <li>Visual Design</li>
                        <li>Personas</li>
                        <li>Prototyping</li> 
                        <li>Consolidated Workflows</li>
                        <li>Design Systems</li>
                        <li>Style Guides</li>
                        <li>Information Architecture</li>
                    </ul>
                    </div>
                    <div className="grid-services-4">
                        <img className="width-25" src={icon_ui}  alt="UI" />
                        <div className="subtitle margin-top-15">
                            <a href="./ux_design" className="no-decoration"> UI Design & Development </a>
                        </div>
                        <ul className="dashed content-text-16 margin-top-15">
                            <li>Mock-ups</li>
                            <li>Hi-Fidelity Designs</li>
                            <li>CSS and HTML Build Kits</li>
                            <li>Protyping</li> 
                            <li>Concept Validation</li> 
                            <li>Wireframe Key Workflows</li>
                            <li>CSS Solutions</li>  
                            </ul>
                    </div>
                    <div className="grid-services-5">
                        <img className="width-25" src={icon_marketing}  alt="Marketing and Analysis" />
                        <div className="subtitle margin-top-15">
                           <a href="./marketing" className="no-decoration"> Marketing & Analytics</a>
                        </div>
                        <ul className="dashed content-text-16 margin-top-15">
                            <li>Marketing Strategy</li>
                            <li>Content Science & Design</li>
                            <li>Experience Data & Analytics</li>
                            <li>Social & Influence Strategy</li>
                            <li>Marketing Technology Design & Strategy</li>
                            <li>Innovation as a Brand</li>       
                        </ul>  
                    </div>
                    <div className="grid-services-2">
                        <img className="width-25" src={icon_design_solutions}  alt="Design Solutions" />
                        <div className="subtitle margin-top-15">
                            <a href="./design_solutions" className="no-decoration">Core Offerings</a>
                        </div>
                            <ul className="dashed content-text-16 margin-top-15">
                                <li>Business Design Strategies</li>
                                <li>Empathy Workshops</li>
                                <li>Communication Strategies</li>
                                <li>Marketing</li> 
                                <li>Print Design</li> 
                                <li>Video Production</li>
                                <li>Design Systems</li>

                            </ul>
                    </div>
                    <div className="grid-services-6">
                        <img className="width-25" src={icon_design}  alt="Design" />
                        <div className="subtitle margin-top-15">
                                <a href="./design_solutions" className="no-decoration">Design Solutions</a></div>
                            <ul className="dashed content-text-16 margin-top-15">
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
                </section>
            </div>
            <section className="flex-layout-section-full align-items-center">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                                We understand the uncertainty and fear involved with contracting design firms </p>
                            <p className="content-text-18 margin-top-15">  
                            
                                WDS has the honour of being the third option on quite a few projects, including the stubhub project. Many times the previous experiences were unsuccessful not meeting business or users needs. It's not easy to follow unsuccessful design projects. Developers and stakeholders are on edge, but our team empathizes with the situation. Once we begin our methodology and advocating for the users we begin connecting with the developers and stakeholders, amazing things begin happen.</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 grid-placeself-center">
                        <img className="flex-image-container" src={why_handshake}  alt="Thank you WDS!" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
                </div>
            </section>
                 
            </div>
        )
    }
}

export default services;