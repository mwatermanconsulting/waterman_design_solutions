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
import casscade from '../images/photos/photo-css-s1.png';
import tugowar from '../images/graphic-tug-of-war.svg';
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
                       The role of a UX consultant listen to the customers. Our service list is a testament to our belief in old fashioned customer service.
                    </p>     
                </div>
                <div className="grid-callout-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={together}  alt="Services" /> 
                </div>
            </section>
       
            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <p className="title margin-top-75">
                    WDS Services</p>
                <p className="subtitle text-align-center  margin-top-15">
                     Design always determines success, and understanding the user is paramount. <br/> Our team designs with empathy to connect people meeting their needs and expectations. 
                </p>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            User Experience Design
                        </div>
                        <div className="subtitle margin-top-15">
                           Understanding the User
                        </div>
                        <div className="margin-top-15">
                            
                            <p className="content-text-18"> 
                            Our design experts use research, empathy and insight to define how software functions and build workflows for the ways that people will experience it. From inception through launch, the users voice is always heard leaving no detail missed.</p>
                        <p className="content-text-18">
                        
                        <div className="float-right callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={services3}  alt="UX" /> 
                        <p className="caption">Photo by Frank on Unsplash</p></div>

                            The visual elements, we create will establish your brand as a design leader in your space. By understanding your business, users and competition we will ensure that you have a unique presence that include familiar use of fonts, icons with design solutions that has a certain elegance that resonates with your users emotions in a less-than-optimal fashion. This can make us incapable of telling UX designers what we really want. </p>

                            <p className="content-text-18">
                            For example, when asked about an user input for a security setting during WI-FI installation, one customer had no complaints until she sat down to use the program in front of the observer. Then she realized that she became confused when the program did not automatically select a security option. Not accustomed to the problem, she consistently made the incorrect decision. During the interview process this was never talked about because people want to appear smart and knowledgeable. Observing this issue and providing a simple solution such as provide recommended security settings, saves her time and can empower her. All the little things add up as big time wasters and need to be eliminated.</p>
                        </div>  
                    </div>
                </section>

           

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

               
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            UI Design & Development
                        </div>
                        <div className="subtitle margin-top-15">
                            Websites, Products and Applications
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                            <img className="container-photo-callout" src={services2}  alt="UX" /> 
                            <p className="caption">Photo by Frank on Unsplash</p>
                            </div>
                        <div className="margin-top-15">  
                            <p className="content-text-18"> 
                            WDS honed its UI design skills by designing websites in 1998. Over the years we have designed and developed complicated healthcare websites to solving difficult UI problems on critical applications. Our current data visualization designs are being used on oil rigs, nuclear reactors and pharmaceutical drug plants.  
                            </p>
                            <p className="content-text-18">
                            WDS can take care of the front-end development including CSS & HTML development, working on-site with your team or creating GIT build-packages complete with custom CSS solutions, patterns libraries, style guides, best of practice documentation and design strategies, ensuring and enforcing original design and solutions.
                            </p>      
                            
                            </div>  
                        </div>
                    </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className=" title content-block-65">
                         Design Solutions
                    </div>
                    <div className="subtitle content-block-65 margin-top-15">
                         Empathetic Design
                    </div>
                    <div className="margin-top-15 content-block-65"> <div className="float-right callout-photo grid-placeself-center" style={{marginTop:'-4%'}}>
                                <img className="container-photo-callout" src={services7}  alt="UX" /> 
                        </div> 
                        <p className="content-text-18  content-block-65"> 
                            Our design solutions include software designs, websites, marketing and print design. Our design solutions provide our clients consistency across all their consumer touchpoints. Consistency breeds brand familiarity and user loyalty</p> 
                            <p className="content-text-18  content-block-65">
                            All of our solutions are designed with empathy, always focused on the user and business needs.  </p>
                            <p className="content-text-18">
                             For over twenty years our design solutions have made a difference in peoples lives. Helping businesses with difficult design problems and turning them into success stories.  </p>
                            <p className="content-text-18">
                             Many times we are the third UX designers on a project. Hired after two failed attempts for our design solutions and experience. We understand the value of business design and how to get results.</p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className=" title content-block-65">
                         Strategy and Insight
                    </div>
                    <div className="subtitle content-block-65 margin-top-15">
                         Insight through Observations
                    </div>
                    <div className="margin-top-15 content-block-65"> <div className="float-right callout-photo grid-placeself-center">
                                <img className="container-photo-callout" src={services5}  alt="UX" /> 
                        </div>  
                        <p className="content-text-18 content-block-65">
                            The most meaningful insights for design strategy are developed with behavior-based understanding of users. Our experience strategists observe people in context - where they work, play or live - to understand their goals, their needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve.</p> 
                        <p className="content-text-18 margin-top-15">
                            By directly observing people, we can get to the heart of their needs. By discovering what drives them, what inspires them and what connects with them on an emotional level. We enlighten our clients with insights and strategies of where to invest resources based on this understanding of what people value.
                        </p>
                            <p className="content-text-18 ">
                            Today, the user’s experience is more important than brand loyalty. A successful strategy is needed to keep the users involved in all business decisions.</p>
                            
                          
                        </div>
                </section>

               
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className=" title content-block-65">
                         CSS Solutions
                    </div>
                    <div className="subtitle content-block-65 margin-top-15">
                         Scalable Enterprise Solutions
                    </div>
                    <div className="margin-top-15 content-block-65"> <div className="float-right callout-photo grid-placeself-center">
                                <img className="container-photo-callout" src={casscade}  alt="UX" /> 
                        </div>  
                        <p className="content-text-18 content-block-65">
                        Our CSS services include CSS development, Strategy, CSS system implementation, mentoring and documentation, including best of practice documentation.</p> 
                        <p className="content-text-18 margin-top-15">
                        Our solutions are based off our empathy and experiences working with developers. After our design solutions our CSS knowledge and experience is one of the main reasons WDS gets contracted by companies. Our CSS solutions are scalable and customizable to your business requirements.
                        </p>
                        <p className="content-text-18">
                        WDS develops lean, scalable solutions, CSS solutions saving your business money and time. Keeping your developers happy and focused on what they do best.</p>
                            
                          
                        </div>
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="float-left flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className=" title content-block-65">
                         Social Media 
                    </div>
                    <div className="subtitle content-block-65 margin-top-15">
                        We will make your customers feel uniquely valued
                    </div>
                    <div className="margin-top-15 content-block-65"> <div className="float-right callout-photo grid-placeself-center">
                                <img className="container-photo-callout" src={services4}  alt="UX" /> 
                        </div>  
                        <p className="content-text-18 content-block-65">
                        WDS understands people on a deep level. Our methodology gives a voice to the your users, your customers. Those people whose daily lives are effected by the use of your application or product. Your marketing campaign should be a reflect the vision of who you are as a business and tell that story. Every business has a story. We will define a marketing strategy based on research, data with a clear vision that reflects and embraces real human values.</p> 

                        <p className="content-text-18 content-block-65">
                        Our goal is to identify the right approach for your unique target audiences on social media. We plan, develop, and execute innovative social media marketing strategies that build a meaningful experience across all social media touchpoints.</p> 
                        
                            
                          
                        </div>
                </section>
            
            <div className="flex-layout-section-full margin-top-50 grey-blue padding-bottom-50">
                <section className="grid-services-list flex-section-align-center">
                    <div className="margin-top-50 margin-bottom-50 grid-services-title title text-align-center margin-right-25">
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
                        <li><a href="./core_offerings" className="no-decoration" style={{color:"#000"}}>Strategic Ideation</a></li>
                        <li><a href="./css_solutions" className="no-decoration">CSS Solutions</a></li>
                        <li>Design Strategies</li>
                        <li><a href="./core_offerings" className="no-decoration">Design C-Suite Mentoring</a></li>
                        <li><a href="./core_offerings" className="no-decoration">Empathy Workshops</a></li>
                        <li><a href="./core_offerings" className="no-decoration">Communication Workshops</a></li>
                              
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
                        <li><a href="./design_systems" className="no-decoration">Design Systems</a></li>
                        <li><a href="./design_systems" className="no-decoration">Style Guides</a></li>
                        <li>Information Architecture</li>
                    </ul>
                    </div>
                    <div className="grid-services-4 margin-top-50">
                        <img className="width-25" src={icon_ui}  alt="UI" />
                        <div className="subtitle margin-top-15">
                            <a href="./ui_design" className="no-decoration"> UI Design & Development </a>
                        </div>
                        <ul className="dashed content-text-16 margin-top-15">
                            <li>Mock-ups</li>
                            <li>Protyping</li>
                            <li>Hi-Fidelity Designs</li>
                            <li>CSS and HTML Build Kits</li>
                            <li>Concept Validation</li> 
                            <li>Wireframe Key Workflows</li>
                            <li><a href="./css_solutions" className="no-decoration">CSS Solutions</a></li>  
                            </ul>
                    </div>
                    <div className="grid-services-5 margin-top-50">
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
                                <li>Design Solutions</li> 
                                <li>C-Suite Strategies and Workshops</li> 
                                <li>Customer Experience Strategies</li>
                                <li>Telemetry/Analytics Strategies</li>
                                <li>Accessibility Strategies</li>

                            </ul>
                    </div>
                    <div className="grid-services-6 margin-top-50">
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
                
                <section className="grid-callout-2col content-header align-self-center justify-items-center margin-top-100 margin-bottom-100 width-70">
                    <div className="gallery-2col-1 container-image-500">
                        <a href ="./css_solutions"><img className="container-image-500 border-2" src={services8}  alt="CSS Solutions" /> </a>
                        <div className="content-block-auto ">
                            <div className="title margin-top-50">
                                <a href="./css_solutions" className="no-decoration">CSS Solutions</a>
                            </div>
                            <p className="content-text-18 content-block-85 margin-top-15">
                                Taming the specificity beast use to be difficult. Our CSS strategy almost eliminates the specificity problems. In fact, our strategy almost eliminates the need for your developers to write CSS. Our advantage is our past experience working with developers and interviewing and observing them working with CSS.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                    <a href ="./design_systems"> <img className="container-image-500 border-2"  src={services9}  alt="Business Solutions" /> </a>
                        <div className="content-block-85">
                            <div className="title margin-top-50">
                            <a href="./design_systems" className="no-decoration"> Design Systems</a></div>
                            <p className="content-text-18 margin-top-15">
                                At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, and letting software teams focus on solving tough problems instead of the small stuff.</p>
                        </div>
                    </div>
            </section>

            
            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-bottom-50" > 
                    <div className="2col-text grid-placeself-center margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                                Many design issues stem from difficult relationships between programmers and designers </p>
                            <p className="content-text-18 margin-top-15">  
                            
                                As designers, we have reached over to programmers and developers using a methodology of empathy for "the other side". This includes fitting designers into agile systems so that keeps things working smoothly.</p> 

                        </div>
                    </div>              
                    <div className="col2-photo grid-placeself-center">
                        <img className="flex-image-container" src={tugowar}  alt="tug of war" /> 
                        <p className="caption">Issues, issues! Help us fix our designer-programmer relationships!</p>
                    </div>
                </div>
            </section>
                 
            </div>
        )
    }
}

export default services;