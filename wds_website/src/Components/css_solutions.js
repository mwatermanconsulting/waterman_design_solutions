import React, { Component } from 'react' ;
import CSS from '../images/backgrounds/bg-css.png';
import didyouknow from '../images/graphic-didyouknow.svg';
import casscade from '../images/photos/photo-css-s1.png';
import css3 from '../images/photos/photo-css-s3.png';
import css4 from '../images/photos/photo-css-s4.png';
import css2 from '../images/photos/photo-css-s2.png';
import itcss from '../images/ITCSS.png';


class css_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    CSS Solutions</div>
                <img className="flex-image-container" src={CSS}  alt="CSS solutions" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    Our CSS solutions will have your developers touching CSS 80% less
                </div>
            </div>
            <section className="grid-callout photo-content-color border-bottom-5 height-670"> 
                    <div className="grid-callout-text grid-placeself-center content-block-75 content-header flex-layout-column">
                        Our CSS services include CSS development, Strategy, CSS system implementation, mentoring and documentation, including best of practice documentation.
                    </div>              
                
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={casscade}  alt="css code" /> 
                </div>
            </section>
            <section className="content-header flex-layout-center-center flex-layout-column">
                <div className="flex-layout-center-center title text-align-center margin-top-75 content-block-50">
                        WDS develops lean, scalable solutions, CSS solutions saving your business money and time, Keeping your  developers happy.
                </div>
                <div className="content-block-50 margin-top-50">
                    <p className="content-text-24 text-align-center">
                        Our solutions are based off our empathy and experiences working with developers. After our design solutions our CSS knowledge and experience is one of the main reasons WDS gets contracted by companies. Our CSS solutions are scalable and customizable to your business requirements. </p>
                </div>
                <button type="button" className="margin-top-50 font-size-24"><a href="case_study_4">
                        OsiSoft CSS Case Study </a></button>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <div className="flex-layout-section-full flex-layout-column margin-top-25"> 
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Experience Matters
                        </div>
                        <div className="subtitle margin-top-15">
                            Responsive Design Solution
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. We have made countless responsive websites and applications. We were one of the first companies to build a responsive enterprise application using flexbox. We can consult with your team on how to write better quality responsive User Interfaces </p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block margin-top-25">
                        <img className="photo-container width-50 margin-top-15" src={css2}  alt="Stakeholder Interview" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title text-grey ">
                            Organize and Simplify  
                        </div>
                        <div className="subtitle margin-top-15">
                            Strategy to Organize and Reduce Specificity 
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Taming the specificity beast use to be difficult. Our CSS strategy almost eliminates the specificity problems. In fact, our strategy almost eliminates the need for your developers to write CSS. Our advantage is our past experience working with developers and interviewing and observing them working with CSS.  </p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block">
                        <img className="photo-container" src={itcss}  alt="Stakeholder Interview" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Modular CSS 
                        </div>
                        <div className="subtitle margin-top-15">
                            Reusable CSS
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.</p>
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block margin-top-50">
                        <img className="photo-container" src={css3}  alt="Stakeholder Interview" /> 
                    </div>  
                    <p className="caption">Photo by chuttersnap on Unsplash</p>   
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            WDS Transforms your CSS 
                        </div>
                        <div className="subtitle margin-top-15">
                            Building Scalable Enterprise Solutions
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> The best way to communicate a solution through design thinking is with a story. The last company we work for needed an enterprise scalable CSS solution that would greatly diminish their specificity issues. This solution needed to keep in mind the users, the developers and engineers and build a system that could support 70 developers. <a href="../case_study_4"><i>Continue Story</i></a>  </p>
                            <p className="content-text-18"> </p>           
                        </div>
                    </div>
                    <div className="grid-right-css container-image-block">
                        <img className="photo-container" src={css4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75" ></div>

                <section className="flex-layout-section-full margin-bottom-100 margin-left-17">
                    <div className="title content-block-75">
                        WDS Methodology Works With Your Existing CSS                       
                    </div>
                    <div className="subtitle content-block-75 margin-top-15">
                            Rebuilding your css to be lean fast and scalable
                    </div>
                    <div className="content-text-18 content-block-75 margin-top-15">
                            <ul className="content-text-24 dashed margin-bottom-20"  ><b> List of CSS Services</b>
                                <li className='margin-top-15'>SasS or Less Implementation</li>
                                <li> Set of Global reusable Classes</li>
                                <li>Object Oriented CSS</li>
                                <li>Updated Style Sheets</li>
                                <li>Contract Work in-house</li>
                                <li>BEM Naming Conventions</li>
                                <li>Scalable Enterprise CSS solutions</li>
                                <li>Faster Pages Loads</li>
                                <li>Proven Methodology for seamless integration</li>
                            </ul>

                        </div>
                   
                </section>
                </div>
                
               
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="content-block-55 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS Specializes in Data Visualization Application Design.<p className="text-align-center margin-top-25" ></p>  </p>
                    </div>
                </div>
            </section>     
            </div>
        )
    }
}

export default css_solutions;