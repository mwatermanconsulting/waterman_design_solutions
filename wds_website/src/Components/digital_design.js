import React, { Component } from 'react' ;
import design from '../images/backgrounds/bg-digital-design.png';
import services from '../images/graphic-services.svg';
import together from '../images/photos/photo-why-wds.png';
import finding from '../images/photos/photo-documentation-s1.png';
import digital_design1 from '../images/photos/photo-digital-design-s1.png';
import digital_design2 from '../images/photos/photo-digital-design-s2.png';
import digital_design3 from '../images/photos/photo-digital-design-hcnrg.png';
import digital_design4 from '../images/photos/photo-digital-design-pc.png';
import digital_design5 from '../images/photos/photo-digital-design-kinetix.png';
import digital_design6 from '../images/photos/photo-digital-design-nirvana.png';
import finding_truth7 from '../images/photos/photo-finding-truth-s7.png';
import finding_truth8 from '../images/photos/photo-finding-truth-s8.png';

class digital_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Digital Design</div>
                <img className="flex-image-container" src={design}  alt="Why WDS background" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    "Good design is good business." - Thomas Watson Jr.,second president of IBM
                </div>
            </section>
            <section className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">Digital design keeps up with technology, visually communicating with the world in a truly powerful way </div>         
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={digital_design1}  alt="shaking hands" /> 
                </div>
            </section>
            <main className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                <section className="grid-2col-photo-content content-header margin-top-100">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            What is digital design                        
                        </div>
                        <div className="subtitle">
                            It's more than graphic design
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Digital designs include content such as multimedia presentations, websites, social media, emails, ads, 3D modeling, and animation. This skill set requires standard industry tools (e.g., Illustrator, Photoshop and Indesign) and languages featured in digital assets (e.g., HTML5, JavaScript and CSS3).</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={digital_design2}  alt="Stakeholder Interview" /> 
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="flex-layout-section-full">
                    <div className="grid-2col-text-center" >
                        <div className="grid-title subtitle content-text-24 margin-bottom-20">
                        Digital design services includes: 
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Editorial design
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Illustrations 
                        </div>
                        <div className="item content-text-18">
                            Icons and pictograms
                        </div>
                        <div className="item content-text-18">
                            Typography 
                        </div>
                        <div className="item- content-text-18">
                            Interface graphics and elements
                        </div>
                        <div className="item content-text-18">
                            Print advertisements
                        </div>
                        <div className="item content-text-18">
                            Big print items such as posters and billboards
                        </div>
                        <div className="item content-text-18">
                            Signs
                        </div>
                        <div className="item content-text-18">
                            Packaging etc.
                        </div>
                        <div className="item content-text-18">
                            Brochures
                        </div>

                    </div>
                </section>
              
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-gallery content-header">
                    <div className="gallery-1 container-image-dd">
                        <img className="container-image-dd" src={digital_design3}  alt="Your Business is Our Joy" /> 
                    </div>     
                
                    <div className="gallery-2 container-image-dd">
                        <img className="container-image-dd" src={digital_design4}  alt="Your Business is Our Joy" /> 
                    </div>     
    
                    <div className="gallery-3 container-image-dd ">
                        <img className="container-image-dd"  src={digital_design5}  alt="Stakeholder Interview" /> 
                    </div>     
              
                    <div className="container-image-dd">
                        <img className="container-image-dd" src={digital_design6}  alt="Review" /> 
                    </div>
                </div>
                <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-50 flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> Looking for a larger Agile Transformation Program? </p>
                        <p className="callout-text">  WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 
                    </div>
                </div>
            <div className="item-b container-image-block">
                <img className="flex-image-container" src={services}  alt="Your Business is Our Joy" /> 
            </div>
            </div>   
                

                </main>
            </div>
        )
    }
}

export default digital_design;