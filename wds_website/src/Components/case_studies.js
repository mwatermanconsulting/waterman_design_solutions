import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import caseStudies from '../images/bg-casestudies.png';
import motorola from '../images/photo-motorola-beforeafter.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'
import stubhub from '../images/photo-stubhub-before-after.png'
import pfizer_logo from '../images/icon-logo-pfizer.svg'
import pfizer from '../images/photo-pfizer-before-after.png'
import osi_logo from '../images/icon-logo-osi.svg'
import osi from '../images/photo-osi-before-after.png'
import az from '../images/az.png'
import KetchHot from '../images/ketchhot.png'
import wcc from '../images/wcc.png'
import wtt from '../images/wtt.png'
import sbk from '../images/smithkline.svg'
import gps from '../images/gps.png'
import investor from '../images/if.png'
import ncba from '../images/ncba.png'



class case_studies extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section-fixed yellow">
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
                <div className="flex-layout-column flex-layout-section-full">
                    <div className="flex-items-justified-center flex-layout-justified-sa flex-layout-row margin-top-50"> 
                        <div className="card-case-studies content-header flex-layout-column flex-sh-500">
                            <div className="container-image-block">
                                <img className="" src={motorola}  alt="motorola before and after" /> 
                            </div>  
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
                        <div className="card-case-studies content-header flex-layout-column flex-sh-500 ">
                            <div className="container-image-block">
                                <img className="image-size-100" src={stubhub}  alt="motorola before and after" /> 
                            </div>
                            <div className="flex-layout-full" style={{marginTop:25}}>
                                <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                                    <p className="subtitle text-black">StubHub</p>
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
                            </div>
                        </div>
                            <div className="flex-items-justified-center flex-layout-justified-sa flex-layout-row margin-top-150"> 
                                <div className="card-case-studies content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="" src={pfizer}  alt="motorola before and after" /> 
                                    </div>  
                                    <div className="flex-layout-full">
                                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                                            <p className="subtitle text-black">Pfizer</p>
                                            <img className="" src={pfizer_logo}  alt="motorola logo" /> 
                                        </div>
                                        <div className="flex-card-content">

                                        <div className="content-block">
                                        <p><i> Industry: Technology</i></p>
                                            <p className="content-text-18 content-block">High Volume of returns plaguing Motorola Gateway Router Product Line. 
                                            After two failed attempts by UX/UI developers, a frustrated management group decided they needed a designer to make their modem app easier to use. <br/><br/>
                                            <p className="content-text-18 content-block-why">The home division of Motorola was set to implement ground breaking 
                                            technology for their gateway router product line. Until the decision was made to delay the effort until the problems related to the line were solved.   <br/><br/>
                             <a href="./case_study_1" className="text-black" target="_blank">Read More....</a>  
                                            </p>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="card-case-studies content-header flex-layout-column flex-sh-500 ">
                                    <div className="container-image-block">
                                        <img className="image-size-100" src={osi}  alt="motorola before and after" /> 
                                    </div>
                                
                                    <div className="flex-layout-full" style={{marginTop:25}}>
                                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                                            <p className="subtitle text-black">StubHub</p>
                                            <img className="" src={osi_logo}  alt="motorola logo" /> 
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
                                </div>
                            </div> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src  alt="Blended Teams" /> 
                                    </div> 
                                        <h4 className="text-white">Delivering an original design solution to data visuliztion leads to a 97% Adoption Rate</h4>
                                   <div className="content-block">
                                            <p className="content-text-18 content-block-why">Finding traction on a new application is tough challenge. 
                                            WDS implemented our methodology for Stubhub to deliver a design solution that was beyound their expectations.  <br/><br/>
                                            
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
                                            <p className="content-text-18 content-block-why padding-bottom-50">One of the world’s top technology and hardware development companies needed consistency across its enterprise suite of over 80 applications. 
                                            A streamlined enterprise design language, uniform navigation and standard product guidelines were essential. <br/><br/>

                                            <a href="./case_study_3" className="text-black" target="_blank">Ream More....</a> 
                                            </p>
                                        </div>
                                </div>
                                </div>
                            </div>       
                        </div> 
                        <div className="flex-layout-section-full flex-layout-column align-items-center margin-top-50">
                        
                            <div className="flex-layout-section thin-hr margin-tb-100" style={{ width: '90%' }}></div>

                            <div className="flex-layout-content-container flex-layout-column flex-layout-center-center">
                                <div className="content-header flex-layout-column">    
                                    <h3 className="subtitle-capital flex-layout-center">BETTER EXPERIENCES = BETTER RESULTS</h3>
                                    <div className="content-block width-100">
                                        <p>Every customer base has its own energy and set of issues with the user experience in general. 
                                            It all starts by taking inventory and asking the right questions: How much time wasted? What is frustrating? Does it feel outdated? How different is it from your experiences with Amazon, or Yelp, etc? 
                                            What would YOU do different? Wouldn’t you like your numbers bigger so you can see them? Our expertise follows our solutions - stories!.</p><br/>
                                        <p className="content-text-18">We work across verticals and technologies, such as consumer, workplace, financial, healthcare, customer service, mobile development, and ecommerce.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-layout-section-full width-50 flex-layout-center-center flex-layout-justified-sa flex-layout-row margin-top-50 padding-bottom-50" style={{alignItems: 'flex-start', marginLeft: '125px'}}>
                                <div className="flex-layout-column width-50 flex-sh-400 flex-items-align-top">
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Construction</div>
                                            <ul>
                                                <li>Architectural Concrete Design</li>
                                                <li>Nirvana Pool & Spa</li>
                                                <li>PoolTech</li>
                                                <li>Norwood Company</li> 
                                                <li>Van Meis Design Group</li>     
                                            </ul>  
                                        </div>
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Energy Sector</div>
                                            <ul>
                                                <li>OSIsoft</li>
                                                <li>HCNRG Solutions</li>     
                                            </ul>  
                                    </div>
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Utilities</div>
                                            <ul>
                                                <li>Kinetix</li>
                                                <li>OSIsoft</li>
                                            </ul>  
                                    </div>
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">E-Commerce</div>
                                            <ul>
                                                <li>StubHub</li>
                                                <li>SellStuff</li>
                                            </ul>
                                    </div>
                                </div>
                                <div className="flex-layout-column width-50 flex-sh-400 flex-items-align-top">
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Healthcare</div>
                                            <ul>
                                                <li>AstraZeneca</li>
                                                <li>SmithKline Beecham</li>
                                                <li>NewCorp Benefit Advantage</li>
                                                <li>West Chester Cardiology</li> 
                                            </ul>
                                        </div>
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Financial</div>
                                            <ul>
                                                <li>Investor Force</li>
                                            </ul>  
                                        </div>
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Real Estate</div>
                                            <ul>
                                                <li>Sherman Toppin Real Estate</li>
                                            </ul>
                                        </div>
                                    <div className="content-header flex-layout-column">
                                        <div className="subtitle">Sports</div>
                                            <ul>
                                                <li>World Team Tennis</li>
                                            </ul>
                                        </div>
                                    <div className="content-header flex-layout-column padding-bottom-50">
                                        <div className="subtitle">Food and Beverage</div>
                                            <ul>
                                                <li>Roos Foods</li>
                                                <li>KetchHot</li>   
                                            </ul>  
                                    </div>
                                </div>
                            </div> 
                            <div className="flex-layout-section thin-hr margin-tb-100" style={{ width: '90%' }}></div>
                        </div>
                        <div className="flex-layout-section-fixed-lg flex-layout-center-center flex-wrap padding-bottom-150">
                            <img className="" src={stubhub_logo}  alt="motorola logo" />
                            <img className="image-size-10" src={az}  alt="motorola logo" />  
                            <img className="image-size-10" src={KetchHot}  alt="motorola logo" /> 
                            <img className="image-size-30" src={motorola_logo}  alt="motorola logo" /> 
                            <img className="image-size-30" src={gps}  alt="motorola logo" />
                            <img className="image-size-10" src={wtt}  alt="motorola logo" /> 
                            <img className="image-size-30" src={wcc}  alt="motorola logo" />  
                            <img className="image-size-10" src={sbk}  alt="motorola logo" />
                            <img className="image-size-30" src={investor}  alt="motorola logo" />
                            <img className="image-size-10" src={osi_logo}  alt="motorola logo" />
                            <img className="image-size-10" src={ncba}  alt="motorola logo" />     
            
            
                        </div>
                    </div>
                </div>


                        
                )
            }
        }
export default case_studies;