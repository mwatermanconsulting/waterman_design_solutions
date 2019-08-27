import React, { Component } from 'react' ;
import design from '../images/backgrounds/bg-digital-design.png';
import services from '../images/graphic-services.svg';
import together from '../images/photos/photo-why-wds.png';
import finding from '../images/photos/photo-documentation-s1.png';
import digital_design1 from '../images/photos/photo-digital-design-s1.png';
import digital_design2 from '../images/photos/photo-digital-design-s2.png';
import digital_design3 from '../images/photos/photo-digital-design-wtt.png';
import digital_design4 from '../images/photos/photo-digital-design-nirvana.png';
import digital_design5 from '../images/photos/photo-digital-design-ww.png';
import digital_design6 from '../images/photos/photo-digital-design-nirvana.png';
import finding_truth7 from '../images/photos/photo-finding-truth-s7.png';
import finding_truth8 from '../images/photos/photo-finding-truth-s8.png';
import osi from '../images/photos/photo-osi-before-after.png'
import stubhub from '../images/photos/photo-digital-design-stubhub.png'


class digital_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Website Design</div>
                <img className="flex-image-container" src={design}  alt="Why WDS background" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    "Good design is good business." - Thomas Watson Jr.,second president of IBM
                </div>
            </section>
            <section className="flex-layout-section-full photo-content-color align-items-center height-670" > 
                <div className=" grid-2col-text-photo align-items-center margin-tb-100 width-70">
                <div className="content-block col2-text ">
                    <div className="callout-text text-align-left text-white">Digital design keeps up with technology, visually communicating with the world in a truly powerful way </div>         
                </div>
                <div className="col2-photo width-100 grid-placeself-center">
                    <img className="container-photo-callout" src={digital_design1}  alt="Website Design" /> 
                </div>
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

                <section className="grid-gallery grid-gap-20 content-header margin-bottom-50 width-70">
                    <div className="gallery-1 container-image-dd align-self-end">
                        <img className="container-image-dd" src={digital_design3}  alt="World Team Tennis" /> 
                        <p className="content-block-auto ">
                            World Team Tennis<br></br>
                            Industry: Sports<br></br>
                            Brochures
                        </p>
                    </div>     
                    <div className="container-image-dd gallery-3 align-self-end">
                        <img className="container-image-dd"  src={osi}  alt="Stakeholder Interview" /> 
                        <p className="content-block-auto ">
                        OSIsoft<br></br>
                        Industry: Gas and Oil<br></br>
                        Styleguide
                        </p>
                    </div>
                    <div className="gallery-4 container-image-dd align-self-end">
                    <iframe  src="https://www.youtube.com/embed/bLdxZCxFF0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; " allowfullscreen></iframe>
                    <p className="content-block-auto ">
                        Van Meis Design<br></br>
                        Industry: Construction<br></br>
                        Website intro
                        </p>
                    </div> 
                    <div className="gallery-5 container-image-dd align-self-end">
                        <img className="container-image-dd" src={digital_design4}  alt="Nirvana Pool and Spa" />
                        <p className="content-block-auto ">
                        Nirvana Pool and Spa<br></br>
                        Industry: Construction<br></br>
                        Website
                        </p> 
                    </div> 
                    <div className="gallery-2 container-image-dd align-self-end">
                        <img className="container-image-dd" src={stubhub}  alt="StubHub" />
                        <p className="content-block-auto ">
                        StubHub reporting tool<br></br>
                        Industry: eCommerce<br></br>
                        Data Visualization
                        </p> 
                    </div> 
                </section>
                
                <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-50 flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> 
                        Looking for a larger Agile Transformation Program? </p>
                        <p className="callout-text">  
                        WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 
                    </div>
                </div>
            <div className="item-b container-image-block">
                <img className="flex-image-container width-100" src={services}  alt="Your Business is Our Joy" /> 
            </div>
            </div>   
                

                </main>
            </div>
        )
    }
}

export default digital_design;