import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import why from '../images/backgrounds/bg-why-wds.svg';
import whys1 from '../images/photos/photo-why-s1.png';
import whys2 from '../images/photos/photo-why-s2.png';
import whys3 from '../images/photos/photo-why-s3.png';
import why_business from '../images/photos/photo-why-business-solutions.png';
import why_design from '../images/photos/photo-why-design-solutions.png';
import why_enterprise from '../images/photos/photo-why-enterprise-solutions.png'; 
import why_oh_really from '../images/graphic-why-s1.svg';
import why_handshake from '../images/graphic-why-s2.svg';
import care from '../images/graphic-why.svg';


class why_wds extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <section className="flex-section-fixed-head">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-item-bottom">
                            <img className="flex-image-container image-size-100" src={why}  alt="Design Solutions" /> 
                         </div>
                    </div> 
                </section>
                <section className="flex-layout-section-full align-items-center red border-bottom-5" >
                    <div className="container-section-1-primary flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block width-75">
                                <div className=" text-white text-align-center">
                                   We are your design partners
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center padding width-70">
                            <p className="callout-text text-black">
                            WDS are the design whispers. WDS understands it is not just about designing a  WDS understands the importance of design in todays world. The latest studies show companies that value design have a 30% increase in sales compared to companies who do not. 
                            Our methodology and design solutions are scalable and are so effective that it  works on small companies to start-ups to global enterprises. The results is always “A great experience for the user and an increase in your bottom line”</p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container width-100" src={whys1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>
            <main>
                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <p className="title margin-top-75">
                        WDS Provides Design Support That Make a Difference </p>
                    <p className="subtitle content-block-60 margin-top-25 flex-layout-column align-items-center">
                        Our client roster includes Motorola, Pfizer, Stubhub, SmithKline, OsiSoft...</p>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-2col-text-photo width-70 margin-top-100 ">
                        <div className="col2-photo width-100 grid-placeself-center">
                            <img  src={whys2} className="width-100" alt="Case Study Image 2"/> 
                        </div>
                    <div className="2col-text grid-placeself-center width-70">
                        <p className="content-header "> 
                            All about the User</p>
                        <p className="content-text-24 margin-top-15">  
                            Connecting with the users takes old-fashioned customer service values. Knowing your customer and treating them with kindness and respect. Being able to know and intuitively understanding their needs. Our methodology has produced lasting results for the business we serve. Wide ranging design solutions can deeply affect the user and the business by clarifying business design solutions that drive transformation. </p>
                    </div>
                    </div>
                </section>
            <div className="thin-hr width-70 align-self-center margin-top-100"></div>
            <section>
                <div className="grid-2col-text-photo align-self-center width-100  margin-tb-100   ">
                    <div className="2col-text grid-placeself-center width-70 margin-left-100">
                        <p className="content-header"> 
                            Business Value of Design</p>
                        <p className="content-text-24 margin-top-15">
                            WDS has been successful helping business with design for close to 20 years. Increasing revenues and shareholders returns. We know the value of design, but don't take our word of for it. A comprehensive study on the value of design, <a href="../insights">Mckinsey</a> found the truth that companies that focus on the user and design have 30% increase in business compared to the same businesses that do not focus on design.</p>
                    </div>
                    <div className="col2-photo width-100 grid-placeself-center">
                        <img src={whys3} className="width-100" alt="Case Study Image 2"/> 
                    </div>
                </div>
            </section>
        </main>
            <section className="flex-layout-section-full align-items-center " >
                <p className="title text-black margin-top-50"> Design Services</p>
                <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 ">
                    
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header "> 
                            Design Solutions</p>
                        <p className="content-text-24 padding-10"> 
                            UX Design</p>
                        <p className="content-text-18 padding-10">  
                            about user experiences. Our experience of providing design solutions has given us a successful track record.</p>
                    </div>
                <div className="col2-photo width-70 grid-placeself-center">
                        <img src={why_design} className="border-3px width-100" alt="Case Study Image 2"/> 
                </div>
                </div>
                <div className="grid-2col-photo-text align-self-center width-70  margin-top-50 ">
                    <div className="col2-photo width-70 grid-placeself-center">
                        <img src={why_business} className="border-3px width-100" alt="Case Study Image 2"/> 
                    </div>
                    <div className="2col-text grid-placeself-center width-100 margin-left-75">
                        <p className="content-header "> 
                            UI Design and Development</p>
                        <p className="content-text-24 padding-10"> 
                            Application and website Design </p>
                        <p className="content-text-18 padding-10">  
                            Our insights and strategies move you and your team in the right direction, and possibly uncover rewarding new business opportunities.</p>
                    </div>
                </div>
                <div className="grid-2col-text-photo align-self-center width-70 margin-bottom-100  margin-top-50 ">
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <p className="content-header "> 
                            Design Systems</p>
                        <p className="content-text-24 padding-10"> 
                            Ensuring your message is consistent across all mediums </p>
                        <p className="content-text-18 padding-10">
                            Enterprise design thinking improves teamwork, allowing members to work more efficiently.</p>
                    </div>
                    <div className="col2-photo width-70 grid-placeself-center">
                        <img src={why_enterprise} className="border-3px width-100" alt="Case Study Image 2"/> 
                    </div>
                </div>
            </section>
         <section className="flex-layout-section-full align-items-center" >
                <div className="content-header flex-layout-column">    
                    <p className="title padding-50 text-align-center">
                        WDS builds emotionally rich, resonant digital solutions that enable users to fully realize technology’s complete potential, by simplifying everything your customers touch and feel.</p>
                </div>
                <div className=" content-block-25">
                    <img className="flex-image-container" src={why_oh_really}  alt="Your Business is Our Joy" /> 
                </div>
                <div className="content-header flex-layout-column">    
                    <p className="title padding-50 text-align-center">
                        By advocating and designing for the user.</p>
                </div>
            </section>
            <div className="flex-layout-center padding-bottom-50">
                <button onclick="location.href='./case_studies';" type="button" value="Case Studies" className="margin-top-50 font-size-24">Check Out Our Success Stories</button>
            </div>
            <section className="flex-layout-section-full align-items-center yellow-bg border-tb-5 ">
                <div className="grid-4col-text padding-50" >
                    <div>
                    <div className="content-header layout-center-justified">
                        We'll get there together
                    </div>
                    <div className="layout-center-justified ">
                        <p className=" content-block-why margin-top-10">WDS can work with embedding employees within your teams as contract employees or work separately, WDS has the experience and knowledge to help guide you every step of the way if you need it.  </p>
                    </div>
                    </div> 
                    <div>
                    <div className="content-header">Measurable Results</div>
                        <div className="layout-center-justified ">
                            <p className="  content-block-why margin-top-10">We're firm believers in agile and iterative deployments as experiments, but, with longer enterprise launches and even consumer software, 
                            there's still valuable data to be collected even before that first MVP. Our insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities.</p>
                        </div>
                    </div> 
                    <div>
                    <div className="content-header">Your users will love you.</div>
                        <div className="layout-center-justified ">
                            <p className=" content-block-why margin-top-10">In workplace and enterprise solutions, users know when someone understands their needs, making them feel like experts. 
                            They know when there's attention to design details. They know when it's intuitive and visually pleasing - and they love it. 
                            With consumers, if you miss the mark, you'll fail fast, and not in a good way.</p>
                        </div>
                    </div> 
                    <div>
                    <div className="content-header">Lasting Results</div>
                        <div className="layout-center-justified">
                            <p className=" content-block-why margin-top-10 ">We're not only here to build and launch great technology solutions, but to help you and your team improve your business in tangible ways. 
                            We've helped increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.</p> 
                        </div> 
                    </div> 
                </div>
            </section>
            <section className="flex-layout-section-full align-items-center">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                                We understand the uncertainty and fear involved with contracting design firms </p>
                            <p className="content-text-18 margin-top-15">  
                            
                                WDS has the honour of being the third option on quite a few projects, including the stubhub project. Many times the previous experiences were unsuccessful not meeting business or users needs. It's not easy to follow unsuccessful design projects. Developers and stakeholders are on edge, but our team empathizes with the situation. Once we begin our methodology and advocating for the users we begin connecting with the developers and stakeholders, amazing things begin happen.</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 grid-placeself-center">
                        <img className="flex-image-container" src={why_handshake}  alt="Thank you WDS!" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
                </div>
            </section>     
        </div>                                   
                            )
                        }
                    }
export default why_wds;