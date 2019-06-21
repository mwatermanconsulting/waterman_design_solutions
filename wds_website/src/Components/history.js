import React, { Component } from 'react' ;
import history from '../images/backgrounds/bg-ourhistory.png'
import photo_history from '../images/photos/photo-history-s1.png'
import history_3 from '../images/photos/photo-history-s3.png'
import time from '../images/WDS-timeline.png'
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class about extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <div className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">Our History</div>
                        <img className="flex-image-container" src={history}  alt="Why WDS background" /> 
                </div>
                <div className="flex-layout-section-full border-bottom-5 align-items-center grey">    
                    <div className="align-items-center  callout-color-dark">
                        <div className="padding-100 flex-layout-center-center">
                            <div className="content-header flex-layout-column "> 
                                <div className="content-block width-100">
                                    <p className="callout-text text-white text-align-center">25 years of problem solving with design.<br/> 
                                        Our story of evolution proves that design STILL matters.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-grid-2col-photo flex-layout-column margin-bottom-100 flex-layout-center-center            photo-content-color" style={{height:'715px'}}>
                        <div className="grid-2col-text-photo width-70 margin-top-50 flex-section-align-center">
                            <div className="content-block-why col2-text ">
                                    <div className="subtitle">Surreal Beginnings </div>
                                    <p className="content-text-24 text-white"> WDS started in 1997 under its original name, Surreal Concepts by the husband and wife team, Terri and Michael Waterman. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                                    </p>
                            </div>
                        <div className="col2-photo grid-placeself-center">
                            <img className="container-photo-callout" src={photo_history} alt="WDS history"/> 
                            <p className="caption">Roman Kraft</p>
                        </div>
                    </div>
                </div>
                <div className="flex-layout-section-fixed flex-layout-center-center">
                    <img className="image-size" src={time} alt="time Line"/>
                </div>
                <div className="flex-layout-section-full flex-layout-center-center margin-top-100">
                <div className="content-block-cs">
                        <div className="subtitle">It started with video</div>
                   
                        <div className="content-block-cs">
                            <p className="content-text-18 margin-top-25"> Our first creative tool in the digital world goes back to the Amiga 500. And a video software called live. Michael wouldSet up systems to support the dinosaur age of graphic software. Amiga was one of the great forerunners of user design. Kai’s Power Tools, Bryce. Animation and video production was something we spent a lot of time doing.</p>
                        </div>
                        <div className="subtitle">Then publishing</div>
                   
                        <div className="content-block-cs">
                            <p className="content-text-18 margin-top-25"> In the mid-90s Terri did onsite consulting and published New Drug Applications for the FDA at Zeneca Pharmaceuticals using Interleaf software. Web design was in its infancy, and she joined a web team by 1998, creating intranet websites for different divisions to improve group communication. Knowledge of code was crucial to digital design, and she fostered relationships with other software engineers to learn about their craft in order to assimilate design to their products. 
The first big client landed after incorporating as Surreal Concepts was a label manufacturer that did work for Smithkline Beecham in the consumer division. Labels were printed for Roos Foods, SmithKline, and Boiron Homeopathics.
</p>
                        </div>
                        <div className="subtitle">Investing in skills</div>
                   
                        <div className="content-block-cs">
                            <p className="content-text-18 margin-top-25"> Terri then worked for InvestorForce, provider of investment analytics and reporting solutions for institutional consultants. She redesigned the entire website, meeting aggressive deadlines, and established a successful working relationship with CEO. She initiated a project for the redesign of an acquired company, Alvest. Traveling to NYC, she managed, directed and implemented the site architecture and design, working with a 9-person team of web developers and product managers.
