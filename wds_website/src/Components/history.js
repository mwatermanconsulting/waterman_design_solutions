import React, { Component } from 'react' ;
import history from '../images/bg-ourhistory.png'
import photo_history from '../images/photo-history-s1.png'
import time from '../images/WDS-timeline.png'
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class about extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <div className="flex-layout-section-fixed yellow">
                    <div className="image-background-border-tb yellow">
                    <div className="flex-image-container flex-item-bottom flex-layout-center-center">
                        <h1 className="image-text-left title text-white">Our History</h1>
                        <img className="flex-image-container" src={history}  alt="Why WDS background" /> 
                     </div>
                    </div>
                </div>
                <div className="flex-layout-section-full align-items-center border-bottom-5 padding-bottom-20 grey-blue">
                    <div className="padding-100 flex-layout-center-center">
                        <div className="content-header flex-layout-column "> 
                         
                            <div className="content-block width-100">
                                <p className="title text-white text-align-center">25 years of problem solving with design.<br/> 
                                        Our story of evolution proves that design STILL matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-grid-2col-full margin-top-100" style={{width:'80%'}}>
                    <div className="content-header grid-item-2a">
                        <h3 className="subtitle margin-top-50">When it comes to front-end design and CSS, WDS has experience and working knowledge of this design language since its infancy in 1996.</h3>
                   </div> 
                    <div className="subtitle grid-item-2c margin-top-25">Surreal Beginnings </div>
                        <div className="content-block-services">
                            <p className="content-text-18"> WDS started in 1997 under its original name, Surreal Concepts by the husband and wife team, Terri and Michael Waterman. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                            </p>
                        </div>
                    <div className="grid-item-2b container-image-block">
                        <img className="photo-container" src={photo_history} alt="consulting"/> 
                    </div>
                        <h3 className="subtitle grid-item-2e">Solutions for all </h3>
                            <div className="content-block-services">
                                <p className="content-text-18"> By 2001 Surreal Concepts was focused on building websites and marketing campaigns for small to mid-size companies, ranging from B2Bs to consumer products. In early 2002, a UX informational site called Web First Aid was created for website design, which included studies done at Stanford University and the Neilson Norman Group, two credible resources in usability, backed with data to support their research.
                                This site along with the Surreal Concepts website led to a contract with a Pfizer agency to design and organize the largest HCP site at the time. They realized that the same principles of design for small companies were scalable to enterprise levels. Consulting with Pfizer was an opportunity to show that simplicity and efficient communication with strong teamwork helped save Pfizer a half a million dollars
                                </p>
                            </div>
                        <h3 className="subtitle grid-item-2d">Business UX Begins </h3>
                            <div className="content-block-services">
                                <p className="content-text-18"> By 2001 Surreal Concepts was focused on building websites and marketing campaigns for small to mid-size companies, ranging from B2Bs to consumer products. 
                                In early 2002, a UX informational site called Web First Aid was created for website design, which included studies done at Stanford University and the Neilson Norman Group, two credible resources in usability, backed with data to support their research.
                                 This site along with the Surreal Concepts website led to a contract with a Pfizer agency to design and organize the largest HCP site at the time. They realized that the same principles of design for small companies were scalable to enterprise levels. Consulting with Pfizer was an opportunity to show that simplicity and efficient communication with strong teamwork helped save Pfizer a half a million dollars. 
                                </p>
                            </div>
                    </div>
                    <div className="flex-layout-section-fixed green-blue flex-layout-center-center">
                        <img className="image-size" src={time} alt="time Line"/>
                    </div>

                    <div className="content-block">
                                <p className="content-text-48 text-align-center padding-100">“Will you be getting a call from your mother-in-law<br/> when she tries to set up this modem?” 
                                </p>
                            </div>
                        
                    <div className="flex-layout-section-full margin-top-100">
                    <div className="flex-layout-row flex-layout-center"> 
                        <div className="content-header flex-layout-column flex-sh-500" >
                            <h3 className="subtitle">UX Designers, Mentors and Coaches</h3>
                                <div className="content-block-services">
                                        <p className="content-text-18"> Our UX designers and developers are more than designers and developers in title only:
                                        They bring all the deep, diverse experience of WDS and our many projects and experts.</p>
                                        <p>They outperform on work and coach how UX should be integrated into product design and development.
                                        Our team has experience across multiple industries — as well as consumer and workplace experience to bring the best to your project.
                                        Our designers understand development and our developers understand design — this is where we get speed from blended teams.
                                        They’re experienced in agile transformation across large-scale organizations.</p>
                                        <p>Looking for a larger Agile Transformation Program?</p> 
                                       <p> Check out our Program Management Practice.</p>
                                </div>
                        </div>
                    <div className="flex-layout-section-full">
                        <div className="container-image-block">
                              <img className="photo-container" src={photo_history} alt="consulting"/> 
                        </div>
                    </div>
                    </div>

                    </div>
                
                </div>
                
                        
        )
    }
}

export default about;