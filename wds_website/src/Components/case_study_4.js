import React, { Component } from 'react';
import Helmet from 'react-helmet';
import osi_bg from '../images/backgrounds/bg-osi.png';
import osi_logo from '../images/osilogo.svg'; 
import osi_s1 from '../images/image-post-flexbox-v2.png';
import itcss from '../images/photos/photo-osi-ITCSS.png';
import sass from '../images/Sass.jpg';
import kendo from '../images/kendo.png';
import design_system from '../images/photos/photo-digital-systems-s3.png';
import thumbsUp from '../images/thumbsup.svg';



class case_study_4 extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="Waterman Design Solutions case study for OsiSoft. Find out how WDS, a UX/UI design firm helped OsiSoft by uncovering unknown design consistency issues across their product line by creating the UX Steering team that solved communication issues between the team and company design problems on their Pi Coresight SaSS offering." />
                <meta name="keywords" content="case studies, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>WDS Case Studies - OsiSoft</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/case_study_4" />
            </Helmet>
            <div className="flex-layout-column flex-layout-section-full image-background-border-top">
                <section className="flex-layout-row height-60-mobile width-100"> 
                    <div className="header-text-left header-title-cs align-self-center text-white">
                        Case Study - OsiSoft
                    </div>
                        <img className="flex-image-container" src={osi_bg}  alt="Stubhub Case Study " /> 
                </section>
                 <section className="container-section padding-20 flex-layout-center-center border-bottom-1 callout-color-dark">
                    <div className="callout-text-lg">
                        Goal: Develop a scalable CSS solution that would minimize specificity issues 
                    </div>
                </section> 
                <section className="flex-layout-section-full align-items-center margin-top-75">
                    <div className="title content-block-65">
                            Problem
                    </div>
                    <div className="subtitle content-block-65 margin-top-15">
                            Specificity and Scalability Issues
                    </div>
                    <div className="content-block-65 margin-top-15">
                        <p className="content-text-18">
                            OsiSoft was losing development time being spent debugging their CSS files that was becoming more fragile with age and lack of standards. OsiSoft decided to hire WDS to devise a scalable enterprise CSS solution.
                            </p> 
                    </div>
                </section>

                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-65">
                            Approach
                    <div className="subtitle   margin-top-15">
                            Finding the Truth - What are the Issues?
                   </div>
                   </div>
                   <div className="content-block-65 margin-top-15">
                        <p className="content-text-18">
                            WDS approaches each project with the same wonder and excitement, solving complex problems. They are always seeking the truth with an empathetic heart and curious mind. Their methodology is adaptive to  internal business problems, like communication, or CSS issues. User research and approach are always the same for all situations.
                        </p>       
                    </div>
                    <div className="content-block-65 margin-top-15">
                        <ul className="dashed content-text-21">
                            <li>Critique current CSS</li>
                            <li>Review current CSS code base</li>
                            <li>Observe developers working on daily CSS workflow</li>
                            <li>Interview developers about CSS issues, needs and wants</li>
                        </ul>
                    </div>   
                </section>
            
                <div className="hr-line-cs"></div>
                
                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-65">
                        Research CSS Problems
                    </div>
                    <div className="subtitle content-block-65 margin-top-15">
                        WDS UX Methodology
                    </div>
                    <p className="content-text-18 content-block-65 margin-top-15">
                        WDS started this project by applying the UX methodology, observing the developers  as they went about their daily routines, interacting with code, noting body language and workarounds they would invent for themselves. The main problem involved using old CSS standards and methods that included writing it to a single CSS file. 
                        </p> 
                
                    <ul className="dashed content-text-18 content-block-65 margin-top-15">
                        <li><a href="#solution1" className="no-decoration greenlink" >Responsive solution</a></li>
                        <li><a href="#solution2" className="no-decoration greenlink">Organizing CSS on an enterprise level</a></li>
                        <li><a href="#solution4" className="no-decoration greenlink">Faster performance</a></li>
                        <li><a href="#solution4" className="no-decoration greenlink">Modular CSS solution</a></li>
                        <li><a href="#solution3" className="no-decoration greenlink">Solving specificity issues</a></li>
                        <li><a href="#solution6" className="no-decoration greenlink">Shared Set of CSS helper classes</a></li>
                        <li><a href="#solution7" className="no-decoration greenlink">Consistency across products and services</a></li>
                        <li><a href="#solution8" className="no-decoration greenlink">Reduce developer time debugging CSS</a></li>
                    </ul> 
                </section>

                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-65">
                            Solutions
                    </div>
                    <div className="subtitle content-block-65 margin-top-10">
                            Overview
                    </div>
                    <div className="content-block-65 margin-top-15">
                        <p className="content-text-18">
                            Most CSS issues are very challenging because the problems are not in the code, but how the code is organized. The load order of classes influences specificity. A major suggestion that was adopted  was to implement a new CSS specification, Flexbox. This would be the first enterprise Sass application developed with Flexbox. </p> 
                        <p className="content-text-18"> 
                            WDS devised a CSS strategy to solve all the current CSS issues. The solution would include: custom CSS classes, Sass, OOCSS and ITCSS. Also there would be a set of global classes, helper classes and Sass mixins. The scalability solution included a plan of modular CSS and Sass partial files. This solution solves the problem of multiple developers working on the project by breaking up the CSS into digestible pieces, moving away from the common practice of developing on one singular CSS file.</p> 
                        <p className="content-text-18">
                            The most important solution  dealt with the global nature of CSS and the specificity problems.The best practice is writing "vanilla" CSS, keeping it simple. Use a naming convention that makes sense to everybody. Diminishing specificity issues includes using DRY CSS, Object Oriented CSS and partial file load order. </p> 
                        <p className="content-text-18">
                            Below are the steps taken to solve each of the issues OsiSoft was facing </p>              
                    </div>
                    
                </section>

                <div className="hr-line-cs"></div>

                <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-65">
                    Responsive Design
                </div>
                <div className="subtitle margin-top-10 content-block-65">
                    Flexbox Implementation
                </div> 
                
                <div className="content-block-65 content-text-18 margin-top-15sm">
                    <div className="float-right">
                    <img className="photo-container-cs margin-top-15sm" src={osi_s1}  alt="Website Design" /> 
                </div>
                <p className="content-text-18 margin-top-15">
                    Flexbox was the first CSS upgrade that allowed  designers to have some real control over their layout. Before Flexbox, CSS files had to be hacked to get a design correct. Flexbox  allowed centering horizontally and vertically, something that was challenging to do before with CSS. WDS jumped at the chance to apply Flexbox on an enterprise level. Going in uncharted territory, they successfully wrote thousands of lines of Flexbox code, building the application layout from scratch. Frustratingly, they learned that it was NOT the solution to the CSS layout issues. But, Flexbox did help in many ways during the course of the application creation.</p>   
                </div>
            </section>

                <div className="hr-line-cs"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-65">
                    Scalability and Organization
                </div>
                <div className="subtitle margin-top-10 content-block-65">
                    Sass - Adding a CSS Preprocessor
                </div> 
                
                <div className="content-block-65 content-text-18">
                    <div className="float-right">
                    <img className="photo-container-cs margin-top-15sm" src={sass}  alt="Website Design" /> 
                </div>
                <p className="content-text-18 margin-top-15">
                        The most effective Sass feature for organization was the use of partial files(SCSS). Sass partial files allow you to create separate CSS file for each page or sections of a site or app and compile the separate files into one large master file. For example, the footer file would have a matching SCSS file. These files are then processed by the preprocessor and a full production CSS file is written. The power of the partial files became really beneficial when mixed in with the ITCSS method. </p>
                        
                        <p className="content-text-18">
                        The implementation of SaaS was beneficial as the project progressed and the CSS matured. The use of color variables helped maintain consistency, especially as the style guide and design system were being developed. WDS developed a design system a few years later and the use of Sass mixins was critical as we identified classes within the pattern library to utilize to stylize Angular components for the design system.</p>
                  </div>
            </section>


                <div className="hr-line-cs"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-65">
                    Scalability and Maintainable CSS 
                </div>
                <div className="subtitle margin-top-10 content-block-65">
                    The ITCSS Method - Taming the Specificity Beast
                </div> 
                
                <div className="content-block-65 content-text-18 margin-top-15sm">
                    <div className="float-right">
                    <img className="photo-container-cs margin-top-10 margin-top-15sm" src={itcss}  alt="Website Design" /> 
                </div>
                    <p className="content-text-18 margin-top-15"> 
                    Organizing and naming conventions are the two most difficult things to solve when writing large amounts of CSS. When you have an entire team writing to one CSS file it can become a specificity nightmare,  an unsustainable situation. This method is a great solution to the problem. Using partial files to load the CSS files in order of importance, global to specific. The most global files load first, then the most specific files last. This method mirrors the how the browser DOM interprets the CSS when it is loaded, loading a nice smooth line instead of a bunch of sharp lines. This is a method created by Harry Roberts and it scales nicely in the real enterprise world. </p>

                  </div>
            </section>

                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center">
                        <div id="solution4" className="title content-block-65">
                            Modular CSS
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                            OOCSS - Object Oriented CSS
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                            
                            OOCSS develops dry, reusable modular chunks of CSS. It’s a speedy approach for writing maintainable CSS that is based on a set of standards, adding a much-needed predictability to CSS. The OOCSS approach creates an intuitive CSS. OOCSS played a large part in this project's success. It is a strange animal, not a framework or methodology, but a philosophical perception. In WDS's experience, the deeper knowledge of CSS, the more value in the OOCSS method. This method was extensively used throughout the project.</p>
                            
                            <p className="content-text-18"> 
                            Initially, there was push back from the developers and engineers because OOCSS destroys semantic HTML. Since CSS is broken down in granular modules, there are more classes created. WDS explained how the CSS classes in the HTMl tell a story so that it is easier to control. Six months from now the CSS will still make sense. </p>  

                            <p className="content-text-18"> 
                            As the OsiSoft application grew and  CSS matured, the majority of classes needed by the developers were written. Design elements such as spacing, color and global classes were written so the developers just added the classes to the HTML, reducing the need for developers to write CSS by 80%.
                            </p>
                        </div>
                    
                </section>

                <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center">
                        <div id="solution6" className="title content-block-65">
                            Helper Classes
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                            Relieving the CSS Burden
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                            Helper classes help remove repetition by creating a set of abstract classes that can be used over and over on HTML elements. Each helper class is responsible for doing one job and doing it well. Code becomes more reusable and scalable for many features that will be added in the future. Whenever there's a need to develop a new component, combining several classes together is how to build it. </p>

                            <p className="content-text-18">“Treat code like Lego. Break code into the smallest little blocks possible.” — @csswizardry (via @stubbornella) #btconf

                            — Smashing Magazine (@smashingmag) May 27, 2013</p>
                    </div>
                </section>
               
                <div className="hr-line-cs"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-65">
                    Unforeseen Problems
                </div>
                <div className="subtitle margin-top-10 content-block-65">
                    The Kendo Framework
                </div> 
                
                <div className="content-block-65 content-text-18 margin-top-15sm">
                <div className="float-right">
                    <img className="photo-container-cs margin-top-10 margin-top-15sm" src={kendo}  alt="Website Design" /> 
                </div>
                <div className="margin-top-15">
                    <p className="content-text-18 content-block-65">
                    The decision to add the Kendo UI brought on a whole new set of challenges, not only for WDS, but the entire team. Frameworks are fine components are added to a template or cookie cutter UI. Once it is necessary to customize these frameworks, the nightmare begins. Considering the PI Vision application was completely custom any components would need to be updated for consistency.</p>
                    <p className="content-text-18 content-block">
                    Rollover colors, border colors and most user interactions needed to be updated to match the current application design pattern. But updating a simple CSS class caused unexpected results. Only a CSS expert could understand the complexity of the Kendo CSS file. A plan was needed to provide a set of standards for editing the Kendo CSS to avoid specificity problems. </p>
                    <p className="content-text-18 content-block">
                    Working closely with the team, WDS was able to establish a solution involving the partial files and establish a methodology with best practices. Once the team was trained on the framework and methodology the issues dissolved.</p>

                  </div>
                </div>
            </section>

                    <div className="hr-line-cs"></div>
                
                    <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-65">
                    Application Consistency and Documentation
                </div>
                <div className="subtitle margin-top-10 content-block-65">
                    TThe Creation of a Living Style Guide
                </div> 
                
                <div className="content-block-65 content-text-18 margin-top-15sm">
                <div className="float-right">
                    <img className="photo-container-cs margin-top-10 margin-top-15sm" src={design_system}  alt="Website Design" /> 
                </div>
                <div className="content-block-65 margin-top-15">
                    <p className="content-text-18">
                    Once the development of the CSS was completed, documentation and best practices were composed and became the foundation for the living style guide. The CSS spawned a best practices document that included rules for the global CSS, helper classes and Flexbox classes. A living style guide was created to assist business consistency issues.</p>

                  </div>
                </div>
            </section>


                    <div className="hr-line-cs"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div id="solution8" className="header-title content-block-65">
                        Results
                    </div>
                    <div className="subtitle content-block-65 margin-top-75">
                        Issues Solved and More!!
                    </div>
                    <div className="content-block-65 margin-top-15">
                        <p className="content-text-18">The final results were better than expected. The time taken to debug CSS was almost non-existence. The software engineers were pleased and adapted to the new CSS model and methodology when developing  CSS files. </p>
                        <p className="content-text-18">
                        The CSS scaled beautifully as the project grew. At one point in the project, over 70 engineers simultaneously worked on the CSS with very little issues. During the final phase of the project, engineers were writing very little new CSS classes. </p>
                        <p className="content-text-18">
                        WDS even surprised itself at how well the CSS scaled while it matured. OOCSS mixed with a set of helper classes created a condition where the engineers no longer had to write CSS classes except in rare cases. WDS was empathetic to the engineers on their daily CSS journey and were thrilled to  eliminate much of the burden to code in CSS.</p>
                        <p className="content-text-18">
                        The mixture of OOCSS, ITCSS and SaaS was a huge success and scaled with the application, over time. The company was so happy with the solution it became a standard. 
                        </p>
                    </div>         
                </section>

                <section className="flex-layout-section-full align-items-center grey border-top-5 margin-top-50 margin-top-50sm">
                <div className="grid-2col-text-photo bottom-callout-cs" > 
                    <div className="col2-text grid-placeself-center ">
                        
                        <div className="callout-text margin-top-15">  
                        The combination of OOCSS, ITCSS and SaaS was a huge success and scaled with the application. It became a company-wide standard, improving user experience and provided consistency. The CSS also became the foundation for the style guide and design system.
                        </div>
                    </div>
               
                <div className="col2-photo grid-placeself-center">
                    <img className="flex-image-container width-100" src={thumbsUp}  alt="Good job WDS!" /> 
                </div>
            </div>
        </section>
                
                        
                </div> 
            </div>   
                                              
                                        )
                                    }
                                }
export default case_study_4;