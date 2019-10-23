import React, { Component } from 'react';
import Helmet from 'react-helmet';
import design_systems from '../images/backgrounds/bg-design-systems.png';
import design_systems1 from '../images/photos/photo-design-systems-s1.png';
import design_systems2 from '../images/photos/photo-design-systems-s2.png';
import design_systems3 from '../images/photos/photo-design-systems-s3.png';
import design_systems6 from '../images/photos/photo-design-systems-s6.png';
import design_systems7 from '../images/photos/photo-design-systems-s7.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class style_guide extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="A design system is a continuously evolving single source of truth that establishes rules of visual narration and interaction. It must be comprehensive by combining components, behaviors, and branding. It must also be flexible and scalable." />
                <meta charSet="utf-8" />
                <title>Design Systems</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/design_systems" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                        Design Systems
                </div>
                    <img className="flex-image-container width-100" src={design_systems}  alt="Design Systems" />     
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                “The more decisions you put off, and the longer you delay them, the more expensive they become.”
                - Craig Villamor
                </div>
            </section>

             <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75 flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15 margin-left-2" >
                    A design system is a continuously evolving single source of truth that establishes rules of visual narration and interaction. It must be comprehensive, combining components, behaviors, and branding. It must also be flexible and scalable.</div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout margin-left-15per margin-top-25sm" src={design_systems1}  alt="Design Systems" /> 
                    </div>
            </section>

            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <p className="header-title-sm-center margin-top-75 content-block-75">
                    If your product isn’t documented it doesn’t exist</p>
                <p className="subtitle-center text-align-center content-block-60  margin-top-10">
                    Style guides and design systems are there to make your life easier. It keeps  designs consistent internally and help developers be more productive </p>
            </section>
            
            <div className="hr-line"></div>

            <div className="flex-layout-section-full flex-layout-column align-self-center">
                <section className="float-left align-self-center flex-layout-center-center content-block-60">
                        <div className="title">
                            Less Errors
                        </div>

                        <div className="subtitle margin-top-10">
                            Saving Time

                        </div>
                        <div className="content-text-18 margin-top-15" >
                            <div className="float-right">
                            <img className="photo-container" src={design_systems2}  alt="Less Errors" /> 
                        </div>
                            <p className="content-text-18"> 
                            Another benefit of using prebuilt and standardized component is less errors. There’s no chance of making a mistake when copying from a master version. As long as the components in the design system are accurate, their use in the products will be accurate.
                            This is especially good news for developers, who have all the code snippets they need right at their fingertips.
                            </p>
                        
                        <p className="content-text-18">What is the best accent color for call-to-action buttons? Simply setting out to make a design system forces your team to answer these questions, and make those answers easily accessible to everyone.</p> 
                            <p className="content-text-18">
                                Having this kind of master reference guide also helps avoid miscommunication. By offering a definitive protocol and standards for otherwise ambiguous elements, design systems keep everyone on the same page. No guesswork, assumptions, or “going rogue.” Design systems also do wonders for problematic developer handoffs. Technical specs are embedded in the document which creates less confusion about how to build something in the backend, or whether it can be built at all. Design systems give designers and developers a shared language.</p>           
                        </div>   
                </section>

                <div className="hr-line"></div>

                <section className="float-left content-header align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Consistency Across the Board
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                        Building Familiarity
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                   
                            <p className="content-text-18">  <div className="float-right">
                        <img className="photo-container width-100" src={design_systems3} alt="Style Guides" /> 
                            <p className="caption">Styleguide for OsiSoft </p> </div>

                            Consistency is vital for a pleasant user experience, but it can be hard to come by with multiple designers working separately. Design systems allow easy access to universal versions of design assets (and their rules) to keep everyone on the same page and ensure consistency from one page or section to another.
                            That also holds true for different products. Brands looking to build their identity can use the exact same assets for all their products, giving everything a unified feel and rewarding loyal customers with familiar usability.</p>
                        </div>
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-justified-sb flex-layout-row content-block-60">
                    <div className="flex-layout-section-full">
                        <div className="header-title-sm-center">
                            No Version Control Problems
                        </div>
                        <div className="content-text-18 margin-top-15">
                            <p className="content-text-18"> It’s understood that the design system is the official document: every time a change needs to be made, it’s made there. Whenever a bug gets fixed or a new design component is introduced, it’s recorded into the design system so that the next person to use it stays up-to-date automatically. WDS likes to call it a “living document” because it’s always updating.<br></br>
                            This format of using only one, agreed-upon master document also ensures that every update gets made to the same file. You never have to merge multiple files that were updated independently of each other by different team members. Whenever you pull from the design system, you know you’re always using the most recent version. This significantly reduces the margin for error.</p>   
                        </div>
                    </div>

                    <div className="hr-line"></div>

                    <div className="flex-layout-section-full margin-top-25">
                        <div className="header-title-sm-center">
                            Data-driven UX
                        </div>
                        <div className="  content-text-18 margin-top-15">
                            <p className="content-text-18">Successful UX design depends on customer feedback. Different user groups have different tastes and preferences, and they can be hard to keep track of, especially if your company is targeting more than one group.<br></br>
                            WDS sets design standards for a foundation, assimilating design with software development by fostering empathy for the software engineers. Asking questions and learning the language helps bridge the gap between the customer and developer.<br></br>
                            Design systems help keep UX data organized by optimizing patterns. When updates occur, communicating the updates to the design system ensures that every designer and developer knows it’s the new norm going forward.
                            </p>   
                        </div> 
                    </div>    
                </section>

                <div className="hr-line"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Pattern Library                        
                    </div>
                    <div className="subtitle margin-top-10 content-block-60">
                        Design System Layouts
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15"> 
                        <p className="content-text-18"> 
                        <div className="float-right">
                        <img className="photo-container width-100 border-2" src={design_systems6}  alt="Pattern Library   " /> 
                        </div>  
                        A subclass in the design system, this is the set of design patterns for use across a company. A pattern library documents all of these ‘patterns’ (also often known as modules) and defines how they behave, what they look like and how they are coded.</p>
                    </div>  
                </section>  

                <div className="hr-line"></div>    

                <section className="float-left align-items-center flex-layout-section-full margin-bottom-50 content-header">
                    <div className="title content-block-60">
                        Style Guides                        
                    </div>
                    <div className="subtitle margin-top-10 content-block-60">
                        An Excellent Tool for Standards
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <p className="content-text-18"> <div className="float-right">
                        <img className="photo-container border-2" src={design_systems7}  alt="Style Guides " /> 
                    </div>
                        Another subclass in the design system, this static documentation describes the design system itself: how products should look and feel, use cases for UI patterns, correct typographic scales, etc.</p>
                    </div>   
                </section>       
            </div> 

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center padding-top-50 grey border-top-5">
                <div className="content-block-55 text-align-center"> 
                       <img className="photo-container padding-bottom-25" src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center"> WDS specializes in SaaS design solutions and implementation</p>
                    </div>
                </div>
            </section>     
        </div>
    </div>

        )
    }
}

export default style_guide;