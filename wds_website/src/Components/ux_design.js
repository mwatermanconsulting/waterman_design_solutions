import React, { Component } from 'react' ;
import ux_bg from '../images/backgrounds/bg-ux.png';
import ux_s1 from '../images/photos/photo-ux-s1.png';
import ux_s2 from '../images/photos/photo-ux-s2.png';
import ux_s3 from '../images/photos/photo-ux-s3.png';
import ux_s4 from '../images/photos/photo-ux-s4.png';
import didyouknow from '../images/graphic-didyouknow.png';
import spotlight1 from '../images/photos/photo-ux-spotlight-stubhub.png';
import spotlight2 from '../images/photos/photo-ux-uncover-truth.png';

class ux_design extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <section className="flex-section-fixed-head flex-layout-center-center  image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                            UX Design
                    </div>
                        <img className="flex-image-container width-100" src={ux_bg}  alt="UX" /> 
                </section> 
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text"> 
                            The best customer experience starts with the Golden Rule — Treat customers how you would like to be treated.
                    </div>
                </section>
                <section className="grid-callout photo-content-color border-bottom-5" style={{height:'670px'}}> 
                    <div className="grid-callout-text grid-placeself-center content-block-75 content-header flex-layout-column">
                        <div className="callout-title text-white margin-top-15">
                             Empathetic Design
                        </div>
                        <div className="callout-text text-align-left text-white margin-top-15" >
                         At the foundation of WDS methodology is observation—watching consumers use products or services. But unlike in focus groups, usability laboratories, and other contexts of traditional market research, such observation is conducted in the customer’s own environment—in the course of normal, everyday routines. In such a context, researchers can gain access to a host of information that is not accessible through other observation-oriented research methods.
                        </div>
                    </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={ux_s1}  alt="UX" /> 
                    </div>
                </section>
           
                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100">
                        <div className="left flex-layout-center-center content-block-60">
                            <div className="title">
                                Real UX Involves Research
                            </div>
                            <div className="subtitle margin-top-15">
                                The Search for the Truth
                            </div>
                            <div className="margin-top-15">
                                <p className="content-text-18">
                                Sometimes, customers are so accustomed to current conditions that they don’t think to ask for a new solution, even if they have real needs that could be addressed. Habit tends to drag us to behave inconveniently; as consumers we create “work-arounds” that become familiar and we may forget that we are being forced to behave in a less-than-optimal fashion. This can make us incapable of telling UX designers what we really want. </p>

                                <div className="right callout-photo grid-placeself-center">
                                    <img className="container-photo-callout" src={ux_s2}  alt="UX" /> 
                                    <p className="caption">Photo by Frank on Unsplash</p>
                                </div>
                                
                                <p className="content-text-18">
                                For example, when asked about an editing function in a software package, one customer had no complaints until she sat down to use the program in front of the observer. Then she realized that her work was disrupted when the program did not automatically wrap text around graphics while she edited. Accustomed to working around the problem, she had not mentioned it in earlier interviews. When the observer notices this and points it out, it opens up an important issue that should be dealt with to make her life easier. All the little things add up as big time wasters that need to be eliminated.
                                </p>
                            </div>  
                            </div>
                    </section> 
                    
                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="left align-items-center flex-layout-column">
                        <div className="title content-block-60 ">
                                The Value of Empathy
                        </div>
                        <div className="subtitle content-block-60 margin-top-15">
                                Empathy Design Sparks Innovations 
                        </div>
                        <div className="content-block-60 margin-top-15">
                            <p className="content-text-18">
                                What circumstances prompt people to use your product or service? Do your customers turn to your offering when, and in the way, you expected?  If they don’t, there may be an opportunity for your company.</p> 
                            <p className="subtitle"> 
                                Old school custom service</p> <div className="right callout-photo grid-placeself-center">
                                <img className="container-photo-callout" src={ux_s3}  alt="old school customer service" />  
                                 <p className="caption">Photo by Mimi Thian on Unsplash</p>
                            </div>
                            <p className="content-text-18">Empathy is a very powerful selling tool. These days, it’s the new buzz word used by companies.       But empathy has always been at the heart of our services in User Experience and Customer Service. We are trained to use       empathy in our work: <br></br>“Walk in the user’s shoes.” <br></br>“See the problem as if you were experiencing it            yourself."<br></br>“Observe their daily routines.” <br></br>All of these mantras and behaviors are empathetic                 techniques that UX designers have honed by creating amazing, innovative products and services. </p>
                            <p className="content-text-18">
                                A set of techniques we call empathic design can help resolve those uncovered in the research phase. At its foundation is observation—watching consumers use products or services. But unlike in focus groups, usability laboratories, and other contexts of traditional market research, such observation is conducted in the customer’s own environment—in the course of normal, everyday routines. In such a context, researchers can gain access to a host of information that is not accessible through other observation-oriented research methods.</p>    
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>


                    <section className="content-header left align-items-center flex-layout-column">
                        <div className="flex-layout-center-center title content-block-60">
                            UX Design is the study of people</div>
                        <div className="subtitle content-block-60 margin-top-15">
                            Understanding is Key
                        </div>
                        <div className="content-block-60 margin-top-15">
                            <p className="content-text-18">
                                Understanding people as they go about completing a task is essential to a positive user experience. Every action of that task is an experience with your product or service. The experience can be positive or negative depending how much of the user was taken into account when designing the product, system and user interface. 
                        <div className="right callout-photo">
                            <img className="container-photo-callout margin-top-15" src={ux_s4}  alt="UX is the study of people" />
                            <p className="caption"> Photo by Jude Beck on Unsplash</p> 
                        </div> User expectations have changed over the years. Simplicity is expected. Many changes have happened in the last decade with eetail.  Amazon simplified the shopping experience down to one click.  </p> 
                               
                            <p className="content-text-18">
                                The user experience takes many shapes and forms in retail, product development, websites, and applications. The user has a goal to achieve and it's up to you to make it enjoyable and useful. It is critical to your customer's success to have a company that not only understand and empathizes with people, but understands cognitive psychology. Knowing how the unconscious brain makes decisions reveals solutions on a deep level. </p>
                       
                               
                    </div>
                </section>
                
 
                <section className="content-header flex-layout-center-center flex-layout-column">

                
                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                    <div className="flex-layout-center-center title content-block-60">
                        Our UX Team is the Difference
                    </div>
                    <div className="subtitle margin-top-15
                    flex-layout-center-center title content-block-60">
                        Real Designers Matter
                    </div>
                    <div className="content-block-60 margin-top-15">
                        <p className="content-text-18">We require our UX designers to be real designers. Real designers with an understanding of customer service. All our designers are friendly empathetic people with a passion to simplify the world, one project at a time. </p>
                    
                    </div>
                </section>

                <section className="content-header flex-layout-center-center flex-layout-column">
                
                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div
                >
                    <div className="flex-layout-center-center subtitle content-block-60">
                   The most effective way to understand our design solutions and methodology is to read a story about it
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
                <div className="thin-hr width-70 align-self-center margin-top-100"></div>
                </section>
            

                <section className="flex-layout-section-full" style={{marginLeft:'15%'}}> 
                    
                        <div className="grid-2col-text-center-50 align-self-center margin-top-100">
                            <div className="grid-title content-text-24 margin-bottom-20" style={{marginLeft:'15%'}}>
                                Full List of UX Design Services</div>
                            <div className="item content-text-18">
                                Interaction Design</div>
                            <div className="item content-text-18">
                                User Interface Design</div>
                            <div className="item content-text-18">
                                Visual Design</div>
                            <div className="item content-text-18">
                                Journey Maps</div>
                            <div className="item- content-text-18">
                                Personas and User Stories </div>
                            <div className="item content-text-18">
                                Concept Validation</div>
                            <div className="item content-text-18">
                                Wireframes</div>
                            <div className="item content-text-18">
                                User Workflows</div>
                            <div className="item content-text-18">
                            Design Systems and Style Guides</div>
                            <div className="item content-text-18">
                            Prototyping</div>
                            <div className="item content-text-18">
                            Information Architecture</div>
                            <div className="item content-text-18">
                                Usability studies</div>
                            <div className="item content-text-18">
                                Research</div>
                            <div className="item content-text-18">
                                Design Thinking </div>
                </div>
            </section>
                <div className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                    <div className="width-75 margin-top-50 align-center margin-bottom-50"> 
                       <a href="../communication_insights"> <img className="flex-image-container margin-bottom-50 " src={didyouknow}  alt="Ux" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="content-header text-white flex-layout-column flex-layout-center-center"> WDS has developed communication strategies for Motorola, Stubhub and OsiSoft.  <p><i><a href="../case_study_3">Learn More</a> </i></p> </p>
                    </div>
                    </div>
                </div> 
  
            </div> 
       
        )
    }
}

export default ux_design;