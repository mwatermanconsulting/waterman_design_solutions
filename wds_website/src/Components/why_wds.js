import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import why from '../images/backgrounds/bg-why-wds.svg';
import together from '../images/photos/photo-why-wds-s2.png';
import care from '../images/graphic-why.svg';


class why_wds extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-section-fixed-head">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-item-bottom">
                            <img className="flex-image-container image-size-100 container" src={why}  alt="Why WDS background" /> 
                         </div>
                    </div> 
                </div>
                <div className="flex-layout-section-full align-items-center red" style={{minHeight:'400px'}}>
                    <div className="margin-top-25 flex-layout-center-center padding-50">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block width-100">
                                <h3 className="content-text-24-reverse text-white text-align-center">We succeeded where others have failed. WDS has been simplifying user interfaces for over 15 years. Providing design and UX solutions with a proven scalable methodology for understanding people and business in context. We reveal your customers and users expectations, needs and motivations - driving everything we do. This leads to a clear understanding of your customers and business, which shapes design and creation of unique solution and experiences.

                                With our proven track record of successes, we have the experience, talent, skills and scale to deliver sophisticated and unique design solution that simplify and improve any and all touchpoints across the user journey
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-grid-2col-photo flex-layout-justified-sb yellow-bg"> 
                    <div className="item-a-nb content-header flex-layout-column">
                        <h3 className="subtitle text-white">WDS methodology provides solutions <br/> that redefines your business</h3>
                            
                        </div>
                    <div className="item-b container-image-block yellow-bg">
                        <img className="flex-image-container" src={together}  alt="Your Business is Our Joy" /> 
                    </div>
                        <div className="item-overlay"></div> 
                </div>
                <div className="flex-layout-section-full align-items-center red p" style={{minHeight:'400px'}}>
                    <div className="content-header flex-layout-column">    
                        <h3 className="title text-white padding-100 text-align-center">WDS builds emotionally rich, resonant digital solutions that enable customers and end users to fully realize technology’s complete potential in our always-on, always-connected world. By simplifying everything your customers touch and feel.
                        </h3>
                    </div>
               </div>
                <div className="container-grid-2col margin-top-150 flex-layout-center-center">
                    <div className="item-a-nb content-header flex-layout-column">
                        <h3 className="subtitle">Experienced Teams</h3>
                        <div className="content-block">
                            <p className="content-text-24 content-block-why">Our multi-disciplined teams teams work collaboratively to design software solutions based on user needs. Designers, strategists, marketers and program 
                            managers work together to achieve success. </p>
                            <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                        </div>
                    </div>
                    <div className="grid-item-b content-header flex-layout-column">
                        <h3 className="subtitle">Design Experience</h3>
                            <div className="content-block">
                                <p className="content-text-24 content-block-why">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                All our clients have full confidence that WDS can deliver the right results</p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                    <div className="item-c-nb content-header flex-layout-column">
                        <h3 className="subtitle">Trend Setters</h3>
                            <div className="content-block">
                                <p className="content-text-24 content-block-why">For the last 15 years WDS has been a leading trend setter for the industry. Our design solutions have been 
                                copied and used across many verticals. Need at least one more line of text here Need at least one more line of text here</p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                    <div className="grid-item-d flex-layout-column">
                        <h3 className="subtitle">Focus</h3>
                            <div className="content-block">
                                <p className="content-text-24 content-block-why">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                All our clients have full confidence that WDS can deliver the right results.
                                </p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                    <div className="grid-item-e content-header flex-layout-column">
                        <h3 className="subtitle">Removing Risk</h3>
                            <div className="content-block">
                                <p className="content-text-24 content-block-why">Risk exists in every project. We help our clients mitigate risk, however, by fully researching and documenting not only the needs and desires of their customers, but the reasons those needs are important. 
                                </p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                    <div className="grid-item-f content-header flex-layout-column">
                        <h3 className="subtitle">Business Results</h3>
                            <div className="content-block">
                                <p className="content-text-24 content-block-why">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                All our clients have full confidence that WDS can deliver the right results.
                                </p>
                                <p><a href="./core_offerings" target="_blank">Learn More...</a></p>
                            </div>
                    </div>
                </div>  
            <div className="flex-layout-center padding-bottom-50 bottom-border">
                <button type="button" className="margin-top-150 font-size-48">Check Out Our Success Stories</button>
            </div>
            <div className="container-grid-4col padding-150 yellow-bg flex-layout-center">
                <div className="grid-item-a margin-top-100">
                    <div className="title-small">WE'LL GET THERE FASTER, TOGETHER AS A TEAM.</div>
                        <div className="layout-center-justified ">
                            <p className="content-text-24 content-block-why margin-top-10">Blending teams of strategists, designers and developers together will guarantee strong communication, collaboration and team success. 
                            Combined with better understanding of the problem space and validated designs, we can focus on developing secure, modern, scalable software, faster than internal or offshore teams.
                            </p>
                        </div>
                </div> 
                <div className="grid-item-b">
                    <div className="title-small margin-top-100">YOU'LL HIT CLOSE TO THE MARK THE FIRST TIME.</div>
                        <div className="layout-center-justified ">
                            <p className="content-text-24 content-block-why margin-top-10">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, 
                            there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.
                            </p>
                        </div>
                </div> 
                <div className="gird-item-c">
                    <div className="title-small margin-top-100">YOUR USERS AND CUSTOMERS WILL LOVE IT.</div>
                        <div className="layout-center-justified ">
                            <p className="content-text-24 content-block-why margin-top-10">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                            With consumers, if you miss the mark, you'll fail fast, and not in a good way.
                            </p>
                        </div>
                </div> 
                <div className="grid-item-d4">
                    <div className="title-small margin-top-100">READY TO IMPROVE YOUR BUSINESS METRICS? WE ARE.</div>
                        <div className="layout-center-justified">
                            <p className="content-text-24 content-block-why margin-top-10 ">We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                            We've helped increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.
                            </p> 
                        </div> 
                </div> 
            </div>
            <div className="flex-layout-center padding-bottom-50 bottom-border yellow-bg">
                <button type="button" className="margin-top-150 font-size-48">Check Out Services Offerings</button>
            </div>
            <div className="container-grid-2col-photo flex-layout-justified-sb border-3px bottom-border " style={{padding:'90px'}}> 
                <div className="item-a-nb content-header flex-layout-column">
                    <h3 className="subtitle text-white">Your Customer is the focus of the entire process</h3>
                        <div className="content-block-cs">
                            <h2> Curious to find out more? We’re more than happy to help! </h2>
                            <p className="content-text-24">  WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 

                            <p>We actively redefine user experience (UX) and change the ways people interact with technology around the world. </p>

                            <p>We’re recognized by industry analysts for setting the standard for the way businesses design and develop software. WDS builds emotionally rich, resonant software solutions that enable customers and end users to fully realize technology’s complete potential in our always-on, always-connected world.</p>
                        </div>
                        </div>
                    <div className="item-b container-image-block">
                        <img className="flex-image-container" src={care}  alt="Your Business is Our Joy" /> 
                    </div>
            </div>
                                    
                         
        </div>                                   
                            )
                        }
                    }
export default why_wds;