import React, { Component } from 'react' ;
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class about extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <div className="flex-layout-section">
                    <div className="image-background-border-tb">
                        {/*  <img className="consultingpic" src={consultingpic} alt="consulting"/> */} 
                            <div className="content-right-center">
                                <div className="content-header">
                                    <div className="title">Our Story</div>
                                </div>
                                    <div className="content-text">
                                            <p>The Waterman Design Solutions story started more than 25 years ago. In that time, WDS has become the leader in experience-driven transformation through software strategy, 
                                                design and development.  </p>
                                     </div>
                                </div>
                            </div>
                        </div>  
                    <div className="flex-layout-section-full flex-layout-center-center">
                        <div className="flex-layout-column"> 
                            <div className="flex-layout-center-center margintop50"> 
                                <div className="content-header flex-layout-center-center">
                                    <div className="content-text">
                                       {/* <div className="content-header textblock  lightpurple"><img className="aboutuspic" src={mike} alt="mike"/> */}
                                            <p className="text-align-center"><b> More stuff about US</b></p>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        <div className="flex-layout-center-center">
                            <div className="margintop50">     
                                <div className="flex-layout-content-container flex-layout-center-center">
                                   <div className="flex-layout-row">
                                        {/* Need Image */}
                                        <div className="flex-layout-column-half ">
                                            <h3 className="content-header ">Design Methodology</h3>
                                                <div className="layout-center-justified ">
                                                    <p>Our Design Therory  
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="flex-layout-row flex-layout-center-center ">
                                        {/*  <div className="content-header textblock lightpurple"><img className="aboutuspic" src={terri} alt="terri"/>  */}
                                            <div className=" flex-layout-center-center flex-layout-content-half width-half">
                                                <h3 className="content-header"> Our Success </h3>
                                                <p> We are awesome and all the great things we have done. Say it like an engineer. Like...We have successfully delivered high-level professional designs at enterprise levels that improve consumers experiences at all touch poits across the users journey
                                                    Our success derives from our vast knowledge of current and past trends, to talior our design not just for the end-user, but to stengthen or establish a brand WDS not only delivers, 
                                                    but sets your business on a successful design path moving forward. Not too bad
                                                </p>
                                            </div>
                                        {/*</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-layout-center-center">
                            <div className="flex-layout-justified flex-layout-center-center margintop50">     
                                <div className="flex-layout-content-container">
                                   <div className="flex-layout-row flex-layout-center-center">
                                        {/* Need Image */}
                                        <div className="flex-layout-row">
                                            <h3 className="content-header">Experience</h3>
                                                <div className=" ">
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
                                                <h3 className="content-header"> Our Value </h3>
                                                <p> OUr proven Methodologyand suite of services companies and team leaders can have new conversation with current cliens, more opportunities
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
                                                <h3 className="content-header">Where we are</h3>
                                                    <div className="layout-center-justified ">
                                                        <p>C.ompanies that want to thrive and grow during their unique digital transformations have partnered with WDS. 
                                                        They trust us to build software experiences that people love and to deliver great business results
                                                        </p>
                                                    </div>
                                                </div> 
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

export default about;