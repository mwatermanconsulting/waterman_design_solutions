import React, { Component } from 'react' ;
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
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Marketing</div>
                <img className="flex-image-container width-100" src={bg_marketing}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                   We will make your customers feel uniquely valued.
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5 height-670" > 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left">
                       There has been a big shift in marketing. It use to be all about the product or application. Today's marketing  is now human centric. All about the user and values. WDS applies the same principles and methods to marketing strategies as we do for UX design.   </div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={marketing2}  alt="shaking hands" /> 
                </div>
            </div>
            <section className="content-header flex-layout-center-center flex-layout-column">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-50">
                        “Many companies have forgotten they sell to actual people. Humans care about the entire experience, not just the marketing or sales or service. To really win in the modern age, you must solve for humans.” - Dharmesh Shah, CTO & Co-Founder, HubSpot 
                </div>
                <div className="content-block-50 margin-top-50">
                <p className="content-text-24 text-align-center">
                        WDS understands people on a deep level. Our methodology gives a voice to the your users, your customers. Those people whose daily lives are effected by the use of your application or product. Your marketing campaign should be a reflect the vision of who you are as a business and tell that story. Every business has a story. We will define a marketing strategy based on research, data with a clear vision that reflects and embraces real human values.</p>
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Social Media Strategy
                        </div>
                        <div className="subtitle margin-top-15">
                            The Right Approach
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Our goal is to identify the right approach for your unique target audiences on social media. We plan, develop, and execute innovative social media marketing strategies that build a meaningful experience across all social media touchpoints.</p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block">
                        <img className="photo-container" src={marketing3}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Content Creation
                        </div>
                        <div className="subtitle margin-top-15">
                            Telling A Story
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18">
                            Social Media is all about connecting and engaging with your customers where they spend the most time. Our targeted approach to content shapes perceptions of our clients' brands, triggers an emotional response with their audience, and ultimately helps drive new lead generation.</p>

                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={marketing4}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Monitor and Document
                        </div>
                        <div className="subtitle margin-top-15">
                            We'll do all the work
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Our team will develop, manage, and monitor your social media account to increase brand awareness and drive follower engagement. We help position our clients as thought leaders by delivering engaging, relevant content to their individual target audiences.
                            </p>           
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={marketing5}  alt="Marketing" /> 
                    </div>    
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title content-block-75">
                            Social Media <br/> Marketing Strategies
                        </div>
                        <div className="subtitle margin-top-15">
                            It's always about the User
                        </div>
                    <div className="content-block-75 content-text-18 margin-top-15">
                        <p className="content-text-18"> 
                        Using user research and ad optimization techniques, we leverage your social media platforms to connect your brand, products, or services to the right people. By creating highly targeted advertisements on social media, we help our clients reach an otherwise untapped resource for potential customers.</p>
                    </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container margin-top-25" src={marketing6}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>
                </div>
                
                
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                    <div className="width-75 margin-top-50 align-center margin-bottom-50"> 
                       <a href="../communication_insights"> <img className="flex-image-container margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="callout-text-white padding text-align-center">WDS Developed a Telemetry and Data UX Strategy for StubHub.</p>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default marketing;