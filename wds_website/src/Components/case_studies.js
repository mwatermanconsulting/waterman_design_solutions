import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import caseStudies from '../images/bg-casestudies.png';
import motorola from '../images/photo-motorola-beforeafter.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'


class case_studies extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section-fixed">
                    <div className="image-background-border-tb flex-layout-center-center yellow">
                        <div className="flex-image-container-child flex-layout-center-center">
                        <h1 className="image-text title text-white">Client Case Studies</h1>
                            <img className="flex-image-container-child border-3px image-size-fixed" src={caseStudies}  alt="case studies" />
                            
                        </div>
                        </div>
                        </div>
                         <div className="flex-layout-section-full flex-layout-justified-sb align-items-center">
                            <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                                <div className="content-header flex-layout-column">    
                                    <h3 className="subtitle flex-layout-center">Customer Success Spotlight</h3>
                                <div className="content-block width-100">
                                    <p className="content-text-18 text-align-center">Every project has a story. Below are our most interesting stories </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-layout-column flex-layout-section-full flex-layout-justified-sb" style={{padding:"50"}}>
                            <div className="flex-items-justified-center flex-layout-row margin-top-50"> 
                                <div className="card-case-studies content-header flex-layout-column flex-sh-500 ">
                                    <div className="container-image-block">
                                        <img className="" src={motorola}  alt="motorola before and after" /> 
                                    </div>
                                
                                    <div className="flex-layout-full">
                                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                                            <p className="subtitle text-black">Motorola</p>
                                            <img className="" src={motorola_logo}  alt="motorola logo" /> 
                                        </div>
                                        
                                        <div className="flex-card-content">
                                        <div className="content-block">
                                        <p><i> Industry: Technology</i></p>
                                            <p className="content-text-18 content-block">High Volume of returns plaguing Motorola Gateway Router Product Line. 
                                            After two failed attempts by UX/UI developers, a frustrated management group decided they needed a designer to make their modem app easier to use. <br/><br/>

                                             <a href="./case_study_1" className="text-black" target="_blank">Read More....</a>   
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="card-case-studies content-header flex-layout-column flex-sh-500 ">
                                    <div className="container-image-block">
                                        <img className="" src={motorola}  alt="motorola before and after" /> 
                                    </div>
                                
                                    <div className="flex-layout-full">
                                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                                            <p className="subtitle text-black">Motorola</p>
                                            <img className="" src={stubhub_logo}  alt="motorola logo" /> 
                                        </div>
                                        
                                        <div className="flex-card-content">
                                        <div className="content-block">
                                        <p><i> Industry: Technology</i></p>
                                            <p className="content-text-18 content-block">High Volume of returns plaguing Motorola Gateway Router Product Line. 
                                            After two failed attempts by UX/UI developers, a frustrated management group decided they needed a designer to make their modem app easier to use. <br/><br/>

                                             <a href="./case_study_1" className="text-black" target="_blank">Read More....</a>   
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div></div> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">Stubhub Stuff</h3>
                                   <div className="content-block">
                                            <p className="content-text-18 content-block-why">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                managers work together to achieve success.  <br/><br/>
                                            
                                                <a href="./case_study_2" className="text-black" target="_blank">Read More....</a> 
                                            </p>
                                    </div>
                                </div>    
                                  
                        
                        <div className="flex-layout-column flex-layout-section- full  flex-layout-justified-sb">
                            <div className="flex-layout-center-center flex-layout-row margin-top-50 "> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src  alt="Blended Teams" /> 
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
                                </div>
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src  alt="Blended Teams" /> 
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
                            <div className="flex-layout-section align-items-center white image-background-border-tb">
                            <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                                <div className="content-header flex-layout-column">    
                                    <h3 className="subtitle flex-layout-center">Customers</h3>
                                <div className="content-block width-100">
                                    <p className="content-text-18 text-align-center">Our Customers and the industiries we serve
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
export default case_studies;