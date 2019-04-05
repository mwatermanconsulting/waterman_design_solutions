import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import tugofwar from '../images/tugofwar.png';
import racecar from '../images/racecar.png';
import yogabeach from '../images/yogabeach.png'; 
import mysvg from '../images/crowdgirls.svg';
import ship from '../images/titanic.svg';
import joy from '../images/jump-for-joy.gif';
import firemen from '../images/firemen.svg';

class why_wds extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section flex-layout-justified-sb">
                    <div className="image-background-border-tb flex-layout-center-center">
                        <div className="flex-image-container flex-layout-center-center">
                            <img className="flex-image-container" src={mysvg}  alt="girls picture" /> 
                                </div>
                                <div className="flex-content-container">
                                    <div className="content-header"> 
                                        <div className="title">Case Study 3?</div>
                                    </div>
                                    <div className="content-header">
                                        <div className="subtitle">Need a Good powerful sentence here</div>
                                    </div>
                                    <div className="content-block-why">
                                        <p className="content-text-18">We have a unique and established <a href="./methodology" target="_blank">methodology</a> for understanding people in context — we reveal unmet needs — which drives everything we do. This leads to a crisp, clear understanding of the 
                                            customer, which shapes the design and development of new solutions and experiences. <br/>
                                        </p>
                                    </div>
                                    <div className="flex-container-button margin-top-50">
                                        <Button className="button"><a href="./core_offerings" className="text-black" target="_blank">Core Offerings</a></Button> 
                                        <Button className="button"><a href="./aboutus" className="text-black" target="_blank">About US</a></Button>
                                        <Button className="button"><a href="./case_studies" className="text-black" target="_blank">Case Studies</a></Button>
                                        <Button className="button"><a href="./clients" className="text-black" target="_blank">Clients</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                         <div className="flex-layout-section-full align-items-center green">
                            <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                                <div className="content-header flex-layout-column">    
                                    <h3 className="subtitle flex-layout-center">Established Methodology and Practices</h3>
                                <div className="content-block width-100">
                                    <p className="content-text-18 text-align-center">With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated software solutions that improve any and all 
                                        touchpoints across the user journey. <br/><br/>In todays market desgin is more critical to your business success, competition and user expectations have increased. 
                                        Your only chance of survival is understanding both your users and competition.
                                        </p>
                                    </div>
                            
                                    <div className="content-header flex-layout-center-center">
                                        <div className="title-center margin-top-100">Core Offerings</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        <div className="flex-layout-column flex-layout-justified-sb">
                            <div className="flex-layout-section-full green">     
                                <div className="flex-layout-row flex-layout-center-center margin-top-50"> 
                                    <div className="content-header flex-layout-column flex-sh-500">
                                        <h3 className="text-white">BLENDED TEAMS</h3>
                                            <div className="content-block">
                                                    <p className="content-text-18 content-block-why">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                        managers work together to achieve success.  
                                                    </p>
                                            </div>
                                    </div>
                                        <div className="flex-layout-column flex-sh-500">
                                            <div className="container-image-block">
                                                <img className="flex-image-container" src={yogabeach}  alt="Blended Teams" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-layout-column flex-layout-justified-sb">
                                <div className="flex-layout-section-full green">     
                                    <div className="flex-layout-row-reverse flex-layout-center-center margin-top-50"> 
                                        <div className="content-header flex-layout-column flex-sh-500">
                                            <h3 className="text-white">Experience</h3>
                                                <div className="content-block">
                                                    <p className="content-text-18 content-block-why">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                                            All our <a href="./clients" target="_blank">clients</a> have full confidence that WDS can deliver the right results.
                                                    </p>
                                            </div>
                                    </div>
                                        <div className="flex-layout-column flex-sh-500">
                                            <div className="container-image-block">
                                                <img className="flex-image-container" src={ship}  alt="Blended Teams" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                             <div className="flex-layout-column flex-layout-justified-sb">
                                <div className="flex-layout-section-full green">     
                                    <div className="flex-layout-row flex-layout-center-center margin-top-50"> 
                                        <div className="content-header flex-layout-column flex-sh-500">
                                            <h3 className="text-white">Trend Setters</h3>
                                                <div className="content-block">
                                                    <p className="content-text-18 content-block-why">For the last 15 years WDS has been a leading trend setter for the industry. Our <a href="./design_solutions" target="_blank">design solutions</a> have been 
                                                    copied and used across many verticals. 
                                                    </p>
                                            </div>
                                    </div>
                                        <div className="flex-layout-column flex-sh-500">
                                            <div className="container-image-block">
                                                <img className="flex-image-container" src={ship}  alt="Blended Teams" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                             <div className="flex-layout-column flex-layout-justified-sb">
                                <div className="flex-layout-section-full green">     
                                    <div className="flex-layout-row-reverse flex-layout-center-center margin-top-50"> 
                                        <div className="content-header flex-layout-column flex-sh-500">
                                            <h3 className="text-white">Focus</h3>
                                                <div className="content-block">
                                                    <p className="content-text-18 content-block-why">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                                            All our clients have full confidence that WDS can deliver the right results.
                                                    </p>
                                            </div>
                                    </div>
                                        <div className="flex-layout-column flex-sh-500">
                                            <div className="container-image-block">
                                                <img className="flex-image-container" src={ship}  alt="Blended Teams" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                             <div className="flex-layout-column flex-layout-justified-sb">
                                <div className="flex-layout-section-full green">     
                                    <div className="flex-layout-row flex-layout-center-center margin-top-50"> 
                                        <div className="content-header flex-layout-column flex-sh-500">
                                            <h3 className="text-white">Removing Risk</h3>
                                                <div className="content-block">
                                                    <p className="content-text-18 content-block-why">Risk exists in every project. 
                                                    We help our clients mitigate risk, however, by fully researching and documenting not only the needs and desires of their customers, 
                                                    but the reasons those needs are important. 
                                                    </p>
                                            </div>
                                    </div>
                                        <div className="flex-layout-column flex-sh-500">
                                            <div className="container-image-block">
                                                <img className="flex-image-container" src={ship}  alt="Blended Teams" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                             <div className="flex-layout-column flex-layout-justified-sb">
                                <div className="flex-layout-section-full green">     
                                    <div className="flex-layout-row-reverse flex-layout-center-center margin-top-50"> 
                                        <div className="content-header flex-layout-column flex-sh-500">
                                            <h3 className="text-white">Business Results</h3>
                                                <div className="content-block">
                                                    <p className="content-text-18 content-block-why">We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                                            All our clients have full confidence that WDS can deliver the right results.
                                                    </p>
                                            </div>
                                    </div>
                                        <div className="flex-layout-column flex-sh-500">
                                            <div className="container-image-block">
                                                <img className="flex-image-container" src={ship}  alt="Blended Teams" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                                <div className="flex-layout-center green padding-bottom-50 bottom-border">
                                    <button type="button" className="margin-top-50">Check Out Our Success Stories</button>
                                </div>
                                <div className="flex-layout-row flex-layout-center-center"> 
                                    <div className="content-header flex-layout-column flex-sh-500">
                                        <h3 className="sub-title">Your Business and User Needs Are Our Whole Focus</h3>
                                            <div className="content-block">
                                                <p className="content-text-18"> WDS is the leader in understanding and empathizing with the user. Our proven process to the development of mobile, cloud, web and workplace software. 
                                                    The company is actively redefining the user experience (UX) and changing the ways people interact with technology around the world. Our design solutions have been copied by the industry leaders and set standard 
                                                    for the way modern businesses design software, WDS designs emotionally rich, resonant solutions that enable customers and end users to fully realize technology’s potential in today’s connected world.
                                                <br/></p> 
                                            </div>
                                        </div>
                                    <div className="flex-layout-column">
                                        <div className="container-image-block">
                                            <img className="flex-image-container" src={joy}  alt="Your Business is Our Joy" /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-container-small image-background-border-tb flex-layout-center-center"> 
                                    <div className="flex-layout-row">
                                        <div className="flex-layout-column flex-container-text-small flex-sh-400">
                                            <div className="title-small">WE'LL GET THERE FASTER, TOGETHER AS A TEAM.</div>
                                                <div className="layout-center-justified ">
                                                    <p className="margin-top-10">Blending teams of strategists, designers and developers together will guarantee strong communication, collaboration and team success. 
                                                        Combined with better understanding of the problem space and validated designs, we can focus on developing secure, modern, scalable software, faster than internal or offshore teams.
                                                    </p>
                                                </div>
                                            </div> 
                                            <div className="flex-layout-column flex-container-text-small flex-sh-400">
                                                <div className="title-small">YOU'LL HIT CLOSE TO THE MARK THE FIRST TIME.</div>
                                                    <div className="layout-center-justified ">
                                                        <p className="margin-top-10">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, 
                                                            there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.
                                                        </p>
                                                </div>
                                            </div> 
                                            <div className="flex-layout-colum flex-container-text-small flex-sh-400">
                                                <div className="title-small">YOUR USERS AND CUSTOMERS WILL LOVE IT.</div>
                                                    <div className="layout-center-justified ">
                                                        <p className="margin-top-10">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                                                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                                                            With consumers, if you miss the mark, you'll fail fast, and not in a good way.
                                                        </p>
                                                    </div>
                                            </div> 
                                            <div className="flex-layout-column flex-container-text-small flex-sh-400">
                                                <div className="title-small">READY TO IMPROVE YOUR BUSINESS METRICS? WE ARE.</div>
                                                    <div className="layout-center-justified">
                                                        <p className="margin-top-10">We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                                                         We've helped increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.
                                                        </p> 
                                                    </div> 
                                            </div> 
                                        </div>
                                    
                                </div>
                            </div>                                   
                            )
                        }
                    }
export default why_wds;