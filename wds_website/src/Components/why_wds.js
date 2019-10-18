import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
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
            <div>
            <Helmet>
                <meta name="description" content=" WDS offers empathetic design solutions for websites, applications, mobile apps, and social media. Its core offerings help your business understand the value of design on a core level, providing training, workshops and mentorship programs.
                With over 15 years of perfecting our design and business strategies, we have the experience, designers, strategists, skills and scale to deliver sophisticated design solutions. WDS services include application design, website design and marketing. Our client list includes, Motorola, StubHub, OsiSoft, and Pfizer " />
                <meta charSet="utf-8" />
                <title>Why WDS</title>
                <link rel="canonical" href="http://watermandesignsolutions/case_study_1" />
            </Helmet>
            <div className="flex-layout-column">
                <section className="flex-section-fixed-head">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container-master flex-item-bottom">
                            <img className="flex-image-container-master image-size-100" src={why}  alt="Why WDS" /> 
                         </div>
                    </div> 
                </section>
                <div className="container-section-1-primary flex-layout-center-center border-bottom-5 red padding-15sm">
                    <div className="callout-text-lg"> 
                        WDS knows how to solve complex design problems
                        
                    </div>
                </div>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center padding content-block-65">
                            <p className="callout-text text-black">
                            WDS is a full service UX/UI design agency that specializes in creating elegant user experiences on applications, websites and all consumer touch points.</p>
                        </div>
                        <div className="grid-callout-photo">
                            <img className="flex-image-container width-100" src={whys1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <p className="header-title margin-top-75 width-65sm">

                        WDS Relieves Your Design Fears </p>

                        <p className="content-text-18 content-block-65 margin-top-15 flex-layout-column align-items-center">
                        WDS understands the fear many companies have with contracting a design firm. They have heard all the stories about designers not paying attention to business requirements/direction and designing for design's sake with little thought of the user. These designers fail and frustrate companies, making them  apprehensive about contracting another UX design firm. WDS approaches every project with empathy for the user and business. They have fixed unsuccessful designs for large enterprise projects like Motorola and StubHub, turning failure into success and frustration into joy.</p>
                        
                        <p className="content-text-18 content-block-65 flex-layout-column align-items-center">
                        WDS offers empathetic design solutions for websites, applications, mobile apps and social media. Its core offerings help your business understand the value of design on a core level, providing training, workshops and mentorship programs.
                        With over 15 years of perfecting their design and business strategies, WDS has the experience, designers, strategists and expertise to deliver sophisticated design solutions. </p>

                        <p className="title margin-top-50 margin-bottom-50 content-block-75 flex-layout-column align-items-center">
                        Clients include Motorola, Pfizer, StubHub, SmithKline, and Google</p>
                </section>

                <div className="flex-layout-section-full margin-top-50 grey-blue padding-bottom-50 ">
                <div className="padding header-title-sm-center">
                    Your Complete Design Resource

                    </div>
                <section className="why-container flex-layout-center-center align-self-center">
                    <div className="why-item">
                        <div className="subtitle-center">
                            <img className="margin-bottom-10" src={icon_ux}  alt="UX" /> <br></br>
                               <a href="./ux_design" className="no-decoration">
                                   UX Design</a> 
                        </div>
                        <ul className="dashed margin-left-25 content-text-18 margin-top-15">
                            <li>Interaction Design</li>
                            <li>Visual Design</li>
                            <li>Personas</li>
                            <li>Prototyping</li> 
                            <li>Consolidated Workflows</li>
                            <li><a href="./design_systems" className="no-decoration greenlink">Design Systems</a></li>
                            <li><a href="./design_systems" className="no-decoration greenlink">Style Guides</a></li>
                            <li>Information Architecture</li>
                        </ul>
                    </div>
    
                    <div className="why-item">
                        <div className="subtitle-center">
                            <img className="margin-bottom-10" src={icon_design_solutions}  alt="Design Solutions" /><br></br>
                                <a href="./design_solutions" className="no-decoration">
                                    Core Offerings</a>
                        </div>
                                <ul className="dashed content-text-18 margin-left-18 why-margin-list-1 margin-top-15">
                                    <li>Business Design Strategies</li>
                                    <li>Empathy Workshops</li>
                                    <li>Communication Strategies</li>
                                    <li>Design Solutions</li> 
                                    <li>C-Suite Workshops</li> 
                                    <li>Customer Experience Strategies</li>
                                    <li>Telemetry/Analytics Strategies</li>
                                    <li>Accessibility Strategies</li>
                                </ul>
                        </div>
    
                        <div className="flex-layout-center-center why-item  flex-items-align-top">
                            <div className="subtitle-center "> <img className="margin-bottom-10"  src={icon_design}  alt="Design" /><br></br>
                                    <a href="./design_solutions" className="no-decoration">
                                        Design Solutions</a></div>
                                <ul className="dashed content-text-18 margin-left-18 why-margin-list-4">
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

                <section className="float-left align-items-center flex-layout-column margin-top-75">
                    <div className="title content-block-60">
                            Elegant Solutions for Difficult Problems
                    </div>
                        <div className="subtitle content-block-60 margin-top-10">
                            The Value of Simplicity
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-15"><div className="float-right">
                        <img className="photo-container" src={whys2}  alt="Elegant solutions for difficult problems" /> 
                    </div>  
                            <p className="content-text-18"> WDS specializes in uncovering complex problems on sophisticated applications. Their design solutions are being used on complex applications for energy sectors, monitoring energy grids, oil rigs and nuclear plants. To deliver a seamless intuitive experience that reduces the chance for human error takes focus, empathy, experience and talent. </p>
                            <p className="content-text-18">WDS understands how easy it is for human error to cause a catastrophe. Their UX designers connect with your users on a deep level by understanding the human mind through cognitive psychology. Most mistakes arise out of unconscious human mistakes. Understanding the human subconscious mind helps WDS simplify complex interfaces so that those mistakes are avoided at all costs. </p>           
                        </div> 
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                  <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Our Core Offerings
                    </div>
                        <div className="subtitle content-block-60 margin-top-10">
                            The Business Value of Design
                        </div>
                        <div className="content-block-60 content-text-18">
                        <div className="float-right margin margin-top-1">
                        <img className="photo-container margin-top-10sm" src={whys3}  alt="Our Core Offerings" /> 
                    </div>  
                            <p className="content-text-18 margin-top-15"> 
                            Empathetic design is critical to your to your future success. WDS has successfully communicated the value of design to businesses for 25 years. Design strategies and < a href="core_offerings" className="no-decoration greenlink">core offerings</a> increase revenues and customer loyalty. A recent study on the value of design by Mckinsey reported that the companies that value design and focus on their users  have increased their business by 30%. WDS core offerings are services that provide training, strategies and workshops to align the value of design to the core of your business.</p>         
                        </div> 
                    </section>

                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div className="header-title"> 
                        Design Services</div>
                    <div className="subtitle margin-top-15 width-65sm"> 
                         The Most Requested Design Offerings</div>
                </section>    

                <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60 margin-top-25">
                        UX Design
                    </div>
                        <div className="subtitle content-block-60 margin-top-10"> 
                        Understanding the Users </div>
                        <div className="content-block-60 content-text-18">
                     

                    <p className="content-text-18 margin-top-15">
                        <div className="float-right margin-left-3 photo-container">
                            <img className="border-3px photo-container" src={why_design}  alt="UX Design" /> 
                        </div> 
                        The best customer experience starts with the Golden Rule — treat customers how you would like to be treated. At the foundation of WDS methodology is observation, watching customers use the clients' products or services. But unlike focus groups or usability laboratories, WDS conducts observation and interviews in the customer’s own environment during the course of their everyday routines. In such a context  researchers gain insight to a host of information that is not accessible through other UX research methods. </p>
                <div className="float-left-np">
                    <NavLink className='button-area no-decoration text-align-center
                    
                    ' type="button" value="learn more" to='/ux_design'>
                    Learn More 
                    </NavLink>
                </div>
                </div>  
                </section>
                 
                <div className="hr-line-cs"></div>

                <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60">
                        UI Design and Development
                    </div>
                        <div className="subtitle content-block-60 margin-top-10"> 
                        Application, Website and Mobile Design </div>
                    <div className="content-block-60 content-text-18">
                      
                     <p className="content-text-18 margin-top-15">
                         <div className="float-right margin-left-3">
                            <img className="photo-container border-3px" src={why_business}  alt="UI Design" />
                        </div> 
                        WDS aquired User Interface design skills   in 1998 with website design, starting with intranet healthcare websites at Astrazeneca. Today, data visualization designs are being used on oil rigs, nuclear reactors and pharmaceutical drug facilities.  
                    </p>
                    <p className="content-text-18">
                        WDS takes care of front-end development, CSS and HTML, working on-site with your team or creating GIT build-packages complete with custom CSS solutions, pattern libraries, style guides, best of practice documentation and design strategies. This ensures and enforces original design and its solutions. They also offer UI design kits complete with custom CSS, images, icons and HTML.
                    </p>    

                    <div className="float-left-np">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ui_design'}>
                        Learn More 
                        </NavLink>
                    </div>  
                </div>

                </section>

                <div className="hr-line-cs"></div>

                <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60">
                        Design Systems
                    </div>
                        <div className="subtitle content-block-60 margin-top-10"> 
                        Establishing Consistency Across all Mediums </div>
                    <div className="content-block-60 content-text-18">
                   
                     <p className="content-text-18 margin-top-15">  
                        <div className="float-right margin-left-3">
                            <img className="border-3px photo-container" src={why_enterprise}  alt=" Design" /> 
                        </div>  
                     A design system is a continuously evolving single source of truth that establishes rules of visual narration and interaction. It must be comprehensive while combining components, behaviors, and branding. It also comes with a complete set of design standards, documentation, and strategies. It must also be flexible and scalable.
                    </p>
                    <div className="float-left-np">
                    <NavLink Link to={'/design_systems'} className='button-area no-decoration' type="button" value="learn more" >
                    Learn More 
                    </NavLink>
               </div>  
                    </div>  
                </section>

                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center" >
                       
                    <p className="header-title-sm text-align-center content-block-60">
                        WDS builds emotionally rich, resonant digital solutions that enable users to fully realize technology’s complete potential by simplifying everything your customers touch and feel.</p>
               
                    <div className="flex-layout-column margin-top-50">    
                        <img src={advocate} className="align-self-center  width-65sm margin-bottom-20" alt="Advocates for the User"/>
                        <p className="caption text-align-center">
                        <i>Advocating and designing for the user!</i></p>
                    </div>
                

                <div className="align-content-center margin-top-15">
                    <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ux_design'}>
                    Learn More 
                    </NavLink>
               </div>  
           </section>

           <div className="hr-line-cs"></div>

            <section className="flex-layout-section-full align-items-center width-100 ">
                <div className="width-75">
                    <div> 
                    <div className="subtitle layout-center-justified">
                        We'll Get There Together
                    </div>
                    <div className="layout-center-justified ">
                        <img src={youcandoit} className="float-right margin-top-15sm width-50 align-self-center margin-bottom-20 photo-container" alt="You can do it"/>
                        <p className="content-text-18 content-block-75 margin-top-10">
                            WDS can embed employees within your teams as contractors (on-site or remote). There is flexibility, experience and knowledge to provide successful design solutions and guidance every step of the way. </p> 
                    </div>
                    <div className="subtitle margin-top-50">Your users will love you.</div>
                    <div className="layout-center-justified ">
                            <p className="content-text-18 content-block-75 margin-top-10">In workplace and at home, users know when someone understands their needs and make them feel like experts. 
                            They know when there's attention to details and when it's intuitive.
                            With consumers, if you miss the mark, you'll fail fast.</p>
                            </div>
                    </div>
                    <div> 
                    <div className="subtitle margin-top-50 content-block-75">Measurable Results</div>
                        <div className="layout-center-justified">
                            <p className="content-text-18 content-block-85 margin-top-10">WDS believes in agile and iterative deployments as experiments, but with longer enterprise launches and  consumer software, there's still valuable data to be collected even before that first MVP. It is critical to measure and track any design to collect data about your users' journeys.  WDS insights and strategies will get you moving in the right direction and possibly uncover rewarding new opportunities. WDS is not afraid to track and measure their design results, they have been designing successful UI solutions for the last 20 years and are confident in their abilities.  </p>
                        </div>
                        
                        <div className="float-right layout-center-justified margin-top-20 margin-left-6per"> 
                        <div className="text-align-center margin-left-12per">
                            <p className="subtitle margin-left-2">Lasting Results</p></div>
                            <img src={data_analyst} className="float-left width-50 photo-container" alt="Data Analyst"/>
                           
                            <p className="content-text-18 margin-top-75 margin-left-50 content-block-35">
                                WDS is here to build and launch great technology solutions and help your team improve your business in tangible ways. 
                                WDS <a href ="./core_offerings" className="no-decoration greenlink">core offerings </a> 
                            have helped businesses understand the value of design and increased conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.</p> 
                        </div> 
                    </div> 
                </div>
            </section>

            <div className="hr-line-cs"></div>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
               
                        <div className="header-title">
                           Customer Testimonials
                        </div>
              

                        <div className="title content-block-60 margin-top-75">
                          StubHub
                        </div>
                        
                        <div className="content-text-18 margin-top-25 align- content-block-60">
                        “(WDS) are thoughtful designers who helped transform our reporting project from a technical tool for pulling data into a place where users at all levels of our organization can find insights about our business.”<br/>
                            <i>-Michael Johnston Stubhub, Impact-Focused Technologist Specializing in Data</i>
                        </div>

                        <div className="content-text-18 margin-top-25 content-block-60">
                        “I had the pleasure of working with Michael for 9 months while he worked in our Philadelphia office on UI/UX development for an internal business intelligence platform. He was a joy to have on our team and always delivered high quality work on time and on point. We came to rely on Michael to work through all the messy front-end details that we couldn't figure out! Just an overall great person and wonderful colleague, I can't say enough good things about him.” <br/>
                            <i>-David Schmittdiel, Manager, Business Intelligence Development at StubHub</i>
                        </div>

                       <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                       <div className="title content-block-60">
                          David Newman, CSP
                        </div>

                        <div className="content-text-18 margin-top-25 content-block-60">
                        “Michael Waterman is a business guy in creative disguise. I first hired Michael and his firm more than 5 years ago, and from the very first meeting, I could tell that he "gets" the way business works. Being able to translate that into "sticky" marketing that works and lasts is icing on the cake. If you have the chance to work with Michael or hire him onto your team - RUN don't walk. His mindset and skill set are all too rare in today's world of "me too" advertising and creative professionals. He's truly one of a kind! <br/> - David Newman CSP
                        </div> 

                        <div className="thin-hr width-70 align-self-center hrline-spacing"></div>
                        
                        <div className="title content-block-60">
                          Pfizer
                        </div>

                        <p className="content-text-18 margin-top-25 content-block-60">
                        “Michael was a pleasure to work with his knowledge of UX design, web development and implementation of Omniture Tags across a variety of platforms was highly valuable to the analytics group at Cadient. He worked with me on a full migration of HBX tags into Omniture for a complex web portal for PfizerPro.com. 

                        He was also very personable and I enjoyed working with him to meet day to day deliverables."" -John Gautreau </p>
                </section> 
                
                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center width-100">
                    <div className="header-title-sm layout-center-justified">
                        Top Ten Reasons to Choose WDS
                    </div>
                    <div className="layout-center-justified margin-left-10per margin-top-15">
                        <ul className="content-text-18  margin-top-10">
                        
                            <li><strong>1.</strong> WDS knows UX and how to connect with people</li>

                            <li><strong>2.</strong> WDS knows the value of design</li>

                            <li>3. WDS knows how to communicate, <a href ="./contact.jsp" className="no-decoration greenlink"> contact us today</a></li>

                            <li><strong>4.</strong> WDS knows business</li>

                            <li><strong>5.</strong> WDS knows SaaS and digital transformation</li>
                                
                            <li><strong>6.</strong> WDS knows design strategies to support  long term design success</li>

                            <li><strong>7.</strong> WDS knows front-end development</li>

                            <li><strong>8.</strong> WDS knows how to spread empathy</li>

                            <li><strong>9.</strong> WDS knows how simplify complex problems</li>

                            <li><strong>10.</strong>10. WDS knows how to produce results</li>

                        </ul>
                    </div>
            </section>

            
           
            <section className="flex-layout-section-full align-items-center margin-top-100 yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-50 padding-bottom-50">
                        <div className="content-block">
                            <p className="callout-text margin-top-25sm"> 
                             
                            Less than 50% of businesses interact with their users.
                            Where there are user problems, there are business problems. WDS will connect you with your users and solve your business problems.
                            </p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 grid-placeself-center margin-right-25">
                        <img className="flex-image-container" src={why_handshake}  alt="Thank you WDS!" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
                </div>
            </section>     
        </div>
    </div>                                   
                            )
                        }
                    }
export default why_wds;