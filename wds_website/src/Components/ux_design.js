import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import ux_bg from '../images/backgrounds/bg-ux.png';
import ux_s1 from '../images/photos/photo-ux-s1.png';
import ux_s2 from '../images/photos/photo-ux-s2.png';
import ux_s3 from '../images/photos/photo-ux-s3.png';
import ux_s4 from '../images/photos/photo-ux-s4.png';
import didyouknow from '../images/graphic-didyouknow.svg';
import spotlight1 from '../images/photos/photo-ux-spotlight-stubhub.png';
import spotlight2 from '../images/photos/photo-ux-uncover-truth.png';

class ux_design extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="The team of WDS UX Designers are true designers that not only provide mock-ups, but high fidelity designs. Their UX designers also have an understanding of cognitive psychology and a background in customer service. All of their designers are friendly empathetic people with a passion to simplify the world, one project at a time. WDS UX designs includes product design for motorola, custom business intelligence platform for StubHub and OsiSoft. " />
                <meta charSet="utf-8" />
            <title>User Exeperience Design</title>
            <link rel="canonical" href="http://watermandesignsolutions.com/ux_design" />
            </Helmet>
            <div className="flex-layout-column"> 
                <section className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                            UX Design
                    </div>
                        <img className="flex-image-container width-100" src={ux_bg}  alt="UX Design" /> 
                </section> 
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text-white"> 
                            The best customer experience starts with the Golden Rule — treat customers how you would like to be treated.
                    </div>
                </section>

                   <section className="grid-callout photo-content-color border-bottom-5"> 
                <div className="grid-placeself-center content-block-80  margin-top-50sm flex-layout-column">
                    <div className="subtitle-center content-block-80 text-black"> 
                             Empathetic Design
                        </div>
                    <div className="callout-text padding-20 margin-top-25 text-align-left margin-left-2" >
                    The most meaningful insights for design strategy are developed with a behavior-based understanding of users. WDS UX strategists observe people in context - where they work, play or live - to understand their goals, their needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve. </div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout margin-left-15per margin-top-25sm" src={ux_s1}  alt="Finding Truth" /> 
                    </div>
            </section>
               
           
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                                Real UX Involves Research and Empathy
                        </div>
                        <div className="subtitle margin-top-10">
                                The Search for the Truth
                        </div>
                        <div className="margin-top-15">
                            <div className="float-right callout-photo grid-placeself-center">
                                 <img className="container-image-500" src={ux_s2}  alt="Research and Empathy" /> 
                            </div> 
                                <p className="content-text-18">
                            <p className="content-text-18">
                                Sometimes customers are so accustomed to current conditions that they don’t think to ask for a new solution, even if they have real needs that could be addressed. As consumers, we create workarounds that become a habit and we may forget that we are being forced to behave that way,
                            in a less-than-optimal fashion. This can make us incapable of telling UX designers what we really want. </p>
                                
                                For example, when asked about an editing function in a software package, one customer had no complaints until she sat down to use the program in front of the observer. Then she realized that her work was disrupted when the program did not automatically wrap text around graphics while she edited. Accustomed to working around the problem, she had not mentioned it in earlier interviews. When the observer notices this and points it out, it opens up an important issue that should be dealt with to make her life easier. All the little things add up as big time wasters that need to be eliminated.
                                </p>
                        </div>  
                            </div>
                    </section> 
                    
                    <div className="hr-line"></div>

                    <section className="float-left align-items-center flex-layout-column">
                        <div className="title content-block-60 ">
                                The Value of Empathy
                        </div>
                        <div className="subtitle content-block-60 margin-top-10">
                                Empathic Design Sparks Innovations 
                        </div>
                        <div className="content-block-60 margin-top-15">
                            <p className="content-text-18">
                                What circumstances prompt people to use your product or service? Do your customers turn to your offering in the way you expected?  If they don’t, there may be an opportunity for your company to reevaluate previous design decisions. </p> 
                            <p className="subtitle"> 
                                Old-school Customer Service</p> <div className="float-right callout-photo grid-placeself-center">
                                <img className="container-image-500" src={ux_s3}  alt="Old school customer service" />   
                            </div> 
                           
                            <p className="content-text-18">
                                Empathy is a very powerful selling tool, because it is human-centric. It’s the new buzz word, but empathy has always been at the heart of WDS designs.  <br></br>“Walk in the user’s shoes.” <br></br>“See the problem as if you were experiencing it yourself."<br></br>“Observe  daily routines.” <br></br>All of these mantras and behaviors are empathetic techniques that their UX designers have acquired through years of practice. It is part of their daily lives. 
                            </p>
                        </div>
                    </section>

                    <div className="hr-line"></div>

                    <section className="float-left align-items-center flex-layout-column">
                        <div className="title content-block-60">
                            UX Design is the Study of People</div>
                        <p className="subtitle content-block-60 margin-top-10">
                            Understanding is Key
                        </p>
                        <div className="content-block-60"> 
                        <div className="float-right callout-photo">
                            <img className="container-image-500 " src={ux_s4}  alt="UX is the study of people" />
                        </div> 
                            <p className="content-text-18">
                                Understanding people as they go about completing a task is essential to guaranteeing a positive user experience. Every action of that task is an experience with your product or service. The experience can be positive or negative, depending on how much of the user was taken into account when designing. 
                            </p>
                       
                        <p className="content-text-18">User expectations have changed over the years. Simplicity is expected.  </p> 
                               
                        <p className="content-text-18">
                                The user experience takes many shapes and forms: retail, product development, websites and applications. The user has a goal to achieve and it's up to you to make it enjoyable and simple. It is critical to your success to have a UX designer that empathizes with people and understands cognitive psychology. The the unconscious mind reveals solutions on a deeper level.
                        </p>     
                    </div>
                </section>

                <div className="hr-line"></div>
 
                <section className="float-left align-items-center flex-layout-column">
                        <div className="title-center content-block-60">
                        The WDS UX Team Makes the Difference
                    </div>
                    <div className="subtitle-center margin-top-10
                    flex-layout-center-center content-block-60">
                            Professional Designers Matter
                    </div>
                    <div className="content-block-60 margin-top-15">
                        <p className="content-text-18">
                        The team of WDS UX Designers are true designers that not only provide mock-ups, but high fidelity designs. Their UX designers also have an understanding of cognitive psychology and a background in customer service. All of their UX designers are friendly empathetic people with a passion to simplify the world, one project at a time. </p>
                    
                    </div>
                </section>

                <section className="content-header flex-layout-center-center flex-layout-column">
                
                <div className="hr-line"></div>
                    <div className="flex-layout-center-center subtitle content-block-60">
                        The most effective way to communicate their design solutions and UX methodology is through a story.
                    </div>
                </section>
                <section className="content-header flex-layout-center-center flex-layout-column margin-top-25">
                    <div className="grid-2col-callout flex-layout-center-center title content-block-60">
                   
                    <div className="callout1">
                    <a href= "../case_study_2"><img className="container-spotlight width-100"  src={spotlight1}  alt="Spotlight" /></a>
                    </div> 
                    <div className="callout2">
                    <a href= "../finding_truth"><img className="container-spotlight width-100" src={spotlight2}  alt="Spotlight" /></a>
                   </div> 
                </div>
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-center-center"> 
                        <div className="grid-2col-text-center-50 align-self-center margin-left-140" >
                            <div className="grid-title content-text-24 margin-bottom-20">
                                Full List of UX Design Services</div>
                            <div className=" content-text-18">
                                Interaction Design</div>
                            <div className=" content-text-18">
                                User Interface Design</div>
                            <div className=" content-text-18">
                                Visual Design</div>
                            <div className=" content-text-18">
                                Journey Maps</div>
                            <div className="- content-text-18">
                                Personas and User Stories </div>
                            <div className=" content-text-18">
                                Concept Validation</div>
                            <div className="item content-text-18">
                                Wireframes</div>
                            <div className=" content-text-18">
                                User Workflows</div>
                            <div className=" content-text-18">
                            Design Systems and Style Guides</div>
                            <div className=" content-text-18">
                            Prototyping</div>
                            <div className=" content-text-18">
                            Information Architecture</div>
                            <div className=" content-text-18">
                                Usability studies</div>
                            <div className=" content-text-18">
                                Research</div>
                            <div className=" content-text-18">
                                Design Thinking </div>
                </div>
            </section>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-75 margin-top-50sm  grey border-top-5">
                        <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                    <img className="container-image-500 margin-bottom-50 margin-top-50sm" src={didyouknow}  alt="Did You Know?" /> 
                    <div>
                        <p className="callout-text-white text-align-center">
                            WDS has developed communication strategies for Motorola, Stubhub and OsiSoft.</p>
                    </div>
                </div>
            </section>
        </div> 
    </div>
       
        )
    }
}

export default ux_design;