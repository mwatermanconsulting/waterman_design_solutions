import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import why from '../images/backgrounds/bg-why-wds.svg';
import whys1 from '../images/photos/photo-why-s1.png';
import whys2 from '../images/photos/photo-why-s2.png';
import whys3 from '../images/photos/photo-why-s3.png';
import why_business from '../images/photos/photo-why-business-solutions.png';
import why_design from '../images/photos/photo-why-design-solutions.png';
import why_enterprise from '../images/photos/photo-why-enterprise-solutions.png'; 
import why_oh_really from '../images/graphic-why-s1.svg';
import why_handshake from '../images/graphic-why-s2.svg';
import icon_design_solutions from '../images/icon-why-design-solutions.svg';
import icon_design from '../images/icon-why-design.svg';
import icon_strategy from '../images/icon-why-strategy.svg';
import icon_ui from '../images/icon-why-ui.svg';
import icon_ux from '../images/icon-why-ux.svg';
import icon_marketing from '../images/icon-why-marketing.svg';
import care from '../images/graphic-why.svg';


class why_wds extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <section className="flex-section-fixed-head">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-item-bottom">
                            <img className="flex-image-container image-size-100" src={why}  alt="Design Solutions" /> 
                         </div>
                    </div> 
                </section>
                <section className="flex-layout-section-full align-items-center red border-bottom-5" >
                    <div className="container-section-1-primary flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block width-75">
                                <div className=" text-white text-align-center">
                                   We are your design partners
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center padding width-70">
                            <p className="callout-text text-black">
                            WDS is UX/UI Consulating firm that solves complex design and UI problems, by using a proven methodology that uncovers the truth to problems and develops a new awareness and empathy with your users.</p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container width-100" src={whys1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>
            <main>
           
                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <p className="title margin-top-75">
                        WDS Provides Design Support That Make a Difference </p>
                    <p className="subtitle content-block-60 margin-top-25 flex-layout-column align-items-center">
                        Our client roster includes Motorola, Pfizer, Stubhub, SmithKline, OsiSoft...</p>
                </section>
                <div className="flex-layout-section-full margin-top-75 grey-blue padding-bottom-50">
                <div className="grid-services-list  flex-section-align-center">
                    <div className="margin-top-50 grid-services-title title text-align-center ">
                        Services Include 
                    </div>
                    <div className="grid-services-3">
                        <img className="width-50" src={icon_strategy}  alt="Strategy and Insights" /> 
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
                        <img className="width-50" src={icon_ux}  alt="UX" /> 
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
                        <img className="width-50" src={icon_ui}  alt="UI" />
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
                        <img className="width-50" src={icon_marketing}  alt="Marketing and Analysis" />
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
                        <img className="width-50" src={icon_design_solutions}  alt="Design Solutions" />
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
                        <img className="width-50" src={icon_design}  alt="Design" />
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
            
                   
    
                  
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-2col-text-photo width-70 margin-top-100 ">
                        <div className="col2-textwidth-100 grid-placeself-center">
                            <img  src={whys2} className="width-100" alt="Case Study Image 2"/> 
                        </div>
                    <div className="2col-photo grid-placeself-center content-block-75">
                        <p className="content-header "> 
                            Our UX Methodology Connects<br/> with People</p>
                        <p className="content-text-21 margin-top-15">  
                            Connecting with the users takes old-fashioned customer service values. Knowing your customer and treating them with kindness and respect. Being able to know and intuitively understanding their needs. Our <a href="./methodology">methodology</a> has produced lasting results for the business we serve. Wide ranging design solutions can deeply affect the user and the business by clarifying business design solutions that drive transformation. </p>
                    </div>
                    </div> 
                    <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>
                </section>
           
            <section>
                <div className="grid-2col-photo-content align-self-center width-100">
                    <div className="grid-left grid-placeself-center width-70">
                        <p className="content-header"> 
                            Core Offerings</p>
                        <p className="content-text-21 content-block-75 margin-top-15">
                            Business value of design. WDS has been successful helping business with design for close to 20 years with our design strategies and < a href="core_offerings">core offerings,</a> which Increase revenues and shareholders returns. We know the value of design, but don't take our word of for it. A comprehensive study on the value of design, <a href="../insights">Mckinsey</a> found the truth that companies that focus on the user and design have 30% increase in business compared to the same businesses that do not focus on design.</p>
                    </div>
                    <div className="grid-right width-100 grid-placeself-center">
                        <img src={whys3} className="width-100" style={{width: '544px'}} alt="Case Study Image 2"/> 
                    </div>
                </div>
            </section>
        </main>

        <div className="thin-hr width-70 align-self-center margin-top-100"></div>

            <section className="flex-layout-section-full align-items-center " >
                <p className="title text-black margin-top-50"> Design Services</p>
                <p className="subtitle"> 
                            Our Most Popular Design Services</p>
                 
                 <div className="grid-2col-photo-content margin-top-75">
                    <div className="grid-left">
                        <p className="content-header"> 
                            Design Solutions</p>
                            
                        <p className="content-text-21"> 
                            UX Design</p>
                        <p className="content-text-18 content-block-75">  
                        WDS method for UX is old school customer service. Understanding real world customer service of talking and observing people. Emphasizing with them when they struggle or fail. Keeping in mind that every customer, has a goal or task to complete helps to understand their journey, use that knowledge of the customers to systematically make that experience better.</p>

                        <p><i><a href="../ux_design">Learn More</a> </i></p>

                    </div>
                <div className="grid-right">
                        <img src={why_design} className="border-3px" alt="Case Study Image 2"/> 
                </div>
                </div>
                <div className="grid-2col-photo-content margin-top-100 ">
                    <div className="grid-left">
                        <p className="content-header"> 
                            UI Design and Development</p>
                        <p className="content-text-21"> 
                            Application and Website Design </p>
                        <p className="content-text-18 content-block-75">  
                            Our work has simplified interfaces for applications used by critical industries such as used energy sector using our designed software to monitor oil rigs or for the pharmaceutical industries using our UI designed software on the monitoring the drug manufacturing factories.</p>
                        
                            <p><i><a href="../ux_design">Learn More</a> </i></p>
                    </div>

                    <div className="grid-right">
                        <img src={why_business} className="border-3px" alt="Case Study Image 2"/> 
                    </div>
                </div>
                <div className="grid-2col-photo-content margin-top-100 ">
                    <div className="grid-left">
                        <p className="content-header"> 
                            Design Systems</p>
                        <p className="content-text-21"> 
                            Ensuring your message is consistent across all mediums </p>
                        <p className="content-text-18 content-block-75">  
                            A Design System is the complete set of design standards, documentation, and principles along with UI patterns and components to achieve those standards.</p>

                            <p><i><a href="../design_systems">Learn More</a> </i></p>
                    </div>
                    <div className="grid-right">
                        <img src={why_enterprise} className="border-3px" alt="Case Study Image 2"/> 
                    </div>
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-100"></div>

            <section className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-column flex-layout-center-center">    
                    <p className="title text-align-center margin-top-100 content-block-55">
                        WDS builds emotionally rich, resonant digital solutions that enable users to fully realize technology’s complete potential, by simplifying everything your customers touch and feel.</p>
                </div>
                <div className="content-block-25" style={{marginLeft: '10%'}}>
                    <img className="flex-image-container margin-top-75" src={why_oh_really}  alt="WDS digital solutions" /> 
                </div>
                <div className="content-header flex-layout-column" >    
                    <p className="title margin-top-50 text-align-center">
                        By advocating and designing for the user.</p>
                </div>
            </section>
            <div className="flex-layout-center padding-bottom-50">
                <button onclick="location.href='./case_studies';" type="button" value="Case Studies" className="margin-top-50 font-size-24">Check Out Our Success Stories</button>
            </div>
            <section className="flex-layout-section-full align-items-center yellow-bg border-tb-5 ">
                <div className="grid-4col-text padding-50" >
                    <div>
                    <div className="content-header layout-center-justified">
                        We'll get there together
                    </div>
                    <div className="layout-center-justified ">
                        <p className=" content-block-why margin-top-10">WDS can work with embedding employees within your teams as contract employees or work separately, WDS has the experience and knowledge to help guide you every step of the way if you need it.  </p>
                    </div>
                    </div> 
                    <div>
                    <div className="content-header">Measurable Results</div>
                        <div className="layout-center-justified ">
                            <p className="  content-block-why margin-top-10">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, 
                            there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.</p>
                        </div>
                    </div> 
                    <div>
                    <div className="content-header">Your users will love you.</div>
                        <div className="layout-center-justified ">
                            <p className=" content-block-why margin-top-10">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                            With consumers, if you miss the mark, you'll fail fast, and not in a good way.</p>
                        </div>
                    </div> 
                    <div>
                    <div className="content-header">Lasting Results</div>
                        <div className="layout-center-justified">
                            <p className=" content-block-why margin-top-10 ">We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                            Our <a href ="./core_offerings">core offerings</a> have helped businesses understand the value of design and increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.</p> 
                        </div> 
                    </div> 
                </div>
            </section>
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
export default why_wds;