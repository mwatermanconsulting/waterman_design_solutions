import React, { Component } from 'react' ;
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import wdslogofull from '../images/wds-logo-full.svg';
import binoculars from '../images/graphic-methodology-binoculars.svg';
import why2 from '../images/graphic-why-wds.svg' ;
import gasp from '../images/graphic-why-gasp.svg' ;
import igotyou from '../images/graphic-igotyou.svg';
import empathy from '../images/photos/photo-home-empathy.png';
import design from '../images/graphic-design-desk.svg';
import theyluvus from '../images/photos/photo-home-theyluvus.png';
import people from '../images/photos/photo-home-people.png';
import simplify from '../images/photos/photo-home-simplify.png';
import business from '../images/photos/photo-home-business-design.png';
import starburst from '../images/photos/photo-home-starburst-red.png';
import motorola from '../images/photos/photo-motorola-beforeafter.png';
import stubhub from '../images/photos/photo-stubhub-before-after.png'

//import { Grid, Cell } from 'react-mdl';



class landingPage extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="WDS is a UX/UI agency that offers empathetic design solutions for websites, applications, SaaS applications, mobile apps, anything with a user interface. Waterman Design core offerings enlighten businesses on the value of design, providing training, workshops and mentorship programs. WDS design services include application design, website design and graphic design." />
                <meta charSet="utf-8" />
                <title>Your Partner in Design</title>
                <link rel="canonical" href="http://watermandesignsolutions/home" />
            </Helmet>
            <div className="flex-layout-column">
                <div className="flex-layout-section-full">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container-master flex-layout-center red padding">
                            <img className="width-40" src={wdslogofull}  alt="Why WDS background" /> 
                         </div>
                    </div> 
                </div>
                <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg content-block-75">
                        “Designers actually can change the world for the better by making the complicated simple and finding beauty in truth.”
                   <br/> <i>- Michael Beirut, 79 Short Essays</i> on Design
                </div>
            </div>
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-bottom-50">
                    <div className="content-block-60">
                        <p className="header-title-sm-center margin-top-75 text-align-center">
                            Who is WDS?</p>
                            <p className="subtitle-center text-align-center margin-top-10">
                            Your Partner in Design</p>
                        <div className="flex-layout-section-full align-items-center">
                        <p className="content-text-18 text-align-center content-block-auto flex-layout-center-center">
                            WDS is a UX/UI agency that offers empathetic design solutions for websites, web-based applications, mobile apps, and products. They partner with each client, ensuring business and design requirements are met. Their core offerings help businesses understand the value of design by providing training, workshops and mentorship programs.</p>
                    </div>
                    </div>
                </section>

                <div className="home-container flex-items-align-top content-block-75 flex-layout-center-center home-margin margin-top-50">
                
                <div className="home-item align-items-center content-block-60">
                    
                        <img  src={why2}  alt="Why WDS" /> 
                            <div className="flex-align-center-center">
                                <div className="header-title-sm-center">
                                    Why WDS
                                </div>
                                <p className="content-text-18 width-50 margin-left-25 text-align-center">
                                    WDS is a full service UX/UI design agency that specializes in creating elegant user experiences on applications, websites and all consumer touchpoints.
                                </p>
                            
                    
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/case_study_4'}>
                            Learn More 
                        </NavLink>
                        </div> 
                    
                   
                </div>

                <div className="home-item align-items-center content-block-60 margin-top-75sm">
                        <img className="margin-top-50" src={binoculars}  alt="Why WDS" /> 
                            <div className="">
                                <div className="header-title-sm-center">
                                    Methodology
                                </div>
                                <p className="content-text-18 width-50 margin-left-25 text-align-center">
                                WDS has refined a scalable, flexible UX methodology that centers on finding the truth to user issues and answering questions about customers.
                                </p>
                            
                   
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/case_study_4'}>
                            Learn More 
                        </NavLink>
                        
                     </div>
                   
                </div>
                <div className="home-item align-items-center content-block-60 margin-top-75sm">
                   
                        <img className="" src={design}  alt="WDS Design Solutions" /> 
                            <div className="">
                                <div className="header-title-sm-center">
                                    Design Solutions
                                </div>
                                <p className="content-text-18 margin-top-10 width-50 margin-left-25 text-align-center">
                                    For over 25 years WDS had been providing design solutions for global brands such as Motorola and StubHub. Design services include application design, website design and graphic design.
                                </p>
                            
                    
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/design'}>
                            Learn More 
                        </NavLink>
                      
                     </div>
                   
                </div>
                
                <div className="home-item content-block-60 align-items-center margin-top-75sm">
                    <img className="" src={igotyou}  alt="Why WDS" /> 
                        <div className="">
                            <div className="header-title-sm-center">
                                 Services
                            </div>
                                <p className="content-text-18 margin-top-10 width-50 margin-left-25 text-align-center">
                                WDS has over 25 years of experience with UX design, user interface design and CSS solutions development. Their latest service offering is a highly needed business (CX) solution,  design systems. 
                                </p>

                                <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/core_offerings'}>
                                    Learn More 
                                </NavLink>
                        </div>
                </div>
            </div>

            <div className="hr-line "></div>

                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    
                        <div className="header-title">
                            UX Design </div>

                        
                        <div className="title content-block-60 margin-top-50 margin-top-50sm">
                            UX Design is the study of people
                        </div>
                        <div className="subtitle content-block-60 margin-top-10">
                            Understanding Your Users is the Key
                        </div> 
                        
                        <div className="content-block-60">
                            <div className="float-right">
                            <img className="photo-container margin-top-10sm margin-left-3" src={people}  alt="UX Design is the study of people" /> 
                        </div>
                        <div className="margin-top-15 content-block-60"> 
                        <p className="content-text-18">
                            The most meaningful insights for design strategy are developed with a behavior-based understanding of users. WDS UX strategists observe people in context - where they work, play or live - to understand their goals, their needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve. </p>
                        </div>
                        </div> 
                        <div className="flex-layout-section-full flex-layout-column align-items-center">
                        <div className="title content-block-60 margin-top-75">
                            The Value of Empathy
                        </div>
                        <div className="subtitle content-block-60 margin-top-10">
                            Empathic Design Sparks Innovations
                        </div>
                        <div className="margin-top-15 content-block-60">
                            <p className="content-text-18 ">
                                <div className="float-right">
                                    <img className="photo-container" src={empathy}  alt="Value of Empathy" /> 
                                </div> 
                                    What circumstances prompt people to use your product or service? Do your customers turn to your offering in the way you expected? If they don’t, there may be an opportunity for your company to reevaluate previous design decisions. <br/><br/>
                                    Empathy is a very powerful selling tool, because it is human-centric. It’s the new buzz word, but empathy has always been at the heart of WDS designs.  <br/><br/>“Walk in the user’s shoes.” <br></br>“See the problem as if you were experiencing it yourself."<br/>“Observe their daily routines.” <br></br>All of these mantras and behaviors are empathetic techniques that their UX designers have acquired through years of practice. It is part of their daily lives. </p>
                       <div className="float-left-np">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ux_design'}>
                            Learn More 
                        </NavLink>
                    </div>  
               
                 
                                </div>
                            </div>
                        </section> 
                            
                 
               
                

                <div className="hr-line"></div>

                <section className="float-left flex-layout-section-full flex-layout-column align-items-center">
                <div className="header-title content-block-60">
                    UI Design </div>
                <div className="title content-block-60 margin-top-75">
                    Simplifying Complex Interfaces</div>
                <div className="subtitle content-block-60">
                    Empathetic Design</div>
                     
                <div className="margin-top-15 content-block-60"> 
                    <div className="float-right">
                        <img className="photo-container" src={simplify}  alt="UI Design" /> 
                    </div> 
                    <p className="content-text-18 ">
                        
                            WDS founders have created design solutions that are being used on incredibly complex applications, such as nuclear plants, oil rigs and energy grids. Simplifying critical applications takes focus and understanding in order to create a seamless intuitive experience that reduces the chance for human error.</p>
                
                
                    <p className="subtitle content-block-60">
                        The "Aha!" Moment
                    </p>
                    <p className="content-text-18 width-50 content-block-60">
                        WDS lives for the comment "Why didn't we think of that?" commonly expressed by stakeholders and/or managers during the design reveal.</p>
               
                
                <div className="float-left-np margin-top-25">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ui_design'}>
                            Learn More 
                        </NavLink>
                    </div>  
                </div>   
                </section>

                <div className="hr-line"></div>

                

            <section className="float-left align-items-center flex-layout-column margin-left-4sm">
                    <div className="header-title margin-top-15">
                            WDS is Your Partner in Design
                    </div>
                        <div className="title-center-sm content-block-65 margin-top-25">
                            Real Designers Increase Loyalty and Profits
                        </div>
                        <div className="content-block-65 content-text-18 margin-top-25">
                    
                            WDS has trained designers who are experts in graphic design, marketing, branding and social media content. They understand the value of design to create a better experience according to your business and users' needs.          
                        </div> 
                </section>

                <section className="home-container-callout margin-top-50 justify-center">
                    <div className="home-item flex-layout-section-column align-items-center flex-layout-section-full">
                        <img className="border-2 home-image-container-callout" src={theyluvus}  alt="All About the User" /> 
                        <div className="flex-layout-section-full content-block-80">
                            <div className="header-title-sm-center text-align-center margin-top-15">
                                It’s All About the User
                            </div>
                            <div className="subtitle-center  text-align-center margin-top-10">
                                Engage Your Customers </div>
                            <div className="callout-content-block margin-top-15">
                              WDS is a firm believer in agile and iterative deployments as experiments, but with longer enterprise launches and consumer software there's still valuable data to collect even before that first MVP. WDS insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</div>
                        </div>
                    </div>     
                    <div className="home-item">
                    <div className="home-item flex-layout-section-column align-items-center flex-layout-section-full">  
                        <img className="border-2 home-image-container-callout"  src={business}  alt="Business Solutions" /> 
                        <div className="flex-layout-section-full content-block-80">
                            <div className="header-title-sm-center margin-top-10">
                                Business Value of Design</div>
                            <div className="subtitle-center text-align-center margin-top-10">
                                Design is Everybody’s Responsibility</div>
                            <div className="callout-content-block margin-top-15">
                                In workplace and enterprise solutions, users know when someone understands their needs and make them feel like experts. They know when there's attention to design details. They know when it's intuitive and visually pleasing. With consumers, if you miss the mark, you'll fail fast and they’ll let you know it.</div>
                        </div>
                        
                          </div>
                    </div>
                     
            </section>

            <div className="flex-layout-column "> 

            <section className="flex-section-fixed-head flex-layout-center-center homepage-bg-starburst margin-top-25 image-background-border-tb">
                    <div className="header-text-center callout-text-lg text-white width-70">
                        In today's market, design is more critical to your business success. Competition and user expectations have increased. Your only chance of survival is understanding both your users and competition.
                    </div>
                        <img className="flex-image-container" src={starburst}  alt="McKinsley Report" /> 
            </section>
        </div>
        <section className="flex-layout-section-full  flex-layout-column align-items-center">
                <div className="margin-top-75 margin-top-50sm content-block-60">
                    <div className="header-title">
                        About the WDS Methodology</div>
                    <div className="subtitle-center margin-top-25 flex-layout-center-center">
                        WDS designs user interfaces that delivers valuable experiences<br/> by connecting with people on aspirational and emotional levels.</div>
                        <div className="flex-layout-section-full align-items-center">
                        <p className="content-text-18 content-block-80 flex-layout-center-center margin-top-25">
                        The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. 
                        For more than a decade, WDS has refined a repeatable, flexible methodology that centers on answering questions about customers through direct observational fieldwork 
                        or interviews to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.</p>
                    
                   </div>   
                </div>
            </section>

            <div className="hr-line"></div>

            <p className="header-title-sm-center">
                         UX Case Studies</p>
        
        <section className="flex-layout-space-between flex-layout-row">
                    <div className="cs-callout-item">
                        <div className="flex-layout-section-full border-2">
                        <img className="image-size-100" src={motorola}  alt="All About the User" /> 
                        <div className="content-block-auto padding-10">
                            <div className="subtitle">
                                Motorola</div>
                            <div className="flex-layout-section-full">
                            <p className="content-text-21">
                                Industry: Technology</p>
                            <p className="">
                                After two failed attempts by previously hired UX/UI developers, a frustrated management group for Motorola's new product decided they needed a designer to simplify their modem app.</p>
                            <div className="float-left content-block-55 margin-left-6per">
                                <NavLink className='button-area no-decoration width-50' type="button" value="learn more" to='/case_study_1'>
                                    Learn More 
                                </NavLink>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>     
                    <div className="cs-callout-item">
                        <div className="flex-layout-section-full border-2">
                            <img className="image-size-100"  src={stubhub}  alt="Business Solutions" />
                            <div className="content-block-auto padding-10">
                            <div className="subtitle">
                                StubHub</div>
                            <div className="flex-layout-section-full">
                            <p className="content-text-21">
                                Industry: Entertainment/Sports</p>
                            <p className="">
                                The analysts were unhappy with their current data visualization tool. After two failed attempts to fix it, and the threat of dissolving the internal team, WDS came to the rescue.</p>

                            <div className="float-left content-block-55 margin-left-6per">
                                <NavLink className='button-area no-decoration width-50' type="button" value="learn more" to='/case_study_2'>
                                    Learn More 
                                </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>    
            </section>
            <section className="flex-layout-section-full align-items-center margin-top-100 yellow-bg border-top-5 padding-bottom-50">
                <div className="grid-2col-text-photo align-self-center width-100 margin-top-50 margin-top-50sm" > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-50 margin-left-4sm">
                        <div className="content-block">
                            <p className="content-header"> 
                            "The good news is that there are more opportunities than ever to pursue user-centric, analytically informed design today." <br/>- McKinsley Report</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 margin-right-50 margin-left-min25sm align-center margin-bottom-35">
                        <img className="flex-image-container " src={gasp}  alt="A miracle!" /> 
                        <p className="caption margin-left-25">Success is possible!</p>
                    </div>
                </div>
            </section>   
    </div>
    </div>

        )
    }
}

export default landingPage;
