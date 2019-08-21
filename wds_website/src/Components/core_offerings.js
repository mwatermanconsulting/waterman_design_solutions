import React, { Component } from 'react' ;
import offerings from '../images/backgrounds/bg-core-studies.png';
import innovation2 from '../images/ux_process.png';
import itcss from '../images/graphic-services.svg';
import casscade from '../images/photos/photo-css-s1.png';
import offerings_photo from '../images/photos/photo-core-offerings-s3.png';
import didyouknow from '../images/graphic-didyouknow.png';

class core_offerings extends Component {
    render () {
        return(
        <div className="flex-layout-column">
            <div className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">Core Offerings</div>
                <img className="flex-image-container width-100" src={offerings}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg">
                        Your Design Support
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                    <div className="item-a-nb content-block-60 content-header flex-layout-column">
                    <div className="callout margin-top-15">
                        The best customer experience starts with the Golden Rule - treat the user the way you would like to be treated
                    </div>
                        <div className="callout-text-black text-align-left margin-top-15">
                        Too often, companies get attached to the product and lose sight of the people. 
                        </div>
                    </div>
                    <div className="grid-item-b container-image-block">
                        <img className="container-photo-callout" src={offerings_photo}  alt="shaking hands" /> 
                    </div>
            </div>
            <section className="flex-layout-column flex-layout-center-center margin-top-100">
                    <div className="subtitle content-block-65">
                        Our core offerings are to ensure your business success by instilling design on a core level. It has been proven that companies that value design and instill a culture of design from the c-suite down increase business by 30%. We have devised a series of strategies and workshops based on empathy for our clients and users to help our clients achieve lasting success by being responsive to your users needs.    

                    </div>
                        <div className="content-block-65">
                            <p className="subtitle margin-top-25"> 
                            WDS can instill a design culture into your company through a series of workshops talks and business design strategies. Our c-suite workshops provide design data and proven strategies to effectively communicate design into meetings and corporate communications. We can mentor your teams and provide advanced workshops for design strategists.
                            </p>
                        </div>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="flex-layout-section-full align-items-center flex-layout-column">
                <div className="subtitle content-block-65">
                    Common Business Design Problems, with a WDS design solution
                </div>
                <ul className="dashed content-block-65 margin-top-25 content-text-21">
                    <li>Business lost touch with its core values</li>
                    <li>C-Suite not communicating value of design</li>
                    <li>Communication issues between teams - teams working on an island</li>
                    <li>UX teams not aligned with programmers</li> 
                    <li>No Developer Design Guidance</li>
                    <li>No Developer Design Support</li>
                    <li>No Design Valuation or Metrics</li>
                    <li>No Consistency between offerings</li> 
                    <li>Programmers Designing </li>

                </ul>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="grid-2col-photo-content content-header">
                <div className="grid-left flex-layout-section-full">
                    <div className="title text-grey">
                        Communication Workshops & Strategies  
                    </div>
                    <div className="subtitle margin-top-15">
                        If everyone is moving forward together, then success takes care of itself. - Henry Ford 
                    </div>
                    <div className="content-block-75 content-text-18 margin-top-15">
                        <p className="content-text-18"> 
                        One of the greatest issues facing all companies is communication between teams. Large companies can have teams spread all over the world. Each working on an islands not knowing what the other teams are working on, bringing on issues of not being consistent. WDS has solved communication issues for Motorola, Stubhub.</p>
                        <p className="content-text-18">
                        We have communication experts that will observe and evaluate your companies interactions between teams. We will then provide custom strategies and workshops. Below is a communication strategies case study that we developed for OSI. </p>
                    </div>
                </div>
                <div className="grid-right-css container-image-block">
                    <img className="photo-container" src={itcss}  alt="Stakeholder Interview" /> 
                </div>     
                </section>
                <section className="flex-layout-section-full flex-layout-column padding flex-layout-center-center                  green margin-top-50">
                    <div className="title text-white">
                            In Context Case Study - UX Steering Team
                    </div>
                        <div className="subtitle text-white margin-top-25">
                            Communication Design Strategy
                    </div>
                        <p className="content-block-65 content-text-21 margin-top-25" style={{width:'85%'}}>
                            WDS Observed design issues stemming from teams not communicating and software engineers designing in a silo. 
                            </p>
                        <p className="content-text-21 content-block-65 margin-top-15" style={{width:'85%'}}>
                            <b>Issue - </b>
                            This project involved the design and development of the companies first SaaS offering, a data visualization tool. The sign in workflow involved the user to visit two other online portals. WDS was asked to meet with the Toronto team, that was developing the login portal, that would provide access to the data visualization application. After the team presented the design for the portal WDS immediately notice design consistency issues. The team also told us they had no design requirements for colors, spacing or branding, there were not even requirements for a responsive design. After finding the same issues with  the Tennessee team, it was clear a communication problem existed. In order to make our point WDS designed critiqued the three applications and presented our findings to the stakeholders. After sharing a screenshots that showing the obvious inconsistencies between the family of applications the one of the stakeholders stated "I think we have a problem". This was the first time the stakeholders looked at their applications with a designer and a strategy was needed to not only help the company develop a standards and guidance style guide and design system. A communication solution was also needed, one that would evangelize standards while providing guidance and support to the developers on different teams. 
                        </p>

                        <p className="content-block-65 content-text-21 margin-top-15" style={{width:'85%'}}>
                            <b>Strategy-</b>
                            In response we proposed the creation of a UX Steering team. In response to the issues the best strategy was to create a design support team within the company. The goal of this team was to set a list of design standards and to have monthly meeting occuring one week before a scrum cycle. The meetings would give a voice to the software engineers to talk to other teams communicating design and coding strategies and providing guidance and support. One of the main goals of this team was to eliminate duplicate feature development. For example two different teams creating the same or worse slightly different data tree view.
                        </p>

                        <p className="content-block-65 content-text-21 margin-top-15" style={{width:'85%'}}>Results
                            The UX Steering was a unique strategy for a common problem. It helped with communication issues and provided a forum to talk about design and the user within the company. It also provided a road map to product consistency. WDS also provided CSS Solutions with the creation of helper and global CSS classes, and flexbox responsive design. WDS also developed workshops for CSS, SASS and Responsive development. WDS moved on to the creation and development of the company Style Guides and Design System to support the long time strategy and vision of UX Steering team of product consistency.
                        </p>
             </section>
          
            <section className="float-left align-items-center flex-layout-column margin-top-75">
                <div className="title content-block-60">
                            Design Solutions
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                            Spreading the Business Value of Design
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right">
                        <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                    </div>
                     <p className="content-text-18"> 
                        Our design workshops were built with empathy for the engineers and developers. Companies place too many design decisions on non-designers. Add poor communication to the mix, you end up product inconsistencies, confusing UI development and the user gets forgotten.</p>
                            
                    <p className="content-text-18"> Our strategies and workshops will keep your developers focused on what they do best, code. Along with developing a design system we mentor your teams on the value of design and how support support on another.</p>
                </div>
                    
                <p className="content-text-21 align-self-center content-block-60"><b>Key Services</b></p>
                    
                    <ul className="dashed align-self-center content-block-60 margin-top-5 content-text-21">
                    <li>Importance of Design Standards</li>
                    <li>Design Critique Sessions</li>
                    <li>Writing Design Requirements </li>
                    <li>Developer Design Guidance Strategies</li>
                    <li>Developer Design Support Solutions</li>
                </ul>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                    C-Suite Business Design Strategies and Workshops
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                    Design Communication Needs to Begin at the Top
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right">
                        <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                    </div>
                     <p className="content-text-18"> 
                     Design direction and value begins at the top. Studies have shown that companies that value design that come from the top increase their business by 30%. In order to survive in todays digital world, design needs to have the same importance as sales. Companies must change their design perspective in order to see the true value design on its business  </p>
 
                     <p className="content-text-18">Covers the need for design support and guidance within companies. Learn how to incorporate design requirements into your backlogs. This service will empower management to understand the value of design with strategies that will make changes on a core level by guiding management on companies weaknesses and action plans to solve those issues. </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25 content-block-60"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 margin-top-5 content-text-21">
                    <li>Communicating Design Standards</li>
                    <li>Design Thinking Strategies</li>
                    <li>Long term design solutions</li>
                    <li>5yr, 10yr design and UX strategies</li>
                    <li>Empathy and your Customers</li>
                    <li>Do you know your Enemy</li>
                    <li>Revising your Companies Purpose and Values</li>
                </ul>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                    UX Team Strategies and Workshops 
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                    Strategies to ensure the user is involved in every decision
                </div>
                <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right">
                        <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                    </div>
                     <p className="content-text-18"> 
                     Design direction and value begins at the top. Studies have shown that companies that value design that come from the top increase their business by 30%. In order to survive in todays digital world, design needs to have the same importance as sales. Companies must change their design perspective in order to see the true value design on its business  </p>
 
                     <p className="content-text-18">UX team  mentoring are for companies looking to embrace UX across all their design and development teams. WDS offers insights and a structured change-management program that establishes experience research, design and development, and best practices across your organization. </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 margin-top-5 content-text-21">
                    <li>UX Strategies shorrt & long term</li>
                    <li>UX team analysis</li>
                    <li>Experience Strategy Roadmap</li>
                    <li>Empathy Workshops</li>
                    <li>Design Critique Workshops</li>
                
                
                </ul>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Customer Experience Solutions 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Strategies to ensure the user is involved in every decision
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                    </div>
                        <p className="content-text-18"> 
                        Customer experience (CX) is the new competitive battleground for today's companies. WDS will help you find the strategic intersection between your high-value customers and the critical enhancements required at specific touchpoints in your larger customer experience journey. </p>
                    </div>
                        <p className="content-text-21 align-self-center content-block-60" style={{marginTop:'-11%'}}><b>Key Services</b></p>
                    
                    <ul className="dashed align-self-center content-block-60 content-text-21">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Telemetry/Analytics 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Measuring Business Design Value
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                        </div>
                     <p className="content-text-18"> 
                        Design is no longer an invisible, unknown entity. WDS has seen the results of our designs over the years because we build relationships with our clients and care about results.  By implementing telemetry design results can be tracked and measured. WDS has analytics experts that can provide monthly reports and business design strategies based on real data. 
                        </p>

                        <p className="content-text-18"> 
                        Telemetry data is extremely valuable to understanding users pain points and unused features. A well defined telemetry strategy will track the users workflows alerting the UX team to dropouts and unusual user behavior. The analytics can also provide data on unused features. 
                        </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 content-text-21" style={{marginTop:'-1%'}}>
                        <li>Measure results</li>
                        <li>Track users actions</li>
                        <li>Uncover user pain points</li>
                        <li>Reduce software bloat</li>
                        <li>Provide monthly reports</li>
                        <li>Keeps users apart of the design decision process</li>
                    </ul>
                </section>

                       <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Telemetry/Analytics 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Measuring Business Design Value
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                        </div>
                     <p className="content-text-18"> 
                        Design is no longer an invisible, unknown entity. WDS has seen the results of our designs over the years because we build relationships with our clients and care about results.  By implementing telemetry design results can be tracked and measured. WDS has analytics experts that can provide monthly reports and business design strategies based on real data. 
                        </p>

                        <p className="content-text-18"> 
                        Telemetry data is extremely valuable to understanding users pain points and unused features. A well defined telemetry strategy will track the users workflows alerting the UX team to dropouts and unusual user behavior. The analytics can also provide data on unused features. 
                        </p>
                    
                        <p className="content-text-21 align-self-center margin-top-25"><b>Key Services</b></p>
                    </div>
                    <ul className="dashed align-self-center content-block-60 content-text-21" style={{marginTop:'-1%'}}>
                        <li>Measure results</li>
                        <li>Track users actions</li>
                        <li>Uncover user pain points</li>
                        <li>Reduce software bloat</li>
                        <li>Provide monthly reports</li>
                        <li>Keeps users apart of the design decision process</li>
                    </ul>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        Accessibility 
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                        Increasing your business by 18%
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                        </div>
                        <p className="content-text-18"> 
                        The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.</p>
                    
                        <p className="content-text-18"> Thus the impact of disability is radically changed on the Web because the Web removes barriers to communication and interaction that many people face in the physical world. However, when web sites, applications, technologies, or tools are badly designed, they can create barriers that exclude people from using the Web.</p>
    
                        <p className="content-text-18">Accessibility may affect 18% of your users. If you could increase your business by 18% by implementing a strategy that defines and provides solutions to improve your accessibility strategies</p>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                        CSS Strategies
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right">
                            <img className="photo-container"  src={casscade}  alt="Stakeholder Interview" /> 
                        </div>
                        <p className="content-text-18"> 
                        Our CSS services include CSS development, Strategy, CSS system implementation, mentoring and documentation, including best of practice documentation.</p>

                        <p><i><a href="../css_solutions">Learn More...</a> </i></p>
                    
                    </div>
                </section>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className="width-75 margin-top-50 align-center margin-bottom-50"> 
                       <a href="../communication_insights"> 
                       <img className="flex-image-container margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="content-header text-white flex-layout-column flex-layout-center-center"> There are 3 levels of empathy: cognitive, emotional and compassionate. </p>
                    </div>
                </div>
            </section>     
        </div>
            
        )
    }
}

export default core_offerings;