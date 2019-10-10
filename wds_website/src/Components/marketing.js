import React, { Component } from 'react';
import Helmet from 'react-helmet';
import bg_marketing from '../images/backgrounds/bg-documentation.png';
import marketing2 from '../images/photos/photo-marketing-s2.png';
import marketing3 from '../images/photos/photo-marketing-s3.png';
import marketing5 from '../images/photos/photo-marketing-s5.png';

import marketing6 from '../images/photos/photo-marketing-s6.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class marketing extends Component {
    render () {
        return(
            <div>
                <Helmet>
                    <meta name="description" content="Social Media Strategy. The Right Approach. The WDS goal is to identify the right approach for your unique target audiences on social media by planning, developing, and executing innovative social media marketing strategies. This builds a meaningful experience across all social media touch points. " />
                    <meta charSet="utf-8" />
                <title>Marketing</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/marketing" />
                </Helmet>
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Marketing</div>
                <img className="flex-image-container width-100" src={bg_marketing}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                   WDS will make your customers feel uniquely valued.
                </div>
            </div>

            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75 flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15 margin-left-2" >
                    There has been a big shift in marketing. It use to be all about the product or application, but is now human-centric. WDS uses UX research to set up marketing strategies. </div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout margin-left-15per margin-top-15sm" src={marketing2}  alt="Finding Truth" /> 
                    </div>
            </section>

        <div className="flex-layout-section-full flex-layout-column margin-top-25 align-self-center">      
            
            <section className="content-header flex-layout-center-center flex-layout-column">
                <div className="flex-layout-center-center title content-size-24 text-align-center margin-top-75 content-block-60">
                        “Many companies have forgotten they sell to actual people. Humans care about the entire experience, not just the marketing or sales or service. To really win in the modern age, you must solve for humans.” - Dharmesh Shah, CTO  Co-Founder, HubSpot 
                </div>
                <div className="content-block-60 margin-top-25">
                <p className="content-text-24 margin-top-25sm">
                        WDS understands people on a deep level, with a methodology that gives a voice to the users, your customers, whose daily lives are effected by the use of your application or product. <br></br>
                        
                        Every business has a story, and can be told through a marketing strategy based on research and data, with a clear vision that reflects and embraces real human values.</p>
                </div>
            </section>

            <div className="hr-line"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                    Social Media Strategy  
                </div>
                <div className="subtitle margin-top-10 content-block-60">
                    The Right Approach
                </div> 
                
                <div className="content-block-60 content-text-18 margin-top-15 margin-top-15sm"><
                    div className="float-right">
                    <img className="container-image-500 margin-top-5per" src={marketing3}  alt="Website Design" /> 
                </div>
                    <p className="content-text-18 margin-top-15"> 
                    The WDS goal is to identify the right approach for your unique target audiences on social media by planning, developing, and executing innovative social media marketing strategies. This builds a meaningful experience across all social media touch points. </p>

                  </div>
            </section>

            <div className="flex-layout-section align-self-center thin-hr hrline-spacing width-70"> </div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                    Monitor and Document   
                </div>
                <div className="subtitle margin-top-10 content-block-60">
                    WDS Will Handle All the Work
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <p className="content-text-18"> 
                <div className="float-right">
                    <img className="photo-container margin-top-10per" src={marketing5}  alt="Website Design" /> 
                </div>
                    The WDS team will develop, manage, and monitor your social media account to increase brand awareness and drive follower engagement.  Clients are considered as thought leaders in the process of delivering engaging, relevant content.</p>

                  </div>
            </section>


            <div className="flex-layout-section align-self-center thin-hr hrline-spacing width-70"> </div>

            <section className="float-left align-items-center flex-layout-column margin-bottom-50">
                <div className="title content-block-60">
                    Social Media Marketing Strategies     
                </div>
                <div className="subtitle margin-top-10 content-block-60">
                    It's Always About the User
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <p className="content-text-18"> 
                <div className="float-right">
                    <img className="photo-container margin-top-10per" src={marketing6}  alt="Website Design" /> 
                </div>
                Using user research and ad optimization techniques, wds leverages your social media platforms to connect your brand, products, or services to the right people. By creating highly targeted advertisements on social media, we help our clients reach an otherwise untapped resource for potential customers.</p>

                  </div>
            </section>
        </div> 
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center padding-top-50 grey border-top-5">
                <div className="content-block-55 text-align-center"> 
                       <img className="container-image-500 padding-bottom-25" src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS Developed a Telemetry and Data UX Strategy for StubHub.</p>
                    </div>
                </div>
            </section>     
            </div>
        </div>
        )
    }
}


export default marketing;