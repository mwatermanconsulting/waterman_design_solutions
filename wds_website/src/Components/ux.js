import React, { Component } from 'react' ;
import backgroundServices from '../images/couple.png';
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class ux extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
            <div className="flex-layout-section">
                <div className="image-background-border-tb">
                    <img className="img-size" src={backgroundServices}  alt="couple" /> 
                        <div className="content-right-center">
                            <div className="content-header">
                                <div className="title">UX</div>
                            </div>
                                <div className="content-text">
                                        <p>We have a unique and established methodology for understanding people in context — we reveal unmet needs — which drives everything we do. This leads to a crisp, clear understanding of the 
                                            customer, which shapes the design and development of new solutions and experiences. <br/>
                                            With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated software solutions that improve any and all 
                                            touchpoints across the user journey.  </p>
                                 </div>
                            </div>
                        </div>
                    </div>  
                <div className="flex-layout-section-full flex-layout-center-center">
                    <div className="flex-layout-column"> 
                        <div className="flex-layout-center-center margintop50"> 
                            <div className="content-header flex-layout-center-center">
                                <div className="content-text width-half">
                                   {/* <div className="content-header textblock  lightpurple"><img className="aboutuspic" src={mike} alt="mike"/> */}
                                        <p className="text-align-center"><b> In todays market desgin is more critical to your business success, competition and user expectations have increased. 
                                            Your only chance of survival is understanding both your users and competition.</b></p>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    <div className="flex-layout-center-center">
                        <div className="flex-layout-justified-sb flex-layout-center-center margintop50">     
                            <div className="flex-layout-content-container">
                               <div className="flex-layout-row flex-layout-center-center">
                                    {/* Need Image */}
                                    <div className="flex-layout-column-half ">
                                        <h3 className="content-header">BLENDED TEAMS</h3>
                                            <div className="layout-center-justified ">
                                                <p>Our multi-disciplined teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                managers work together to achieve success.  
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="flex-layout-row">
                                    {/*  <div className="content-header textblock lightpurple"><img className="aboutuspic" src={terri} alt="terri"/>  */}
                                        <div className="flex-layout-column-half">
                                            <h3 className="content-header"> REMOVING RISK </h3>
                                            <p> Risk exists in every project. We help our clients mitigate risk by researching and documenting not only the needs and desires of their customers, 
                                                but why those needs are important. </p>
                                        </div>
                                    {/*</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex-layout-center-center">
                        <div className="flex-layout-justified-sb flex-layout-center-center margintop50">     
                            <div className="flex-layout-content-container">
                               <div className="flex-layout-row flex-layout-center-center">
                                    {/* Need Image */}
                                    <div className="flex-layout-column-half ">
                                        <h3 className="content-header">Experience</h3>
                                            <div className="layout-center-justified ">
                                                <p>We’ve been building great experiences with world-leading brands for over 15 years. Our designs have helped business grow and understand their users. 
                                                    All our clients have full confidence that WDS can deliver the right results.

                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="flex-layout-row">
                                    {/*  <div className="content-header textblock lightpurple"><img className="aboutuspic" src={terri} alt="terri"/>  */}
                                        <div className="flex-layout-column-half">
                                            <h3 className="content-header"> Trend Setters </h3>
                                            <p> Benchmarked against offshore and internal teams, our blended teams of strategists, designers and developers work together to understand user needs, 
                                                translate those needs to design, and then, as a team, take that investment to launch, faster. 
                                            </p>
                                        </div>
                                    {/*</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex-layout-center-center">
                            <div className="flex-layout-justified-sb flex-layout-center-center margintop50">     
                                <div className="flex-layout-content-container">
                                    <div className="flex-layout-row flex-layout-center-center">
                                    {/* Need Image */}
                                        <div className="flex-layout-column-half ">
                                            <h3 className="content-header">Business Results</h3>
                                                <div className="layout-center-justified ">
                                                    <p>Companies that want to thrive and grow during their unique digital transformations have partnered with WDS. 
                                                    They trust us to build software experiences that people love and to deliver great business results.
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                <div className="flex-layout-row">
                                    {/*  <div className="content-header textblock lightpurple"><img className="aboutuspic" src={terri} alt="terri"/>  */}
                                        <div className="flex-layout-column-half">
                                            <h3 className="content-header"> Focus </h3>
                                            <p> We're focused on making you and your team successful. We're transparent with our process and our program management. 
                                                We're also pragmatists, and we'll do what's necessary to be successful in your environment.
                                            </p>
                                        </div>
                                    {/*</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/*  This Section Needs Images */}

                <div className="flex-layout-center margintop50">
                    <button type="button">Check Out Our Success Stories</button>
                </div>
                <div className="flex-layout-section flex-layout-center ">
                    <h3>The customer is our whole focus throughout project</h3>
                        <p className="width-half">  WDS is the leader in understanding and empathizing with the user. Our proven process to the development of mobile, cloud, web and workplace software. 
                            The company is actively redefining the user experience (UX) and changing the ways people interact with technology around the world. Our design solutions have been copied by the industry leaders and set standard 
                            for the way modern businesses design software, WDS designs emotionally rich, resonant solutions that enable customers and end users to fully realize technology’s potential in today’s connected world.
                            <br/>
                            <div className="flex-layout-center margintop50">
                                 <button type="button">Check Out Our Core Offerings</button>
                            </div>
                         </p>
                </div>
                <div className="flex-layout-center-center">
                            <div className="flex-layout-justified-sb flex-layout-center-center margintop50">     
                                <div className="flex-layout-content-container">
                                    <div className="flex-layout-row flex-layout-center-center">
                                    {/* Need Image */}
                                        <div className="flex-layout-column width-quarter ">
                                            <h3 className="content-header">WE'LL GET THERE FASTER, TOGETHER AS A TEAM</h3>
                                                <div className="layout-center-justified ">
                                                    <p>Blending teams of strategists, designers and developers together will guarantee strong communication, collaboration and team success. 
                                                       Combined with better understanding of the problem space and validated designs, we can focus on developing secure, modern, scalable software, 
                                                       faster than internal or offshore teams.
                                                    </p>
                                                </div>
                                            </div> 
                                            <div className="flex-layout-column width-quarter ">
                                                <h3 className="content-header">YOU'LL HIT CLOSE TO THE MARK THE FIRST TIME.</h3>
                                                    <div className="layout-center-justified ">
                                                        <p>We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, 
                                                        there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.
                                                        </p>
                                                    </div>
                                            </div> 
                                            <div className="flex-layout-column width-quarter ">
                                                <h3 className="content-header">YOUR USERS AND CUSTOMERS WILL LOVE IT.</h3>
                                                    <div className="layout-center-justified ">
                                                        <p>In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                                                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                                                            With consumers, if you miss the mark, you'll fail fast, and not in a good way.
                                                        </p>
                                                    </div>
                                            </div> 
                                            <div className="flex-layout-column width-quarter ">
                                            <h3 className="content-header">READY TO IMPROVE YOUR BUSINESS METRICS? WE ARE.</h3>
                                                <div className="layout-center-justified" >
                                                    <p>We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                                                        We've helped increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default ux;