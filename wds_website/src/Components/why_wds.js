import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import why from '../images/backgrounds/bg-why-wds.svg';
import whys1 from '../images/photos/photo-why-s1.png';
import whys2 from '../images/photos/photo-why-s2.png';
import whys3 from '../images/photos/photo-why-s3.png';
import why_business from '../images/photos/photo-why-business-solutions.png';
import why_design from '../images/photos/photo-why-design-solutions.png';
import why_enterprise from '../images/photos/photo-why-enterprise-solutions.png'; 
import why_oh_really from '../images/graphic-why-s1.svg';

import why_handshake from '../images/graphic-why-s2.svg';
import care from '../images/graphic-why.svg';


class why_wds extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <section className="flex-section-fixed-head">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-item-bottom">
                            <img className="flex-image-container image-size-100 container" src={why}  alt="Why WDS background" /> 
                         </div>
                    </div> 
                </section>
                <section className="flex-layout-section-full align-items-center red border-bottom-5" >
                    <div className=" flex-layout-center-center padding-50">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block width-75">
                                <div className=" text-white text-align-center">
                                    Your customer is the focus of the entire process.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg"> 
                        <div className="grid-callout-text grid-placeself-center width-70">
                            <p className="callout-text "> 
                            Customers always look for the better experience. Meeting their expectations of intuitive, elegant and simple designs built around and for the user will earn their loyalty.</p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container" src={whys1}  alt="Customer Service" /> 
                    </div>
                </div>
            </section>
        <main>
            <section className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-column">    
                    <p className="title padding-50 text-align-center">
                        WDS builds emotionally rich, resonant digital solutions that enable users to fully realize technology’s complete potential, by simplifying everything your customers touch and feel.</p>
                </div>
                <div className=" content-block-25">
                    <img className="flex-image-container" src={why_oh_really}  alt="Your Business is Our Joy" /> 
                </div>
                <div className="content-header flex-layout-column">    
                    <p className="title padding-50 text-align-center">
                        By advocating and designing for the user.</p>
                </div>
            </section>
            <section className="flex-layout-section-full align-items-center yellow-bg border-tb-5" >
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 ">
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header "> 
                            Design Solutions</p>
                        <p className="content-text-24 padding-10"> 
                            A methodology that reveals the truth</p>
                        <p className="content-text-18 padding-10">  
                            about user experiences. Our experience of providing design solutions has given us a successful track record.</p>
                    </div>
                <div className="2col-photo width-70 grid-placeself-center">
                        <img src={why_design} className="border-3px" alt="Case Study Image 2"/> 
                </div>
                </div>
                <div className="grid-2col-photo-text align-self-center width-100  margin-top-50 ">
                    <div className="2col-photo width-70 grid-placeself-center">
                        <img src={why_business} className="border-3px" alt="Case Study Image 2"/> 
                    </div>
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header "> 
                            Business Solutions</p>
                        <p className="content-text-24 padding-10"> 
                            Integrating design into your process</p>
                        <p className="content-text-18 padding-10">  
                            Our insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                    </div>
                </div>
                <div className="grid-2col-text-photo align-self-center width-100 margin-bottom-100  margin-top-50 ">
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header "> 
                            Enterprise Solutions</p>
                        <p className="content-text-24 padding-10"> 
                            Frameworks that are scalable </p>
                        <p className="content-text-18 padding-10">
                            Enterprise design thinking improves teamwork, allowing members to work more efficiently.</p>
                    </div>
                    <div className="2col-photo width-70 grid-placeself-center">
                        <img src={why_enterprise} className="border-3px" alt="Case Study Image 2"/> 
                    </div>
                </div>
            </section>
            <section className="flex-layout-section-full align-items-center" >
                <div className="grid-2col-photo-text  width-70  margin-top-100 ">
                    <div className="2col-photo  width-70 grid-placeself-center">
                        <img src={whys2} alt="Case Study Image 2"/> 
                    </div>
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header "> 
                            OUR EXPERIENCE HAS ALLOWED US TO REFINE A METHODOLOGY…</p>
                        <p className="content-text-24 padding-10">  
                            A methodology that reveals the truth about user experiences. Our experience of providing design solutions has given us a successful track record.</p>
                    </div>
                </div>

                <div className="thin-hr width-70 align-self-center margin-top-100"></div>

                <div className="grid-2col-text-photo align-self-center width-100  margin-tb-100   ">
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header"> 
                            THE RESULTS PROVE THAT OUR PROCESS WORKS</p>
                        <p className="content-text-24 padding-10">
                            We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, there's still valuable data to collect even before that first MVP. Our insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                    </div>
                    <div className="2col-photo width-70 grid-placeself-center">
                        <img src={whys3} alt="Case Study Image 2"/> 
                    </div>
                </div>
            </section>
        </main>

            <section className="flex-layout-section-full align-items-center yellow-bg border-tb-5" >
                <div className=" flex-layout-center-center padding-50">
                    <div className="content-header flex-layout-column">    
                    <div className="content-block width-75">
                        <div className="text-align-center">
                            <p className="subtitle text-align-center">
                                From Surreal Beginnings…</p>
                            <p clasName="content-text-24">
                                Since the beginning of the internet we have been building a culture of empathy, creativity, and inspiration.</p>
                        <div className="flex-layout-center padding-bottom-50">
                            <button type="button" className="margin-top-50 font-size-24">Check Out Our History</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>    
                  
            <section className="flex-layout-section-full align-items-center">
                <div className="grid-2col-text width-70 margin-top-50 flex-section-align-center">
                    <div className="2col-text content-header flex-layout-column">
                        <p className="subtitle">
                            Experienced Teams</p>
                    <div className="content-block-75">
                        <p className="content-text-24">
                            Our multi-disciplined teams teams work collaboratively to design software    solutions based on user needs. Designers, strategists, marketers and program 
                            managers work together to achieve success. </p>
                        <p><a href="./core_offerings" target="_blank">
                            Learn More...</a></p>
                    </div>
                    </div>
                    <div className="2col-text content-header flex-layout-column">
                        <p className="subtitle">
                            Design Experience</p>
                    <div className="content-block-75">
                        <p className="content-text-24 ">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                        All our clients have full confidence that WDS can deliver the right results</p>
                        <p>
                            <a href="./core_offerings" target="_blank">Learn More...</a></p>
                    </div>
                    </div>
                    <div className="2col-text content-header flex-layout-column">
                        <p className="subtitle">
                            Trend Setters</p>
                    <div className="content-block-75">
                        <p className="content-text-24 ">
                            For the last 15 years WDS has been a leading trend setter for the industry. Our design solutions have been 
                            copied and used across many verticals. Need at least one more line of text here Need at least one more line of text here</p>
                        <p>
                            <a href="./core_offerings" target="_blank">Learn More...</a></p>
                        </div>
                    </div>
                    <div className="2col-text flex-layout-column">
                        <p className="subtitle">Focus</p>
                            <div className="content-block-75">
                                <p className="content-text-24 ">Our designs have helped business grow and understand their users. 
                                All our clients have full confidence that WDS can deliver the right results.
                                </p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                    <div className="2col-text content-header flex-layout-column">
                        <p className="subtitle">Removing Risk</p>
                            <div className="content-block-75">
                                <p className="content-text-24">Risk exists in every project. We help our clients mitigate risk, however, by fully researching and documenting not only the needs and desires of their customers, but the reasons those needs are important. 
                                </p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                    <div className="2col-text content-header flex-layout-column">
                        <p className="subtitle">Business Results</p>
                            <div className="content-block-75">
                                <p className="content-text-24 ">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                All our clients have full confidence that WDS can deliver the right results.
                                </p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                </div>  
            </section>
            <div className="flex-layout-center padding-bottom-50">
                <button onclick="location.href='./case_studies';" type="button" value="Case Studies" className="margin-top-50 font-size-24">Check Out Our Success Stories</button>
            </div>
            <section className="flex-layout-section-full align-items-center yellow-bg border-tb-5 ">
                <div className="grid-4col-text padding-50" >
                    <div>
                    <div className="content-header layout-center-justified">
                        We'll get there as a team.
                    </div>
                    <div className="layout-center-justified ">
                        <p className=" content-block-why margin-top-10">Blending teams of strategists, designers and developers together will guarantee strong communication, collaboration and team success. 
                        Combined with better understanding of the problem space and validated designs, we can focus on developing secure, modern, scalable software, faster than internal or offshore teams.</p>
                    </div>
                    </div> 
                    <div>
                    <div className="content-header">This will work out real well for you.</div>
                        <div className="layout-center-justified ">
                            <p className="  content-block-why margin-top-10">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, 
                            there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.</p>
                        </div>
                    </div> 
                    <div>
                    <div className="content-header">Your users will love you.</div>
                        <div className="layout-center-justified ">
                            <p className=" content-block-why margin-top-10">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                            With consumers, if you miss the mark, you'll fail fast, and not in a good way.</p>
                        </div>
                    </div> 
                    <div>
                    <div className="content-header">Save so much time and money.</div>
                        <div className="layout-center-justified">
                            <p className=" content-block-why margin-top-10 ">We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                            We've helped increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.</p> 
                        </div> 
                    </div> 
                </div>
            </section>
            <section className="flex-layout-section-full align-items-center">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                                Curious to find out more? We’re more than happy to help! </p>
                            <p className="content-text-24">  
                                WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 

                            <p>We actively redefine user experience (UX) and change the ways people interact with technology around the world. </p>

                            <p>We’re recognized by industry analysts for setting the standard for the way businesses design and develop software. WDS builds emotionally rich, resonant software solutions that enable customers and end users to fully realize technology’s complete potential in our always-on, always-connected world.</p>
                        </div>
                    </div>              
                    <div className="2col-photo width-50 grid-placeself-center">
                        <img className="flex-image-container" src={why_handshake}  alt="Your Business is Our Joy" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
                </div>
            </section>     
        </div>                                   
                            )
                        }
                    }
export default why_wds;