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
                <meta name="description" content="The WDS CSS specialists deliver their custom CSS solutions as npm packages or through github. The packages include a developer build kit with custom css, sass or less files, html files and documentation. WDS can refactor your current CSS or develop a customizable CSS solution that will scale as the project matures. " />
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
                    WDS CSS solutions will have your developers touching the CSS 80% less

                </div>
            </div>

            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-65 flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15" >
                    Our CSS services include CSS development, strategy, CSS system implementation, mentoring, documentation, and best of practice documentation.
                    </div>    
                </div>
                <div className="grid-callout-photo grid-placeself-center content-block-65 margin-tb-100">
                        <img className="container-photo-callout" src={casscade}  alt="CSS" /> 
                 </div>
            </section>
            <section className="content-header flex-layout-center-center flex-layout-column">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-50">
                        WDS develops lean scalable CSS solutions, saving your business time and money, while keeping your developers happy.
                        
                </div>
                <div className="content-block-50 margin-top-50">
                    <p className="content-text-24 text-align-center">

                        <img className="photo-container margin-bottom-50" src={cheer}  alt="Happy developers" /> <br></br>
                        WDS solutions are based on empathy and their observed experiences working with developers. Their CSS knowledge and expertise is one of the main reasons they get hired. WDS CSS solutions are scalable and customizable to your business requirements. </p>

                </div>
                    <NavLink className='button-area no-decoration' type="button" to={'/case_study_4'}>
                        OsiSoft Case Study
                    </NavLink>
            </section>

        <div className="thin-hr width-70 align-self-center hrline-spacing"></div>


    <div className="flex-layout-section-full flex-layout-column margin-top-25 align-self-center"> 

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-65">
                <div className="title">
                    Experience Matters
                </div>
            <div className="subtitle margin-top-10">
                    Responsive Design Solutions
            </div> 
            <div className="float-right callout-photo margin-top-5">
                <img className="container-image-500 margin-top-15sm" src={css2}  alt="Prototypes" /> 
            </div>
            <div className="margin-top-15">  
                <p className="content-text-18">
                    Responsive web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. WDS has made countless responsive websites and applications. They were one of the first companies to build a responsive enterprise application using flexbox. WDS can mentor your developers on responsive design best practices, or provide a responsive design <a className="greenlink" href="../ui_design" >build kit.</a>
                </p>                
            </div>  
            </div>
        </section>
            
        <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-65">
                <div className="title">
                    Organize and Simplify
                </div>
            <div className="subtitle margin-top-10">
                    Strategy to Organize and Reduce Specificity Issues
            </div> 
            <div className="float-right callout-photo ">
                <img className="container-image-500 margintop-4per margin-top-15sm" src={itcss}  alt="Prototypes" /> 
            </div>
            <div className="margin-top-15">  
                <p className="content-text-18">
                    Taming the specificity beast used to be difficult. WDS CSS strategy almost eliminates the specificity problems. In fact, the strategy almost eliminates the need for your developers to write CSS. The WDS advantage is the  experience of working with developers by interviewing and observing them working with CSS.
                </p>                
            </div>  
            </div>
        </section>

        <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-65">
                <div className="title">
                    Modular CSS
                </div>
            <div className="subtitle margin-top-10">
                    Reusable CSS
            </div> 
            <div className="float-right callout-photo">
                <img className="container-image-500 margin-top-10per margin-top-15sm" src={css3}  alt="Prototypes" /> 
            </div>
            <div className="margin-top-15 margin-top-15sm">  
                <p className="content-text-18 ">
                    CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and "code bloat," by creating reusable code snippets, that ensures backward compatibility.
                </p>                
            </div>  
            </div>
        </section>


        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-65">
                <div className="title">
                    CSS Solutions Package
                </div>
            <div className="subtitle margin-top-10">
                    NPM and GitHub
            </div> 
            <div className="float-right callout-photo">
                <img className="container-image-500 margin-top-10per margin-top-15sm" src={css4}  alt="Prototypes" /> 
            </div>
            <div className="margin-top-15">  
                <p className="content-text-18">
                    The WDS CSS specialists deliver their custom CSS solutions as npm packages or through github. The packages includes a developer build kit with the custom css, sass or less files, html files and documentation. WDS can refactor your current CSS or develop a customizable CSS solution that will scale as the project matures.
                </p>                
            </div>  
            </div>
        </section> 


        <div className="thin-hr width-70 align-self-center hrline-spacing"></div> 

        <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
            <div className="float-left flex-layout-center-center content-block-65">
                <div className="title">
                    WDS Transforms your CSS 
                </div>
            <div className="subtitle margin-top-10">
                    Building Scalable Enterprise Solutions
            </div> 
            <div className="float-right callout-photo margin-top-15sm">
                <img className="container-image-500 margin-top-5per" src={css5}  alt="Prototypes" /> 
            </div>
            <div className="margin-top-15">  
                <p className="content-text-18"> 
                    The best way to communicate a design or business solution is with a story. The previous company that WDS worked for required an enterprise level, scalable CSS solution that would diminish their specificity issues. To understand the issues and to find the truth required observing the developers and engineers and to find a CSS solution that would support 70 developers <a className="no-decoration greenlink" href="../case_study_4"><i>continue Story...</i></a>  </p>
                              
                             
            </div>  
            </div>
        </section>   
        </div>
                
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS Specializes in Application Design for Data Visualization and <br/>Business Intelligence Platforms.<p className="text-align-center margin-top-25" ></p>  </p>
                    </div>
                </div>
            </section>     
            </div>
        </div>
        )
    }
}

export default css_solutions;