import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import didyouknow from '../images/graphic-didyouknow.png';
import caseStudies from '../images/backgrounds/bg-casestudies.png';
import motorola from '../images/photos/photo-motorola-beforeafter.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'
import stubhub from '../images/photos/photo-stubhub-before-after.png'
import pfizer_logo from '../images/icon-logo-pfizer.svg'
import pfizer from '../images/photos/photo-pfizer-before-after.png'
import osi_logo from '../images/icon-logo-osi.svg'
import osi from '../images/photos/photo-osi-before-after.png'




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
                    <div className="flex-layout-column margin-top-75">
                        <div className="title flex-layout-center">
                                Customer Success Spotlight</div>
                        <div className="content-block width-100 margin-top-10">
                            <p className="subtitle text-align-center">
                                 Our favorite case study stories including the methodology and the solutions that made each project a success</p>
                        </div> 
                    </div>
                </section>
                <section className="grid-cs-card flex-layout-center-center flex-layout-section-full margin-top-50 margin-bottom-100">
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
                        <div className="flex-card-content" style={{marginTop: '-40px'}}>
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
                        <div className="flex-card-content" style={{marginTop: '-15px'}}>
                            <div className="content-block">
                                <p><i> Industry: Ecommerce</i></p>
                                    <p className="content-text-18 content-block" style={{marginTop:'30px'}}>
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
                                        <div className="flex-card-content" style={{marginTop: '-40px'}}>
                                            <div className="content-block">
                                                <p><i> Industry: Pharma</i></p>
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
                                        <div className="flex-card-content" style={{marginTop: '-40px'}}>
                                            <div className="content-block">
                                                <p><i> Industry: Gas and Oil</i></p>
                                                <p className="content-text-18 content-block">
                                                 Needed an enterprise level CSS solution for their data visualization SaaS initiative. The solution needed to scale and reduce specificity issues. The CSS solution became the company wide standard and foundation for the...
                                                 
                                                 <br/><br/>
                                                <a href="./case_study_4" className="text-black" target="_blank">Read More....</a>   
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div> 
                        
                </section>
            <div className="flex-layout-section-full flex-layout-column align-items-center margin-top-50">  
        </div>

                <section className="flex-layout-section-full flex-layout-column margin-top-100  grey border-top-5">
                    <div className="width-100 margin-top-50 margin-bottom-50"> 
                       <a href="../communication_insights"> <img className="flex-image-container width-75" src={didyouknow}  alt="Ux is the best therapy!" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="content-header text-white flex-layout-column flex-layout-center-center"> 
                            WDS designed and developed a UX information site in 2005 called Web First Aid </p>
                    </div>
                    </div>
                </section> 
                  
    </div>


                        
                )
            }
        }
export default case_studies;