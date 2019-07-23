import React, { Component } from 'react' ;
import wdslogofull from '../images/backgrounds/wds-logo-full.svg';
import method from '../images/backgrounds/bg-methodology.svg';
import binoculars from '../images/graphic-methodology-binoculars.svg';
import why from '../images/graphic-why.svg' ;
import igotyou from '../images/graphic-igotyou.svg';
import design from '../images/graphic-design-desk.svg';
import theyluvus from '../images/photos/photo-home-theyluvus.png';
import business from '../images/photos/photo-home-business-design.png';
import starburst from '../images/photos/photo-home-starburst-red.png';
import motorola from '../images/photos/photo-motorola-beforeafter.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'
import stubhub from '../images/photos/photo-stubhub-before-after.png'

//import { Grid, Cell } from 'react-mdl';


class landingPage extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section-full">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-layout-center red padding">
                            <img className="width-40" src={wdslogofull}  alt="Why WDS background" /> 
                         </div>
                    </div> 
                </div>
                <section className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <h3 className="subtitle flex-layout-center">Established Methodology n Practices</h3>
                        </div>
                        <div className="content-block width-100">
                            <p className="content-text-18">We have a unique and established <a href="./methodology" target="_blank">methodology</a> for understanding people in context — we reveal unmet needs — which drives everything we do. This leads to a crisp, clear understanding of the 
                               customer, which shapes the design and development of new solutions and experiences. </p>
                            <p>With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated software solutions that improve any and all 
                               touchpoints across the user journey. <br/><br/>In todays market desgin is more critical to your business success, competition and user expectations have increased. 
                               Your only chance of survival is understanding both your users and competition.
                            </p>
                        </div>
                </div>
            </section>
            <div className="flex-layout-column margin-bottom-50"> 
            
            
            <section className="grid-gallery-4col grid-gap-20 content-header align-self-center margin-bottom-50 width-70">
                    <div className="gallery-4col-1 container-image-300 align-self-end">
                        <img className="container-image-300" src={why}  alt="Why WDS" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage link-color">Why WDS</div>
                            <p className="">Why design matters to your business and your customers. And how we can ease your fears about dealing with a designer</p>
                        </div>
                    </div>     
                    <div className="gallery-4col-2 container-image-300 align-self-end">
                        <img className="container-image-300"  src={binoculars}  alt="Methodology" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage link-color">Methodology</div>
                            <p className="">Our process uses a process that works on all size platforms, and makes life easier for your team and those you serve. </p>
                        </div>
                    </div>
                    <div className="gallery-4col-3 container-image-300 align-self-end">
                        <img className="container-image-300"  src={design}  alt="Design Solutions" />
                        <div className="content-block-auto ">
                            <div className="title-homepage link-color">Design Solutions</div>
                            <p className="">In todays market design is more critical to your business success. Simple and elegant designs will make a better experience for them.</p>
                        </div>
                    </div> 
                    <div className="gallery-4col-4 container-image-300 align-self-end">
                        <img className="container-image " src={igotyou}  alt="Services" />
                        <div className="content-block-auto ">
                            <div className="title-homepage link-color">Services</div>
                            <p className=""> For the past 25 years, we've been working at the leading edge of strategy, design and technology to help clients evolve and thrive.</p>
                        </div>
                    </div>       
                    
            </section>

            <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-50 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                        <img className="container-image-500" src={theyluvus}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage link-color">It’s all about the user</div>
                            <p className="subtitle">Engage your customers and earn their trust.</p>
                            <p className="">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, there's still valuable data to collect even before that first MVP. Our insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-end">
                        <img className="container-image-500"  src={business}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage link-color">Business value of design</div>
                            <p className="subtitle">Design is everybody’s responsibility</p>
                            <p className="">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. With consumers, if you miss the mark, you'll fail fast … and they’ll let you know it.</p>
                        </div>
                    </div>
                     
            </section>

            <section className="flex-section-fixed-head flex-layout-center-center  image-background-border-tb">
                    <div className="header-text-center callout-text-lg text-white width-70">
                    "The good news is that there are more opportunities than ever to pursue user-centric, analytically informed design today." - McKinsley Report
                    </div>
                        <img className="flex-image-container" src={starburst}  alt="Why WDS background" /> 
            </section>

            <div className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="flex-layout-content-container flex-layout-column margin-top-25 flex-layout-center-center">
                    <div className="content-header flex-layout-column">    
                        <p className="subtitle flex-layout-center">WDS IS YOUR PARTNER FOR EXPERIENCE-DRIVEN TRANSFORMATION</p>
                    <div className="content-block width-100">
                        <p>WDS is an end-to-end, experience-driven company that helps organizations navigate complex software transformations. Our team 
                        brings clarity to better understand customers’ needs and to reveal disconnects in your current customer experience. In doing so, we deliver comprehensive experience 
                        enhancements to help you exceed your customer experience and targeted business goals.</p>
                        <p className="content-text-18">We work across verticals and technologies, such as consumer, workplace, financial, healthcare, customer service, mobile development, and ecommerce.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-layout-column margin-bottom-50"> 
            
            <div className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="flex-layout-content-container flex-layout-column margin-top-25 flex-layout-center-center">
                    <div className="content-header flex-layout-column">    
                        <h3 className="subtitle flex-layout-center">About Our Methodology</h3>
                        <h3 className="subtitle flex-layout-center">WE DESIGN USER INTERFACES THAT DELIVERS VALUABLE EXPERIENCES, CONNECTING WITH PEOPLE ON ASPIRATIONAL AND EMOTIONAL LEVELS</h3>
                    <div className="content-text-18 width-100">
                        <p className="content-text-18">The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. 
                        For more than a decade, we have refined a repeatable, flexible methodology that centers on answering questions about customers through direct observational fieldwork 
                        or through interviews to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.</p>
                        <p className="content-text-18">The aim of this work is not more data, but for an understanding. We create a strategy for the experience that the software design will provide. 
                        It's a framework that allows developers, designers, marketers and architects to make decisions that support the intended customer experience. integrated offering takes 
                        insights from the field and manifests them in a designed software user interface that engages customers and improves business results.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-50 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                        <img className="container-image-500" src={motorola}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage">Motorola</div>
                            <p className="subtitle">Industry: Technology</p>
                            <p className="">After two failed attempts by previously hired UX/UI developers, a frustrated management group for Motorola's new product decided they needed a designer to simplify their modem app so it's easier to use.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                        <img className="container-image-500"  src={stubhub}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage">StubHub</div>
                            <p className="subtitle">Industry: Entertainment/Sports</p>
                            <p className="">The analysts were unhappy with their current data visualization tool. After two failed attempts to fix it, and the threat of dissolving the internal team, WDS came to the rescue.</p>
                        </div>
                    </div>
                     
            </section>
    </div>

        )
    }
}

export default landingPage;
