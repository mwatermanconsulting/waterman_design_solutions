import React, { Component } from 'react' ;
import offerings from '../images/backgrounds/bg-core-studies.png';
import ux from '../images/ux_process.png';
import services from '../images/graphic-services.svg';
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
                     Creating Design Solutions that Matters
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
            <section className="container-grid-2col-photo flex-layout-column flex-layout-justified-center margin-top-100" style={{height:'680px'}}>
                <div className="grid-title">
                    <div className="title">The most important part of all is that the entire company have alignment<br/> and clarity on the story of the product - why it exists, who it serves, how it benefits the user.
                    </div>
                        <div className="content-block-15">
                            <p className="subtitle margin-top-25" style={{width:'90%'}}> WDS can instill a design culture into your company through a series of workshops talks and business design strategies. Our c-suite workshops provide design data and proven strategies to effectively communicate design into meetings and corporate communications. We can mentor your teams and provide advanced workshops for design strategists.
                            </p>
                        </div>
                </div>
            </section>
                <div className="flex-layout-section-full flex-layout-column padding flex-layout-center-center grey">
                    <div className="title">In Context Case Study - UX Steering Team</div>
                        <div className="subtitle text-white">Design Strategy</div>
                        <p className="content-text-21 margin-top-25" style={{width:'85%'}}>
                            WDS Observed design issues stemming from teams not communicating and software engineers designing in a silo. 
                            </p>
                        <p className="content-text-21 margin-top-15" style={{width:'85%'}}>Issue - 
                            The project was for design and development of a data visualization tool. For the project the user would visit two other online portals. One being a login portal where the users sets preferences, which was being developed in Toronto and the second one was security and server settings, being developed in Tennessee. After critiquing the two portals WDS presented the design issues found to the stakeholders. We visually showed the consistently issues with colors, icons and workflows. This was the first time the stakeholders were shown a comparison of their applications side by side. We also show how the lack of requirements resulting in developers building non responsive web based SaaS applications. 

                        </p>

                        <p className="content-text-21 margin-top-15" style={{width:'85%'}}>Strategy-

                            Creation of the UX Steering team. In response to the issues the best strategy was to create a design support team within the company. The goal of this team was to set a list of design standards and to have monthly meeting occuring one week into a scrum cycle. The meetings would give a voice to the software engineers to talk to other teams communicating design and coding strategies and providing guidance and support. Sharing what each team was working on and to overall take away that feeling of working and designing alone.


                        </p>

                        <p className="content-text-21 margin-top-15" style={{width:'85%'}}>Results-

                            The UX Steering was a unique strategy for a common problem. It helped with communication issues and provided a forum to talk about design and the user within the company. It also provided a roadmap to product consistency. WDS also provided CSS Solutions helper and global classes, responsive HTML templates to the Steering team. WDS also developed workshops for CSS, SASS and Responsive development. WDS moved on to the creation and development of the company Style Guides and Design System to support the long time strategy vision of UX Steering team higher goal of product consistency.



                        </p>

            `   </div>
            <div className="container-grid-3col flex-layout-center-center margin-top-100" style={{marginLeft: '15%'}}>
                <div className="content-block-75">
                    <div className="subtitle">Design Solutions</div>
                        <p className="content-text-21 margin-top-15" style={{width:'85%'}}>Blending teams of strategists, researchers, designers and developers together guarantees strong communication, collaboration and team success. Combined with better communication we focus on design approved solutions. Developing the front-end with custom style sheets and prototypes faster than offshore or in-house. 
                        </p>
                        <p className="content-text-21 margin-top-25"><b>Key Services</b></p>
                    <ul className="content-text-21 margin-top-15">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul> 
                </div> 
                <div className=" content-block-75">
                    <div className="subtitle">Customer Experience Solutions</div>
                        <p className="content-text-21 margin-top-15" style={{width:'80%'}}>Customer experience (CX) is the new competitive battleground for today's companies. WDS will help you find the strategic intersection between your high-value customers and the critical enhancements required at specific touchpoints in your larger customer experience journey.
                        </p>
                        <p className="content-text-21 margin-top-15 margin-top-25"><b>Key Services</b></p>
                    <ul className="content-text-21 margin-top-15">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul>
                </div>
                <div className="content-block-75">
                    <div className="subtitle margin-top-10">Customer Experience Mentoring</div>
                        <p className="content-text-21 margin-top-15" style={{width:'75%'}}>Customer Experience Mentoring are for companies looking to embrace UX across all their design and development teams. WDS offers insights and a structured change-management program that establishes experience research, design and development, and best practices across your organization.
                        </p>
                        <p className="content-text-21 margin-top-25"><b>Key Services</b></p>
                    <ul className="content-text-21 margin-top-15">
                        <li>Customer/ User Insights</li>
                        <li>Experienced Based Personas</li>
                        <li>Journey Maps</li>
                        <li>Service Design</li>
                        <li>Concept Storyboards</li>
                        <li>Prioritized Insights</li>
                        <li>Experience Strategy Roadmap</li>
                        <li>Project and Agile Services</li>
                    </ul>
                </div> 
            </div>    
            <section className="flex-layout-section-full flex-layout-column  margin-top-100  grey border-top-5">
                    <div className="width-75 margin-top-50 padding-bottom-100" style={{marginLeft:'-'}}> 
                       <a href="../core_offerings"> <img className="flex-image-container margin-bottom-50 " src={didyouknow}  alt="Ux" /> </a>
                      
                        <p className="content-header text-white content-block-55 flex-layout-column" style={{marginLeft:'30%', marginTop:'-5%'}}>There are 3 levels of empathy; cognitive, emotional and compassionate empathy

                        </p>
    
                    </div>
                </section>    
        </div>
            
        )
    }
}

export default core_offerings;