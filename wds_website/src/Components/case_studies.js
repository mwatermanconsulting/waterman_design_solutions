import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import caseStudies from '../images/backgrounds/bg-casestudies.png';
import motorola from '../images/photos/photo-motorola-beforeafter.png';
import pii from '../images/icon-logo-pii.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'
import stubhub from '../images/photos/photo-stubhub-before-after.png'
import pfizer_logo from '../images/icon-logo-pfizer.svg'
import pfizer from '../images/photos/photo-pfizer-before-after.png'
import osi_logo from '../images/icon-logo-osi.svg'
import osi from '../images/photos/photo-osi-before-after.png'
import az from '../images/az.png'
import KetchHot from '../images/icon-logo-ketchhot.png'
import wcc from '../images/wcc.png'
import wtt from '../images/wtt.png'
import sbk from '../images/icon-logo-smithkline.svg'
import gps from '../images/gps.png'
import investor from '../images/if.png'
import ncba from '../images/ncba.png'



class case_studies extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <section className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Case Studies
                    </div>
                        <img className="flex-image-container width-100" src={caseStudies}  alt="Case Studies" />     
                </section>
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text-lg">
                        Every great design begins with an even better story
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-column margin-top-50">
                        <div className="title flex-layout-center">
                                Customer Success Spotlight</div>
                        <div className="content-block width-100 margin-top-25">
                            <p className="subtitle text-align-center">
                                 Our favorite case study stories about our process that made solutions happen </p>
                        </div> 
                    </div>
                </section>
                <section className="grid-cs-card flex-align-items-center flex-layout-section-full margin-top-50 margin-bottom-100" style={{marginLeft: '5%'}}>
                    <div className="cs-card-1 card-case-studies content-header flex-layout-column flex-sh-500">
                        <div className="container-image-block">
                            <img className="width-100" src={motorola}  alt="motorola before and after" /> 
                        </div> 
                        <div className="content-block-auto margin-top-10"> 
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black" >
                                Motorola</p>
                            <img className="width-20" src={motorola_logo}  alt="motorola logo" /> 
                        </div>
                        <div className="flex-card-content" style={{marginTop: '-15px'}}>
                            <div className="content-block">
                                <p><i> Industry: Products</i></p>
                                <p className="content-text-18 content-block">
                                    High Volume of returns plaguing Motorola Gateway Router Product Line. After two failed attempts by UX/UI developers, a frustrated management group decided they needed a UX designer to solve the problems.</p>

                                <p><a href="./case_study_1" > Read More....</a> </p>  
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="cs-card-2 card-case-studies content-header flex-layout-column flex-sh-500">
                    
                    <div className="container-image-block" >
                        <img className="width-100" src={stubhub}  alt="StubHub" /> 
                    </div>
                    <div className="content-block-auto margin-top-25">
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black">
                                StubHub</p>
                            <img className="width-20" src={stubhub_logo}  alt="StubHub logo" /> 
                        </div>    
                        <div className="flex-card-content">
                            <div className="content-block">
                                <p><i> Industry: Ecommerce</i></p>
                                    <p className="content-text-18 content-block">
                                        StubHub was finding it difficult to gain user traction for their data reporting tool
                                        After two failed attempts by UX/UI developers, a frustrated management group decided they needed a designer to make their modem app easier to use.</p>

                                    <p><a href="./case_study_2"  target="_blank">Read More....</a>  </p> 
                                            
                            </div>
                        </div>
                    </div>
                            </div>
                       
                            <div className="cs-card-3 flex-items-justified-center flex-layout-justified-sa flex-layout-column margin-top-50"> 
                                <div className="card-case-studies content-header flex-layout-column">
                                    <div className="container-image-block">
                                        <img className="image-size-100" src={pfizer}  alt="Motorola before and after" /> 
                                    </div>  
                                    <div className="flex-layout-full">
                                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                                            <p className="subtitle text-black">Pfizer</p>
                                            <img className="" src={pfizer_logo}  alt="pfizer logo" /> 
                                        </div>
                                        <div className="flex-card-content">
                                            <div className="content-block">
                                                <p><i> Industry: Technology</i></p>
                                                <p className="content-text-18 content-block">
                                                WDS noticed major problems with the DMS solution Pfizer choose to manage the 25,000 page pfizer project. WDS independently started to interview developers and document loss time, sitting around watching the....
                                            
                                                 <br/><br/>

                                                <a href="./case_study_3" className="text-black" target="_blank">Read More....</a>   
                                                </p>
                                            </div>
                                        </div>
                                    </div>   
                                </div> 
                            </div>
                                <div className="cs-card-4 card-case-studies content-header flex-layout-column margin-top-50">
                                    <div className="container-image-block">
                                        <img className="image-size-100" src={osi}  alt="osi before and after" /> 
                                    </div>
                                
                                    <div className="flex-layout-section-full">
                                        <div className="flex-card-content flex-layout-center-center flex-layout-justified-sb">
                                            <p className="subtitle text-black">OSI</p>
                                            <img className="" src={osi_logo}  alt="osi logo" /> 
                                        </div>
                                        <div className="flex-card-content">
                                            <div className="content-block">
                                                <p><i> Industry: Technology</i></p>
                                                <p className="content-text-18 content-block">High Volume of returns plaguing Motorola Gateway Router Product Line. 
                                                After two failed attempts by UX/UI developers, a frustrated management group decided they needed a designer to make their modem app easier to use. <br/><br/>
                                                <a href="./case_study_4" className="text-black" target="_blank">Read More....</a>   
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div> 
                        
                </section>
            <div className="flex-layout-section-full flex-layout-column align-items-center margin-top-50">


            <section className="flex-layout-section-full width-100 border-tb-5 grey flex-layout-column flex-layout-center-center">
                <div className="content-header flex-layout-column">
                    <div className="content-block margin-tb-100 width-100">
                        <p className="callout-text text-align-center"> 
                        Design is not just what it looks like and feels like. Design is how it works.</p>
                        <p className="content-text-18 text-align-center"> 
                        —Steve Jobs, Co-Founder of Apple</p>
                    </div>
                </div>
            </section>
        </div>

          
                  
    </div>


                        
                )
            }
        }
export default case_studies;