Created different prototypes for different products throughout the site, improved design and introduced better user experience.
Increased knowledge of programming code and quality assurance systems to quickly work effectively with all groups involved.
</p>
                        </div>
                        
                        <div className="subtitle">Solutions for all</div>
                   </div>
                        <div className="content-block-cs">
                            <p className="content-text-18 margin-top-25"> By 2001 Surreal Concepts was focused on building websites and marketing campaigns for small to mid-size companies, ranging from B2Bs to consumer products.</p>
                            <p className="content-text-18">In early 2002, a UX informational site called Web First Aid was created for website design, which included studies done at Stanford University and the Neilson Norman Group, two credible resources in usability, backed with data to support their research.</p>
                            <p className="content-text-18">This site along with the Surreal Concepts website led to a contract with a Pfizer agency to design and organize the largest HCP site at the time. They realized that the same principles of design for small companies were scalable to enterprise levels. Consulting with Pfizer was an opportunity to show that simplicity and efficient communication with strong teamwork helped save Pfizer a half a million dollars
                            </p>
                        </div>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BHQSXijoCVY?controls=0&amp;start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        <div className="content-block-cs margin-top-100">
                        <div className="subtitle">Business UX Begins </div>
                            <div className="content-block-cs">
                                <p className="content-text-18 margin-top-25"> An unexpected change for WDS happened during the Pfizer job. Michael has innate knowledge of not only customers, but businesses. It was noticed that the application being used by the developers was extremely buggy. It causes an unacceptable amount of lost man hours, full story here. Issues were documented and saved Pfizer a lot of money.<p/>
                                <p className="content-text-18">This is one of the many stories that has describes how Surreal Concepts evolved into what WDS is today. The changes and evolution of our services is due to our clients needs.</p>
                                <p className="content-text-18">This was prevalent when tackling design problems and issues with content management systems that didn’t work. Complaints and documentation by Michael  on lost man-hours helped Pfizer to understand the issue and take appropriate action. They replaced the vender, saving and recouping a half a million dollars. Michael has always had an innate sense of business which he applies to his research. Solving business communication issues can solve many of the design issues.</p>
                                </p>
                            </div>
                        </div>
                    <div className="flex-layout-section-full width-100 grey margin-top-50 border-tb-5 flex-layout-center-center" 
                          style={{minHeight: '275px'}}>
                            <p className="callout-text-lg">Solving business communication issues<br/> solves design issues.</p>
                    </div>
                    
                   <div className="flex-layout-section-full  margin-top-100">
                        <div className="flex-layout-column">
                            <div className="title">
                                Lessons Learned 
                            </div>
                            <div className="subtitle margin-top-15">
                                Power of Good personas
                            </div>
                            <div className="content-block-cs margin-top-25">
                                <p className="content-text-18"> Empathy is critical for true change to take place. Finding that connection between user, developers and stakeholders, is the key for success. </p>
                                <p className="content-text-18">At Motorola, the development of the persona, "Sally" - a forty-five year old mother-in-law, was established after researching complaints at the call center. WDS chose this persona because most of the programmers most likely got calls from family members when setting up their modems. </p>
                                <p className="content-text-18 margin-bottom-100">Sally helped bridge the gap, between the developer and customer. </p>

                            </div>
                        </div> 
                            <p className="content-text-48 text-align-center border-top-1 margin-top-25">
                                “Will you be getting a call from your mother-in-law<br/> when she tries to set up this modem?” </p> 
                    `       <p className="caption flex-layout-center border-bottom-1">Our question to the Motorola developers that kept them on track!
                            </p>
                        <div className="flex-layout-column margin-top-100">
                            <div className="subtitle">
                                Design Matters
                            </div>
                            <div className="content-block-cs">
                                <p className="content-text-18"> As in the case with Motorola, WDS followed UX consultants that were not true designers and could not meet the clients or the business needs. </p>
                            </div>
                            <div className="subtitle margin-top-50">
                                Education and Evolution of Services
                            </div>
                            <div className="content-block-cs">
                                <p className="content-text-18"> Listening to customers needs and paying attention to trends in design, services and application is a big reason for our success.  </p>
                            </div>
                            <div className="subtitle margin-top-50">Businesses Needs are as important as User Needs</div>
                            <div className="content-block-cs">
                                <p className="content-text-18"> We learned early that it is critical to understand the business and in turn have the business understand their users.</p>
                            </div>
                            <div className="subtitle margin-top-50 margin-bottom-20">Highlights</div>
                           
                           
                                <ul className="content-text-18"> 
                                    <li>Web First Aid</li>
                                    <li>Norwood Construction</li>
                                    <li>Combat Robot Publications</li>
                                    <li>Motorola</li>
                                    <li>Pfizer</li>
                                    <li>StubHub</li>
                                    <li>Relaunch as WDS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="image-size-100 margin-top-100">
                    <img src={history_3} ></img>
                </div>
                <div className="flex-layout-section-full flex-layout-center-center margin-top-100"> 
                    <div className="title">Our Leaders</div>
                    <div className="container-grid-2col-full margin-top-100 margin-bottom-100 flex-layout-center-center" style={{width: '75%'}}> 
                   
                    <div className="grid-item-2a">
                        <div className="content-block-services flex-layout-row ">
                        <img className="photo-container-xsm" src={mike} alt="Michael Photos"/> 
                        <div className="flex-layout-column">
                            <p className="subtitle margin-left-15">Michael Waterman</p>
                            <p className="margin-left-15"><i>President, Business Consultant, UX/UI designer, Genius</i></p>
                        </div>
                    </div>
                    <div className="content-block-services margin-top-25">
                            <p className="content-text-18"> Michael is the soul along with Terry's design skills. Michael's Design skills are in UI, specifically enterprise applications. He is a creative detailed designer who is passionate about the power of design. Having empathy comes naturally because ever since he started working as a teenager it has always included making the customer happy, through retail, printing, adrking as a teenager it has always included making the customer happy, through retail, printing, advertising, web design, and now product design..
                            Creative detailed designer who is passionate about the power of design. Having empathy comes naturally because ever since he started working as a teenager it has alwng the customer happy, through retail, printing, advertising, web design, and now product design
                            Creative detailed designer who is passionate about the power of design. Having empathy comer since he started working as a teenager it has always included making the customer happy, through retail, printing, advertising, web design, and now product design
                            Creative detailed designer who is passionate about the power of design. Having empathy comes naturally because ever since he started working aager it has always included making the customer happy, through retail, printing, advertising, web design, and now product design..orking as a teenager it has alwng the customer happy, through retail, printing, advertising, web design, and noorking as a teenager it has alwng the customer happy, through retail, printing, advertising, web design, and noorking as a teenager it has alwng the customer happy, through retail, printing, advertising, web design, and noorking as a teenager it has alwng the customer happy, through retail, printing, advertising, web design, and no 
                            </p>
                    </div>
                    </div>
                    <div className="grid-b">
                        <div className="content-block-services flex-layout-row">
                        <img className="photo-container-xsm " src={terri} alt="Terri Photos"/> 
                        <div className="flex-layout-column">
                            <p className="subtitle margin-left-15">Terri Waterman</p>
                            <p className="margin-left-15"><i>Art and Creative Director, UX/UI designer, Humorist</i></p>
                        </div>
                    </div>
                    <div className="content-block-services">
                            <p className="content-text-18 margin-top-25"> An artist’s strength comes from their perspective of life, the inner dialogue. Her perspective is greatly influenced by her hearing loss as a child. Since her outer life became quiet, observations and interpretations were always unique and different.
                            Terri is the heart of WDS, her design sense from fine and graphic art training, humor and design talents has guided and evolved unique design solutions. Her intuitive design skills come from 25+ years of experience in traditional and modern art. Serving as a creative advisory to Michael has enabled both to stay ahead of the design trends and competition. There’s always a way, she says, to make every business unique.
                            Her personal work has intertwined with her professional work as a designer. Creating designs for businesses requires research, empathy and most of all, consistency in their branding. It gave her creativity a powerful purpose.
                            Evolving into a disciplined UX designer created amazing opportunities as a unique visual communicator. 
                            Her greatest joy is when there is a balance of creative flow along with the discipline of design that creates simplicity and inspiration. 
                            BFA, Associates in Visual Communication
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