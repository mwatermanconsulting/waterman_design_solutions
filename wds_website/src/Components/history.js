import React, { Component } from 'react' ;
import history from '../images/backgrounds/bg-ourhistory.png'
import photo_history from '../images/photos/photo-history-s1.png'
import firemen from '../images/graphic-firemen.svg'
import before_after from '../images/photos/photo-history-before-after.png'
import chemtech from '../images/photos/photo-history-chemtech.png'
import lessons from '../images/photos/photo-history-lessons.png'
import noticeboards from '../images/photos/photo-history-noticeboards.png'
import seroquel from '../images/photos/photo-history-seroquel.png'
import sps from '../images/photos/photo-history-sps.png'
import surreal from '../images/photos/photo-history-surreal-quarter-ad.png'
import wallys from '../images/photos/photo-history-wallys.png'
import wfa from '../images/photos/photo-history-wfa.png'
import four from '../images/photos/photo-history-411.jpg'
import asd from '../images/photos/photo-history-asd.png'
import pw from '../images/photos/photo-history-pw.png'
import rdeb from '../images/photos/photo-history-rdeb.jpg'
import taws from '../images/photos/photo-history-taws.png'
import history_3 from '../images/photos/photo-history-s3.png'
import time from '../images/WDS-timeline.png'
import mike from '../images/mike.png';
import terri from '../images/terri.png';

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
                    <div className="grid-placeself-center content-block-75 margin-tb-100  flex-layout-column">
                        <div className="callout-title margin-top-15">
                             Surreal Beginnings
                        </div>
                        <div className="callout-text padding-20 text-align-left margin-top-15" >
                        Since 1997 WDS has been evangelizing design under its original name, Surreal Concepts. Started by the husband and wife team, Terri and Michael Waterman, they began with a simple premise and small list of design services. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                        </div>
                    </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={photo_history}  alt="UX" /> 
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55 margin-top-75">
                        Who is WDS?
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        The Power of Two
                    </div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15"> 
                        WDS is a UX/UI design consultancy agency lead by the husband and wife team Terri and Michael Waterman. They have built the business and have been advocates for design for over 20 years. Growing the business from a small design agency servicing small businesses to the business it is today, it serves global brands offering a full range of design solutions. </p>
                    </div>
                </section>
                    <image className="flex-layout-section-fixed flex-layout-center-center">
                        <img className="width-60" src={time} alt="Time Line"/>
                    </image>
                <section className="flex-layout-section-full align-items-center">
                    <div className="subtitle content-block-55">
                        It started with video</div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15">
                        Our first creative tool in the digital world goes back to the Amiga 500 and the first digital video solution NewTek Video Toaster. Michael would set up systems to support the dinosaur age of graphic software. Amiga was one of the great forerunners of user design with Kai’s Power Tools, Bryce. Animation and video production was something we spent a lot of time doing.</p>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
           
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
        </section> */}

                     <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                     <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            Investing in Digital Design Skills</div>
                            <p className="content-text-18 content-block-55 margin-top-15"> 
                            Terri then worked for InvestorForce, provider of investment analytics and reporting solutions for institutional consultants. She redesigned the entire website, meeting aggressive deadlines, and established a successful working relationship with CEO. She initiated a project for the redesign of an acquired company, Altvest. Traveling to NYC, she managed, directed and implemented the site architecture and design, working with a 9-person team of web developers and product managers. Designing and developing different prototypes for different products throughout the site, improving the design and introducing better user experience. This project increased knowledge of programming code and quality assurance systems to quickly work effectively with all groups involved.</p>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            UX Offerings</div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-25"> 
                            By 2001 Surreal Concepts was focused on building websites and marketing campaigns for small to mid-size companies, ranging from B2Bs to consumer products.</p>

                        <div className="ltgrey2">   
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25 " src={four} alt="411"/><br></br>
                            <i></i>SavTraveler</p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25 " src={pw} alt="Pearly Whites"/><br></br>
                            <i>Pearly Whites</i></p>
                            <p className="margin-top-15 caption"><img className="container-image-500 margin-top-25 " src={taws} alt="TAWS"/><br></br>
                            <i>TAWS</i></p>
                        </div>
                            <p className="content-text-18">
                            In early 2002, a UX informational site called Web First Aid was created for website design, which included studies done at Stanford University and the Neilson Norman Group, two credible resources in usability, backed with data to support their research.</p>
                            <p className="content-text-18">
                            This site along with the Surreal Concepts website led to a contract with a Pfizer agency to design and organize the largest HCP site at the time. They realized that the same principles of design for small companies were scalable to enterprise levels. Consulting with Pfizer was an opportunity to show that simplicity and efficient communication with strong teamwork helped save Pfizer a half a million dollars.
                            </p>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle text-align-center content-block-55">
                            Our First Youtube Video</div>
                        <div classname="video content-block-55">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BHQSXijoCVY?rel=0 controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe></div>
                    </section>
                    
                        
                    <section className="flex-layout-section-full align-items-center margin-top-75">
                        <div className="subtitle content-block-55">
                            Business Design Solutions - Pfizer
                        </div>
                        <div className="content-block-55">
                                <p className="content-text-18 margin-top-25"> An unexpected change for WDS happened during the Pfizer job. Michael has innate knowledge of not only customers, but businesses. It was noticed that the application being used by the developers was extremely buggy. It causes an unacceptable amount of lost man hours. Issues were documented and saved Pfizer a lot of money.</p>
                                <p className="content-text-18">This is one of the many stories that has describes how Surreal Concepts evolved into what WDS is today. The evolution of our services followed our clients' needs. For Pfizer, it was  tackling  problems and issues with content management systems that didn’t work. Complaints and documentation by Michael  on lost man-hours helped Pfizer to understand the issue and take appropriate action. They replaced the vender, recouping a half a million dollars. Michael has always had an innate sense of business which he applies to his research. Solving business communication issues can solve many of the design issues.</p>

                                <p className="content-text-18"><a href="../case_study_4">Read full case study</a></p>
                            </div>
                    </section>

                    <section className="grid-2col-photo-text align-items-center grey margin-top-50 border-tb-5">
                        
                              <img src={firemen}  className="col2-photo width-70 justify-self-end margin-tb-50" alt="Wds puts out the fires"/> 
                              <div className="col2-text callout-text-white" > 
                            WDS puts out a lot of fires for businesses!</div>
                        
                    </section>

                    
                   <section className="flex-layout-section-full align-items-center  margin-top-100">
                        <div className="title content-block-55">
                            Empathic Designers - Motorola
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            UX Methodology is Tested
                        </div>
                    <div className="content-block-55 margin-top-25">
                        <p className="content-text-18"> 
                            WDS has a basic understanding Empathy is critical for true change to take place. Finding that connection between user, developers and stakeholders, is the key for success. </p>

                        <p className="content-text-18">
                            WDS was contracted to figure out the issues facing their high end modem line. By following the golden rule and walking in the shoes of the human being using this product. WDS was able to provide design solution for a complex set of problems and issues.WDS running the whole UX design project for its high end modems, and communication development.</p>

                        <p className="content-text-18">
                            It was the first time we applied our methodology on an enterprise level. Before we were providing design solution for websites and we were not finding website to be a UX challenge. The move to applications allowed us to grow our UX and design knowledge.
                        </p>

                        <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p>
                    </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Big Data 
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Data Visualization Applications- StubHub
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18"> 
                            As in the case with Motorola, WDS followed UX consultants that were not true designers and could not meet the clients or the business needs. Data visualization happened with StubHub and solving their dilemma with user traction. User retention went from 1% to 96% in 6 months under the pressure of losing the reporting tool project team. </p>
                        
                            <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p> 
                        </div>    
                    </section>
                            <div className="subtitle margin-top-50">
                    </div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Creating Design Solutions That Matter
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
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

                            <p className="content-text-18">We needed a portfolio. He decided to create a series of coupons, like those of in penny savers we all got in the mail. He made up names, logos and designed a dozen coupons and developed a portfolio. At his first interview he got a job as a contractor under Surreal Concepts. This was the start of Surreal Concepts and his design career.
                            </p>

                            <p className="content-text-18">As soon as the internet boom happened, Michael learned how to code in HTML, CSS and Flash and Surreal Concepts shifted focus to website design. While designing sites a thought occurred to Michael; Do the users of websites we design and develop have an enjoyable experience? He began researching what people expected from the website experience. He took his research and new found knowledge and designed, wrote and developed a website call web first aid.</p> 

                            <p className="content-text-18">Web First Aid was an information site written for the average user. This site was developed before UX was a thing. The only other proponent of the user experience was Nielson, who’s idea of a website back then was just text on a white background. The creation of web first aid opened new opportunities for Surreal Concepts and lead to a contract with Pfizer. </p>

                            <p className="content-text-18">The Pfizer name gave Michael and Surreal Concepts the credibility needed to land the other big names such as Motorola and StubHub. In 2014 Michael left the company to pursue a full time position with OsiSoft as the lead UX/UI designer. </p>

                            <p className="content-text-18">Michael entrepreneurial spirit got the best of him and he left early last year rebrand Surreal Concepts to WDS and apply his newfound business design knowledge. Michael believes that now is the best time for the business because empathic design are more critical to business survival than ever before. Michael has a vision and renewed passion that will make WDS the design leader. </p>
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