import React, { Component } from 'react' ;
import CSS from '../images/backgrounds/bg-css.png';
import services from '../images/graphic-services.svg';
import together from '../images/photos/photo-why-wds.png';
import finding from '../images/photos/photo-documentation-s1.png';
import finding_truth1 from '../images/photos/photo-finding-truth-s1.png';
import casscade from '../images/photos/photo-css-s1.png';
import css3 from '../images/photos/photo-css-s3.png';
import css4 from '../images/photos/photo-css-s4.png';
import css2 from '../images/photos/photo-css-s2.png';
import itcss from '../images/ITCSS.png';
import finding_truth6 from '../images/photos/photo-finding-truth-s6.png';
import finding_truth7 from '../images/photos/photo-finding-truth-s7.png';
import finding_truth8 from '../images/photos/photo-finding-truth-s8.png';

class css_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    CSS Solutions</div>
                <img className="flex-image-container" src={CSS}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    Our CSS solutions will have your developers touching CSS 80% less

                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">WDS CSS services have been developed around our clients needs. CSS Solutions are one of our most requested services. Our services include CSS development, CSS system implementation, mentoring and documentation, including best of practice documentation.</div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={casscade}  alt="shaking hands" /> 
                </div>
            </div>
    
            <div className="content-header flex-layout-center-center flex-layout-column margin-top-100 ">
                <div className="flex-layout-center-center title text-align-center content-block-60">
                        WDS CSS Solutions saves time and develops lean, scalable solutions.
                </div>
                <div className="content-block-55 margin-top-50">
                    <p className="content-text-24 text-align-center">
                        Our solutions are based off our empathy and experiences working with developers. After our design solutions our CSS knowledge and experience  one of the main reasons WDS gets contracted by com By talking and observing developers we Every project WDS works closely with developers. We emphatize with the developers CSS struggles working with CSS and have devised a CSS strategy based on developer and business needs.    </p>
                </div>
                <button type="button" className="margin-top-50 font-size-24"><a href="case_study_4">
                    OsiSoft CSS Case Study </a></button>
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Experience Matters
                        </div>
                        <div className="subtitle">
                            Responsive Design Solution
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. We have made countless responsive websites and applications. We were one of the first companies to build a responsive enterprise application using flexbox. We can consult with your team on how to write better quality responsive User Interfaces </p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={css2}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Organize and Simplify  
                        </div>
                        <div className="subtitle">
                            Strategy to Organize and Reduce Specificity 
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Taming the specificity beast use to be difficult. Our CSS strategy almost eliminates the specificity problems. In fact, our strategy almost elminates the need for your developers to write CSS. Our advantage is our past experience working with developers and interviewing and observing them working with CSS.  </p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={itcss}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Modular CSS 
                        </div>
                        <div className="subtitle">
                            Reusable CSS
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={css3}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            WDS Can Transform Your CSS 
                        </div>
                        <div className="subtitle">
                            Building Scalable Enterprise Solutions
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> The best way to explain any complex solutions is through a story. The last company we work for needed an enterprise scalable CSS solution that would greatly diminish their specificity issues. This solution needed to keep in mind the users, the developers and engineers and build a system that could support 70 developers. <a href="../case_study_4"><i>Continue Story</i></a>  </p>
                            <p className="content-text-18"> </p>           
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={css4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
                </div>
                <div className="flex-layout-section-full content-header margin-bottom-100">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            WDS Methodology Works With Your Existing CSS                       
                        </div>
                        <div className="subtitle margin-top-25">
                            Rebuilding your css to be lean fast and scalable
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <ul className="content-text-24"><b> List of CSS Services</b>
                                <li>SasS or Less Implementation</li>
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
                    </div>
                </div>
        
        <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-50 flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> Looking for CSS Support? </p>
                        <p className="callout-text"> We provide on-site consultancy and development work for companies and teams of all sizes.</p> 
                    </div>
                </div>
                <div className="col2-photo width-70 grid-placeself-center">
                        <img className="flex-image-container" src={services}  alt="Thank you WDS!" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
            </div>   
                

                </div>
            </div>
        )
    }
}

export default css_solutions;