import React, { Component } from 'react';
import Helmet from 'react-helmet';
import bg_marketing from '../images/backgrounds/bg-documentation.png';
import finding from '../images/photos/photo-documentation-s1.png';
import marketing2 from '../images/photos/photo-marketing-s2.png';
import marketing3 from '../images/photos/photo-marketing-s3.png';
import marketing4 from '../images/photos/photo-marketing-s4.png';
import marketing5 from '../images/photos/photo-marketing-s5.png';

import marketing6 from '../images/photos/photo-marketing-s6.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class marketing extends Component {
    render () {
        return(
            <div>
                <Helmet>
                    <meta name="description" content="WDS understands people on a deep level. Their methodology gives a voice to the your users, your customers. Those people whose daily lives are effected by the use of your application or product. Your marketing campaign should be a reflect the vision of who you are as a business and tell that story. Every business has a story. We will define a marketing strategy based on research and data with a clear vision that reflects and embraces real human values." />
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
                <div className="grid-placeself-center content-block-75   flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15" >
                        There has been a big shift in marketing. It use to be all about the product or application, but is now human-centric. WDS uses UX research to set up marketing strategies. 
                        </div>      
                    </div>
                    <div className="grid-callout-photo grid-placeself-center margin-tb-100">
                        <img className="container-photo-callout" src={marketing2}  alt="Marketing" /> 
                </div>
                
            </section>

    <div className="flex-layout-section-full flex-layout-column margin-top-25 align-self-center content-block-75">      
            
            <section className="content-header flex-layout-center-center flex-layout-column">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-70">
                        “Many companies have forgotten they sell to actual people. Humans care about the entire experience, not just the marketing or sales or service. To really win in the modern age, you must solve for humans.” - Dharmesh Shah, CTO  Co-Founder, HubSpot 
                </div>
                <div className="content-block-50 margin-top-50">
                <p className="content-text-24 text-align-center">
                        WDS understands people on a deep level, with a methodology that gives a voice to the users, your customers, whose daily lives are effected by the use of your application or product. <br></br>
                        
                        Every business has a story, and can be told through a marketing strategy based on research and data, with a clear vision that reflects and embraces real human values.</p>
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title text-grey ">
                        Social Media Strategy  
                        </div>
                        <div className="subtitle margin-top-15">
                        The Right Approach
                        </div>
                        <div className="content-text-18 margin-top-15">
                            <p className="content-text-18 margin-right-5"> 
                            The WDS goal is to identify the right approach for your unique target audiences on social media by planning, developing, and executing innovative social media marketing strategies. This builds a meaningful experience across all social media touch points.  </p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block margin-top-25">
                        <img className=" margin-top-15 image-size-100 " src={marketing3}  alt="Social Media Strategy" /> 
                    </div>     
                </section>

            <div className="flex-layout-section thin-hr hrline-spacing width-70"> </div>

            <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title text-grey ">
                        Content Creation   
                        </div>
                        <div className="subtitle margin-top-15">
                        Telling A Story
                        </div>
                        <div className="content-text-18 margin-top-15">
                            <p className="content-text-18 margin-right-5"> 
                            Social Media is all about connecting and engaging with your customers where they spend the most time. WDS's targeted approach to content shapes perceptions of clients' brands, triggers an emotional response with their audience, and ultimately helps drive new lead generation. </p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block margin-top-25">
                        <img className=" margin-top-15 image-size-100 " src={marketing4}  alt="Content Creation" /> 
                    </div>     
                </section>

            <div className="flex-layout-section thin-hr hrline-spacing width-70"> </div>

            <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title text-grey ">
                        Monitor and Document  
                        </div>
                        <div className="subtitle margin-top-15">
                        WDS does all the work
                        </div>
                        <div className="content-text-18 margin-top-15">
                            <p className="content-text-18 margin-right-5"> 
                            The WDS team will develop, manage, and monitor your social media account to increase brand awareness and drive follower engagement.  Clients are considered as thought leaders in the process of delivering engaging, relevant content.</p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block margin-top-25">
                        <img className=" margin-top-15 image-size-100" src={marketing5}  alt="Monitor and Document" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr hrline-spacing width-70">
                </div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title text-grey ">
                        Social Media Marketing Strategies  
                        </div>
                        <div className="subtitle margin-top-15">
                        It's always about the User
                        </div>
                        <div className="content-text-18 margin-top-15">
                            <p className="content-text-18 margin-right-5"> 
                            Using user research and ad optimization techniques, wds leverages your social media platforms to connect your brand, products, or services to the right people. By creating highly targeted advertisements on social media, we help our clients reach an otherwise untapped resource for potential customers.</p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block margin-top-25">
                        <img className=" margin-top-15 image-size-100" src={marketing6}  alt="Social Media Marketing Strategies" /> 
                    </div>     
                </section>
               </div> 

               

                
                
               <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS Developed a Telemetry and Data UX Strategy for StubHub.<p className="text-align-center margin-top-25" ></p>  </p>
                    </div>
                </div>
            </section>     
            </div>
        </div>
        )
    }
}


export default marketing;