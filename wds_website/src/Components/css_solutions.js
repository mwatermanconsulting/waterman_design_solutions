import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import CSS from '../images/backgrounds/bg-css.png';
import didyouknow from '../images/graphic-didyouknow.svg';
import casscade from '../images/photos/photo-css-s1.png';
import css3 from '../images/photos/photo-css-s3.png';
import css4 from '../images/photos/photo-css-s4.png';
import css5 from '../images/photos/photo-css-s5.png';
import css2 from '../images/photos/photo-css-s2.png';
import cheer from '../images/graphic-css-cheer.svg';
import itcss from '../images/ITCSS.png';


class css_solutions extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="WDS CSS specialists deliver custom CSS solutions as npm packages or through github. Packages include a developer build kit with custom CSS, Sass or Less files, HTML files and documentation. WDS can refactor your current CSS or develop a customizable CSS solution that will scale as the project matures. " />
                <meta charSet="utf-8" />
                <title>CSS Solutions</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/css_solutions" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        CSS Solutions
                    </div>
                        <img className="flex-image-container width-100" src={CSS}  alt="CSS Solutions" />     
                </section>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    WDS CSS Solutions reduces time spent on CSS files by 80%

                </div>
            </div>

            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75 flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15 margin-left-2 margin-left-3" >
                    Our CSS services include CSS development, strategy, CSS system implementation, mentoring, documentation, and best of practice documentation </div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout margin-left-15per margin-top-25sm" src={casscade}  alt="Finding Truth" /> 
                    </div>
            </section>

            <section className="content-header flex-layout-center-center flex-layout-column margin-top-75">
                <div className="header-title-center text-align-center content-block-60">
                        WDS develops lean scalable CSS solutions, saving your business time and money, while keeping your developers happy
                        
                </div>
                <div className="content-block-60">
                    <p className="content-text-24 text-align-center">
                        <img className="photo-container-cheer" src={cheer}  alt="Happy developers" /> <br></br>
                        WDS solutions are based on empathy and  observed experiences working with developers. CSS knowledge and expertise is one of the main reasons they get hired. They are scalable and customizable to your business requirements. </p>
                </div>
                    <NavLink className='button-area no-decoration margin-top-15 margin-bottom-25sm' type="button" to={'/case_study_4'}>
                       <strong>Case Study</strong>
                    </NavLink>
            </section>

        <div className="hr-line"></div>


    <div className="flex-layout-section-full flex-layout-column align-self-center"> 

    <section className="float-left flex-layout-column flex-layout-section-full  flex-layout-center-center">
                    <div className="title content-block-60">
                        Experience Matters
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                        Responsive Design Solutions
                    </div>
                    <div className="margin-top-15 content-block-60"> <div className="float-right callout-photo grid-placeself-center">
                                <img className="photo-container" src={css2}  alt="Strategy and Insight" /> 
                        </div>  
                        <p className="content-text-18">
                        Responsive web design is the approach that  design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. WDS has made countless responsive websites and applications, being one of the first companies to build a responsive enterprise application using Flexbox. WDS can mentor developers on responsive design best practices, or provide a responsive design <a className="greenlink" href="../ui_design" >build kit.</a> </p>            
                    </div>
                </section>
        <div className="hr-line"></div>

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-60">
                <div className="title">
                    Organize and Simplify
                </div>
            <div className="subtitle margin-top-10">
                    Strategy to Organize and Reduce Specificity Issues
            </div> 
            
                <p className="content-text-18 margin-top-15"><div className="float-right callout-photo ">
                <img className="photo-container margin-top-15sm" src={itcss}  alt="Prototypes" /> 
            </div>  
                    Taming the specificity beast used to be difficult. WDS CSS strategy almost eliminates the specificity problems and the need for your developers to write CSS. The WDS advantage is the  experience of working with developers by interviewing and observing them working with CSS.
                </p>                
            </div>  
           
        </section>

        <div className="hr-line"></div>

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-60">
                <div className="title">
                Modular CSS
                </div>
            <div className="subtitle margin-top-10">
                Reusable CSS
            </div> 
           
            <div className="margin-top-15  margin-top-15"> 
            <p className="content-text-18"> 
                <div className="float-right callout-photo margin-top-15sm">
                    <img className="photo-container" src={css3}  alt="Prototypes" /> 
                </div>
                CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable the use of logic in CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and "code bloat," by creating reusable code snippets that ensure backward compatibility. </p>              
            </div>  
            </div>
        </section>

        <div className="hr-line"></div>

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-60">
                <div className="title">
                    CSS Solutions Package
                </div> 
                
            <div className="subtitle margin-top-10">
                    NPM and GitHub
            </div> 
           
            <div className="margin-top-15 content-text-18">
                <p className="content-text-18">
                    <div className="float-right callout-photo margin-top-15 margin-top-15sm">
                        <img className="photo-container" src={css4}  alt="Prototypes" /> 
                    </div>   
                    The WDS CSS specialists deliver custom CSS solutions as npm packages or through github. The package includes a developer build kit with the custom CSS, Sass or Less files, HTML files and documentation. WDS can refactor your current CSS or develop a customizable CSS solution that will scale as the project matures. They will always keep your team up to date on new releases and make sure all the current version are available.  </p>

            </div>  
            </div>
        </section> 


        <div className="hr-line"></div> 

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-60">
                <div className="title">
                    WDS Transforms your CSS 
                </div>
            <div className="subtitle margin-top-10">
                    Building Scalable Enterprise Solutions
            </div> 
            
            <div className="margin-top-15">  
                <p className="content-text-18">
                    <div className="float-right callout-photo margin-top-15sm">
                        <img className="photo-container" src={css5}  alt="Prototypes" /> 
                    </div> 
                    The best way to communicate a design or business solution is with a story. WDS worked for a company that required an enterprise level, scalable CSS solution to diminish specificity issues. To understand the issues and find the truth required observing the developers and engineers to find a CSS solution that would support 70 developers <a className="no-decoration greenlink" href="../case_study_4"><i>Read more</i></a>  </p>           
            </div>  
            </div>
        </section>   
        </div>

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center padding-top-50 margin-top-75 grey border-top-5">
                <div className="content-block-55 text-align-center"> 
                       <img className="photo-container padding-bottom-25" src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS Specializes in Application Design for Data Visualization and Business Intelligence Platforms</p>
                    </div>
                </div>
            </section>     
                
            </div>
        </div>
        )
    }
}

export default css_solutions;