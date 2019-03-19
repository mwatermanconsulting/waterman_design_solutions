import React, { Component } from 'react' ;
import backgroundServices from '../images/couple.png';
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class why_wds extends Component {
    render () {
        return(
            <div className="flex-container-default"> 
                <div className="flex-containertop">
                    <div className="sevices-background-section1">
                        <img className="couple-img" src={backgroundServices}  alt="couple" /> 
                        <div className="content-right-center">
                            <div className="content-header">
                                <div className="title">Why WDS?</div>
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
                    <div className="wd_layout_end_justified">
                        <div className="flex-container50 content-top "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                       {/* <div className="content-header textblock  lightpurple"><img className="aboutuspic" src={mike} alt="mike"/> */}
                                            <p><b> In todays market desgin is more critical to your business success, competition and user expectations have increased. 
                                                Your only chance of survival is understanding both your users and competition.</b></p>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                            <div className="wds_layout_justified_sb margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        {/* Need Image */}
                                            <p className="content_header">BLENDED TEAMS</p>
                                             <div className="layout.center-justified ">
                                                <p>Our multi-disciplined teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                    managers work together to achieve success.  
                                                </p>
                                            </div> 
                                        </div>
                                </div>
                            
                                    <div className="content-text">
                                        {/*  <div className="content-header textblock lightpurple"><img className="aboutuspic" src={terri} alt="terri"/>  */}
                                            <p className="content_header"> REMOVING RISK </p>
                                            <p> Risk exists in every project. We help our clients mitigate risk by researching and documenting not only the needs and desires of their customers, 
                                            but why those needs are important. </p>
                                        {/*</div> */}
                                    </div>
                                </div>
                            </div>
                      

            
        
        )
    }
}

export default why_wds;