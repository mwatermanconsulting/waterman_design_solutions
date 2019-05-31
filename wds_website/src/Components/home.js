import React, { Component } from 'react' ;
import why from '../images/backgrounds/bg-why-wds.svg';
import method from '../images/backgrounds/bg-methodology.svg';

//import { Grid, Cell } from 'react-mdl';


class landingPage extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section-full">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-item-bottom">
                            <img className="flex-image-container container" src={why}  alt="Why WDS background" /> 
                         </div>
                    </div> 
                </div>
                <div className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <h3 className="subtitle flex-layout-center">Established Methodology and Practices</h3>
                        <div className="content-block width-100">
                            <p className="content-text-18">We have a unique and established <a href="./methodology" target="_blank">methodology</a> for understanding people in context — we reveal unmet needs — which drives everything we do. This leads to a crisp, clear understanding of the 
                               customer, which shapes the design and development of new solutions and experiences. </p>
                            <p>With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated software solutions that improve any and all 
                               touchpoints across the user journey. <br/><br/>In todays market desgin is more critical to your business success, competition and user expectations have increased. 
                               Your only chance of survival is understanding both your users and competition.
                            </p>
                        </div>
                </div>
            </div>
            <div className="flex-layout-column margin-bottom-50"> 
            <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container container" src={why}  alt="Why WDS background image" /> 
                    </div>
                </div> 
            </div>
            <div className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="flex-layout-content-container flex-layout-column margin-top-25 flex-layout-center-center">
                    <div className="content-header flex-layout-column">    
                        <h3 className="subtitle flex-layout-center">WDS IS YOUR PARTNER FOR EXPERIENCE-DRIVEN TRANSFORMATION</h3>
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
            <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container container" src={method}  alt="Method WDS background" /> 
                    </div>
                </div> 
            </div>
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
    </div>
</div>

        )
    }
}

export default landingPage;
