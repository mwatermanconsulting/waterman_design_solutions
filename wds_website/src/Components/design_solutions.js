import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import design from '../images/backgrounds/bg-design.svg';
import designer from '../images/photos/photo-design-s1.png';
import design3 from '../images/photos/photo-design-s3.png';
import design5 from '../images/photos/photo-design-s5.png';
import design_print from '../images/photos/photo-design-print.png';
import design_therapy from '../images/graphic-therapy.svg';

class design_solutions extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content=" Design determines success and understanding the user is paramount. WDS unites your business with  customers and brings an understanding to their needs and expectations. WDS unique design solutions have been successful for Motorola, StubHub, Pfizer and OsiSoft." />
                <meta name="keywords" content="case studies, stubhub business intelligence platform, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>Design Solutions</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/design_solutions" />
            </Helmet>
            <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container image-size-100" src={design}  alt="Design" /> 
                    </div>
                </div> 
            </div>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 red padding-15sm">
                    <div className="callout-text-lg"> 
                    “Good designs come from the heart, not from the brain” - Juan-Carlos Fernandez         
                </div>
            </section>

            <section className="grid-callout yellow-bg"> 
                <div className="grid-callout-text grid-placeself-center width-70 margin-top-15sm">
                    <p className="callout-text padding-sm"> 
                    Customers always look for the better experience. Meeting their expectations of intuitive, elegant and simple designs built around and for your users will earn their loyalty.</p>
                </div>
                <div className="grid-callout-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={designer}  alt="Customer Service" /> 
                </div>  
             </section>

            <div className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-center-center flex-layout-column"> 
                    <p className="title text-align-center margin-top-75 padding-sm">
                        "A consistent experience is a better experience.” <br></br>- Mark Eberman
                    </p>   
                    <p className="content-text-21 content-block-60 flex-layout-center-center margin-top-25 margin-bottom-50">
                        Design determines success and understanding the user is paramount. WDS unites your business with  customers and brings an understanding to their needs and expectations.</p>
                
               </div> 
            </div> 
           
            <div className="hr-line"></div>

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
                    <p className="content-text-18">
                        WDS websites are on the cutting edge. They were one of the first companies to build websites from UX research, and to provide responsive designs (<a className="greenlink" href="../case_study_1">Motorola</a>) and the first to develop enterprise-level CSS Flexbox solutions (<a className="greenlink" href="../case_study_4">OsiSoft</a>). </p>
                  
                    <div className="float-left">
                        <NavLink id="top" className='button-area no-decoration' type="button" value="learn more" to={'/website_design'}>
                            Learn More
                        </NavLink>
                    </div>
                  </div>
            </section>

            <div className="hr-line"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="subtitle content-block-60">
                    Graphic Design
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <p className="content-text-18"> 
                <div className="float-right">
                    <img className="photo-container margin-top-8per"  src={design_print}  alt="Graphic Design" /> 
                </div>  
                    Graphic design still has a place in today's digital technology. WDS  develops traditional design strategies that compliments  digital campaigns by designing graphics that are based on research and user personas. Designing for real people helps drive sales and user retention. WDS has extensive print experience, including magazines, brochures, business cards, trade show displays, corporate reports, etc. </p>
                <div className="float-left ">
                    <NavLink className='button-area no-decoration' value="learn more" type="button" to={'/graphic_design'}>
                        Learn More
                    </NavLink>  
                </div> 
            </div>
            </section> 

            <div className="hr-line"></div>

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
                <div className="float-left ">
                    <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/marketing'}>
                        Learn More
                    </NavLink>
            </div>   
            </div>
            </section>
          
            
            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5 margin-top-50 margin-top-50sm">
                <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-bottom-50 " > 
                    <div className="col2-text  grid-placeself-center ">
                        <div className="content-block text-align-center margin-top-15sm">
                            <p className="callout-text "> WDS CSS solutions relieves anxiety that most developers and engineers face when they see CSS work in their project requirements. </p>
                    </div>
                </div>
                <div className="col2-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={design_therapy}  alt="Ux is the best therapy!" /> 
                </div>
            </div>
        </section>
    </div>
</div>
        )
    }
}
export default design_solutions;