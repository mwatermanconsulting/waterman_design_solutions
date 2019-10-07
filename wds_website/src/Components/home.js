import React, { Component } from 'react' ;
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import wdslogofull from '../images/wds-logo-full.svg';
import binoculars from '../images/graphic-methodology-binoculars.svg';
import why from '../images/graphic-why.svg' ;
import why2 from '../images/graphic-why-wds.svg' ;
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
                        <div className="flex-image-container flex-layout-center red padding">
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
                <section className="flex-layout-section-full flex-layout-column margin-top-50sm flex-layout-center-center margin-bottom-50">
                    <div className="content-block-60">
                        <p className="title-center margin-top-75 margin-top-50sm text-align-center">
                            Who is WDS?</p>
                            <p className="subtitle-center margin-top-35sm text-align-center margin-top-50">
                            Your Partner in Design</p>
                        <p className="content-text-18 margin-top-15 text-align-center margin-top-15">
                            WDS is a UX/UI agency that offers empathetic design solutions for websites, web-based applications, mobile apps, and products. They partner with each client, ensuring business and design requirements are met. Their core offerings help businesses understand the value of design by providing training, workshops and mentorship programs.</p>
                    </div>
                </section>
                
                <section className="align-self-center margin-left-10per margin-top-25">
                    <div className="align-self-top">
                        <img className="margin-left-10sm" src={why}  alt="Why WDS" /> 
                            <div className="content-block-auto ">
                                <div className="title-center margin-top-20 margin-left-8sm margin-bottom-20 content-text-18 content-block-60">
                                    Why WDS
                                </div>
                                <p className="content-text-18 content-block-60 margin-left-8sm">
                                    WDS is a full service UX/UI design agency that specializes in creating elegant user experiences on applications, websites and all consumer touchpoints.
                                </p>
                            
                    <div className="flex-layout-section-full content-block-50">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/case_study_4'}>
                            Learn More 
                        </NavLink>
                        </div> 
                     </div>
                    </div>   
                    <div className="gallery-2col-2t align-self-top">
                        <img className="margin-left-15sm margin-top-15" src={binoculars}  alt="Methodology" /> 
                        <div className="">
                            <div className="title margin-left-4sm margin-bottom-20 content-block-60">
                                    Methodology</div>
                            <p className="content-text-18 content-block-60 margin-left-8sm">
                                    WDS has refined a scalable, flexible UX methodology that centers on finding the truth to user issues and answering questions about customers. </p> 
                        </div>
                        
                        <div className="flex-layout-section-full text-align-center content-block-50">
                            <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/methodology'}>
                                Learn More 
                            </NavLink>
                    </div>
                </div>
            </section>
            <section className="grid-gallery-2col grid-gap-20 align-self-center media-margin margin-left-10per margin-top-50 margin-bottom-50 width-70">
                <div className="gallery-2col-1 margin-left-10per justify-self-center margin-top-50sm margin-top-50">
                    <img className="margin-left-5 margin-left-8sm"  src={design}  alt="Design Solutions" />
                <div className="">
                    <div className="title margin-top-15 margin-left-5 margin-left-8sm margin-bottom-20 content-block-65">
                                Design Solutions</div>
                        <p className="content-text-18 content-block-60 margin-left-8sm">
                                For over 25 years WDS had been providing design solutions for global brands such as Motorola and StubHub. Design services include application design, website design and graphic design.</p>
                    </div>
                      
                 <div className="flex-layout-section-full content-block-60">
                    <NavLink className='button-area no-decoration' value="learn more" type="button" to={'/design_solutions'}>
                    Learn More
                    </NavLink>
                 
            </div>
            </div>   
            <div className="gallery-2col-2 media-left-margin align-self-end margin-top-70">
                <img className="margin-left-8sm" src={igotyou}  alt="Services" />
                    <div className="margin-top-70">
                        <div className="title-center margin-top-15 margin-left-8sm margin-top-50 margin-bottom-20">
                                Services</div>
                            <p className="content-text-18 margin-left-10sm"> 
                                WDS has over 25 years of experience with UX design, CSS and UI design and development. Their latest service offering is a highly needed business (CX) solution, using design systems. </p> 
                        </div> 
                    <div className="flex-layout-section-full content-block-50">
                        
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/services'}>
                            Learn More 
                        </NavLink>
                   
                    </div>
            </div>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    
                        <p className="header-title margin-top-50sm">
                            UX Design </p>

                        <p className="title content-block-60 margin-top-50 margin-top-25sm">
                            UX Design is the study of people
                        </p>
                        <p className="subtitle content-block-60 margin-top-10">
                            Understanding Your Users is the Key
                        </p>
                        <p className="content-text-18 content-block-60 ">
                            <div className="float-right margin-top-5per padding-top-6sm">
                                <img className="photo-container" src={people}  alt="UX Design is the study of people" /> 
                            </div>
                            The most meaningful insights for design strategy are developed with a behavior-based understanding of users. WDS UX strategists observe people in context - where they work, play or live - to understand their goals, their needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve. 
                              </p>
                        
                        <p className="title content-block-60 margin-top-75">
                            The Value of Empathy
                        </p>
                        <p className="subtitle content-block-60 margin-top-15per">
                            Empathic Design Sparks Innovations
                        </p>
                        <p className="content-text-18 content-block-60">
                            <div className="float-right margin margin-top-1">

                                <img className="photo-container" src={empathy}  alt="Value of Empathy" /> 
                            </div> 
                        What circumstances prompt people to use your product or service? Do your customers turn to your offering in the way you expected? If they don’t, there may be an opportunity for your company to reevaluate previous design decisions. <br/><br/>
                        Empathy is a very powerful selling tool, because it is human-centric. It’s the new buzz word, but empathy has always been at the heart of WDS designs.  <br/><br/>“Walk in the user’s shoes.” <br></br>“See the problem as if you were experiencing it yourself."<br/>“Observe their daily routines.” <br></br>All of these mantras and behaviors are empathetic techniques that their UX designers have acquired through years of practice. It is part of their daily lives. </p>

                </section>  

                <div className="flex-layout-section-full float-left margin-top-25">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ux_design'}>
                            Learn More 
                        </NavLink>
                </div>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full flex-layout-column align-items-center">
                <p className="header-title">
                    UI Design </p>
                <p className="title content-block-60 margin-top-75 margin-top-50sm">
                    Simplifying Complex Interfaces</p>
                <p className="subtitle margin-top-15 content-block-60">
                    Empathetic Design</p>
                <p className="content-text-18 content-block-60">
                    <div className="float-right margin margin-top-1">
                        <img className="photo-container" src={simplify}  alt="UI Design" /> 
                    </div> 
                            WDS founders have created design solutions that are being used on incredibly complex applications, such as nuclear plants, oil rigs and energy grids. Simplifying critical applications takes focus and understanding in order to create a seamless intuitive experience that reduces the chance for human error.</p>
                    
                    <p className="title content-block-60 margin-top-5per">
                        The "aha Moment"</p>
                    <p className="subtitle content-block-60">
                        Empathetic Design
                            </p>

                    <p className="content-text-18 content-block-60">
                        WDS lives for the comment "Why didn't we think of that?" commonly expressed by stakeholders and/or managers during the design reveal.</p>
                    
                </section>
                
                <div className="flex-layout-section-full float-left margin-top-25">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ui_design'}>
                            Learn More 
                        </NavLink>
                    </div>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                

            <section className="float-left align-items-center flex-layout-column">
                    <div className="header-title margin-top-15">
                            WDS is Your Partner in Design
                    </div>
                        <div className="title-center-sm content-block-65 margin-top-10">
                            The Value of Working with Real Designers
                        </div>
                        <div className="content-block-65 content-text-18 margin-top-25">
                            
                            <p className="content-text-18"> 
                            WDS has trained designers who are experts in graphic design, marketing, branding and social media content. They understand the value of design to create a better experience according to your business and users' needs. </p>           
                        </div> 
                </section>

            <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-50  margin-top-25 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-start">
                        <img className="container-image-500" src={theyluvus}  alt="All About the User" /> 
                        <div className="content-block-auto ">

                            <div className="title-homepage">
                                It’s all about the user
                            </div>
                            <p className="subtitle">
                                Engage your customers and earn their trust</p>
                            <p className="content-text-18">
                              WDS is a firm believer in agile and iterative deployments as experiments, but with longer enterprise launches and consumer software there's still valuable data to collect even before that first MVP. WDS insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-start">
                        <img className="container-image-500"  src={business}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">

                            <div className="title-homepage">Business value of design</div>
                            <p className="subtitle">Design is everybody’s responsibility</p>
                            <p className="content-text-18">In workplace and enterprise solutions, users know when someone understands their needs and make them feel like experts. They know when there's attention to design details. They know when it's intuitive and visually pleasing. With consumers, if you miss the mark, you'll fail fast and they’ll let you know it.</p>
                        
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
        <section className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="content-block-60 margin-top-50sm">
                    <p className="header-title margin-top-50">
                    About the WDS Methodology</p>
                    <p className="subtitle text-align-center">
                        WDS designs user interfaces that delivers valuable experiences by connecting with people on aspirational and emotional levels.</p>
                    <p className="content-text-18">
                        The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. 
                        For more than a decade, WDS has refined a repeatable, flexible methodology that centers on answering questions about customers through direct observational fieldwork 
                        or interviews to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.</p>
                      
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <p className="title-center  margin-top-25">
                         UX Case Studies</p>
        
        <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-top-50 width-70">
       
                    <div className="gallery-2col-1 container-image-500 align-self-end border-2">
                        <img className="container-image-500" src={motorola}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="subtitle">Motorola</div>
                            <p className="content-text-21">Industry: Technology</p>
                            <p className="">After two failed attempts by previously hired UX/UI developers, a frustrated management group for Motorola's new product decided they needed a designer to simplify their modem app.</p>
                            <div className="float-left">
                                <NavLink className='button-area no-decoration' type="button" value="learn more" to='/case_study_1'>
                                    Learn More 
                                </NavLink>
                            </div>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top border-2">
                        <img className="container-image-500"  src={stubhub}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="subtitle">StubHub</div>
                            <p className="content-text-21">Industry: Entertainment/Sports</p>
                            <p className="">The analysts were unhappy with their current data visualization tool. After two failed attempts to fix it, and the threat of dissolving the internal team, WDS came to the rescue.</p>

                            <div className="float-left">
                                <NavLink className='button-area no-decoration' type="button" value="learn more" to='/case_study_2'>
                                    Learn More 
                                </NavLink>
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
                        <img className="flex-image-container " src={why2}  alt="A miracle!" /> 
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
