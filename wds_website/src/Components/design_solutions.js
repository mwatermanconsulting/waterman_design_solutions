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
                        <img className="flex-image-container container image-size-100" src={design}  alt="Design" /> 
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
                        <p className="content-text-21 content-block-75 align-self-center text-align-center margin-top-25 margin-bottom-100">

                         Design determines success and understanding the user is paramount. WDS unites your business with  customers and brings an understanding to their needs and expectations. Through design solutions your message will reach them.

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
                    <img className="photo-container" src={design5}  alt="Website Design" /> 
                </div>

                    WDS has over 20 years of experience designing websites. Empathetic designs and the ability to connect with users create a positive enjoyable experience, which is critical to new customer acquisition and retaining existing customers. </p>
            
                    <p className="content-text-18">WDS websites are always on the cutting edge. They were one of the first companies to build websites from UX research, provide responsive design (<a href="../case_study_1">Motorola</a>) and develop an enterprise-level CSS flex box solution (<a href="../case_study_4">OsiSoft</a>). </p>

                    <a href="website_design"><button onclick="location.href='./website_design';" type="button" value="Learn More" className="button margin-top-50 font-size-24">Learn More</button></a>

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
                    Graphic design always has a place in today's print and digital technology. WDS can develop a traditional design strategy that compliments your digital campaigns by designing graphics that are based on research and user personas. Designing for real people helps drive sales and user retention. WDS has extensive print experience, including magazines, brochures, business cards, trade show displays, corporate reports, etc. </p>


                    <a href="print_design"><button onclick="location.href='./print_design';" type="button" value="Learn More" className="button margin-top-50 font-size-24">Learn More</button></a>


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
                    The goal of WDS is to identify the right approach for your unique target audiences on social media. They plan, develop, and execute innovative social media marketing strategies that build a meaningful experience for your users. User research, ad optimization techniques and social media platforms are leveraged to connect your brand, products and/or services to the right people. By creating highly targeted advertisements on social media, you can reach an otherwise untapped resource for potential customers. </p>

                    <a href="marketing"><button onclick="location.href='./marketing';" type="button" value="Learn More" className="button margin-top-50 font-size-24">Learn More</button></a>

                    

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
                        WDS produces corporate videos that captivate audiences, inspire action and drive results for businesses and brands. Studies show that 74% of users watching explainer videos actually buy the product. It is one of the highest provider of a good return on investment, and works because of the individual approach and  increased confidence to buy online.</p> 


                        <a href="video_production"> <button onclick="location.href='./video_production';" type="button" value="Learn More" className="button margin-top-50 font-size-24">Learn More</button></a>

                </div>
                    
                           
                </section>
           

            <div className="thin-hr width-70 align-self-center margin-top-100"></div>            
            
        <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
            <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-bottom-50 " > 
                <div className="col2-text  grid-placeself-center ">
                    <div className="content-block text-align-center ">
                            <p className="callout-text "> WDS CSS solutions relieves anxiety that most developers and engineers face when they see CSS work in their project requirements. </p>

                            <a href="css_solutions"><button onclick="location.href='css_solutions';" type="button" value="Learn More" className="button margin-top-50font-size-24">Learn More</button></a>
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