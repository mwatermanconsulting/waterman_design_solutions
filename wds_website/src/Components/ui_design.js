import React, { Component } from 'react' ;
import bg_ui from '../images/backgrounds/bg-ui.png';
import finding from '../images/photos/photo-documentation-s1.png';
import didyouknow from '../images/graphic-didyouknow.svg';
import finding_truth2 from '../images/photos/photo-finding-truth-s2.png';
import ui_s1 from '../images/photos/photo-ui-s1.png';


class ui_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    User Interface Design</div>
                <img className="flex-image-container" src={bg_ui}  alt="User Interface" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    “Simplicity is the ultimate sophistication.” –Leonardo da Vinci

                </div>
            </section>
            <section className="grid-callout photo-content-color border-bottom-5 height-670"> 
                <div className="grid-callout-text grid-placeself-center content-block-75 content-header flex-layout-column">
                    <div className="callout-title margin-top-15">
                             Empathetic Design
                    </div>
                    <div className="callout-text text-align-left margin-top-15" >
                       We live for the comment "why didn't we think of that" usually expressed by stakeholders and managers during our design reveal. Our for passion for the last 20 years is solving problems on complex user interfaces and creating simple solutions. 
                    </div>    
                </div>
                <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={ui_s1}  alt="shaking hands" /> 
                <p classname="caption">Image by Avi Chomotovski from Pixabay</p> </div>
            </section>
    
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100">
                <div className="float-left flex-layout-center-center content-block-60">
                    <div className="title">
                    WDS UI Designs are all about the user. We do not begin the design until research has been completed and the users needs and expectations are understood.
                    </div>
                    <div className=" margin-top-50">
                        <p className="content-text-24">
                        Our work has simplified interfaces for applications used by critical industries such as the energy sector, who are currently using our designed software to monitor oil rigs. Or for the pharmaceutical industries using our designed software for monitoring drug manufacturing facilities.</p>
                    </div>
                </div>
            </section>
            
                
                <div className="flex-layout-section thin-hr  margin-tb-100" ></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center ">
                <div className="float-left content-block-60">
                        <div className="title">
                            Design is not about being pretty or aesthetically pleasing. It is about simplicity.
                        </div>
                        <div className="content-text-24 margin-top-25">
                        WDS has been designing user Interfaces for over twenty years. We originally designed user interfaces for websites, but that changed with our first complicated industrial user interface we designed for Motorola. Since then our UI design services expanded to software, mobile,  SaaS and Kiosk. 

                        </div> 
                   
                    </div>
                </section> 
    
            
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center ">
                <div className="float-left content-block-60">
                        <div className="title">
                             Research
                        </div>
                        <div className="subtitle margin-top-15">
                             Understanding the Business
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                                The next phase of the methodology establishes the foundation. It is all about the business and how it relates to the users. It's how design relates to the business.</p>

                            <ul className="dashed">
                                <li>Kickoff Meeting</li>
                                <li>Business Requirements</li>
                                <li>Competition Research</li>
                                <li>Marketing Materials Review</li>
                                <li>Style Guides and Company Standards</li>
                                <li>Stakeholders Contact</li>
                            </ul>

                        </div>
                    </div>
            </section>
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="content-block-55 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text text-white text-align-center">  WDS designed UI solutions for data display software that worked with nuclear reactors. <p className="text-align-center margin-top-25" ><button onclick="location.href='./case_study_3';" type="button" value="Learn More" className="button-white margin-top-50 font-size-24">Learn More</button></p>  </p>
                    </div>
                </div>
            </section>  
        </div>
        )
    }
}

export default ui_design;