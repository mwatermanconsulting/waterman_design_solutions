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
                <div className="container-grid-2col-full margin-top-100 margin-bottom-100 flex-layout-center-center" style={{width:'80%'}}>
                    <div className="content-header grid-item-2a">
                        <h3 className="subtitle-bold-i content-block-75 margin-top-50">When it comes to front-end design and CSS, WDS has experience and working knowledge of this design language since its infancy in 1996.</h3>
                   </div> 
                   <div className="grid-item-2c">
                    <h3>Surreal Beginnings </h3>
                        <div className="content-block-services">
                            <p className="content-text-18"> WDS started in 1997 under its original name, Surreal Concepts by the husband and wife team, Terri and Michael Waterman. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                            </p>
                        </div>
                    </div>
                    <div className="grid-item-2b container-image-block">
                        <img className="photo-container" src={photo_history} alt="WDS history"/> 
                    </div>
                    <div className="grid-item-2e" style={{marginTop:'-2.75%'}}>
                        <h3>Solutions for all</h3>
                            <div className="content-block-services">
                                <p className="content-text-18"> By 2001 Surreal Concepts was focused on building websites and marketing campaigns for small to mid-size companies, ranging from B2Bs to consumer products.</p>
                                <p>In early 2002, a UX informational site called Web First Aid was created for website design, which included studies done at Stanford University and the Neilson Norman Group, two credible resources in usability, backed with data to support their research.</p>
                                <p>This site along with the Surreal Concepts website led to a contract with a Pfizer agency to design and organize the largest HCP site at the time. They realized that the same principles of design for small companies were scalable to enterprise levels. Consulting with Pfizer was an opportunity to show that simplicity and efficient communication with strong teamwork helped save Pfizer a half a million dollars
                                </p>
                            </div>
                        </div>
                        <div className="grid-item-2d">
                        <h3>Business UX Begins </h3>
                            <div className="content-block-services">
                                <p className="content-text-18"> An unexpected change for WDS happened during the Pfizer job. Michael has innate knowledge of not only customers, but businesses. It was noticed that the application being used by the developers was extremely buggy. It causes an unacceptable amount of lost man hours, full story here. Issues were documented and saved Pfizer a lot of money.<p/>
                                <p>This is one of the many stories that has describes how Surreal Concepts evolved into what WDS is today. The changes and evolution of our services is due to our clients needs.</p>
                                <p>This was prevalent when tackling design problems and issues with content management systems that didn’t work. Complaints and documentation by Michael  on lost man-hours helped Pfizer to understand the issue and take appropriate action. They replaced the vender, saving and recouping a half a million dollars. Michael has always had an innate sense of business which he applies to his research. Solving business communication issues can solve many of the design issues.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-layout-section-fixed green-blue flex-layout-center-center">
                        <img className="image-size" src={time} alt="time Line"/>
                    </div>
                   <div className="flex-layout-section-full flex-layout-column margin-top-100">
                        <div className="flex-layout-column flex-layout-center-center">
                            <h2>Lessons Learned </h2>
                            <h4>Power of Good Personas</h4>
                                <div className="content-block-cs" style={{width:'875px'}}>
                                    <p className="content-text-18 text-align-center flex-layout-center-center"> The power of personas, while our time at Motorola was the development of the persona "Sally" a forty-five year old mother-in-law. WDS choose this persona, knowing these programmers, most likely got calls from family members such as mother-in-laws. Empathy is critical for true change to take place. Finding that connection between user, developers and stakeholders, is the key for success. Sally helped bridge the gap, between the developer and customer. We ask the import questions. Such as the one our developed personas proposed to the Motorola developers:</p>
                                </div>
                        </div> 
                            <p className="content-text-48 text-align-center margin-top-25">“Will you be getting a call from your mother-in-law<br/> when she tries to set up this modem?” </p> 
                    `       <span className="mdl-typography--caption flex-layout-center">Voice of the persona "Sally" speaking to               the Motorola developers"</span>
                    <div className="flex-layout-column flex-layout-center-center margin-top-100">
                        <div className="item-a">
                            <h4>Projects fail when design is not first</h4>
                            <div className="content-block-cs">
                                <p className="content-text-18 text-align-center flex-layout-center-center"> As in the case with Motorola, WDS followed UX consultants that were not true designers and could not meet the clients or the business needs. </p>
                            </div>
                        </div>
                        <div className="item-b">
                            <h4>Next: Understanding Big Data</h4>
                            <div className="content-block-cs">
                                <p className="content-text-18 text-align-center flex-layout-center-center"> Data visualization happened with StubHub and solving their dilemma with user traction. User retention went from 1% to 96% in 6 months under the pressure of losing the reporting tool project team.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-layout-section-full"> 
                <h3>Our Leaders</h3>
                <div className="container-grid-2col-full margin-top-100 margin-bottom-100 flex-layout-center-center grey-blue"> 
                   
                    <div className="grid-item-2a">
                        <div className="content-block-services">
                        <img className="photo-container-xsm" src={mike} alt="Michael Photos"/> 
                            <p className="content-text-18"> WDS started in 1997 under its original name, Surreal Concepts by the husband and wife team, Terri and Michael Waterman. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                            </p>
                        </div>
                    </div>
                    <div className="grid-item-2b">
                    <h3>Surreal Beginnings </h3>
                        <div className="content-block-services">
                            <p className="content-text-18"> WDS started in 1997 under its original name, Surreal Concepts by the husband and wife team, Terri and Michael Waterman. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                            </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                            
        )
    }
}

export default about;