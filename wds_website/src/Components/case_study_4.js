import React, { Component } from 'react';
import Helmet from 'react-helmet';
import osi_bg from '../images/backgrounds/bg-osi.png';
import osi_logo from '../images/osilogo.svg'; 
import osi_s1 from '../images/image-post-flexbox-v2.png';
import itcss from '../images/ITCSS.png';
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
                        <img className="header-text-right logo-cs-mobile align-self-center width-25" src={osi_logo}  alt="Stubhub Case Study Logo Image" /> 
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
                            OsiSoft was losing development time, due to the time the developers spent debugging the CSS. They were facing a fragile CSS file that was becoming more fragile with age. OsiSoft decided to hire WDS to devise a scalable enterprise CSS solution.
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
                            WDS approaches each project with the same wonder and excitement. Their passion is solving complex problems, the harder the better. They are always seeking the truth with an empathic heart and curious mind. Their methodology is adaptive to all projects. Whether internal business problems, like communication or CSS issues, our user research and approach is the same.
                        </p>       
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
                        WDS started the project by applying their UX methodology, observing the developers in their work environment as they go about their daily routines. We observed them as they interacted with the code, noting body language and workarounds. They observed many issues and began to understand and see the truth of the problems. The main problem involved using old CSS standards and methods, that involved the developers writing to a single CSS file. 
                        </p> 
                
                    <ul className="dashed content-text-18 content-block-55 margin-top-15">
                        <li><a href="#solution1">Responsive solution</a></li>
                        <li><a href="#solution2">Solution to organizing CSS on an enterprise level</a></li>
                        <li><a href="#solution4">Faster performance</a></li>
                        <li><a href="#solution4">Modular CSS solution</a></li>
                        <li><a href="#solution3">Solving specificity issues</a></li>
                        <li><a href="#solution6">Shared Set of CSS helper classes</a></li>
                        <li><a href="#solution7">Consistency across products and services</a></li>
                        <li><a href="#solution8">Reduce developer time debugging CSS</a></li>
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
                            Most CSS issues are very challenging because the problems are not in the code, but instead how the code is organized. The load order of classes influences specificity. A major suggestion that was adopted by OsiSoft was to implement the new CSS specification, flexbox. This would be the first enterprise SaSS application developed with flexbox. </p> 
                        <p className="content-text-18"> 
                            WDS devised a CSS strategy to solve all the current CSS issues. The solution would include, custom CSS classes, Sass, OOCSS and ITCSS. Included would be a set of global classes, helper classes and Sass mixins. The scalability solution would include a plan of modular css and sass partial files. This solution solves the problem with multiple developers working on the project by breaking up the CSS into digestible pieces, moving away from the common practice of developing on one singular CSS file.</p> 
                        <p className="content-text-18">
                            The most important solution  dealt with the global nature of CSS and the specificity problems. This is a complicated issue. The best practice is writing vanilla CSS, with the KISS approach, keep it simple stupid! There are three elements involved in diminishing specificity issues. DRY CSS, Object Oriented CSS and partial file load order. </p> 
                        <p className="content-text-18">
                            Below are the steps taken to solve each of the issues OsiSoft was facing </p>              
                    </div>
                    
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75 "></div>

                <section id="solution1" className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Responsive Design
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Flexbox implementation
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        Flexbox was the first CSS upgrade that allowed CSS designers to have some real control over our layout. Before flexbox we had to hack our way through CSS to get a design correct. Flexbox actually allowed us to center items horizontal and vertical. We jumped at the chance to apply flexbox on an enterprise level. Going in uncharted territory, we successfully wrote thousands of lines of flexbox code, building the application layout from scratch. Frustratingly, learning that it was NOT our savior to our CSS layout issues. But, flexbox did help in many ways during the course of the application creation. </p>
                    </div>
                </section>
                <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                    <img className="photo-container-cs-sb1" src={osi_s1} alt="Finding the Truth - Business Perspective"/>
                    <p className="margin-top-15"><i> Flexbox solved many layout issues</i></p>
                </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section id="solution2" className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Scalability and Organization
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Sass - Adding a CSS Preprocssor
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        The most effective Sass feature for organization is the use of partial files(SCSS). Sass partial files allow you to create separate CSS file for each page or sections of a site or app and compile the separate files into one large master file. For example, the footer file would have a matching SCSS file. These files are then processed by the preprocessor and a full production CSS file is written. The power of the partial files became really beneficial when mixed in with the ITCSS method. </p>
                        
                        <p className="content-text-18">
                        The implementation of SaaS was beneficial as the project progressed and the CSS matured. The use of color variables, helped maintain consistency especially as the style guide and design system were being developed. WDS developed a design system a few years later and the use of Sass mixins was critical as we identified classes within the pattern library to utilize to stylize Angular components for the design system.</p>
                    </div> 
                </section>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={sass} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i> Making CSS Awesome</i></p>
                    </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section id="solution3" className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55">
                        Scalability and Maintainable CSS
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        The ITCSS Method - Taming the Specificity Beast
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">
                        Organizing and naming conventions are the two most difficult things to solve when writing large amounts of CSS. When you have an entire team writing to one CSS file it can become a specificity nightmare, becoming an unsustainable situation. This method is a great solution to the problem. Using partial files to load the CSS files in order of importance, global to specific. The most global files loading first, while loading the most specific files last. This method mirrors the how the browser Dom interprets the CSS when it is loaded into the DOM. Loading a nice smooth line instead of a bunch of sharp lines. This is the method created by Harry Roberts and it scales nicely in the real enterprise world.</p>  
                    </div> 
                </section>

               
                <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                    <img className="photo-container-cs-sb1" src={itcss} alt="Finding the Truth - Business Perspective"/>
                    <p className="margin-top-15">
                        <i>Credit to Harry Roberts for this excellent solution</i></p>
                </div>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                        <div id="solution4" className="title content-block-55 margin-top-15">
                            Modular CSS
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            OOCSS - Object Oriented CSS
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            
                            OOCSS develops dry, reusable modular chunks of CSS. It’s an approach for writing CSS that’s fast, maintainable, and standards-based, adding much needed predictability to CSS. The OOCSS approach creates an easy to understand vanilla CSS. OOCSS played a large part in this project success. OOCSS is a strange animal as it is not a framework or methodology, but a perception, a philosophy. In their experience the deeper the knowledge of CSS the more value you get out of the OOCSS method. This method was extensively used throughout the project.</p>
                            
                            <p className="content-text-18"> 
                            Initially, there was pushback from the developers and engineers because OOCSS destroys semantic HTML. Since the CSS is broken down in granular modules there are a lot more classes. The benefits far out weigh the negative of breaking the semantic structure. WDS explained that the CSS classes in the HTMl now tells a story. In six months from now when you open up this file you will quickly understand the CSS and it will make sense. </p>  

                            <p className="content-text-18"> 
                            As the OsiSoft application grew and the CSS matured the majority of classes needed by the developers were all ready written. The spacing, color and global classes were written so the developers just added the classes to the HTML. Reducing the need for developers to write CSS by 80%.
                            </p>
                        </div>
                    
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                        <div id="solution6" className="title content-block-55 margin-top-15">
                            Helper Classes
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Relieving the Developers CSS Burden
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18">
                            Helper classes help remove repetition by creating a set of abstract classes that can be used over and over on HTML elements. Each helper class is responsible for doing one job and doing it well. Doing this will make your code more reusable and scalable for many features that will be added in the future. Whenever you need to develop a new component, you’ll just need to combine some classes together to build it. </p>

                            <p className="content-text-18">“Treat code like Lego. Break code into the smallest little blocks possible.” — @csswizardry (via @stubbornella) #btconf

                            — Smashing Magazine (@smashingmag) May 27, 2013</p>
                        
                            
                        </div>
                    
                </section>
               
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
                    The decision to add the Kendo UI brought on a whole new set of challenges, not only for WDS, but the entire team. Frameworks are fine if you are adding the components to a template or cookie cutter UI. Once you need to customize these frameworks, the nightmare begins. Considering the PI Vision application was completely custom any components would need to be updated for consistency.</p>
                    <p className="content-text-18">
                    Things like rollover colors, border colors and most user interactions need to be updated to match the current application design pattern. The problem was updating a simple CSS class caused unexpected results. Only a CSS expert could understand the complexity of the kendo CSS file. A plan needed to be enacted in to provide a set of standards to editing the Kendo CSS to avoid the specificity problems. </p>
                    <p className="content-text-18">
                    Working closely with the team WDS was able to establish a solution involving the partial files and establish a methodology, a best of practices. Once the team was mentored on the framework and methodology the issues dissolved.</p>
                    </div>    
                </section>

                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                        <img className="photo-container-cs-sb1" src={kendo} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15">
                            <i>Kendo Framework for Angular</i></p>
                    </div>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="content-header content-block-55 flex-layout-column">
                            <div id="solution7" className="title margin-top-15">
                                Application Consistency and Documentation
                            </div>
                        <div className="subtitle content-block-75 margin-top-15">
                                The Creation of a Living Style Guide
                        </div>
                        <div className="margin-top-15">
                            <p className="content-text-18">
                                Once the development of the CSS was completed, documentation and best of practice documents were composed and became the foundation for the living style guide. The CSS spawned a best of practice document that included rules for the global CSS, helper classes and flexbox classes. A living style guide was created to help with the companies consistency issues within their product line.</p>
                        </div>
                    </div>
                </section>
                    <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-25">
                        <img className="photo-container-cs-sb1 width-100" src={design_system} alt="Finding the Truth - Business Perspective"/>
                        <p className="margin-top-15"><i>Sections of the Osi style guide and design system </i></p>
                    </div>

                    
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full align-items-center">
                    <div id="solution8" className="title content-block-55">
                        Results
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        Issues Solved and More!!
                    </div>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18">The final results were better than expected. The time used to debug CSS was almost non-existence. The software engineers were pleased and adapted to the new CSS model, methodology and approach to developing the CSS. </p>
                        <p className="content-text-18">
                        The CSS scaled beautifully as the project grew. At one point in the project, over 70 engineers, simultaneously worked on the CSS with very little issues. During the final phase of the project, engineers were writing very little new CSS classes. </p>
                        <p className="content-text-18">
                        WDS even surprised itself at how well the CSS scaled while it matured. OOCSS mixed with a set of helper classes created a condition where the engineers no longer had to write CSS classes, except in rare cases. WDS was very empathic to the engineers on their daily CSS journey and were thrilled to almost eliminate the burden to code in CSS.</p>
                        <p className="content-text-18">
                        The mixture of OOCSS, ITCSS and SaaS was a huge success and scaled with the application, over time. The company was so happy with the solution it became a company wide standard. A style guide and design system became based off CSS solution.
                        </p>
                    </div>         
                </section>
                <section className="grid-callout border-top-5 bottom-border grey margin-top-100" style={{height:'450px'}}>
                    <div className="grid-callout-text grid-placeself-center width-70" style={{padding:'20px'}}>
                        <p className="callout-text ">The mixture of OOCSS, ITCSS and SaaS was a huge success and scaled with the application, as it matured. The company was so happy with the solution it became a company wide standard. The CSS also became the foundation for the style guide and design system.</p>
                    </div>
                            
                    <div className="grid-callout-photo grid-placeself-center">
                        <img src={thumbsUp} alt="Finding the Truth - Business Perspective"/>
                     </div>
                </section>    
                        
                </div> 
            </div>   
                                              
                                        )
                                    }
                                }
export default case_study_4;