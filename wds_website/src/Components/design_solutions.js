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
                        <p className="callout-text text-black"> Customers always look for the better experience. Meeting their expectations of intuitive, elegant and simple designs built around and for the user will earn their loyalty.</p>
                            
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
                        <p className="subtitle text-align-center">
                        Consistency across products, applications, marketing or any users touchpoints shows <br/> your customers you care, by creating a familiar experience for them.
                        </p>
                </div>
            </div>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="subtitle content-block-60">
                    Website Design
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <p className="content-text-18"> 
                <div className="float-right">
                    <img className="photo-container" src={design5}  alt="Your Business is Our Joy" /> 
                </div>
                WDS has been designing and developing human centric websites for close to 20 years. We always understood that a website is the hub of your marketing campaign. Creating a positive enjoyable experience on your website is critical to new customer acquisition or retaining customers by providing answers to questions. </p>
            
                    <p className="content-text-18">Our websites are always on the cutting edge. WDS was providing UX research to our clients before UX was a term. We were provided a responsive solution to Motorola 10 years ago. WDS was one of the first to develop a enterprise CSS flexbox solution. </p>

                    <p><i><a href="../website_design">Learn More...</a> </i></p>
                </div>  
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="subtitle content-block-60">
                    Graphic Design
                </div>
                <div className="content-block-60 margin-top-15">
                    <p className="content-text-18"> 
                <div className="float-right">
                    <img className="photo-container" style={{marginTop:'-8%'}} src={design_print}  alt="Graphic Design" /> 
                </div>  
                    Print still has a place in today's digital world. WDS can develop a graphic design strategies that compliments your digital campaigns. By designing graphics that are based on research and user personas that drive sales and helps user retention. We have extensive print experience. Over the years we have designed magazine's, brochures, biz cards, trade show displays, corporate reports </p>

                    <p><i><a href="../graphic_design">Learn More...</a></i></p>
                </div>
            </section>   

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="subtitle content-block-60">
                    Social Media Marketing
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <p className="content-text-18"> 
                <div className="float-right" style={{marginTop:'-.5%'}}>
                    <img className="photo-container" src={design3}  alt="Social Media Services" /> 
                </div>
                    Our goal is to identify the right approach for your unique target audiences on social media. We plan, develop, and execute innovative social media marketing strategies that build a meaningful experience for your users. Using user research and ad optimization techniques, we leverage your social media platforms to connect your brand, products, or services to the right people. By creating highly targeted advertisements on social media, we help our clients reach an otherwise untapped resource for potential customers. </p>

                    <p><i><a href="../marketing">Learn More...</a> </i></p>
                </div>    
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="subtitle content-block-60">
                     Video Production
                </div>
                <div className="content-block-60">
                    <div className="float-right">
                        <img className="photo-container" src={design_video}  alt="Video" /> 
                    </div>  
                    <p className="content-text-18 margin-top-15">WDS produce corporate videos that captivate audiences, inspire action & drive results for businesses & brands. Content that your audience will love. Content that gives your that is on message and reaches the customer on a deep level. Video content is engaging and ignites emotions. YouTubers are the most powerful social media figures promoting brands. Effective marketing videos have a conversational tone. It creates an individual approach and more confidence to buy online.</p> 

                    <p><i><a href="../video_production">Learn More...</a></i></p>
                </div>
                    
                           
                </section>
           

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