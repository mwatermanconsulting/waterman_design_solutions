import React, { Component } from 'react' ;
import offerings from '../images/bg-core-studies.png';
import ux from '../images/ux_process.png';
import services from '../images/graphic-services.svg';
import offerings_photo from '../images/photos/photo-core-offerings-s3.png';

class core_offerings extends Component {
    render () {
        return(
        <div className="flex-layout-column image-background-border-tb">
            <div className="flex-layout-section-fixed yellow flex-layout-center-center">
                <div className="header-text-center header-title text-white">Core Offerings</div>
                <img className="flex-image-container" src={offerings}  alt="Why WDS background" /> 
            </div>
            <div className="align-items-center border-bottom-5 border-top-5 callout-color-dark">
                    <div className="padding-100 flex-layout-center-center">
                        <div className="content-header flex-layout-column "> 
                            <div className="content-block width-100">
                                <p className="callout-text text-white text-align-center">Our Core Offerings Ensure Continued Business Success
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-grid-2col-photo flex-layout-column flex-layout-center-center" style={{height:'715px'}}>
                   <div className="grid-item2a">
                    <div className="subtitle">WDS Core Offering aligns customers’ needs and expectations to your business needs and expectations. </div>
                        <div className="content-block-why">
                            <p className="content-text-services margin-top-25"> WDS Services provide short term solutions, while our Core Offerings offer long term scalable solutions that improve the core of your business.
                            </p>
                        </div>
                    </div>
                    <div className="container-image-block ">
                        <img className="photo-container" src={offerings_photo} alt="offerings"/> 
                    </div>
                </div>
                <div className="flex-layout-section-full padding flex-layout-column flex-layout-center-center photo-content-color image-background-border-tb" >
                    <img className="flex-image-container" src={ux}  alt="Why WDS background" /> 
                </div>
            <div className="container-grid-3col flex-layout-center-center margin-top-100" style={{marginLeft: '15%'}}>
                <div className="content-block-75">
                    <div className="title-small">Design & Development</div>
                        <p className="margin-top-10" style={{width:'80%'}}>Blending teams of strategists, researchers, designers and developers together guarantees strong          communication, collaboration and team success. Combined with better understanding of the problem space and validated designs, we focus on developing     secure, scalable software, faster than internal or offshore teams.
                        </p>
                        <p>Key Services</p>
                    <ul>
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
                    <div className="title-small">User Experience</div>
                        <p className="margin-top-10" style={{width:'80%'}}>We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise      launches and even consumer software, there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you    moving in the right direction, and possibly uncover rewarding new opportunities.
                        </p>
                        <p>Key Services</p>
                    <ul>
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
                    <div className="title-small">Customer Experience</div>
                        <p style={{width:'80%'}}>In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                            ith consumers, if you miss the mark, you'll fail fast, and not in a good way.
                        </p>
                        <p>Key Services</p>
                    <ul>
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
            <div className="container-grid-2col-full flex-layout-justified-sb border-3px bottom-border margin-top-100 grey "> 
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