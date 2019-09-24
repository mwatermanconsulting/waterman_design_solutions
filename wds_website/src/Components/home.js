import React, { Component } from 'react' ;
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import wdslogofull from '../images/wds-logo-full.svg';
import binoculars from '../images/graphic-methodology-binoculars.svg';
import why from '../images/graphic-why.svg' ;
import why2 from '../images/graphic-why-wds.svg' ;
import igotyou from '../images/graphic-igotyou.svg';
import design from '../images/graphic-design-desk.svg';
import theyluvus from '../images/photos/photo-home-theyluvus.png';
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
                <meta name="description" content="WDS is a UX/UI agency that offers empathetic design solutions for websites, web based applications, mobile apps, and products. Core offerings help  businesses understand the value of design on a core level, providing training, workshops and mentorship programs. With over 15 years of perfecting its strategies, WDS has the experience, designers, strategists, skills and scale to deliver sophisticated design solutions." />
                <meta charSet="utf-8" />
                <title>Home</title>
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
                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <div className="content-block-60">
                        <p className="title margin-top-75">
                            Who is WDS?</p>
                            <p className="subtitle margin-top-15">
                            Your Partner in Design</p>
                        <p className="content-text-18">
                            WDS is a UX/UI agency that offers empathetic design solutions for websites, web based applications, mobile apps, and products. Core offerings help  businesses understand the value of design on a core level, providing training, workshops and mentorship programs. With over 15 years of perfecting its strategies, WDS has the experience, designers, strategists, skills and scale to deliver sophisticated design solutions. </p>
                    </div>
                </section>
                

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-25 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                    <img className="container-image-300  margin-top-50" src={why}  alt="Why WDS" /> 
                        <div className="content-block-auto ">
                            <div className="title margin-top-15 margin-bottom-20 content-text-18">
                                Why WDS</div>
                            <p className="content-text-18">
                                Why design matters to your business and your customers and how WDS can ease your fears about dealing with a designer.</p>
                          
                        
                   </div> </div>
                    <div className="flex-layout-section-full align-items-center">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/case_study_4'}>
                            Learn More 
                        </NavLink>
                   
                     </div>   
                    <div className="gallery-2col-2t container-image-500 align-self-top">
                        <img className="container-image-300 margin-top-50"  src={binoculars}  alt="Methodology" /> 
                        <div className="content-block-auto ">
                            <div className="title  margin-top-15 margin-bottom-20">
                                Methodology</div>
                            <p className="content-text-18">
                                The WDS process  works on all size platforms. This makes life easier for your team and those you serve. </p> </div>
                        </div>
                        <div className="flex-layout-section-full align-items-center">
                            <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/methodology'}>
                                Learn More 
                            </NavLink>
                  
                    </div>
            </section>
            <section className="grid-gallery-2col grid-gap-20 align-self-center justify-items-center margin-bottom-50 width-70">
                <div className="gallery-2col-1 container-image-500 align-self-end">
                    <img className="container-image-300 margin-top-50"  src={design}  alt="Design Solutions" />
                <div className="content-block-auto ">
                    <div className="title margin-top-15 margin-bottom-20">
                        Design Solutions</div>
                        <p className="content-text-18">
                        In today's market, design is more critical to your business success. Simple and elegant designs will make a better experience for your users.</p>
                      
                 <div className="flex-layout-section-full align-items-center">
                    <NavLink className='button-area no-decoration float-left margin-top-7per' value="learn more" type="button" to={'/design_solutions'}>
                    Learn More
                    </NavLink>
                 </div>
                     </div>
                    </div> 
                
                         
                    <div className="gallery-2col-2 container-image-500 align-self-end">
                    <img className="container-image-300 margin-top-50" src={igotyou}  alt="Services" />
                        <div className="content-block-auto ">
                            <div className="title  margin-top-15 margin-bottom-20">Services</div>
                            <p className="content-text-18"> For the past 25 years, WDS has been working on the leading edge of strategy, design and technology to help clients evolve and thrive.</p>

                            
                    <div className="flex-layout-section-ful align-items-center">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/services'}>
                            Learn More 
                        </NavLink>
                   </div>
                        </div>
                    </div>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <div className="content-block-60">
                        <p className="title">
                            UX Design </p>
                            <p className="subtitle margin-top-15">
                            Understanding Your Users is the Key</p>
                        <p className="content-text-18">
                        UX strategists observe people in context - where they work, play or live - to understand their goals, their needs and aspirations as they go about their daily lives. </p>
                    </div>
                </section>

                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <div className="content-block-60">
                        <p className="title">
                             Simplifying Complex Interfaces</p>
                            <p className="subtitle margin-top-15">
                                Empathetic Design
                            </p>
                        <p className="content-text-18">
                        WDS founders have created design solutions being used on incredibly complex applications, such as nuclear plants, oil rigs and energy grids.  Simplifying critical applications takes focus and understanding in order to create a seamless intuitive experience that reduces the chance for human error.</p>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60">
                            WDS is Your Design Support
                    </div>
                        <div className="subtitle content-block-60 margin-top-15">
                            The Value of Working with Real Designers
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-15">
                            
                            <p className="content-text-18"> 
                            WDS has trained designers who can do graphic design, marketing, branding, and social media content. They understand the value of design to create a better experience according to your business needs.  </p>           
                        </div> 
                </section>

                

            <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-50  margin-top-100 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                        <img className="container-image-500" src={theyluvus}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage">It’s all about the user</div>
                            <p className="subtitle">Engage your customers and earn their trust.</p>
                            <p className="content-text-18">We're firm believers in agile and iterative deployments as experiments, but with longer enterprise launches and consumer software, there's still valuable data to collect even before that first MVP. WDS insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-end">
                        <img className="container-image-500"  src={business}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage">Business value of design</div>
                            <p className="subtitle">Design is everybody’s responsibility</p>
                            <p className="content-text-18">In workplace and enterprise solutions, users know when someone understands their needs and make them feel like experts. They know when there's attention to design details. They know when it's intuitive and visually pleasing. With consumers, if you miss the mark, you'll fail fast … and they’ll let you know it.</p>
                        </div>
                    </div>
                     
            </section>

            <div className="flex-layout-column margin-bottom-50"> 

            <section className="flex-section-fixed-head flex-layout-center-center homepage-bg-starburst  image-background-border-tb">
                    <div className="header-text-center callout-text-lg text-white width-70">
                    In todays market, design is more critical to your business success. Competition and user expectations have increased. 
                               Your only chance of survival is understanding both your users and competition.
                    </div>
                        <img className="flex-image-container" src={starburst}  alt="McKinsley Report" /> 
            </section>
        </div>
        <section className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="content-block-60">
                    <p className="title margin-top-75">
                    About Our Methodology</p>
                    <p className="subtitle">WDS designs user interfaces that delivers valuable experiences, connecting with people on aspirational and emotional levels.</p>
                    <p className="content-text-18">The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. 
                        For more than a decade, WDS has refined a repeatable, flexible methodology that centers on answering questions about customers through direct observational fieldwork 
                        or  interviews to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.</p>
                        <p className="content-text-18">The aim of this work is not more data, but for an understanding. WDS creates a strategy for the experience that the software design will provide. 
                        It's a framework that allows developers, designers, marketers and architects to make decisions that support the intended customer experience. Integrated offering takes 
                        insights from the field and manifests them in a designed software user interface that engages customers and improves business results.</p>
                </div>
            </section>
        
        <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-top-100 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                        <img className="container-image-500" src={motorola}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="subtitle">Motorola</div>
                            <p className="content-text-21">Industry: Technology</p>
                            <p className="">After two failed attempts by previously hired UX/UI developers, a frustrated management group for Motorola's new product decided they needed a designer to simplify their modem app so it's easier to use.</p>
                            <button onclick="location.href='./case_study_1';" type="button" value="Learn More" className="button font-size-18">Learn More</button>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                        <img className="container-image-500"  src={stubhub}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="subtitle">StubHub</div>
                            <p className="content-text-21">Industry: Entertainment/Sports</p>
                            <p className="">The analysts were unhappy with their current data visualization tool. After two failed attempts to fix it, and the threat of dissolving the internal team, WDS came to the rescue.</p>
                            <button onclick="location.href='./case_study_2';" type="button" value="Learn More" className="button font-size-18">Learn More</button>
                        </div>
                    </div>
                     
            </section>
            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5 margin-top-100">
                <div className="grid-2col-text-photo align-self-center content-block-60 margin-top-50 margin-bottom-50" > 
                    <div className="2col-text grid-placeself-center ">
                        <div className="content-block">
                            <p className="content-header content-block-60">  
                            "The good news is that there are more opportunities than ever to pursue user-centric, analytically informed design today." - McKinsley Report</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 margin-right-25 grid-placeself-center">
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
