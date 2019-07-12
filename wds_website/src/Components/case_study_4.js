import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import osi_bg from '../images/backgrounds/bg-osi.png';
import osi_logo from '../images/osilogo.svg'; 
import osi_s1 from '../images/image-post-flexbox-v2.png';
import itcss from '../images/ITCSS.png';
import casscade from '../images/photos/photo-css-s1.png';
import sass from '../images/Sass.jpg';
import kendo from '../images/kendo.png';
import design_system from '../images/photos/photo-digital-systems-s3.png';
import thumbsUp from '../images/thumbsup.svg';



class case_study_4 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full">
                <section className="image-background-border-tb flex-layout-row width-100">
                    <div className="header-title-cs align-self-center header-text-left text-white">
                        Case Study - OsiSoft
                    </div>
                        <img className="header-text-right align-self-center" src={osi_logo}  alt="Stubhub Case Study Logo Image" /> 
                        <img className="flex-image-container" src={osi_bg}  alt="Stubhub Case Study " /> 
                </section>
                 <section className="container-section padding-20 flex-layout-center-center border-bottom-1 callout-color-dark">
                    <div className="callout-text-lg">
                        Goal: Develop a scalable css solution that would minimize specificity issues 
                    </div>
                </section> 
                <section className="flex-layout-section-full align-items-center margin-top-75">
                    <div className="title content-block-55">
                            Problem
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                            Specificity and Scalability Issues
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                            OsiSoft was losing development time, as their developers were constantly debugging CSS. Finding their CSS was becoming more fragile with age, OsiSoft decided to hire an expert to devise a scalable enterprise CSS solution.
                            </p> 
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-55">
                        Approach
                    
                    <p className="subtitle content-block-55  margin-top-15">
                        Finding the Truth - What are the Issues?
                   </p>
                   </div>
                   <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                            We approach each project with the same wonder and excitement. A passion to solve complex problems, the harder the better. We are always seeking the truth with an empathic heart and curious mind. Our methodology is adaptive to all projects. Whether internal business problems, like communication or CSS issues, or user research our approach is the same.</p>
                            
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <ul className="dashed content-text-21">
                            <li>Critique current CSS</li>
                            <li>Review current CSS code base</li>
                            <li>Observe developers working on daily CSS workflow</li>
                            <li>Interview developers about CSS issues, needs and wants</li>
                        </ul>
                    </div>   
                </section>
            
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                
                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Research CSS Problems
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        WDS UX Methodology
                    </div>
                    <p className="content-text-18 content-block-55 margin-top-15">
                        We begin by applying our methodology to the developers, observing them as go about their day. Watching as they interact with the code, noting body language and workarounds. We interview and meet with developers and stakeholders. We start getting to the truth and uncovering issues, developing a plan, a roadmap for our solutions.
                        </p> 
                
                    <ul className="dashed content-text-18 content-block-55 margin-top-15">
                        <li><a href="#responsive">Responsive solution</a></li>
                        <li><a href="#organize">How to organizing an enterprise level CSS</a></li>
                        <li>Faster performance</li>
                        <li><a href="#OOCSS">Modular CSS solution</a></li>
                        <li><a href="#issues">Solving specificity issues</a></li>
                        <li>Shared Set of CSS helper classes</li>
                        <li>Consistency across products and services</li>
                        <li>Reduce developer time debugging CSS</li>
                    </ul> 
                </section>

                 <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                            Solutions
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                            Overview
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                            CSS issues are very challenging because the problems are not in the code, but the code is organized. The load order of classes influences specificity. One major suggestion that was adopted by OsiSoft to go with the new CSS specification, flexbox. This would be the first enterprise sass application developed with flexbox. </p> 
                        <p className="content-text-18"> T
                            WDS devised a CSS strategy to solve all the current problems. The application would be coded in custom CSS, sass, OOCSS and ITCSS. A set of global classes, helper classes and mixins would be included. The scalability solution would include a plan of modular css and sass partial files. This solution also solves multiple developers working on a project by breaking up the CSS in digestible pieces moving away from the common practice one singular file that the most current CSS is last in this one file.</p> 
                        <p className="content-text-18">
                            The most important issue deals with global nature of CSS the specificity problems. This is a complicated issue. The best practice is writing vanilla CSS, the KISS approach, keep it simple stupid! There are three elements involved in diminishing specificity issues. DRY CSS, Object Oriented CSS and partial file load order. </p> 
                        <p className="content-text-18">
                            Below are the steps taken to solve each of the issues OsiSoft was facing </p>              
                    </div>
                    
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75 "></div>

                <section id="responsive" className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Responsive Design
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Flexbox implementation
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        Flexbox was the first CSS upgrade that allowed CSS designer to have some real control over our layout. Before flexbox we had to hack our way through CSS to get a design correct. Flexbox actually allowed us to center items horizontal and vertical. We jumped at the chance to apply flexbox on an enterprise level. Going in uncharted territory, we successfully wrote thousands of line of flexbox code. Building the application from scratch. Frustratingly, learning that it was NOT our savior to our CSS layout issues. But, flexbox did help in many ways during the course of the application creation. </p>
                    </div>
                </section>
                <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                    <img className="photo-container-cs-sb1" src={osi_s1} alt="Finding the Truth - Business Perspective"/>
                    <p className="margin-top-15"><i> Flexbox solved many layout issues</i></p>
                </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section id="responsive" className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Scalability and Organization
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Sass - Adding a CSS Preprocssor
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        The most effective sass feature for organization is the use of partial files(SCSS). Sass partial files allow you to create separate CSS file for each page or sections of a site or app and compile the separate files into one large master file. For example the footer file would have a matching SCSS file. These files are then processed by the preprocessor and a full production CSS file is written. The power of the partial files became really beneficial when mixed the ITCSS method. </p>
                        
                        <p className="content-text-18">
                        The implementation of SaaS was beneficial as the project progressed and the CSS matured. The use of color variables, helped maintain consistency especially as the style guide and design system were being developed. As we developed a design system a few years later the use of mixins was critical as we identified classes within the pattern library to utilize to stylize Angular components for the design system.</p>
                    </div> 
                </section>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={sass} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i> Making CSS Awesome</i></p>
                    </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section id="responsive" className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Scalability and Maintainable CSS
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        The ITCSS Method - Taming the Specificity Beast
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        Organizing and naming conventions are the two most difficult things to do when writing large amounts of CSS. When you have an entire team writing to one CSS file it can become a specificity nightmare. As the project goes on over time it truly becomes an unsustainable situation. This method is a great solution to the problem. Using partial files you load the CSS files in order of importance. The most global files loading first and the most specific files loading last. The files are loaded how the browser interprets CSS when it is loaded into the DOM. Loading a nice smooth line instead of a bunch of sharp lines. This is the method created by Harry Roberts and scales nicely in the real enterprise world.</p>  
                    </div> 
                </section>

               
                <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                    <img className="photo-container-cs-sb1" src={itcss} alt="Finding the Truth - Business Perspective"/>
                    <p className="margin-top-15">
                        <i>Credit to Harry Roberts for this excellent solution</i></p>
                </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                   
                        <div className="title margin-top-15">
                            Modular CSS
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            OOCSS - Object Oriented CSS
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            Organizing and naming conventions are the two most difficult things to do when writing large amounts of CSS. When you have an entire team writing to one CSS file it can become a specificity nightmare. As the project goes on over time it truly becomes an unsustainable situation. This method is a great solution to the problem. Using partial files you load the CSS files in order of importance. The most global files loading first and the most specific files loading last. The files are loaded how the browser interprets CSS when it is loaded into the DOM. Loading a nice smooth line instead of a bunch of sharp lines. This is the method created by Harry Roberts and scales nicely in the real enterprise world.</p>
                        </div>
                    
                </section>
               
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div className="content-header content-block-55 flex-layout-column">
                        <div className="title margin-top-15">
                            Application Consistency and Documentation
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            The Beginnings of a Style Guide
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            After the initial development of the CSS was completed documentation was started as part of the living style guide. The complete CSS was documented and a best of practice document was written for global CSS, Helper CSS and flexbox.</p>
                        </div>
                    </div>
                </section>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                        <img className="photo-container-cs-sb1 width-100" src={design_system} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i>Sections of the Osi style guide and design system </i></p>
                    </div>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55 margin-top-15">
                            Unforeseen Problems
                        </div>
                    <div className="subtitle content-block-55 margin-top-15">
                            The Kendo Framework
                    </div>
                    <div className="content-block-55 margin-top-15">
                    <p className="content-text-18">
                    The decision to add the Kendo UI brought on a whole new set of challenges, not only for me, but the entire team. Frameworks are fine if you are adding the components to a template or cookie cutter UI. Once you need to customize these frameworks, the nightmare begins. Considering the PI Vision application was completely custom any components would need to be updated.</p>
                    <p className="content-text-18">
                    Things like rollover colors, border colors and most user interactions needs to be updated to match the current application design pattern. Updating the simple CSS class caused unexpected results. Only a CSS expert could understand the complexity of the kendo CSS file.  A plan needed to be enacted in order that we didn’t go backwards to specificity problems again. </p>
                    <p className="content-text-18">
                    Working with the team I was able to establish a solution involving the partial files and establish a methodology, a best of practices. Once the team was mentored on the framework and methodology most of the issues dissolved.</p>
                    </div>    
                </section>

                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={kendo} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15">
                            <i>Kendo Framework for Angular</i></p>
                    </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                   
                        <div className="title content-block-55">
                            Results
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Issues Solved and More!!
                        </div>
                        <div className="content-block-55 margin-top-25">
                            <p className="content-text-18">The final results were better than the whole team hoped for as the time used to debug CSS was almost non-existence. The software engineers were pleased and adapted to the new CSS model, methodology and approach to developing the CSS. </p>
                            <p className="content-text-18">
                            The CSS scaled beautifully as the project grew. At one point in the project over 70 engineers were simultaneously working on the CSS with very little issues. During the final phase of the project, engineers were writing very little CSS. </p>
                            <p className="content-text-18">
                            I was surprised at how well the CSS scaled and also surprised that the CSS matured to the point using OOCSS that engineers no longer had to write CSS classes, except in rare cases. I was very empathic to the engineers daily CSS journey and to be able to almost eliminate the need to code in CSS removed a huge burden.</p>
                            <p className="content-text-18">
                            The mixture of OOCSS, ITCSS and SaaS was a huge success and scaled with the application, over time. The company was so happy with the solution it became a company wide standard. A style guide and design system became based off CSS solution.
                            </p>
                        </div>         
                    </section>
                            <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50 margin-bottom-100">
                                <img className="photo-container-cs-sb1" src alt="Finding the Truth - Business Perspective"/>
                                <p className="margin-top-15 margin-bottom-100"><i>StubHub happily emailed WDS this screenshot six months after release </i></p>
                            </div>
                            <div className="container-bottom-callout">
                            
                        </div>
                        
                        <div className="grid-callout border-top-5 bottom-border grey" style={{height:'450px'}}>
                            
                            <div className="grid-callout-text grid-placeself-center width-70" style={{padding:'20px'}}>
                                <p className="callout-text ">The mixture of OOCSS, ITCSS and SaaS was a huge success and scaled with the application, as it matured. The company was so happy with the solution it became a company wide standard. The CSS also began the guide for the style guide and design system.
                                </p>
                            </div>
                            
                            <div className="grid-callout-photo grid-placeself-center">
                                <img src={thumbsUp} alt="Finding the Truth - Business Perspective"/>
                            </div>
                            
                        </div>
                </div>    
                                              
                                        )
                                    }
                                }
export default case_study_4;