import React, { Component } from 'react' ;
import design from '../images/backgrounds/bg-digital-design.png';
import services from '../images/graphic-services.svg';
import web1 from '../images/photos/photo-web-s1.png';
import web2 from '../images/photos/photo-web-s2.png';
import web4 from '../images/photos/photo-web-acd.png';
import web5 from '../images/photos/photo-web-ww.png';
import web6 from '../images/photos/photo-web-kinetix.png';
import web7 from '../images/photos/photo-web-norwood.png';
import web8 from '../images/photos/photo-web-pc.png';
import didyouknow from '../images/graphic-didyouknow.svg';


class digital_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Website Design</div>
                <img className="flex-image-container" src={design}  alt="Web Design" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    “Getting a quality website is not an expense but rather an investment.” ― Dr. Christopher Dayagdag

                </div>
            </section>
            <section className="flex-layout-section-full photo-content-color align-items-center" style={{height:'670px'}}> 
                <div className=" grid-2col-text-photo align-items-center margin-tb-100 width-70">
                <div className="content-block col2-text ">
                    <div className="callout-text text-align-left">
                    WDS has been creating design solutions for websites for over 20 years. All of our designs solutions are derived from our UX methodology research findings and user personas.  </div>         
                </div>
                <div className="col2-photo width-100 grid-placeself-center">
                    <img className="container-photo-callout" src={web1}  alt="Website Design" /> 
                </div>
                </div>
            </section>
            
                <section className="grid-2col-photo-content content-header margin-top-100">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Website Value                       
                        </div>
                        <div className="subtitle">
                            The hub of your marketing
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Responsive solutions, Mobile Solutions, Custom design and development </p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={web2}  alt="Stakeholder Interview" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="flex-layout-section-full align-self-center">
                    <div className="grid-2col-text-center width-100" >
                        <div className="grid-title subtitle content-text-24 margin-bottom-20">
                        Website design services includes: 
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Responsive Design
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Accessibility
                        </div>
                        <div className="item content-text-18">
                            Content Creation
                        </div>
                        <div className="item content-text-18">
                            Typography 
                        </div>
                        <div className="item- content-text-18">
                            Front-End Development
                        </div>
                        <div className="item content-text-18">
                            Custom Images
                        </div>
                        <div className="item content-text-18">
                            Mobile
                        </div>
                        <div className="item content-text-18">
                            <a href="./design_systems">Pattern Libraries</a>
                        </div>
                        <div className="item content-text-18">
                            <a href ="./css_solution">Custom CSS Solutions</a>
                        </div>
                        <div className="item content-text-18">
                            Brochures
                        </div>

                    </div>
                </section>
              
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>
                
            <section className="flex-layout-section-full flex-layout-center-center">
                <div className="align-center align-items-center">
                    <ul className="grid-clients-wrapper align-items-center  width-70">
                    
                    <li  className="grid-clients-box image subtitle text-white"  data-content="ACD">
                        <img className="width-100 height-100"  src={web4}  alt="ACD" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="White Wolf Consulting"> 
                        <img className="width-100 height-100" src={web5}  alt="White Wolf Consulting" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Kinetix">
                        <img className="width-100 height-100" src={web6}  alt="Kinetix" />
                        </li>
                    
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Norwood Company">
                        <img className="width-100 height-100" src={web7}  alt="Norwood Company" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Pierre and Carlo">
                        <img className="width-100 height-100" src={web8}  alt="Pierre and Carlo" />
                       </li>
                    
                </ul>
                </div>
            </section>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className="width-75 margin-top-50 align-center margin-bottom-50"> 
                       <a href="../communication_insights"> <img className="width-70 flex-image-container margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="content-header text-white flex-layout-column flex-layout-center-center">WDS does not use templates - custom design only!</p>
                    </div>
                </div>
            </section>

            </div>
        )
    }
}

export default digital_design;