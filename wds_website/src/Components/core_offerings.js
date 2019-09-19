import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import offerings from '../images/backgrounds/bg-core-studies.png';
import offerings3 from '../images/photos/photo-core-offerings-s3.png';
import offerings1 from '../images/photos/photo-core-offerings-s1.png';
import offerings2 from '../images/photos/photo-core-offerings-s2.png';
import offerings4 from '../images/photos/photo-core-offerings-s4.png';
import offerings5 from '../images/photos/photo-core-offerings-s5.png';
import offerings6 from '../images/photos/photo-core-offerings-s6.png';
import offerings7 from '../images/photos/photo-core-offerings-s7.png';
import offerings8 from '../images/photos/photo-core-offerings-s8.png';
import offerings9 from '../images/photos/photo-core-offerings-s9.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class core_offerings extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="WDS core offerings ensures your business future success by instilling design strategies that reach your employees at a core level. The data shows that the companies that value design and instill a culture of design, increases business by 30%. WDS has a series of design and business strategies and workshops based on empathy that will change your companies design perspective." />
                <meta name="keywords" content="case studies, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>WDS Case Studies - OsiSoft</title>
                <link rel="canonical" href="http://watermandesignsolutions/core_offerings" />
            </Helmet>
        <div className="flex-layout-column">
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Core Offerings
                    </div>
                        <img className="flex-image-container width-100" src={offerings}  alt="Case Studies" />     
                </section>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                        WDS supports all your design needs
                </div>
            </div>
            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75   flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15" >
                        
                        The best customer experience starts with the Golden Rule - treat the user the way you would like to be treated.
                    
                        Too often, companies get attached to the product and lose sight of the people using the product. 
                        </div>
                    </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={offerings1}  alt="Core Offerings" /> 
                    </div>
            </section>
            <section className="flex-layout-column flex-layout-center-center margin-top-100">
                    <div className="subtitle content-block-65">
                    Understanding your business models and how they support your digital design is paramount to becoming Digital First. Mismatch between the underlying business models and the digital design is often one of the primary reasons for underperforming digital products and services.    

                    </div>
                    <div className="content-block-65">
                        <p className="subtitle margin-top-25"> 
                        WDS instills a culture of design into your company through a series of workshops, talks and business design strategies. Their C-suite workshops provide design data and proven strategies to effectively communicate design into meetings and corporate communications. They can mentor your teams and provide advanced workshops for design strategies.
                        </p>
                    </div>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="flex-layout-section-full align-items-center flex-layout-column">
                <div className="subtitle content-block-60">
                    Common Business Design Problems
                </div>
                <ul className="dashed content-block-60 margin-top-25 content-text-21">
                    <li>Business lost touch with its core values</li>
                    <li>C-Suite not communicating value of design</li>
                    <li>Communication issues between teams - teams working on an island</li>
                    <li>UX teams not aligned with programmers</li> 
                    <li>Lack of Developer Design Guidance</li>
                    <li>Lack of Developer Design Support</li>
                    <li>Lack of Design Valuation or Metrics</li>
                    <li>No Consistency between offerings</li> 
                    <li>Programmers Designing Interfaces </li>

                </ul>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="float-left align-items-center flex-layout-section-full">
                <div className="title content-block-60">
                        Communication Workshops and Strategies  
                </div>
                <div className="subtitle margin-top-15 content-block-60">
                        If everyone is moving forward together, then success takes care of itself. - Henry Ford 
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <p className="content-text-18">  <div className="float-right">
                    <img className="photo-container width-100" src={offerings2}  alt="Communication Expertise" /> 
                    </div> 
                    One of the greatest issues facing all companies is communication between teams. Large companies have teams spread all over the world and many times these teams are working on an island, not communicating with other teams. WDS knows and understand these problems and has successfully solved communication issues for Motorola, Stubhub, Pfizer and OsiSoft</p> 
                   
                    <p className="content-text-18">
                    WDS communication experts observe and evaluate interactions between teams, providing custom communication strategies and workshops. Below is a communication case study they provided for OsiSoft. </p>
                </div>
               
                   
                </section>
                <section className="flex-layout-section-full flex-layout-column padding flex-layout-center-center green margin-top-50">
                    <div className="title text-white">
                            In Context Case Study - UX Steering Team
                    </div>
                        <div className="subtitle text-white margin-top-25">
                            OsiSoft Communication Design Strategy
                    </div>
                        <p className="content-text-21 content-block-65 margin-top-15" >
                            <b>Background - </b>
                            OsiSoft is a data historian company that sells databases and software that provide data insights, called the PI system. Osi was attempting to transition from traditional desktop software to software as a service (SaaS) for their premiere data visualization platform. OsiSoft hired WDS to help with the SaaS transition, and to provide design guidance, <a href ="case_studies.js"> css development</a> and UX design support.
                        </p>
                        <p className="content-text-21 content-block-65 margin-top-15" >
                            <b>Issue Uncovered -</b>
                            WDS began their methodology by creating a user journey, followed by a design analysis of the SaaS offering. The user journey uncovered two steps the user needed to complete before accessing the data visualization application. These steps involved database settings and user authentication on two separate applications. WDS conducted design analysis between the three applications. The design analysis revealed major inconsistencies between the visual elements of the applications. They were curious about how this issue occurred. They interviewed the engineers, designers, UX team and team leads for the project, to get an understanding. WDS uncovered a lack of communication between the teams and team leads. Design requirements were missing on each project. The company was missing basic design direction and guidance, leading to design inconsistencies.</p> 

                         <p className="content-text-21 content-block-65 margin-top-15" >   
                            The real problem though was the lack of communication between the teams. They were working on an island and didn't even realize the issue. WDS presented the findings to the shareholders, sharing screenshots of the three applications. This was the first time they witnessed a visual design analysis, causing one the stakeholders to state, "I think we have a problem." The shareholders admitted this has been a problem for years, but could never solve the problem.  
                        </p>

                        <p className="content-text-21 content-block-65 margin-top-15">
                            <b>Strategy - </b>
                            WDS knew that the largest problem needed to be solved first, the communication issues. WDS proposed a unique solution, the creation of a design support system named the UX Steering team. WDS would lead the team and would implement a communication strategy to spread the value of design within the company. The goal of this team was to guide and develop design standards and to communicate the value of design to the teams. The team would have monthly meetings occurring the week before a scrum cycle. The meetings would focus on communicating design and coding strategies while providing guidance and support. The team also solved the issue of feature duplication among the teams. 
                        </p>

                        <p className="content-block-65 content-text-21 margin-top-15" ><b>Results - </b>
                            The UX Steering team provided a unique strategy for a common problem. The team helped bridged the gap between designers, developers and the UX team. By eliminating communication issues and providing a forum to talk about design within the company. The strategy also provided a long term roadmap for the team starting with product consistency and component sharing amongst the teams. WDS championed design consistency and led the movement for design consistency by first developing a CSS Solutions and strategy for the company. The strategy included shared global CSS classes and a custom UI design kit. WDS also developed workshops for CSS, Sass and responsive design and development. Later WDS designed and developed Style Guides and Design System for OsiSoft to support the long time strategy and vision of of UX Steering team of application consistency. After 5 years the UX team still meets, providing design support and guidance for the company. 
                        </p>
            </section>
          
            <section className="float-left align-items-center flex-layout-column margin-top-75">
                <div className="title content-block-60">
                            Design Solutions
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                            Communicating the Business Value of Design
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right">
                        <img className="photo-container"  src={offerings3}  alt="Design Solutions" /> 
                    </div>
                     <p className="content-text-18"> 
                        WDS design workshops are built with empathy for engineers and developers. It is a common business practice to place the design burden on engineers and developers. The results are unprofessional designs that are never tested. This is the "good enough syndrome." Meaning features and time constraints factor in more than design and testing. Resulting in a failed product offering. </p>
                            
                    <p className="content-text-18"> 
                        WDS core offerings ensure your company never deliver designs to your customers that are good enough. They believe designs should meet and exceed your customers expectations. Their strategies and workshops will keep your developers focused on what they do best, coding. While leaving the designs to professional designers, like WDS. </p>
                </div>
                    
                <p className="content-text-21 align-self-center content-block-60 margin-top-15"><strong>Key Services</strong></p>
                    
                    <ul className="dashed align-self-center content-block-60 content-text-18 margin-top-1">
                        <li>Importance of Design Standards</li>
                        <li>Empathy Workshops</li>
                        <li>Design Critique Sessions</li>
                        <li>Writing Design Requirements </li>
                        <li>Developer Design Guidance Strategies</li>
                        <li>Developer Design Support Solutions</li>
                    </ul>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                    C-Suite Business Design Strategies and Workshops
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                    Design Communication Needs to Begin at the Top
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right">
                        <img className="photo-container"  src={offerings4}  alt="C-Suite Business Design Strategies and Workshops" /> 
                    </div>
                        <p className="content-text-18"> 
                        Design direction begins at the C-level. Studies have shown that companies that communicate the value of design from the top down, increase their business by 30%. In order to survive in today's digital world, design must have the same importance as sales, hr and marketing. WDS can change your change design perspective at its core. </p>
 
                        <p className="content-text-18">The workshops also cover the need for design support and guidance. By Learning how to incorporate design requirements into your backlogs and empowering management to make changes at a core level. Management gets to focus on their weaknesses and WDS will devise action plans to solve those issues. 
                        </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25 content-block-60"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 margin-top-5 content-text-21">
                    <li>Communicating design standards</li>
                    <li>Design thinking strategies</li>
                    <li>Long term design solutions</li>
                    <li>5yr, 10yr design and UX strategies</li>
                    <li>Empathy and your customers</li>
                    <li>Knowing your enemies</li>
                    <li>Revising your Purpose and Values</li>
                </ul>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                    UX Team Strategies and Workshops 
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                    Strategies to ensure the user is involved in every decision
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right">
                        <img className="photo-container"  src={offerings5}  alt="UX Team Strategies and Workshops" /> 
                    </div>
                    
 
                     <p className="content-text-18">UX team mentoring helps companies to embrace the user across all their design and development teams. WDS offers insights and a structured change-management program that establishes experience research, design and development, and best practices across your organization. </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 margin-top-5 content-text-21">
                    <li>UX Strategies, short and long term</li>
                    <li>UX team analysis</li>
                    <li>Experience strategy roadmap</li>
                    <li>Empathy workshops</li>
                    <li>Design critique workshops</li>
                
                
                </ul>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Customer Experience Solutions 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        It's about the customer's journey
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right margin-top-5per">
                            <img className="photo-container"  src={offerings6}  alt="Customer Experience Solutions" /> 
                        </div>
                        <p className="content-text-18"> 
                        Customer experience (CX) is the new competitive battleground for today's companies. WDS will help you find the strategic intersection between your high-value customers and the critical enhancements required at specific touchpoints in your larger customer experience journey. </p>
                    </div>
                        <p className="content-text-21 align-self-center content-block-60" ><b>Key Services</b></p>
                    
                    <ul className="dashed align-self-center content-block-60 content-text-21">
                        <li>Customer/user insights</li>
                        <li>Experienced based personas</li>
                        <li>Journey maps</li>
                        <li>Service design</li>
                        <li>Concept storyboards</li>
                        <li>Prioritized insights</li>
                        <li>Experience strategy roadmap</li>
                        <li>Project and agile services</li>
                    </ul>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Telemetry/Analytics 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Measuring Business Design Value
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={offerings7}  alt="Telemetry/Analytics" /> 
                        </div>
                     <p className="content-text-18"> 
                        Design solutions are no longer an invisible, unknown entity. WDS has seen the results of our designs over the years, because they care about results. By implementing telemetry, design results can be tracked and measured. WDS has analytics experts that can provide monthly reports and business design strategies based on real data. 
                        </p>

                        <p className="content-text-18"> 
                        Telemetry data is extremely valuable to understanding users' pain points. A well defined telemetry strategy will track user workflows, alerting the UX team to user dropouts and unusual behavior. Analytics can also provide insights on unused features, reducing software bloat.
                        </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 content-text-21" style={{marginTop:'-1%'}}>
                        <li>Measure results</li>
                        <li>Track user actions</li>
                        <li>Uncover user pain points</li>
                        <li>Reduce software bloat</li>
                        <li>Provide monthly reports</li>
                        <li>Keeps users apart of the design decision process</li>
                    </ul>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Accessibility 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Increasing your business by 18%
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={offerings8}  alt="Accessibility" /> 
                        </div>
                        <p className="content-text-18"> 
                        The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.</p>
                    
                        <p className="content-text-18"> The impact of disability has radically changed on the Web because barriers are removed that prevent communication and interaction that many people face in the physical world. However, when web sites, applications, technologies, or tools are badly designed, they can create barriers that exclude people from using the Web.</p>
    
                        <p className="content-text-18">Accessibility affect up to 18% of your users. WDS accessibility strategies helps implementing a plan that defines and provides solutions, increasing your bottom line.</p>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        CSS Strategies
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Have developers touching the CSS 80% less
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={offerings9}  alt="CSS Strategies" /> 
                        </div>
                        <p className="content-text-18"> 
                         WDS CSS solutions are based off of empathy from their experiences of working with developers. WDs is known for their design solutions, CSS knowledge and experience. Their CSS solutions are based off of business requirements and are scalable and customizable. </p>
                        <p className="content-text-18"> WDS CSS strategies almost eliminates the need for your developers to write CSS. </p>
                        <p className="content-text-18">The CSS strategies include CSS development, CSS system implementation, mentoring, and best of practice documentation.</p>

                        <p><i><a href="../css_solutions">Learn More...</a> </i></p>
                    
                    </div>
                </section>

            
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text text-white text-align-center">  There are 3 levels of empathy: cognitive, emotional and compassionate.</p>
                    </div>
                </div>
            </section>     
        </div>
    </div>
            
        )
    }
}

export default core_offerings;