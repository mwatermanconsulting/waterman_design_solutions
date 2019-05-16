import React, { Component } from 'react' ;
import history from '../images/bg-ourhistory.png'
import photo_history from '../images/photo-our-history-s1.png'
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class about extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <div className="flex-layout-section-fixed yellow">
                    <div className="image-background-border-tb yellow">
                        <div className="flex-image-container">
                            <img className="flex-image-container-child border-3px image-size-fixed" src={history}  alt="case studies" />     
                        </div>
                    </div>
                </div>
                <div className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                        <div className="content-header flex-layout-column"> 
                        <h3 className="subtitle">Established in 1997</h3>   
                            <div className="content-block width-100">
                                <p className="content-text-18 text-align-center">We have a unique and established <a href="./methodology" target="_blank">methodology</a> for understanding people in context — we reveal unmet needs — which drives everything we do. This leads to a crisp, clear understanding of the 
                                    customer, which shapes the design and development of new solutions and experiences. </p>
                                <p>With over 15 years perfecting our approach, we have the experience, teams, skills and scale to deliver sophisticated software solutions that improve any and all 
                                    touchpoints across the user journey. <br/><br/>In todays market desgin is more critical to your business success, competition and user expectations have increased. 
                                    Your only chance of survival is understanding both your users and competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-layout-section thin-hr margin-tb-100" style={{ width: '90%' }}></div>  

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
                    <div className="flex-layout-column">
                        <div className="container-image-block margin-bottom-100">
                              <img className="photo-container" src={photo_history} alt="consulting"/> 
                        </div>
                    </div>
                    </div>

                    </div>
                              <div className="flex-layout-section thin-hr margin-tb-100" style={{ width: '90%' }}></div>  

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
                    <div className="flex-layout-column">
                        <div className="container-image-block margin-bottom-100">
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