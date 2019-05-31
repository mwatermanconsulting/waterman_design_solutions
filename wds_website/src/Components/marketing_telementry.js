import React, { Component } from 'react' ;
import analysis from '../images/backgrounds/bg-analysis.png';
import relief from '../images/uxdesignrelief.png';
import together from '../images/photos/photo-why-wds.png';
import analytics1 from '../images/photos/photo-analytics-s1.png';
import analytics2 from '../images/photos/photo-analytics-s2.png';
import analytics3 from '../images/photos/photo-analytics-s3.png';
import analytics4 from '../images/photos/photo-analytics-s4.png';

class marketing_telemetry extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Marketing and Analytics</div>
                <img className="flex-image-container" src={analysis}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    Up to 73% of company data goes unused for their analytics.
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="item-a-nb content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">“Not knowing the best way to read, understand, and apply data can actually be costing your business. Those costs could take the form of lost revenue opportunities, lower efficiency and productivity, quality issues, and more.” - jeff-barrett</div>
                             
                </div>
                <div className="grid-item-b container-image-block">
                    <img className="container-photo-callout" src={analytics3}  alt="shaking hands" /> 
                </div>
            </div>
    
            <div className="content-header flex-layout-center-center flex-layout-column margin-top-200 ">
                <div className="flex-layout-center-center title text-align-center content-block-60">
                    The Costs of Misused Data 
                </div>
                <div className="content-block-55 margin-top-50">
                    <p className="content-text-24">One of the costly areas that companies should be targeting is downtime, which can happen suddenly. Data can predict downtime, so that you can plan and increase productivity. Considering the high volumes of complex data their equipment is pumping out, and trying to locate and predict anomalies that would lead to downtime may seem impossible. Determining what anomalies to look for is the first challenge to overcome, and from there, you would need to know where to look within the data.</p>
                    <p className="content-text-24 text-align-center">Fortunately, there are ways to recognize these mistakes and leverage technology for increased financial returns. </p>
                </div>
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                
                <div className="flex-layout-section thin-hr margin-top-200 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="subtitle">
                            Data & Analytics
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Developing measurement models and generating insights from experiences requires deep insights into all available data across the organization. From sales and marketing to customer service, the data journey illuminates the critical touchpoints across the customer experience and creates opportunities to innovate in an agile way without disrupting the business.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={analytics2}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header flex-layout-center-center">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="subtitle">
                            Social Strategy
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-25">
                            <p className="content-text-18"> Social media permeates every aspect of business. From empowering employees to evangelize the brand to enabling the salesforce to engage and sell effectively in the social space, social media has moved out of the silo and into everyday processes. Our Social and Influence experts understand the technology, processes, training and governance needed to develop organization-wide strategies that support Social Listening, Social Care, Social Selling, and Social Marketing without bifurcating the customer experience.</p>

                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={analytics3}  alt="Review" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="subtitle">
                            Marketing Strategy

                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> Technology is dramatically changing the way marketers work. With thousands of software solutions at our disposal to assist with automation, personalization and optimization, knowing where to start or how to get the most out of your investments is challenging.</p> 

                            <p className="content-text-18">Whether you choose a Best-in-Class or All-in-One stack, our team will help you make the right investments and capture value.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={analytics4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>

                <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-why flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> Looking for a larger Agile Transformation Program? </p>
                        <p className="callout-text">  WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 
                    </div>
                </div>
            <div className="item-b container-image-block">
                <img className="flex-image-container" src={relief}  alt="Your Business is Our Joy" /> 
            </div>
            </div>   
                

                </div>
            </div>
        )
    }
}

export default marketing_telemetry;