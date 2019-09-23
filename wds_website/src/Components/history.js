import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import history from '../images/backgrounds/bg-ourhistory.png'
import motorola_beforeafter from '../images/photos/photo-motorola-beforeafter.png';
import photo_history from '../images/photos/photo-history-s1.png'
import firemen from '../images/graphic-firemen.svg'
import before_after from '../images/photos/photo-history-before-after.png'
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
            <div>
            <Helmet>
                <meta name="description" content="WDS has been creating amazing design solutions and experiences for products, applications, print and websites for over 20 years." />
                <meta charSet="utf-8" />
                <title>The History of WDS</title>
                <link rel="canonical" href="http://watermandesignsolutions/history" />
            </Helmet>
            <div className="flex-layout-column"> 
                <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        The History of WDS
                    </div>
                        <img className="flex-image-container width-100" src={history}  alt="Case Studies" />     
                </section>
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text-lg"> 
                    WDS has been creating amazing design solutions and experiences for products, applications, print and websites for over 20 years.

                    </div>
                </section>
                <section className="grid-callout photo-content-color border-bottom-5" > 
                    <div className="grid-placeself-center content-block-55   flex-layout-column">
                        <div className="callout-title">
                             Surreal Beginnings
                        </div>


                        <div className="content-text-18 text-bold margin-top-15" >
                        <p><b>The foundation of everything is Design</b></p>

                        <p>Since 1997, WDS has been evangelizing the value of design under its original name, Surreal Concepts. Started by the husband and wife team, Terri and Michael Waterman, they began with a simple premise and small list of design services. Their business has evolved alongside the digital revolution, adapting and modifying their services to match their client needs. From small businesses to global name brands, each experience help them to grow and expand service offerings. Waterman Design Solutions reflect that growth with a new focus. </p>


                        </div>
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
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

                        The first time they worked on the Amiga 500, Michael and Terri were fascinated with digital design. With the knowledge and skills that they acquired with the digital video software NewTek Video Toaster, they started a business that focused on video production services. One day a client approached them about an Illustrator project for the Franklin Mint, to digitally reproduce portraits of sports figures. They Became experts in Adobe Illustrator and Photoshop and that sparked their entrepreneurial spirit and Surreal Concepts was born.</p>
  </div>
                </section>

                

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Graphic Design
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Labels and SmithKline
                        </div>
                       
                        <p className="float-left content-text-18 content-block-55 margin-top-15">
                            <p className="float-right margin-top-15 caption">
                                <img className="width-100 margin-top-20per" src={wallys} alt="Wally's"/><br></br>
                            <i>Roos Foods Wally's</i></p>
                            Surreal Concepts was incorporated in 1997. They developed a partnership with a flexographic label company, Apogee Industries, designing and preparing documents for the printing press. They also introduced a printing strategy implementing a schedule that supported the client's needs and eliminating missed deadlines. Clients supported at Apogee included SmithKline and Boiron Homeopathy. </p>
                    </section>
                    
                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div> 

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            The Digital Age
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Websites, Flash and Digital Design
                        </div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-25"> 
                             Early 2000 was a transition year for Surreal Concepts. The world was changing and nothing was changing faster than marketing with the advent of the Internet. Surreal Concepts fully embraced the digital revolution, becoming experts in everything Adobe, expanding Photoshop and Illustrator skills.
                            </p> 

                             <p className="content-text-18 margin-top-25">     
                             Adding HTML, CSS and Flash skills, the two partners turned their attention to the web, designing and developing websites. Their goal was to help small business owners through design to fight off big box business competition by bringing a level of professionalism to their online presence. </p>

                        <section className="grid-cs-card-history flex-layout-center-center flex-layout-section-full margin-top-50">   
                            <p className="cs-card-1 margin-top-15 caption"><img className="container-photo-callout margin-top-25 " src={four} alt="411"/><br></br>
                            <i></i>SavTraveler</p>
                            <p className="cs-card-2 margin-top-15 caption"><img className="container-photo-callout margin-top-25 " src={pw} alt="Pearly Whites"/><br></br>
                            <i>Pearly Whites</i></p>
                            <p className="cs-card-3 margin-top-15 caption"><img className="container-photo-callout margin-top-25 " src={taws} alt="TAWS"/><br></br>
                            <i>TAWS</i></p>
                            <p className="cs-card-4 margin-top-15 caption"><img className="container-photo-callout margin-top-25" src={norwood} alt="Norwood Construction"></img><br></br>
                            <i>Norwood Construction</i></p>
                       
                        </section>
                            <p className="align-item-center margin-top-15 caption"><img className="container-photo-callout margin-top-25 " src={before_after} alt="Before and After"/><br></br>
                            <i>Expanding  design solutions to meet  client needs</i></p>
                            
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
                                    <img className="container-photo-100"  src={wfaweb}  alt="Web First Aid" /> 
                            </div>
                            <p className="content-text-18">Surreal Concepts' design solutions were successful. But they starting asking themselves, "What do the people that are interacting with the websites think?" <br></br>"Are our web designs resonating with users?" <br></br>They set out to research how people interacted with websites by asking questions:<br></br> What were their needs and expectations? <br></br>How did people interact with a web page compared to traditional printed materials? <br></br>In 2003, a study was released by B.J. Fogg and his team at Stanford University revealing the first study on human interaction on websites. The study consisted of user observations of eye movements, click behavior and user interactions. This study changed not not only how they designed, but their entire focus. </p>
                        

                            <p className="content-text-18">In early 2005, Surreal Concepts released a website called WebFirstAid, based on research done by Stanford University, providing a friendly version of the high level educational information contained in the Stanford study. Writing in a user friendly style with bright colors, the goal was to enlighten and inspire businesses about the value of UX through the eyes of the user. Michael repurposed all the information for a series of talks on UX and Design. </p> 
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
                        <p className="content-text-18  margin-top-15">
                        
                         The WebFirstAid talks lead to a connection with Pfizer In 2008, and Surreal Concepts embedded Michael into the project.  
                         
                         
                         <img className="float-right visibility width-40" src={pfizer_logo}   alt="Pfizer logo" /> 
                       
                         The project, Pfizer Pro, was the largest HCP website at the time. Michael was contracted for the UX Design,  content strategies, front-end development and bi-weekly updates. During the engagement, Michael's business understanding helped Pfizer by documenting a business problem they had with a vendor. The current CMS program and support was costing Pfizer thousands of dollars a week on lost man hours. This documentation gave Pfizer the knowledge they needed to change vendors and recoup their money.  </p> 

                        <p className="content-text-18"><a href="../case_study_4">Read full case study</a></p>
                            </div>
                    </section>

                    <section className="grid-2col-photo-text align-items-center grey margin-top-50 border-tb-5">
                        
                              <img src={firemen}  className="col2-photo width-70 justify-self-end margin-tb-50" alt="Wds puts out the fires"/> 
                              <div className="callout-text-lg text-align-center marginleft-minus300" > 
                            WDS has strategies to put out your business fires!</div>
                        
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
                            Surreal Concepts started to make a name for itself for its design and business solutions. After the Pfizer contract was completed Surreal was contracted by Motorola.  Motorola had a large problem that they could not solve with their modem product line. For years the return rate on their line of modems was rising and call center costs were out of control. After two failed attempts to fix this, Surreal Concepts was contracted for UX design, UI design and development to provide business solutions. This was a complex product user interface and tested the scalability of its UX methodology.  
                        </p>

                            <p className="content-text-18"><a href="../case_study_1">Read full case study</a></p>

                        <div className="container-image-block flex-layout-center-center flex-layout-column margin-top-50">
                            <img className="photo-container-cs-sb1 width-100" src={motorola_beforeafter} alt="Questions"/> 
                        </div>     
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
                             StubHub faced the same problem as Motorola, wasting time and money on contracted UI developers and not UX designers. They didn't understand that  these  problems can be solved with empathy for the user. StubHub had a problem with user traction and retention on their internal business platform. With one last chance to get it right, StubHub turned to Surreal Concepts for answers.  </p>
                        
                            <p className="content-text-18"><a href="../case_study_2">Read full case study</a></p> 

                            <img className="photo-container-cs-sb1 margin-top-15" src={stubhub_after_4} alt="Show me the Numbers"/>
                        </div>    
                    </section>
                    
                    <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Surreal Evolving
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Waterman Design Solutions
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18"> 
                             After 22 years of business Terri and Michael evolved to the point of outgrowing Surreal Concepts. After 4 years away from the business, Michael knew it was time to share his knowledge, strategies and methodologies he gained over the years. Surreal Concepts no longer fit with the new services or todays market. Business needs have changed over the years and competition in the digital space is at an all time high. Businesses today need design support and education on the value of design. Their new services include design, business strategies, talks and workshops. Michael has navigated successfully to enterprise businesses, and under the new name Waterman Design Solutions, the team looks forward to changing the design perspective for all sized businesses. </p>

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
                            <img className="width-250"  src={mike}  alt="Michael Waterman" /> 
                        </div>
                        <p className="content-text-18"> Michael was raised in a creative family and spent his childhood creating, designing and drawing. As Michael matured he began a career in retail. His friendly and caring nature made him a natural at customer service and he quickly climbed the corporate ladder becoming a regional manager in his early twenties. </p>

                            <p className="content-text-18">
                            Life changed after he married Terri. She thought Michael’s talents were being wasted in retail and being an artist herself she inspired him to revisit his creativity.</p>

                            <p className="content-text-18">
                            In the early nineties, Michael left retail and took a year off to learn computers and digital design and video editing. He gained skills in Photoshop v. 3.5, Illustrator and video editing. Michael, having the entrepreneurial spirit, wanted to start his own design company. Along with Terri they choose a name that was very fitting for them at the time, Surreal Concepts. The name was chosen to portray the message that our designs are different and will help you stand out. </p>

                            <p className="content-text-18"> Michael then created a series of "penny saver" mailer coupons, creating fictitious names, logos and designs for a dozen coupons to develop a portfolio. His first interview he got a job as a subcontractor under the Surreal Concepts name. This was the start of his design career.
                            </p>

                            <p className="content-text-18">As soon as the internet boom occurred, Michael learned how to code in HTML, CSS and Flash and Surreal Concepts shifted its focus to website design. One day while looking at a site they designed a thought occurred to him, "Do the users of websites They design and develop have an enjoyable experience?". He began researching about user expectations and the ideal website experience. He took his research and new found knowledge and designed, wrote and developed a website call WebFirstAid.</p> 

                            <p className="content-text-18">WebFirstAid was an information site written for the average user. This site was developed before UX was a thing. The only other proponent of the user experience was Nielson Norman Group, who’s idea of a website back then was just text on a white background. The creation of web first aid opened new opportunities for Surreal Concepts that lead to a contract with Pfizer. </p>

                            <p className="content-text-18">The Pfizer name gave Michael and Surreal Concepts the credibility needed to land the other big names such as Motorola and StubHub. In 2014 Michael left the company to pursue a full time position with OsiSoft as the lead UX/UI designer. </p>

                            <p className="content-text-18">Michael's entrepreneurial spirit got the best of him and he left in  2018 to rebrand Surreal Concepts to Waterman Design Solutions, applying  his experiences to help, guide and support businesses with their design needs. He brings his successful design strategies and UX methodology to reach all businesses. Michael has witnessed the design needs in large companies, and has developed strategies that are beneficial and necessary for success. Michael believes that now is the best time for the new business because empathic design are more critical to business survival than ever before. <br></br>Michael has a vision and renewed passion that will make WDS the design leader. </p>
                    </div>
                </section>
                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Terri Waterman 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                    Art and Creative Director, UX/UI designer, Humorist
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        
                        <p className="content-text-18"> <b>"I aim to inspire.</b>" <br></br>Terri's perspective is greatly influenced by her hearing loss as a child. Since her outer life became quiet, observations and interpretations were always unique and different. Her observations taught her that following the crowd was never a good idea to foster creativity, which enables her unique approach. Her fine art training has taught her the importance of staying true to herself. <div className="float-right">
                            <img className="width-250"  src={terri}  alt="Terri" /> 
                        </div><br></br>A deep thinker, she has always been curious about how humans behave and respond to life, and how design was about communicating simply. Like the cartooning on this site, the goal was to show you how much WDS values good old fashioned customer service, something that was very prevalent in the 1950s.
                        <br></br>
                        Her experience working with Michael and their clients have taught her that design has a purpose of having empathy, and users ALWAYS embrace designs that take them into consideration. </p><p className="subtitle">Terri's passion for helping others with her talent is what motivates her to be passionate about her clients' goals.</p>

                           <p className="content-text-18 margin-top-25">As the heart of WDS, Terri's intuitive design skills come from 25+ years of experience in traditional and modern art. This combination of skills has served her well in all her artistic endeavors. 
                            
                            Serving as a creative advisory to Michael has enabled her to stay ahead of the design trends and competition. There’s always a way, she says, to make every business unique. 
                            Her personal work has intertwined with her professional work as a designer by evolving into a disciplined UX designer, which led to amazing opportunities as a unique visual communicator. 
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
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text text-white text-align-center">  Surreal Concepts was always ahead of the trends, using the now-popular branding colors blue and orange in the early 2000s.</p>
                    </div>
                </div>
            </section>
            
            </div>
        </div>           
        )
    }
}

export default about;