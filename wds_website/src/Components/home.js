import React, { Component } from 'react' ;
import wdslogofull from '../images/wds-logo-full.svg';
import method from '../images/backgrounds/bg-methodology.svg';
import binoculars from '../images/graphic-methodology-binoculars.svg';
import why from '../images/graphic-why.svg' ;
import why2 from '../images/graphic-why-wds.svg' ;
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
                <section className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="content-block-60">
                    <p className="title margin-top-75">
                    WDS is your partner for experience-driven transformation</p>
                    <p className="content-text-18">WDS is an end-to-end, experience-driven company that helps organizations navigate complex software transformations. Our team 
                        brings clarity to better understand customers’ needs and to reveal disconnects in your current customer experience. In doing so, we deliver comprehensive experience 
                        enhancements to help you exceed your customer experience and targeted business goals.</p>
                        <p className="content-text-18">We work across verticals and technologies, such as consumer, workplace, financial, healthcare, customer service, mobile development, and ecommerce.</p>
                </div>
            </section>
                

            <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-50  margin-top-100 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                        <img className="container-image-500" src={theyluvus}  alt="All About the User" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage">It’s all about the user</div>
                            <p className="subtitle">Engage your customers and earn their trust.</p>
                            <p className="content-text-18">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and consumer software, there's still valuable data to collect even before that first MVP. Our insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-end">
                        <img className="container-image-500"  src={business}  alt="Business Solutions" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage">Business value of design</div>
                            <p className="subtitle">Design is everybody’s responsibility</p>
                            <p className="content-text-18">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. They know when there's attention to design details. They know when it's intuitive and visually pleasing. With consumers, if you miss the mark, you'll fail fast … and they’ll let you know it.</p>
                        </div>
                    </div>
                     
            </section>
            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="content-block-60">
                    <p className="title margin-top-75">
                        Established Methodology and Practices</p>
                    <p className="content-text-18">We have a unique and established <a href="./methodology" target="_blank">methodology</a> for understanding people in context, revealing unmet needs which drive everything we do. This leads to a clear understanding of the 
                               customer,  shaping the design and development of new solutions and experiences. </p>
                            <p className="content-text-18">With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated software solutions that improve any and all touchpoints across the user journey. 
                            </p>
                </div>
            </section>

            <div className="flex-layout-column margin-bottom-50"> 
            <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-bottom-50 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                    <img className="container-image-300" src={why}  alt="Why WDS" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage margin-top-15 margin-bottom-20">Why WDS</div>
                            <p className="content-text-18">Why design matters to your business and your customers and how we can ease your fears about dealing with a designer.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                    <img className="container-image-300"  src={binoculars}  alt="Methodology" /> 
                        <div className="content-block-auto ">
                            <div className="title-homepage  margin-top-15 margin-bottom-20">Methodology</div>
                            <p className="content-text-18">Our process  works on all size platforms. This makes life easier for your team and those you serve. </p>
                        </div>
                    </div>
            </section>
            <section className="grid-gallery-2col grid-gap-20 align-self-center justify-items-center margin-bottom-50 width-70">
                    <div className="gallery-2col-1 container-image-500 align-self-end">
                    <img className="container-image-300"  src={design}  alt="Design Solutions" />
                        <div className="content-block-auto ">
                            <div className="title-homepage margin-top-15 margin-bottom-20">Design Solutions</div>
                            <p className="content-text-18">In today's market, design is more critical to your business success. Simple and elegant designs will make a better experience for your users.</p>
                        </div>
                    </div>     
                    <div className="gallery-2col-2 container-image-500 align-self-top">
                    <img className="container-image " src={igotyou}  alt="Services" />
                        <div className="content-block-auto ">
                            <div className="title-homepage  margin-top-15 margin-bottom-20">Services</div>
                            <p className="content-text-18"> For the past 25 years, we've been working at the leading edge of strategy, design and technology to help clients evolve and thrive.</p>
                        </div>
                    </div>
            </section>
            
            


            <section className="flex-section-fixed-head flex-layout-center-center homepage-bg-starburst  image-background-border-tb">
                    <div className="header-text-center callout-text-lg text-white width-70">
                    In todays market design is more critical to your business success, competition and user expectations have increased. 
                               Your only chance of survival is understanding both your users and competition.
                    </div>
                        <img className="flex-image-container" src={starburst}  alt="McKinsley Report" /> 
            </section>
        </div>
        <section className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="content-block-60">
                    <p className="title margin-top-75">
                    About Our Methodology</p>
                    <p className="subtitle">We design user interfaces that delivers valuable experiences, connecting with people on aspirational and emotional levels</p>
                    <p className="content-text-18">The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software design. 
                        For more than a decade, we have refined a repeatable, flexible methodology that centers on answering questions about customers through direct observational fieldwork 
                        or through interviews to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.</p>
                        <p className="content-text-18">The aim of this work is not more data, but for an understanding. We create a strategy for the experience that the software design will provide. 
                        It's a framework that allows developers, designers, marketers and architects to make decisions that support the intended customer experience. Integrated offering takes 
                        insights from the field and manifests them in a designed software user interface that engages customers and improves business results.</p>
                </div>
            </section>
        
        <section className="grid-gallery-2col grid-gap-20 content-header align-self-center justify-items-center margin-top-100 width-70">
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
            <section className="flex-layout-section-full align-items-center margin-top-100 yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                            "The good news is that there are more opportunities than ever to pursue user-centric, analytically informed design today." - McKinsley Report</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 grid-placeself-center">
                        <img className="flex-image-container" src={why2}  alt="A miracle!" /> 
                        <p className="caption">Success is possible!</p>
                    </div>
                </div>
            </section>   
    </div>

        )
    }
}

export default landingPage;
