import React, { Component } from 'react' ;
import backgroundAboutus from '../images/background-aboutus.png';
import { Button } from 'react-mdl';
import caseStudies from '../images/casestudies.png';
import mysvg from '../images/crowdgirls.svg';
import ship from '../images/titanic.svg';
import computer from '../images/photo-computer.png';
import firemen from '../images/firemen.svg';

class case_studies extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section-full flex-layout-justified-sb">
                    <div className="image-background-border-tb flex-layout-center-center yellow">
                        <div className="flex-image-container-child flex-layout-center-center">
                            <img className="flex-image-container-child border-3px overlay-yellow" src={caseStudies}  alt="case studies" /> 
                        </div>
                            <div className="flex-content-container-split">
                                <div className="content-header"> 
                                    <div className="title">Case Studies</div>
                                </div>
                                <div className="content-header">
                                </div>
                                <div className="content-block-why">
                                    <p className="content-text-18">For more than a decade, we have refined a repeatable, programmatic methodology that centers on answering questions about customers 
                                    through direct observational fieldwork to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never seen. 
                                    The aim of this work is not more data; most companies are swimming in information. Instead, we create a strategy for the experience that the software will provide. 
                                    It's a framework that allows developers, designers, marketers and architects to make decisions that support the intended customer experience. WDS integrated offering takes insights 
                                    from the field and manifests in unique simple designs that engages customers and improves business results. 
                                    <br/>
                                     </p>
                                </div>
                                </div>
                            </div>
                        </div>  
                         <div className="flex-layout-section-full align-items-center green">
                            <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                                <div className="content-header flex-layout-column">    
                                    <h3 className="subtitle flex-layout-center">Customer Success Spotlight</h3>
                                <div className="content-block width-100">
                                    <p className="content-text-18 text-align-center">Spotlight on design solutions for some of our favorite clients. 
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-layout-column flex-layout-section- full green flex-layout-justified-sb">
                            <div className="flex-layout-center-center flex-layout-row margin-top-50"> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">High Volume of returns plaguing Motorola <br/> Gateway Router Product Line</h3>
                                        <div className="content-block">
                                            <p className="content-text-18 content-block-why">The home division of Motorola was set to implement ground breaking 
                                            technology for their gateway router product line. Until the decision was made to delay the effort until the problems related to the line were solved.   <br/><br/>

                                             <a href="./case_study_1" className="text-black" target="_blank">Read More....</a>   
                                            </p>
                                        </div>
                                    </div>
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">Stubhub Stuff</h3>
                                   <div className="content-block">
                                            <p className="content-text-18 content-block-why">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                managers work together to achieve success.  <br/><br/>
                                            
                                                <a href="./case_study_2" className="text-black" target="_blank">Read More....</a> 
                                            </p>
                                    </div>
                                </div>    
                            </div>       
                        </div>
                        <div className="flex-layout-column flex-layout-section- full green flex-layout-justified-sb">
                            <div className="flex-layout-center-center flex-layout-row margin-top-50 "> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">OSI Stuff</h3>
                                        <div className="content-block">
                                            <p className="content-text-18 content-block-why padding-bottom-50">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design 
                                            software solutions based on user needs.  Designers, strategists, marketers and program 
                                            managers work together to achieve success. <br/><br/>

                                            <a href="./case_study_3" className="text-black" target="_blank">Ream More....</a> 
                                            </p>
                                        </div>
                                </div>
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">Pfizer Stuff</h3>
                                   <div className="content-block">
                                            <p className="content-text-18 content-block-why padding-bottom-50">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                managers work together to achieve success.  <br/><br/>

                                                <a href="./case_study_4" className="text-black padding-bottom-50" target="_blank">Ream More....</a> 
                                            </p>
                                    </div>
                                </div>    
                            </div>
                        </div>      
                    </div>                                   
                )
            }
        }
export default case_studies;