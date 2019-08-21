import React, { Component } from 'react' ;
import why from '../images/backgrounds/bg-why-wds.svg';
import whys1 from '../images/photos/photo-why-s1.png';
import whys2 from '../images/photos/photo-why-s2.png';
import whys3 from '../images/photos/photo-why-s3.png';
import why_business from '../images/photos/photo-why-business-solutions.png';
import why_design from '../images/photos/photo-why-design-solutions.png';
import why_enterprise from '../images/photos/photo-why-enterprise-solutions.png'; 
import why_handshake from '../images/graphic-why-s2.svg';
import icon_design_solutions from '../images/icon-why-design-solutions.svg';
import icon_design from '../images/icon-why-design.svg';
import icon_ux from '../images/icon-why-ux.svg';
import youcandoit from '../images/you-can-do-it.svg';
import data_analyst from '../images/graphic-data-analyst.svg';
import advocate from '../images/graphic-advocate.svg';



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
                                <div className="text-white text-align-center">
                                Design Solutions based on real people expectations and the business needs
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center padding width-70">
                            <p className="callout-text text-black">
                            WDS is UX/UI Consulating firm that solves complex business and design problems. </p>
                        </div>
                        <div className="grid-callout-photo">
                            <img className="flex-image-container width-100" src={whys1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <p className="title margin-top-75">
                        WDS Design Support Provides the needed,Guidance and Support for your Whole Organization Craves </p>
                        <p className="content-text-24 content-block-60 margin-top-25 flex-layout-column align-items-center">
                        WDS knows design. Offering empathetic design solutions for websites, applications, mobile apps, and social media. Our core offerings helps your business understand the value of design on a core level, providing training, workshops and mentorship programs.  With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated design solutions.</p>
                        <p className="subtitle content-block-60 margin-top-50 flex-layout-column align-items-center">
                        Our client roster includes Motorola, Pfizer, Stubhub, SmithKline, OSIsoft...</p>
                </section>

                <div className="flex-layout-section-full margin-top-25 grey-blue padding-bottom-50">
                    <div className="grid-services-list padding-20 flex-section-align-center">
                        <section className="grid-services-1">
                        <a href="./ux_design" ><img className="width-25" src={icon_ux}  alt="UX" /> </a>
                        <div className="subtitle margin-top-25">
                            <a href="./ux_design" className="no-decoration">
                                UX Design</a>
                        </div>
                            <ul className="dashed content-text-18 margin-top-15">
                                <li>Interaction Design</li>
                                <li>UX Business Strategies</li>
                                <li>Personas</li>
                                <li>Prototyping</li> 
                                <li>Concept Validation</li> 
                                <li>Consolidated Workflows</li>
                                <li>Pattern Libraries</li>
                            </ul>
                        </section>
                    <section className="grid-services-2">
                    <a href="./design_solutions"> <img style={{width:'27%'}} src={icon_design_solutions}  alt="Design Solutions" /></a>
                        <div className="subtitle margin-top-25">
                            <a href="./design_solutions" className="no-decoration"> Design Solutions</a>
                        </div>
                            <ul className="dashed content-text-18 margin-top-15">
                                <li>Website Design</li>
                                <li>Branding</li>
                                <li>Marketing</li> 
                                <li>Print Design</li> 
                                <li>Video Production</li>
                                <li>Design Systems</li>
                                <li>Style Guides</li>
                            </ul>
                    </section>
                    <section className="grid-services-3">
                    <a href="./core_offerings"><img style={{width:'27%'}} src={icon_design}  alt="Design" /></a>
                        <div className="subtitle margin-top-25">
                        <a href="./core_offerings" className="no-decoration">Core Offerings</a></div>
                            <ul className="dashed content-text-18 margin-top-15">
                                <li>Telemetry Strategies</li>
                                <li>Design Support</li>
                                <li>Design Workshops</li>
                                <li>Empathy Workshops</li> 

                                <li>Data Monitoring and Reporting</li>
                                <li>UX Agile Integration Workshops</li>
                                <li>Accessibility Strategies</li>
                            </ul>
                    </section>
                </div>
            </div>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-2col-text-photo width-70 margin-top-100 ">
                        <div className="col2-textwidth-100 grid-placeself-center">
                            <img  src={whys2} className="width-100" alt="Methodology"/> 
                        </div>
                    <div className="2col-photo grid-placeself-center content-block-75">
                        <p className="content-header "> 
                            Our UX Methodology Connects with People</p>
                        <p className="content-text-21 margin-top-15">  
                            Our methodology produces results that were previously uncovered answers and empathic designs that connect and resonates with your users. Our methodology uncovers unarticulated user needs and our design solutions and strategies will drive business transformation. </p>
                    </div>
                    </div> 
                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                    
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
                        <img src={whys3} className="width-100" style={{width: '544px'}} alt="Core Offerings"/> 
                    </div>
                </div>
            </section>
      

        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

        <section className="flex-layout-section-full align-items-center">
                <p className="title "> 
                    Design Services</p>
                <p className="subtitle"> 
                    Our Most Popular Design Services</p>
            </section>    

        <section className="float-left align-items-center flex-layout-column" style={{marginLeft:' 4%'}}>
            <div className="subtitle margin-top-15 content-block-75">
                UX Design
            </div>
            <div className="content-block-75 content-text-18 margin-top-15">
                <p className="content-text-18"> 
            <div className="float-right" style={{marginRight:'10%'}}>
                <img className="border-3px" src={why_design}  alt="UX Design" /> 
            </div>
            The best customer experience starts with the Golden Rule — Treat customers how you would like to be treated. At the foundation of WDS methodology is observation—watching consumers use products or services. But unlike in focus groups, usability laboratories, and other contexts of traditional market research, such observation is conducted in the customer’s own environment—in the course of normal, everyday routines. In such a context, researchers can gain access to a host of information that is not accessible through other observation-oriented research methods. </p>

            <button onclick="location.href='./ux_design';" type="button" value="Learn More" className="button margin-top-50 font-size-24">Learn More</button>
            </div>  
        </section>


                <div className="grid-2col-photo-content margin-top-100 ">
                    <div className="grid-left">
                        <p className="content-header"> 
                            UI Design and Development</p>
                        <p className="content-text-21"> 
                            Application and Website Design </p>
                        <p className="content-text-18 content-block-75">  
                            Our work has simplified interfaces for applications used by critical industries such as used energy sector using our designed software to monitor oil rigs or for the pharmaceutical industries using our UI designed software on the monitoring the drug manufacturing factories.</p>
                        
                            <button onclick="location.href='./ui_design';" type="button" value="UI Design" className="button margin-top-50 font-size-24">Learn More</button>
                    </div>

                    <div className="grid-right">
                        <img src={why_business} className="border-3px" alt="UI Design"/> 
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

                            
                            <button onclick="location.href='./design_systems';" type="button" value="Learn More" className="button margin-top-50 font-size-24">Learn More</button>
                    </div>
                    <div className="grid-right">
                        <img src={why_enterprise} className="border-3px" alt="Enterprises"/> 
                    </div>
                </div>
            
            <div className="thin-hr width-70 align-self-center margin-top-100"></div>

            <section className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-column flex-layout-center-center">    
                    <p className="content-header text-align-center margin-top-100 content-block-55">
                        WDS builds emotionally rich, resonant digital solutions that enable users to fully realize technology’s complete potential, by simplifying everything your customers touch and feel.</p>
                </div>
                <div className="content-header flex-layout-column" >    
                    <img src={advocate} className="width-25 align-self-center margin-bottom-20" alt="Advocates for the User"/><p className="caption text-align-center">
                    
                    Advocating and designing for the user</p>
                </div>
            </section>
            <div className="flex-layout-center margin-top-50">
                <button onclick="location.href='./case_studies';" type="button" value="Case Studies" className="button margin-top-100 font-size-24">Check Out Our Success Stories</button>
            </div>

            <div className="thin-hr width-70 align-self-center margin-top-50 margin-bottom-100"></div>

            <section className="flex-layout-section-full align-items-center width-100 ">
                <div className="grid-2col-text width-50">
                    <div> <img src={youcandoit} className="width-70 align-self-center margin-bottom-20" alt="You can do it"/>
                    <div className="content-header layout-center-justified">
                        We'll get there together
                    </div>
                    <div className="layout-center-justified ">
                        <p className=" content-block-why margin-top-10">WDS can work with embedding employees within your teams as contract employees or work separately, WDS has the experience and knowledge to help guide you every step of the way if you need it.  </p>
                    </div>
                    <div className="content-header">Your users will love you.</div>
                    <div className="layout-center-justified ">
                            <p className=" content-block-why margin-top-10">In workplace and enterprise solutions, users know when someone understands their needs and make them feel like experts. 
                            They know when there's attention to details. They know when it's intuitive and visually pleasing - and they love it. 
                            With consumers, if you miss the mark, you'll fail fast.</p>
                            </div>
                    </div>
                    <div> 
                    <div className="content-header margin-top-70">Measurable Results</div>
                        <div className="layout-center-justified ">
                            <p className="  content-block-why margin-top-10">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.</p>
                        </div>
                        <img src={data_analyst} className="width-100" alt="Data Analyst"/>
                        <div className="content-header margin-top-25">Lasting Results</div>
                        <div className="layout-center-justified">
                            <p className=" content-block-why margin-top-10 ">We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                            Our <a href ="./core_offerings">core offerings</a> have helped businesses understand the value of design and increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.</p> 
                        </div> 
                            
                    </div> 
                    
                </div>
            </section>
            <section className="flex-layout-section-full align-items-center margin-top-100 yellow-bg border-top-5">
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