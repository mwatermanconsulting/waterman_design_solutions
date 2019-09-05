import React, { Component } from 'react' ;
import history from '../images/backgrounds/bg-ourhistory.png'
import motorola_beforeafter from '../images/photos/photo-motorola-beforeafter.png';
import photo_history from '../images/photos/photo-history-s1.png'
import firemen from '../images/graphic-firemen.svg'
import before_after from '../images/photos/photo-history-before-after.png'
import sps from '../images/photos/photo-history-sps.png'
import surreal from '../images/photos/photo-history-surreal-quarter-ad.png'
import stubhub_after_4 from '../images/photos/photo-stubhub-cbt.png';
import wallys from '../images/photos/photo-history-wallys.png'

import norwood from '../images/photos/photo-web-norwood.png';
import wds from '../images/photos/photo-history-wds.png'
import wfaweb from '../images/photos/photo-history-wfa-web.png'
import four from '../images/photos/photo-history-411.png'
import pw from '../images/photos/photo-history-pw.png'
import rdeb from '../images/photos/photo-history-rdeb.jpg'
import taws from '../images/photos/photo-history-taws.png'
import history_3 from '../images/photos/photo-history-s3.png'
import pfizer_logo from '../images/icon-logo-pfizer.svg'; 
import time from '../images/WDS-timeline.png'
import mike from '../images/mike.png';
import terri from '../images/terri.png';
import methodology12 from '../images/photos/photo-methodology-s12.png';
import be from '../images/icon-be-black.svg';
import instagram from '../images/icon-instagram-black.svg';
import didyouknow from '../images/graphic-didyouknow.svg';

