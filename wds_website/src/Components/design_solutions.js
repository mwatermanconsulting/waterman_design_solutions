import React, { Component } from 'react' ;
import { NavLink } from 'react-router-dom';
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
                        <div className="content-header align-items-center flex-layout-column">    
                            <div className="content-block width-75">
                                <div className=" text-white  text-align-center">
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
                        <img className="flex-image-container width-100" src={designer}  alt="Customers look for better experience" /> 
                    </div>
                </div>
            </div>

            <div className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-column"> 
                    <p className="title text-align-center margin-top-100">
                        "A consistent experience is a better experience.” - Mark Eberman
                    </p>   
                        <p className="content-text-21 content-block-75 align-self-center text-align-center margin-top-25 ">
                        <button onclick="location.href='./services';" type="button" value="Learn More" className="button font-size-18">Learn More</button>
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
                    WDS has over 20 years  experience designing websites. Empathetic designs and the ability to connect with users create a positive enjoyable experience, which is critical to new customer acquisition and retaining existing customers. </p>
            
                    <p className="content-text-18">WDS websites are always on the cutting edge. They were one of the first companies to build websites from UX research and provide a responsive design. An example of a responsive design solution was for Motorola, developing an enterprise level CSS flexbox solution. </p>

                    <button action="./website_design" method="get" target="_blank" type="button" value="Learn More" className="button font-size-18">Learn More</button> 

                    <NavLink className='mdl-button' type="button" to={'/website_design'}>
                    Button
                    </NavLink>
                    
                    <input type="button" onclick="window.location.href = 'https://www.w3docs.com';" value="w3docs"/>
                    <button onclick="window.location.href = 'https://w3docs.com';">Click Here</button>
           
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
                    <img className="photo-container margin-top-8per"  src={design_print}  alt="Graphic Design" /> 
                </div>  
                    Print still has a place in today's digital world. WDS can develop a traditional design strategy that compliments your digital campaigns. By designing graphics that are based on research and user personas. Designing for real people helps drive sales and user retention. We have extensive print experience. Over the years we have designed magazine's, brochures, biz cards, trade show displays, corporate reports, etc. </p>

                    <button onclick="location.href='./print_design';" type="button" value="Learn More" className="button font-size-18">Learn More</button>
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

                    <button onclick="location.href='./marketing';" type="button" value="Learn More" className="button font-size-18">Learn More</button>
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
                    <p className="content-text-18 margin-top-15">
                        WDS produces corporate videos that captivate audiences, inspire action & drive results for businesses & brands. Creating Content that your audience will love. Content that is on message and reaches the customer on a deep level. Video content is engaging and ignites emotions. YouTubers are the most powerful social media figures promoting brands. Effective marketing videos have a conversational tone. It creates an individual approach and more confidence to buy online.</p> 

                        <button onclick="location.href='./video_production';" type="button" value="Learn More" className="button font-size-18">Learn More</button>
                </div>
                    
                           
                </section>
           

            <div className="thin-hr width-70 align-self-center margin-top-100"></div>            
            
        <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
            <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-bottom-50 " > 
                <div className="col2-text  grid-placeself-center ">
                    <div className="content-block">
                            <p className="content-header"> Our CSS solutions relieves the anxiety that most developers and engineers face when they see CSS in their project requirements. </p>

                            <p className="margin-top-25"><i><a  href="./css_solutions" style={{color: '#000000'}}>Learn More</a></i></p>
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