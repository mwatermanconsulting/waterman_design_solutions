import React, { Component } from 'react' ;
import strategy from '../images/backgrounds/bg-strategy.png';
import services from '../images/graphic-services.svg';
import together from '../images/photos/photo-why-wds.png';
import strategy1 from '../images/photos/photo-strategy-s1.png';
import strategy1a from '../images/photos/photo-strategy-s1a.png';
import strategy2 from '../images/photos/photo-strategy-s2.png';
import strategy3 from '../images/photos/photo-strategy-s3.png';
import strategy4 from '../images/photos/photo-strategy-s4.png';
import strategy5 from '../images/photos/photo-strategy-s5.png';
import strategy6 from '../images/photos/photo-strategy-s6.png';
import strategy7 from '../images/photos/photo-strategy-s7.png';
import strategy8 from '../images/photos/photo-strategy-s8.png';

class strategy_insight extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Strategy and Insight</div>
                <img className="flex-image-container width-100" src={strategy}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    User Research Benefits the End User
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="item-a-nb content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">By directly observing people, we can get to the heart of their needs, discovering what drives them, what inspires them and what connects with them on an emotional level. We create knowledge for our clients of where to invest resources based on this understanding of what people value.</div>
                             
                </div>
                <div className="grid-item-b container-image-block">
                    <img className="container-photo-callout" src={strategy1a}  alt="shaking hands" /> 
                </div>
            </div>
    
            <div className="content-header flex-layout-center-center flex-layout-column margin-top-200 ">
                <div className="flex-layout-center-center title text-align-center content-block-60">
                    Today, the user’s experience is more important than brand loyalty. A successful strategy is necessary to ensure this. 
                </div>
                <div className="content-block-55 margin-top-50">
                    <p className="content-text-24 text-align-center">WDS discovers the patterns and themes that provide actionable, deeper and more valuable perspectives on your customers' wants, needs and motivations.</p>
                    <p className="content-text-24 text-align-center">The most meaningful insights for experience strategy are developed with behavior-based understanding of users. Our experience strategists observe people in context - where they work, play or live - to understand their goals, needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve..</p>
                </div>
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                
                <div className="flex-layout-section thin-hr margin-top-200 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            1. Stakeholder Interview
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            At the beginning of an engagement, we set the foundation for success by developing an understanding of the business, the industry, the competition and relevant trends. This becomes the basis for how we approach all subsequent phases. Along with secondary research, we interview stakeholders and subject matter experts, both to gain a firsthand awareness of the company context and to build connections within the business which contribute to stakeholder alignment throughout the engagement. This activity begins to define hypotheses for where the company intends to play in the market, who it intends to serve and how it plans to serve them.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy2}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="subtitle">
                            2. An Expert Review
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> The heuristic review is an expert analysis that examines the current site or application screens in comparison to industry standards and established best practices. This helps to point out areas of opportunity that can be addressed during the redesign process in an effort to best the competition. This review results in a presentation of findings that includes both areas of opportunities and concrete recommendations.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy3}  alt="Review" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            3: Contextual Inquiry

                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> When design determines success, understanding the user is paramount. We design to connect people with what matters most to them. </p>
                            <p className="content-text-18">Our design experts use experience strategy and insight to define how software functions and build workflows for the ways that people will experience it. 
                            From inception through launch, we obsess over every detail.</p>
                            <p className="content-text-18">For the visual representation, we create a uniquely identifiable and recognizable design by incorporating elements like brand, familiar fonts and emotions that resonate with users.</p>
                                           
                                    
                            <p><i>Learn More</i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy3}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>


                    {/* <div className="flex-layout-section-full flex-layout-center-center margin-top-50 padding-bottom-50"> 
                        <div className="content-header flex-layout-column width-50">
                            <h3 className="sub-title">Featured Service: Design Systems</h3>
                                <div className="content-block">
                                        <p className="content-text-18"> At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, 
                                        and letting software teams focus on solving tough problems instead of the small stuff. </p>
                                        <p>Learn more about design systems » </p>
                                </div>
                        </div>
                    </div>

                    <div className="flex-layout-section thin-hr margin-top-50" style={{ width: '40%' }}></div>

                    <div className="flex-layout-section-full flex-layout-center-center margin-top-100 padding-bottom-50"> 
                        <div className="content-header flex-layout-column width-50">
                            <h3 className="sub-title">Featured Service: CSS Development and Support</h3>
                                <div className="content-block">
                                        <p className="content-text-18"> At WDS, we know and understand the importance of design systems to businesses. They provide several tangible benefits, such as enforcing visual and interaction consistency, 
                                        and letting software teams focus on solving tough problems instead of the small stuff. </p>
                                        <p>Learn more about design systems » </p>
                                </div>
                        </div>
                    </div> */}

             <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="subtitle">
                            4: Affinity Diagram
                        </div>
                        <div className="content-block-75 content-text-18">
                        <div className="content-block-services" >
                            <p className="content-text-18">  Data is only as valuable as the meaning we craft
                                from it. We have tried-and-true methods for moving
                                from observations to insights. These meaningful
                                insights are the next building block in the process of
                                building an experience strategy.</p>

                            <p className="content-text-18"> We take a comprehensive, rigorous approach to
                                process data from the field and use it to spark
                                explanations of what is behind the observations.
                                Getting to the deeper understanding that insights
                                provide beyond the raw data is a key step that sets
                                professionals apart from amateurs.</p>   
                        </div>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy5}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>
                

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            5. Personas

                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            At the beginning of an engagement, we set the foundation for success by developing an understanding of the business, the industry, the competition and relevant trends. This becomes the basis for how we approach all subsequent phases. Along with secondary research, we interview stakeholders and subject matter experts, both to gain a firsthand awareness of the company context and to build connections within the business which contribute to stakeholder alignment throughout the engagement. This activity begins to define hypotheses for where the company intends to play in the market, who it intends to serve and how it plans to serve them.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy5}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="subtitle">
                            6. Consolidated Workflow Diagrams                        
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> When an engagement centers on a complex tool for the enterprise, the Consolidated Workflow Diagram captures activity across organizational roles and provides stakeholders a single view of all of the work accomplished in and around a tool. This diagram gives stakeholders an “aha!” moment as, for the first time, they have a picture of the duties employees or customers accomplish in their work lives. Through the use of a Consolidated Workflow Diagram, we see how a user moves through tasks and we extrapolate from here to the various cognitive states a user inhabits while engaged with the solution or process. These cognitive states represent a model of what is in people’s minds as they do their work: their mental model. This understanding has implications for both design and marketing. 
</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy6}  alt="Review" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                        7. Looking for Opportunities
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> A key value that an experience strategy delivers is a set of new ideas for serving customers. The information distilled from the previous techniques and the company’s strategic requirements comes together in an Opportunities Matrix that clearly lays out a set of options for improving the experience of the user base to increase their engagement and satisfaction.</p>
                            <p className="content-text-18">WDS collaborates with product and executive teams to brainstorm concepts for innovation and improvement. Together, the combined team prioritizes the opportunities based on the difficulty of implementation, the feasibility for the business to deliver and the impact that each solution concept may have on users.</p>
                                           
                                    
                            <p><i>Learn More</i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy7}  alt="Review" /> 
                    </div>
                </div>
                    
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header margin-bottom-100">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                        8: Journey Maps                        
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> Companies are often so focused on their solutions that they forget that it is part of a larger whole: the customer’s life. As the customer interacts with the company or engages in a life process, such as buying a house, understanding the key activities and experiences the customer has helps determine the most valuable places to focus resources. This ensures that each interaction with the company fits the experience the organization wants to provide. The understanding of the key activities and experiences is built into an informative diagram called a Customer Journey Map. This diagram informs key decisions for business, marketing and design executives, and can shift stakeholders’ thinking about where to engage across the lifecycle of a customer’s journey.
                            </p>
                                           
                                    
                            <p><i>Learn More</i></p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={strategy8}  alt="Review" /> 
                    </div>
                </div>
                <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-why flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> Looking for a larger Agile Transformation Program? </p>
                        <p className="callout-text">  WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 
                    </div>
                </div>
            <div className="item-b container-image-block">
                <img className="flex-image-container width-100" src={services}  alt="Your Business is Our Joy" /> 
            </div>
            </div>   
                

                </div>
            </div>
        )
    }
}

export default strategy_insight;