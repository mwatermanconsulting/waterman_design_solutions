import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import design from '../images/backgrounds/bg-digital-design.png';
import services from '../images/graphic-services.svg';
import web1 from '../images/photos/photo-web-s1.png';
import web2 from '../images/photos/photo-web-s2.png';
import web4 from '../images/photos/photo-web-acd.png';
import web5 from '../images/photos/photo-web-ww.png';
import titanic from '../images/graphic-titanic.svg';
import web6 from '../images/photos/photo-web-kinetix.png';
import web7 from '../images/photos/photo-web-norwood.png';
import web8 from '../images/photos/photo-web-pc.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class digital_design extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="  WDS has been creating design solutions for websites for over 20 years. All of the design solutions are derived from UX research and user personas. WDS websites designs are as unique as your business. " />
                <meta charSet="utf-8" />
            <title>Website Design</title>
            <link rel="canonical" href="http://watermandesignsolutions/website_design" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Website Design
                    </div>
                        <img className="flex-image-container width-100" src={design}  alt="Case Studies" />     
                </section>

            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    “Getting a quality website is not an expense but rather an investment.” <br></br> ― Dr. Christopher Dayagdag

                </div>
            </section>

            <section className="flex-layout-section-full photo-content-color align-items-center"> 
                <div className=" grid-2col-text-photo align-items-center margin-tb-100 width-70">
                    <div className="content-block col2-text ">
                        <div className="callout-text text-align-left">
                            WDS has been creating design solutions for websites for over 20 years. All of the design solutions are derived from UX research and user personas.  WDS websites designs are as unique as your business.  
                        </div>      
                    </div>
                <div className="col2-photo width-100 grid-placeself-center">
                    <img className="container-photo-callout" src={web1}  alt="Website Design" /> 
                </div>
                </div>
            </section>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100">
                <div className="float-left flex-layout-center-center content-block-60">
                    <div className="title">
                            Custom Designed Websites that Meet Users Expectations
                    </div>
                    <div className=" margin-top-50">
                        <p className="content-text-24">
                            It is easier today than ever for a business to get a website. There are countless template sites that are easy to use for people with limited experience. Your business and customers are unique and your website should reflect that uniqueness, your business deserves to stand out.</p> 
                            =
                            <p className="content-text-24">   
                            The typical user has a good design eye and can tell the difference between a template website and a custom website. They will notice when a business cares enough about them to create a design that is based on UX research. Customers will always choose the better experience every time. Your business wasn't born from a template and your users deserve more. Don't settle for good enough!</p>
                            <div className="flex-layout-column width-70 margin-top-25">    
                        <img className="photo-container" src={titanic} className="align-self-center margin-bottom-20" alt="Good Enough is not good enough"/>
                    </div>
                    </div>
                </div>
            </section>
            
            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="flex-layout-section-full flex-layout-center-center">
                <div className="subtitle">
                    A Small Sample of Our Custom Websites 
                </div>
                <div className="align-center align-items-center margin-top-50">
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

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="flex-layout-section-full align-self-center">
                <div className="grid-2col-text-center margin-left-15 width-100" >
                    <div className="grid-title subtitle content-text-24 margin-bottom-20">
                            Website Design Services Include: 
                    </div>
                    <div className="col2-text content-text-18 margin-top-10">
                            Responsive Design
                    </div>
                    <div className="item content-text-18 margin-top-10">
                        <a href ="./core_offerings">
                            Accessibility</a>
                    </div>
                    <div className="item content-text-18">
                        <a href ="./core_offerings">
                            Telemetry</a>
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
                            Mobile Design
                        </div>
                        <div className="item content-text-18">
                        <a href ="./core_offerings">
                            Analytic Data Reporting</a>
                        </div>
                        <div className="item content-text-18">
                            <a href="./design_systems">
                            Pattern Libraries</a>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center       margin-top-100  grey border-top-5">
                    <div className="text-align-center width-75 margin-top-50 align-center margin-bottom-50"> 
                       <a href="../communication_insights"> 
                       <img className="container-image-500  margin-bottom-50" src={didyouknow}  alt="Did You Know?" /> </a> 
                    <div className="flex-layout-center-center">
                        <p className="content-header text-white flex-layout-column flex-layout-center-center">WDS does not use templates - custom design only!</p>
                    </div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

export default digital_design;