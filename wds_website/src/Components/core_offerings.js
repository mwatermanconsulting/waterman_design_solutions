import React, { Component } from 'react' ;
import offerings from '../images/bg-core-studies.png';
import ux from '../images/ux_process.png';
import offerings_photo from '../images/photos/photo-core-offerings-s3.png';

class core_offerings extends Component {
    render () {
        return(
        <div className="flex-layout-column">
            <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom flex-items-justified-center">
                        <h1 className="image-text-left title text-white">Core Offerings</h1>
                        <img className="flex-image-container" src={offerings}  alt="Why WDS background" /> 
                     </div>
                </div> 
            </div><div className="flex-layout-section-full flex-layout-justified-sb align-items-center">
                    <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <h3 className="subtitle flex-layout-center">Our Core Offerings Ensure Continued Business Success</h3>
                            <div className="content-block width-100">
                                <p className="content-text-18 text-align-center">WDS core offering aligns customers needs and expectation to your business needs and expectations. The WDS services provide short term solutions, while our core offerings offer lasting long term scalable solutions. Solutions that bring changes to the core of your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container-grid-3col flex-layout-center-center margin-top-100" style={{marginLeft: '15%'}}>
                <div className="item-a content-block-cs">
                    <div className="title-small">Design & Development</div>
                            <p className="margin-top-10" style={{width:'80%'}}>Blending teams of strategists, researchers, designers and developers together guarantees strong communication, collaboration and team success. Combined with better understanding of the problem space and validated designs, we focus on developing secure, scalable software, faster than internal or offshore teams.
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
                <div className="item-b content-block-cs">
                    <div className="title-small">User Experience</div>
                            <p className="margin-top-10" style={{width:'60%'}}>We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.
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
                <div className="item-c content-block-cs">
                    <div className="title-small">Customer Experience</div>
                             <p style={{width:'60%'}}>In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                                They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                                With consumers, if you miss the mark, you'll fail fast, and not in a good way.
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
                    
                    <div className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="flex-layout-section thin-hr margin-tb-100" style={{ width: '50%' }}></div>
                    <img className="flex-image-container margin-bottom-50" src={ux}  alt="Why WDS background" /> 
                    <div className="flex-layout-section thin-hr margin-tb-100" style={{ width: '50%' }}></div>
                    
                    </div>

                    <div className="flex-layout-section-full ">
                    <div className="flex-layout-row flex-layout-center"> 
                        <div className="content-header flex-layout-column flex-sh-500" >
                            <h3 className="subtitle">UX Designers, Mentors and Coaches</h3>
                                <div className="content-block-services">
                                        <p className="content-text-18"> Our UX designers and developers are more than designers and developers in title only:
                                        They bring all the deep, diverse experience of WDS and our many projects and experts.</p>
                                        <p>They outperform on work and coach how UX should be integrated into product design and development.
                                        Our team has experience across multiple industries — as well as consumer and workplace experience to bring the best to your project.
                                        Our designers understand development and our developers understand design — this is where we get speed from blended teams.
                                        They’re experienced in agile transformation across large-scale organizations.</p>
                                        <p>Looking for a larger Agile Transformation Program?</p> 
                                       <p> Check out our Program Management Practice.</p>
                                </div>
                        </div>
                    <div className="flex-layout-column">
                        <div className="container-image-block margin-bottom-100">
                              <img className="photo-container" src={offerings_photo} alt="consulting"/> 
                        </div>
                    </div>
                    </div>

                    
                    </div>

                </div>
            
        
        )
    }
}

export default core_offerings;