import React, { Component } from 'react';
import Helmet from 'react-helmet';
import digital_systems from '../images/backgrounds/bg-digital-systems.png';
import digital_systems1 from '../images/photos/photo-digital-systems-s1.png';
import digital_systems2 from '../images/photos/photo-digital-systems-s2.png';
import digital_systems3 from '../images/photos/photo-digital-systems-s3.png';
import digital_systems4 from '../images/photos/photo-digital-systems-s4.png';
import digital_systems6 from '../images/photos/photo-digital-systems-s6.png';
import digital_systems7 from '../images/photos/photo-digital-systems-s7.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class style_guide extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="A design system is a continuously evolving single source of truth that establishes rules of visual narration and interaction. It must be comprehensive, combining components, behaviors, and branding. It must also be flexible and scalable." />
                <meta charSet="utf-8" />
                <title>Design Solutions</title>
                <link rel="canonical" href="http://watermandesignsolutions/design_systems" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Design Systems
                    </div>
                        <img className="flex-image-container width-100" src={digital_systems}  alt="Design Systems" />     
                </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                “The more decisions you put off, and the longer you delay them, the more expensive they become.”
                — Craig Villamor
                </div>
            </section>
            <section className="flex-layout-section-full photo-content-color align-items-center height-670" > 
                <div className=" grid-2col-text-photo align-items-center margin-tb-100 width-70">
                <div className="content-block col2-text ">
                    <div className="callout-text text-align-left "> 
                    A design system is a continuously evolving single source of truth that establishes rules of visual narration and interaction. It must be comprehensive, combining components, behaviors, and branding. It must also be flexible and scalable.</div>
                </div>
                    <div className="col2-photo grid-placeself-right">
                        <img className="container-photo-callout" src={digital_systems1}  alt="Design Systems" /> 
                       
                    </div> 
            </div>
            </section>
    
            <section className="content-header flex-layout-center-center flex-layout-column">
                <div className="flex-layout-center-center title text-align-center content-block-60 margin-top-100">
                    If your product isn’t documented it doesn’t exist
                </div>
                <div className="content-block-55 margin-top-25">
                    <p className="content-text-24 text-align-center">
                    Style guides and design systems are there to make your lives easier, as simple as that. Among its main benefits, is that it keeps your designs consistent internally and they help your developers be more productive. </p>
                </div>
            </section> 
            
            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">

                <section className="float-left content-header align-items-center flex-layout-column">
                        <div className="title content-block-60 margin-left-6per">
                        Less Errors
                        </div>

                        <div className="subtitle margin-top-15">
                            Saving Time

                        </div>
                        <div className="content-block-60 content-text-18 margin-top-25 margin-left-6per" >
                            <p className="content-text-18"> 
                            Another benefit of using prebuilt and standardized component is less errors. There’s no chance of making a mistake when you’re copying from a master version. As long as the components in your design system are accurate, their use in your products will be accurate.
                            This is especially good news for developers, who have all the code snippets they need right at their fingertips.
                            </p>
                        <div className="float-right">
                            <img className="photo-container width-100" src={digital_systems2}  alt="Less Errors" /> 
                        </div>
                        <p className="content-text-18">What is the best accent color for call-to-action buttons? Simply setting out to make a design system forces your team to answer these questions, and make those answers easily accessible to everyone.</p> 
                            <p className="content-text-18">
                                Having this kind of master reference guide also helps avoid miscommunication. By offering a definitive protocol and standards for otherwise ambiguous elements, design systems keep everyone on the same page. No guesswork, assumptions, or “going rogue.” Design systems also do wonders for problematic developer handoffs. Technical specs are embedded in the document which creates less confusion about how to build something in the backend, or whether it can be built at all. Design systems give designers and developers a shared language.</p>           
                        </div>   
                </section>

                
                

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left content-header align-items-center flex-layout-column">
                        <div className="title content-block-60" style={{marginLeft:'-6%'}}>
                        Consistency across the board
                        </div>
                        <div className="subtitle content-block-60 margin-top-15 margin-left-6per">
                        Building familiarity
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-25 margin-left-6per">
                        <div className="float-right">
                            <img className="photo-container width-100" src={digital_systems3} alt="Style Guides" /> 
                        <p className="caption">Styleguide for OSIsoft </p> </div>
                            <p className="content-text-18"> 

                            Consistency is vital for a pleasant user’s experience, but it can be hard to come by with multiple designers working separately. Design systems allow easy access to universal versions of design assets (and their rules) to keep everyone on the same page, and ensure components remain consistent from one page or section to another.
                            That also holds true for different products. Brands looking to build their identity can use the exact same assets for all their products, giving everything a unified feel and rewarding loyal customers with familiar usability.</p>
                        </div>

                   
                    <div className="grid-right-ds align-self-baseline">
                        <img className="photo-container width-100" src={digital_systems3}  alt="Style Guides" /> 
                        <p className="caption">Styleguide for OSIsoft </p>
                    </div>      


                </section>
                
                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>
                
                <section className="float-left content-header align-items-center flex-layout-column">
                        <div className="title content-block-60 margin-left-6per">
                        Enhanced collaboration
                        </div>
                        <div className="subtitle content-block-60 margin-left-6per margin-top-15">
                            What makes sense for the user
                        </div>
                        <div className="content-block-60 content-text-18 margin-left-6per margin-top-25">
                            <p className="content-text-18"> 
                                During the initial creation of a design system — and its periodic updates — design systems get the right conversations started. Which logos go with different screen sizes? How do you want to handle the search function? 
                            </p>
                        <div className="float-right">
                            <img className="photo-container width-100" src={digital_systems4}  alt="Enhanced collaboration" /> 
                        </div>
                        <p  className="content-text-18">What is the best accent color for call-to-action buttons? Simply setting out to make a design system forces your team to answer these questions, and make those answers easily accessible to everyone.</p> 
                            <p className="content-text-18">
                                Having this kind of master reference guide also helps avoid miscommunication. By offering a definitive protocol and standards for otherwise ambiguous elements, design systems keep everyone on the same page. No guesswork, assumptions, or “going rogue.” Design systems also do wonders for problematic developer handoffs. Technical specs are embedded in the document which creates less confusion about how to build something in the backend, or whether it can be built at all. Design systems give designers and developers a shared language.</p>           
                        </div>   
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="grid-2things  flex-layout-center-center content-header margin-left-17">
                    <div className="thing1  flex-layout-section-full">
                        <div className="subtitle">
                            No Version Control Problems
                        </div>
                        <div className="content-text-18 content-block-60 margin-top-15">
                            <p className="content-text-18"> It’s understood that the design system is the official document: every time a change needs to be made, it’s made there. Whenever a bug gets fixed or a new design component is introduced, it’s recorded into the design system so that the next person to use it stays up-to-date automatically. WDS likes to call it a “living document” because it’s always updating.<br></br>
                            This format of using only one, agreed-upon master document also ensures that every update gets made to the same file. You never have to merge multiple files that were updated independently of each other by different team members. Whenever you pull from the design system, you know you’re always using the most recent version. This significantly reduces the margin for error.</p>   
                        </div>
                    </div>
                    <div className="thing2 flex-layout-section-full" style={{marginTop: '-4%'}}>
                        <div className="subtitle">
                        Data-driven UX
                        </div>
                        <div className="content-block-60  content-text-18 margin-top-15">
                            <p className="content-text-18">Successful UX design depends on customer feedback. Different user groups have different tastes and preferences, and they can be hard to keep track of, especially if your company is targeting more than one group.<br></br>
                            WDS sets design standards for a foundation, assimilating design with software development by fostering empathy for the software engineers. Asking questions and learning the language helps bridge the gap between the customer and developer.<br></br>
                            Design systems help keep your UX data organized by optimizing patterns. When updates occur communicating the updates to the design system so that every designer and developer knows it’s the new norm going forward.
                            </p>   
                        </div> 
                    </div>    
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="grid-2col-photo-content content-header width-70">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Pattern Library                        
                        </div>
                        <div className="subtitle margin-top-15">
                            Design System Layouts
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18">  A subclass in the design system, this is the set of design patterns for use across a company. A pattern library, documents all of these ‘patterns’ (also often known as modules) and defines how they behave, what they look like and how they are coded.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container width-100 border-2" src={digital_systems6}  alt="Pattern Library   " /> 
                    </div>     
                </section>  

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>     

                <section className="grid-2col-photo-content content-header">

                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            Style Guides                        
                        </div>
                        <div className="subtitle margin-top-15">
                            An excellent tool for standards
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Another subclass in the design system, this static documentation describes the design system itself: how products should look and feel, use cases for UI patterns, correct typographic scales, etc.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container width-100 border-2" src={digital_systems7}  alt="Style Guides " /> 
                    </div>     
                </section>       
            </div> 
            
        
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">
                              WDS specializes in SaaS design solutions and implementation.</p>
                    </div>
                </div>
            </section> 

        </div>
    </div>

        )
    }
}

export default style_guide;