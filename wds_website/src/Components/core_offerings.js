import React, { Component } from 'react' ;
import offerings from '../images/backgrounds/bg-core-studies.png';
import ux from '../images/ux_process.png';
import services from '../images/graphic-services.svg';
import offerings_photo from '../images/photos/photo-core-offerings-s3.png';

class core_offerings extends Component {
    render () {
        return(
        <div className="flex-layout-column">
            <div className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">Core Offerings</div>
                <img className="flex-image-container" src={offerings}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                    Delivering the most outstanding experience possible
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                    <div className="item-a-nb content-block-60 content-header flex-layout-column">
                    <div className="subtitle margin-top-15">
                        The best customer experience starts with the Golden Rule—Treat customers how you would like to be treated
                    </div>
                        <div className="callout-text text-align-left text-white margin-top-15">
                        Too often, companies get attached to the product and lose sight of the people. 
                        </div>
                    </div>
                    <div className="grid-item-b container-image-block">
                        <img className="container-photo-callout" src={offerings_photo}  alt="shaking hands" /> 
                    </div>
                </div>
            <section className="container-grid-2col-photo flex-layout-column flex-layout-justified-center margin-top-100" style={{height:'680px'}}>
                <div className="grid-title">
                    <div className="title">The most important part of all is that the entire company have alignment<br/> and clarity on         the story of the product—why it exists, who it serves, how it benefits the user.
                    </div>
                        <div className="content-block-15">
                            <p className="subtitle margin-top-25" style={{width:'90%'}}> WDS core offerings provide solutions to help companies achieve long lasting results. We will guide and build a design plan that takes into account all of the various touchpoints and tasks that a customer engages in. It is critical for businesses success to give the customer a voice in every decision that is made. WDS core offering will have everyone in your business be advocates of customer experience.
                            </p>
                        </div>
                </div>
            </section>
                <div className="flex-layout-section-full flex-layout-column padding flex-layout-center-center grey">
                    <img className="flex-image-container" src={ux}  alt="Why WDS background" /> 
            `   </div>
            <div className="container-grid-3col flex-layout-center-center margin-top-100" style={{marginLeft: '15%'}}>
                <div className="content-block-75">
                    <div className="subtitle">Design Solutions</div>
                        <p className="content-text-21 margin-top-15" style={{width:'85%'}}>Blending teams of strategists, researchers, designers and developers together guarantees strong communication, collaboration and team success. Combined with better communication we focus on design approved solutions. Developing the front-end with custom style sheets and prototypes faster than offshore or in-house. 
                        </p>
                        <p className="content-text-21 margin-top-25"><b>Key Services</b></p>
                    <ul className="content-text-21 margin-top-15">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul> 
                </div> 
                <div className=" content-block-75">
                    <div className="subtitle">Customer Experience Solutions</div>
                        <p className="content-text-21 margin-top-15" style={{width:'80%'}}>Customer experience (CX) is the new competitive battleground for today's companies. WDS will help you find the strategic intersection between your high-value customers and the critical enhancements required at specific touchpoints in your larger customer experience journey.
                        </p>
                        <p className="content-text-21 margin-top-15 margin-top-25"><b>Key Services</b></p>
                    <ul className="content-text-21 margin-top-15">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul>
                </div>
                <div className="content-block-75">
                    <div className="subtitle margin-top-10">Customer Experience Mentoring</div>
                        <p className="content-text-21 margin-top-15" style={{width:'75%'}}>Customer Experience Mentoring are for companies looking to embrace UX across all their design and development teams. WDS offers insights and a structured change-management program that establishes experience research, design and development, and best practices across your organization.
                        </p>
                        <p className="content-text-21 margin-top-25"><b>Key Services</b></p>
                    <ul className="content-text-21 margin-top-15">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul>
                </div> 
            </div>    
            <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 grey "> 
                <div className="item-a-nb content-block-why flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> Looking for a larger Agile Transformation Program? </p>
                        <p className="callout-text">  WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 
                    </div>
                </div>
            <div className="item-b container-image-block">
                <img className="flex-image-container" src={services}  alt="Your Business is Our Joy" /> 
            </div>
            </div>   
        </div>
            
        )
    }
}

export default core_offerings;