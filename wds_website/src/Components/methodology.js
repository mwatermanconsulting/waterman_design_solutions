import React, { Component } from 'react' ;
import backgroundServices from '../images/couple.png';
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class methodology extends Component {
    render () {
        return(
            <div className="flex-layout-column margin-bottom-50"> 
                <div className="flex-layout-section">
                    <div className="image-background-border-tb">
                        <img className="img-size" src={backgroundServices}  alt="couple" /> 
                            <div className="content-right-center">
                                <div className="content-header">
                                    <div className="title">Methodology</div>
                                </div>
                                    <div className="content-text">
                                        <p>We design applications that delivers valuable experiences, connecting with people on aspirational and emotional levelsware interfaces that makes sense. </p>
                                    </div>
                                </div>
                        </div>
                    </div> 
                    <div className="flex-layout-content-container">
                        <div className="flex-layout-section">
                        <div className="flex-layout-row flex-layout-center-center">
                            <div className="flex-layout-column width-half margintop50">
                                <h3 className="content-header">About Our Methodology</h3>
                                    <div className="layout-center-justified ">
                                        <p>The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of software development. 
                                            Over more than a decade, we have refined a repeatable, programmatic methodology that centers on answering questions about customers through direct observational fieldwork to identify 
                                            people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen.
                                            The aim of this work is not more data; most companies are swimming in information. Instead, we create a strategy for the experience that the software will provide. 
                                            It's a framework that allows developers, designers, marketers and architects to make decisions that support the intended customer experience. WDS integrated offering takes insights from the 
                                            field and manifests them in developed software that engages customers and improves business results. <br/>
                                                            
                                            WE START WITH REVEALING REALITY

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                
            
        
        )
    }
}

export default methodology;