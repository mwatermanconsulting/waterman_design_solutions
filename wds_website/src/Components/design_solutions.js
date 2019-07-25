import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import design from '../images/backgrounds/bg-design.svg';
import designer from '../images/photos/photo-design-s1.png';
import design3 from '../images/photos/photo-design-s3.png';
import design4 from '../images/photos/photo-design-s4.png';
import design5 from '../images/photos/photo-design-s5.png';
import design_print from '../images/photos/photo-design-print.png';
import design_video from '../images/photos/photo-design-video.png';
import design_therapy from '../images/photos/photo-design-therapy.png';

class design_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-layout-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container container image-size-100" src={design}  alt="Why WDS background" /> 
                    </div>
                </div> 
            </div>
            <div className="flex-layout-section-full align-items-center red border-bottom-5" >
                    <div className="container-section-1-primary flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block width-75">
                                <div className=" text-white text-align-center">
                                “Good designs come from the heart, not from the brain” -Juan-Carlos Fernandez
                               </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex-layout-section-full align-items-center" >
                <div className="grid-callout yellow-bg"> 
                    <div className="grid-callout-text grid-placeself-center width-70">
                        <p className="callout-text "> Customers always look for the better experience. Meeting their expectations of intuitive, elegant and simple designs built around and for the user will earn their loyalty.</p>
                            
                        </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="flex-image-container width-100" src={designer}  alt="Customer look for better experience" /> 
                    </div>
                </div>
            </div>

            <div className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-column"> 
                    <p className="title text-align-center margin-top-100">
                        "A consistent experience is a better experience.” - Mark Eberman
                    </p>   
                        <p className="subtitle padding-50 text-align-center">
                        When design determines success, understanding the user is paramount.<br/> We design to connect people with what matters most to them. We design with a purpose.
                        </p>
                </div>
            </div>

            <div className="thin-hr align-self-center" style={{ width: '75%' }}></div>

            <div className="flex-layout-section-full margin-top-100 ">

            <section className="grid-2col-photo-content content-header">
                <div className="grid-left flex-layout-section-full">
                    <div className="subtitle">
                        Website Design
                    </div>
                    <div className="content-block-75 content-text-18 margin-top-25">
                        <p className="content-text-18"> WDS has been designing and developing human centric websites for close to 20 years. We always understood that a website is the hub of your marketing campaign. Creating a positive enjoyable experience on your website is critical to new customer acquisition or retaining customers by providing answers to questions. </p>
            
                        <p className="content-text-18">Our websites are always on the cutting edge. WDS was providing UX research to our clients before UX was a term. We were provided a responsive solution to Motorola 10 years ago. WDS was one of the first to develop a enterprise CSS flexbox solution. </p>

                        <p><i><a href="../website_design">Learn More</a> </i></p>
                    </div>
                </div>
                <div className="grid-right container-image-block">
                    <img className="photo-container" src={design5}  alt="Your Business is Our Joy" /> 
                </div>           
            </section>

                <div className="flex-layout-section align-self-center thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-right-content flex-layout-section-full margin-left-15per">
                        <div className="subtitle">
                            Graphic Design
                        </div>
                        <div className="content-block-75">
                            <p className="content-text-18"> From business cards to Robot magazines to Labels for SmithKline WDS understands that there is still a place for the traditional print materials</p>

                            <p><i><a href="../graphic_design">Learn More</a></i></p>
                        </div>
                    </div>
                        <div className="grid-left-photo container-image-block">
                            <img className="photo-container" src={design_print}  alt="Your Business is Our Joy" /> 
                        </div>     
                </section>

                <div className="flex-layout-section align-self-center thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

            <section className="grid-2col-photo-content content-header">
                <div className="grid-left flex-layout-section-full">
                    <div className="subtitle">
                            Social Marketing
                    </div>
                    <div className="content-block-75 content-text-18 margin-top-25">
                        <p className="content-text-18">
                            Our goal is to identify the right approach for your unique target audiences on social media. We plan, develop, and execute innovative social media marketing strategies that build a meaningful experience for your users. </p>

                        <p><i><a href="../marketing">Learn More</a> </i></p>
                    </div>
                </div>
                <div className="grid-right container-image-block">
                    <img className="photo-container" src={design3}  alt="Social Media Services" /> 
                </div>           
            </section>

                <div className="flex-layout-section align-self-center thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

            <section className="grid-2col-photo-content content-header">
                <div className="grid-right-content flex-layout-section-full margin-left-15per">
                    <div className="subtitle">
                         Video Production
                    </div>
                    <div className="content-block-75">
                       
                        <p className="content-text-18">WDS produce corporate videos that captivate audiences, inspire action & drive results for businesses & brands. Content that your audience will love. Content that gives your that is on message and reaches the customer on a deep level, whatever that may be.</p>      
                            <p><i><a href="../video_production">Learn More</a></i></p>
                        </div>
                    </div>
                        <div className="grid-left-photo container-image-block">
                            <img className="photo-container" src={design_video}  alt="Video" /> 
                        </div>     
                </section>
            </div>

            <div className="thin-hr width-70 align-self-center margin-top-100"></div>            
            
        <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
            <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-bottom-50 " > 
                <div className="col2-text  grid-placeself-center ">
                    <div className="content-block">
                            <p className="content-header"> Our CSS solutions relieves the anxiety that most developers and engineers face when they see CSS in their project requirements. </p>

                            <p className="margin-top-25"><i><a href="./css_solutions">Learn More</a></i></p>
                    </div>
                </div>
                <div className="col2-photo grid-placeself-center">
                        <img className="flex-image-container width-100" src={design_therapy}  alt="Ux is the best therapy!" /> 
                </div>
            </div>
        </section>
    </div>
        )
    }
}
export default design_solutions;