class about extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <section className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">Our History</div>
                        <img className="flex-image-container width-100" src={history}  alt="Why WDS background" /> 
                </section>
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text-lg"> 
                    Over 20 years of creating amazing design solutions and experiences.

                    </div>
                </section>
                <section className="grid-callout photo-content-color border-bottom-5" > 
                    <div className="grid-placeself-center content-block-55 margin-tb-100  flex-layout-column">
                        <div className="callout-title">
                             Surreal Beginnings
                        </div>


                        <div className="content-text-18 text-bold margin-top-15" >
                        <p><b>The foundation of everything we do is design</b></p>

                        <p>Since 1997, WDS has been evangelizing the value of design under its original name, Surreal Concepts. Started by the husband and wife team, Terri and Michael Waterman, they began with a simple premise and small list of design services. Our business has evolved along with the digital revolution. We learned and adapted through life's changes modifying our services to match our clients needs. From small businesses to global name brands we used each experience to grow and expand our service offerings. Waterman Design Solutions reflect that growth and new focus. </p>


                        </div>
                    </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={photo_history}  alt="UX" /> 
                    </div>
                </section>
                
                    <image className="flex-layout-section-full flex-layout-center-center margin-top-75">
                        <img className="width-60" src={time} alt="Time Line"/>
                    </image>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full align-items-center">
                <div className="title content-block-55">
                        Our Humble Start</div>
                    <div className="subtitle margin-top-15 content-block-55">
                        It Started with an Idea</div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15">

                        The first time they worked on the Amiga 500, Michael and Terri were fascinated with digital design. With the knowledge and skills that acquired with NewTek Video Toaster, they started a business focused on video production services. One day a client approached them about an Illustrator project for the Franklin Mint, to digitally reproduce portraits of sports figures. They would soon learn Adobe Illustrator and Photoshop and their entrepreneurial spirit took hold and Surreal Concepts was born.</p>
  </div>
                </section>

                

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>
           
             { /*  <section className="flex-layout-section-full align-items-center">
                    <div className="subtitle content-block-55">
                            Publishing Venture</div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15"> 
                            In the mid-90s Terri did onsite consulting and published New Drug Applications for the FDA at Zeneca Pharmaceuticals using Interleaf software. Web design was in its infancy, and she joined a web team by 1998, creating intranet websites for different divisions to improve group communication. Knowledge of code was crucial to digital design, and she fostered relationships with other software engineers to learn about their craft in order to assimilate design to their products.</p>
                    <div className="ltgrey2">
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25" src={seroquel} alt="Seroquel"/><br></br>
                            <i>Seroquel</i></p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25" src={chemtech} alt="Chemtech"/><br></br>
                            <i>Chemtech</i></p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25" src={rdeb} alt="RDEB"/><br></br>
                            <i>RDEB</i></p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25" src={noticeboards} alt="AZ Noticeboards"/><br></br>
                            <i>AZ Noticeboards</i></p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25" src={sps} alt="SPS"/><br></br>
                            <i>SPS</i></p>
                            <p className="content-text-18">
                            The first big client Surreal Concepts landed after incorporating as a C corporation was a label manufacturer Apogee Industries. They printed flexographic labels for Smithkline Beecham, Roos Foods, SmithKline, and Boiron Homeopathics. </p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25" src={wallys} alt="Wally's"/><br></br>
                            <i>Wally's</i></p>
                        </div>
                    </div>
        </section> 

                     <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                     <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            Investing in Digital Design Skills</div>
                            <p className="content-text-18 content-block-55 margin-top-15"> 
                            Terri then worked for InvestorForce, provider of investment analytics and reporting solutions for institutional consultants. She redesigned the entire website, meeting aggressive deadlines, and established a successful working relationship with CEO. She initiated a project for the redesign of an acquired company, Altvest. Traveling to NYC, she managed, directed and implemented the site architecture and design, working with a 9-person team of web developers and product managers. Designing and developing different prototypes for different products throughout the site, improving the design and introducing better user experience. This project increased knowledge of programming code and quality assurance systems to quickly work effectively with all groups involved.</p>
                    </section>*/}


                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Graphic Design
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Labels and SmithKline
                        </div>
                       
                        <p className="float-left content-text-18 content-block-55 margin-top-15">
                            <p className="float-right margin-top-15 caption"><img className="width-100 margin-top-20per" src={wallys} alt="Wally's"/><br></br>
                            <i>Roos Foods Wally's</i></p>
                            Surreal Concepts incorporated in 1997 and started out doing graphic design. They developed a partnership with a flexographic label company called Apogee, designing and  preparing documents for the printing press plates. They also introduced a  printing strategy and set up a schedule that supported the client's needs. Clients here included SmithKline and Boiron Homeopathy. </p>
                    </section>

                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Animations and Corporate Video
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Flash, AfterEffects and Video Production
                        </div>
                       
                        <p className="float-left content-size-21 content-block-55 margin-top-15">
                             <div className="float-right video" >
                            <iframe className="margin-left-15" style={{marginLeft:'5%'}} width="560" height="315" src="https://www.youtube-nocookie.com/embed/BHQSXijoCVY?rel=0 controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                        </div>
                            The number of services increased in 1999 after learning digital video programs such as Adobe Premiere, Adobe AfterEffects and Apple Final Cut Pro. They developed and designed flash websites and flash banner ads, learned animation techniques and video compression for the web. They learned these skills to meet the demands of clients like InvestorForce and Altvest, delivering high quality animations, banners ads, products, corporate videos. and marketing material. </p>
                    </section>

                    
                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div> 

                    <section className="flex-layout-section-full align-items-center hrline-spacing">
                        <div className="title content-block-55">
                            The Digital Age
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Websites, Flash and Digital Design
                        </div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-25"> 
                             Early 2000 was a transition year for Surreal Concepts. The world was changing and nothing was changing faster than marketing with the advent of the internet. They fully embraced the digital revolution, becoming experts in everything Adobe, expanding  Photoshop and Illustrator skills to adapt and keep up with the digital world.
                            </p> 

                             <p className="content-text-18 margin-top-25">     
                             Adding HTML, CSS and Flash, the two partners turned their attention to the web, using their new skills to design and develop websites. The goal was to help small business owners to fight off big box business competition by bringing a level of professionalism to their online presence. </p>

                        <section className="grid-cs-card flex-layout-center-center flex-layout-section-full">   
                            <p className="cs-card-1 margin-top-15 caption"><img className="container-photo-100 margin-top-25 " src={four} alt="411"/><br></br>
                            <i></i>SavTraveler</p>
                            <p className="cs-card-2 margin-top-15 caption"><img className="container-photo-100 margin-top-25 " src={pw} alt="Pearly Whites"/><br></br>
                            <i>Pearly Whites</i></p>
                            <p className="cs-card-3 margin-top-15 caption"><img className="container-photo-100 margin-top-25 " src={taws} alt="TAWS"/><br></br>
                            <i>TAWS</i></p>
                            <p className="cs-card-4 margin-top-15 caption"><img className="container-photo-100 margin-top-25 " src={norwood} alt="Norwood Construction"/><br></br>
                            <i>Norwood Construction</i></p>
                            
                       
                        </section>
                            <p className="align-item-center margin-top-15 caption"><img className="container-photo-100 margin-top-25 " src={before_after} alt="Before and After"/><br></br>
                            <i>Expanding our Design Solutions to Meet our Clients Needs</i></p>
                            
                        </div>
                    </section>

   
                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>
                    
                    <section className="flex-left flex-layout-section-full align-items-center">
                        <div className="float-left flex-layout-center-center content-block-55">
                            <div className="title">
                                UX Design
                            </div>
                        <div className="subtitle margin-top-15">
                            Web First Aid
                        </div>
                        
                        <div className="margin-top-15">
                            <div className="float-right">
                                    <img className="container-photo-callout"  src={wfaweb}  alt="Web First Aid" /> 
                            </div>
                            <p className="content-text-18">Surreal Concepts' design solutions were successful. But They starting thinking, what do the people that are interacting with the websites think? Are our web designs resonating with users? <br></br>They set out to research how people interacted with websites by asking questions:<br></br> What were their needs and expectations? <br></br>How did people interact with a web page compared to traditional ways? <br></br>In 2003, a study was released by B.J. Fogg and his team at Stanford University releasing the first study on human interaction on websites. Observing peoples eye movements, click behavior and user experience. This study changed not not only how they designed, but our company focus. </p>
                            <p className="content-text-18">Surreal Concepts' design solutions were successful. But They starting thinking, what do the people that are interacting with the websites think? Are our web designs resonating with users? <br></br>They set out to research how people interacted with websites by asking questions:<br></br> What were their needs and expectations? How did people interact with a web page compared to traditional ways? In 2003, a study was released by B.J. Fogg and his team at Stanford University releasing the first study on human interaction on websites. Observing peoples eye movements, click behavior and user experience. This study changed not not only how they designed, but the company focus. </p>

                            <p className="content-text-18">In early 2005, Surreal Concepts released a website called WebFirstAid, based on research done by Stanford University, which provided a friendly version of  high level educational information about what makes a website work. Writing in a user friendly style with bright colors,  the goal was to enlighten  and inspire businesses about the value of understanding web users. Michael repurposed all the information for a series of talks on UX and Design. </p> 
                        </div> 
                    </div>  
                    </section>

                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                    <section className="flex-left flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            UX and Business Design Solutions
                        </div>
                        <div className="subtitle margin-top-15 content-block-55">
                            The Pfizer Pro Initiative
                        </div>
                        
                        <div className="content-block-55">
                        <p className="content-text-18 content-block-55 margin-top-15">
                        
                         The WebFirstAid talks lead to a connection with Pfizer In 2008, Surreal Concepts embedded Michael into the project.  
                         
                         
                         <img className="float-right" src={pfizer_logo} style={{width: '40%'}}  alt="StubHub logo" /> 
                       
                         The project, Pfizer Pro, the largest HCP website at the time. Michael was contracted for the UX Design, developing content strategies, front-end development and bi-weekly updates. During the engagement, Michael's business understanding helped Pfizer by documenting a business problem they had with a vendor. The current CMS program and support was costing Pfizer thousands of dollars a week on lost man hours and extremely poor customer service. This documentation gave Pfizer the knowledge they needed to change vendors and recoup their money.  </p> 

                        <p className="content-text-18"><a href="../case_study_4">Read full case study</a></p>
                            </div>
                    </section>

                    <section className="grid-2col-photo-text align-items-center grey margin-top-50 border-tb-5">
                        
                              <img src={firemen}  className="col2-photo width-70 justify-self-end margin-tb-50" alt="Wds puts out the fires"/> 
                              <div className="callout-text-lg text-align-center marginleft-minus300" > 
                            WDS has strategies to put our your business fires!</div>
                        
                    </section>

                   <section className="flex-layout-section-full align-items-center  margin-top-100">
                        <div className="title content-block-55">
                            Product Design
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            UX and Business Design Solutions - Motorola
                        </div>
                    <div className="content-block-55 margin-top-25">
                        
                        <p className="content-text-18">
                            Surreal Concepts started to make a name for itself for its design and business solutions. Motorola had a large problem that they could not solve with their modem product line. For years the return rate on their line of modems was rising and call center costs were out of control. After two failed attempts, Surreal Concepts was contracted for UX design, UI design and development to provide business solutions. This was a complex product user interface and tested the scalability of its UX methodology.  
                        </p>

                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-100" src={motorola_beforeafter} alt="Questions"/> 
                        </div>     

                        <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p>
                    </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Big Data 
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Data Visualization Applications - StubHub
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18"> 
                             StubHub faced the same problem that Motorola did, wasting time and money on contracted UI developers and not UX designers. They didn't understand that the user must be understood, then  problems can be solved with empathy. StubHub had a problem with user traction and retention on their internal business platform. With one last chance to get it right, StubHub turned to Surreal Concepts for answers.  </p>
                        
                            <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p> 

                            <img className="photo-container-cs-sb1" src={stubhub_after_4} alt="Show me the Numbers"/>
                        </div>    
                    </section>
                    
                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Surreal Evolving
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Waterman Design Consultants
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18"> 
                             After 22 years of business Terri and Michael  evolved to the point of outgrowing Surreal Concepts. After 4 years away from the business, Michael knew it was time to share his knowledge, strategies and methodologies with new and old clients. Surreal Concepts no longer fit with the new services offered and needed to change strategies, dedicating to helping businesses with the value of design. The new services include  design,  business strategies, talks and workshops. Michael has navigated successfully to enterprise businesses. Under the new name WDS, the team looks forward to changing the design perspective for all sized businesses. </p>
                        
                            <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p> 

                            <img className="photo-container-cs-sb1" src={wds} alt="Show me the Numbers"/>
                        </div>    
                    </section>
                

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title text-align-center content-block-55 margin-top-50">
                            Creating Design Solutions That Matter
                        </div>
                        <div className="subtitle text-align-center  content-block-55 margin-top-15">
                            Our Accomplishments
                        </div>   
                 </section>       
                    
                <div className="margin-top-50">
                    <img className="width-100" src={history_3} ></img>
                </div>
                <section className="float-left align-items-center margin-top-50 flex-layout-column">
                <div className="title margin-bottom-50 ">
                        Our Leaders 
                    </div>
                    <div className="title content-block-60">
                        Michael Waterman 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                    President, Business Consultant, UX/UI designer, Genius
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-50">
                        <div className="float-right">
                            <img className=""  src={mike}  alt="Michael Waterman" /> 
                        </div>
                        <p className="content-text-18"> Michael was raised in a creative family and spent his childhood creating, designing and drawing. As Michael matured he began a career in retail. His friendly and caring nature made him a natural at customer service and he quickly climbed the corporate ladder becoming a regional manager in his early twenties. </p>

                            <p className="content-text-18">
                            Life changed after he married Terri. She thought Michael’s talents were being wasted in retail and being an artist herself she inspired him to revisit his creativity.</p>

                            <p className="content-text-18">
                            In the early nineties, Michael left retail and took a year off to learn computers and digital design and video editing. Michael learned Photoshop, version 3.5, Illustrator and video editing. Michael having the entrepreneurial spirit and wanted to start his own design company. Along with Terri they choose a name that was very fitting for them at the time, Surreal Concepts. The name was chosen to portray the message that our designs are different and will help you stand out. </p>

                            <p className="content-text-18">They needed a portfolio. He decided to create a series of coupons, like those of in penny savers They all got in the mail. He made up names, logos and designed a dozen coupons and developed a portfolio. At his first interview he got a job as a contractor under Surreal Concepts. This was the start of Surreal Concepts and his design career.
                            </p>

                            <p className="content-text-18">As soon as the internet boom happened, Michael learned how to code in HTML, CSS and Flash and Surreal Concepts shifted focus to website design. While designing sites a thought occurred to Michael; Do the users of websites They design and develop have an enjoyable experience? He began researching what people expected from the website experience. He took his research and new found knowledge and designed, wrote and developed a website call web first aid.</p> 

                            <p className="content-text-18">Web First Aid was an information site written for the average user. This site was developed before UX was a thing. The only other proponent of the user experience was Nielson, who’s idea of a website back then was just text on a white background. The creation of web first aid opened new opportunities for Surreal Concepts and lead to a contract with Pfizer. </p>

                            <p className="content-text-18">The Pfizer name gave Michael and Surreal Concepts the credibility needed to land the other big names such as Motorola and StubHub. In 2014 Michael left the company to pursue a full time position with OsiSoft as the lead UX/UI designer. </p>

                            <p className="content-text-18">Michael's entrepreneurial spirit got the best of him and he left early last year to rebrand Surreal Concepts to WDS. Applying all his experience to help, guide and support businesses with their design needs. Bringing his successful design strategies and UX methodology to reach all businesses. Michael has witnessed the design needs in large companies, developing strategies and talks. Michael believes that now is the best time for the business because empathic design are more critical to business survival than ever before. Michael has a vision and renewed passion that will make WDS the design leader. </p>
                    </div>
                </section>
                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Terri Waterman 
                    </div>
                    <div className="subtitle content-block-60 margin-top-50">
                    Art and Creative Director, UX/UI designer, Humorist
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className=""  src={terri}  alt="Terri" /> 
                        </div>
                        <p className="content-text-18 margin-top-25"> "An artist’s strength comes from their perspective of life, the inner dialogue." <br></br>Terri's perspective is greatly influenced by her hearing loss as a child. Since her outer life became quiet, observations and interpretations were always unique and different. She always came from the perspective that if everyone is running in one direction, she's going the opposite way. Her observations taught her that following the crowd was never a good idea to foster creativity. This enables her unique approach. Her fine art training has taught her the importance of staying true to herself. <br></br>A deep thinker, she has always been curious about how humans behave and respond to life, and found that design was about communicating simply so that everyone understood. The cartooning of this website was to convey what WDS is about - good old-fashioned customer service, something that was very prevalent during the 1950s.
                        <br></br>
                        Her experience working with Michael and clients have taught her that design has a purpose of having empathy, and users ALWAYS embrace designs that take them into consideration. </p><p className="subtitle">Design is a guide to help the user's eye see where they're going, intuitively and seamlessly. Terri's passion for helping others with her talent is the only motivation she needs to be passionate about their goals.</p>


                           <p className="content-text-18 margin-top-25">As the heart of WDS, Terri's intuitive design skills come from 25+ years of experience in traditional and modern art. This combination of skills has served her well in all her artistic endeavors. 
                            
                            Serving as a creative advisory to Michael has enabled both to stay ahead of the design trends and competition. There’s always a way, she says, to make every business unique. 
                            Her personal work has intertwined with her professional work as a designer. 
                            Evolving into a disciplined UX designer created amazing opportunities as a unique visual communicator. 
                            Her greatest joy is when there is a balance of creative flow along with the discipline of design that creates simplicity and inspiration. </p>
                            <p className="content-text-18 margin-top-25"><i>Bachelor of Fine Arts<br></br>Associates in Visual Communication<br></br>
                            See her artwork here!<br></br><br></br>
                            <a href="https://www.behance.net/terriwatermanart"><img style={{width:'50px', marginRight:'15px'}} src={be}  alt="Behance" /></a>
                            <a href="https://www.instagram.com/terriwaterman"><img style={{width:'50px'}} src={instagram}  alt="Instagram" /></a> </i>
                            </p>
                    </div>
                </section>
                
           
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="content-block-55 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text text-white text-align-center">  Surreal Concepts was always ahead of the trends, using the now-popular branding colors blue and orange in the early 2000s.</p>
                    </div>
                </div>
            </section>
            
            </div>
                       
        )
    }
}

export default about;