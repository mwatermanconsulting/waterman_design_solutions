import React, { Component } from 'react' ;
import branding_bg from '../images/backgrounds/bg-branding.png';
import services from '../images/graphic-services.svg';
import branding1 from '../images/photos/photo-branding-s1.png';
import finding_truth2 from '../images/photos/photo-finding-truth-s2.png';
import finding_truth3 from '../images/photos/photo-finding-truth-s3.png';
import finding_truth4 from '../images/photos/photo-finding-truth-s4.png';
import finding_truth5 from '../images/photos/photo-finding-truth-s5.png';
import finding_truth6 from '../images/photos/photo-finding-truth-s6.png';
import finding_truth7 from '../images/photos/photo-finding-truth-s7.png';
import finding_truth8 from '../images/photos/photo-finding-truth-s8.png';

class branding extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Branding</div>
                <img className="flex-image-container width-100" src={branding_bg}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    "Your personal brand is a promise to your clients… a promise of quality, consistency, competency, and reliability". <br/> – Jason Hartman
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">In the past 40 years, our brains have seen enough branding to know what looks professional and credible. We all know bad design. </div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={branding1}  alt="shaking hands" /> 
                </div>
            </div>
    
            <div className="content-header flex-layout-center-center flex-layout-column margin-top-200 ">
                <div className="flex-layout-center-center subtitle text-align-center content-block-60">
                    "Branding is what people say about you when you're not in the room." - Jeff Bezos 
                </div>
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                
                <div className="flex-layout-section thin-hr margin-top-200 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                           What is brand identity
                        </div>
                        <div className="subtitle">
                           Experiences Count
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            A brand identity is the story of who you are, what your values are, the face of your company. Your logo will adorn all your products and marketing materials, and it will be the first thing that the public sees — a sort of visual shortcut to your company. The impression that you make on your users depends on how they experience your brand.  </p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={branding1}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Field Observation and Interviews
                        </div>
                        <div className="subtitle">
                            Developing insights from observations
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Great strategies for software are built on rich insight. The most meaningful insights for experience strategy are developed with a deep, behavior-based understanding of users or customers. Our experience strategists observe people in context - where they work, play or live - to understand their goals, needs and aspirations as they go about their daily lives. If a product does not yet exist, this first-hand look helps to identify unmet needs that a product may solve.</p>

                            <p className="content-text-18">
                            Using techniques from the fields of anthropology, psychology, product development and design, we use methods such as “contextual inquiry” to observe and record a rich variety of data, including body language, how people interact with their tools and how they construct their environments to be successful in their worlds. The value here is seeing and finding unexpected elements which lead to surprising insights.</p>

                            <p className="content-text-18">
                            To get to the core of what they care about, we also open authentic dialogues with customers to hear the stories that define their experiences.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={finding_truth3}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            CREATE A CUSTOMER PERSONA
                        </div>
                        <div className="subtitle">
                            Introducing the voices of the user
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> Because specific targets are better than vague ones, we create personas - single archetypes that represent a group of people with similar behaviors, attitudes and motivations. Personas keep us focused on real people who exhibit unique sets of characteristics. These behavior-based personas assist us throughout ideation, design and marketing to help teams develop appropriate solutions and messages.</p>
                            <p className="content-text-18">While personas are a popular technique used by many companies. Especially, to argue user cases.  WDS personas are far more robust than those created from market research data alone. Well-crafted personas grounded in user observations, developed around real users and not simple demographic data. Instead, they tell us about what drives segments to behave and believe as they do.</p>           
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={finding_truth4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="title">
                            VISUALIZE THE EXPERIENCE TOUCHPOINTS
                        </div>
                        <div className="subtitle">
                            The User Journey
                        </div>
                    <div className="content-block-75 content-text-18 margin-top-15">
                        <p className="content-text-18"> Data is only as valuable as the meaning we craft
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
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={finding_truth5}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>
  
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="subtitle">
                            DIAGRAM WORK ACROSS ROLES
                        </div>
                        <div className="subtitle">
                            Understanding the Cognitive State of the Users
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            When an engagement centers on a complex tool for the enterprise, the Consolidated Workflow Diagram captures activity across organizational roles and provides stakeholders a single view of all of the work accomplished in and around a tool. This diagram gives stakeholders an “aha!” moment as, for the first time, they have a picture of the duties employees or customers accomplish in their work lives. </p> 

                            <p className="content-text-18"> 
                            Through the use of a Consolidated Workflow Diagram, we see how a user moves through tasks and we extrapolate from here to the various cognitive states a user inhabits while engaged with the solution or process.
                            These cognitive states represent a model of what is in people’s minds as they do their work: their mental model. This understanding has implications for both design and marketing.</p>

                            <p className="content-text-18"> 
                            The cognitive states can help to inform the interface for a new way to navigate and complete tasks in a software tool. By aligning with how people think about their work, we produce tools that feel intuitive and easy to use. This understanding also provides an input to marketing, providing marketers with key information for creating a communication plan that resonates with customers. </p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={finding_truth6}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full ">
                        <div className="subtitle">
                            Develop Frameworks                        
                        </div>
                        <div className="subtitle">
                            Principles for Experience Strategy
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> A solid experience strategy provides a decision-making framework to drive customer-centered initiatives across the company. After the investment in deep customer understanding, the results can be shared among many departments to increase their value to the company.
                            The framework is a set of principles or questions that guide the development of ideas for solutions as well as the subsequent work performed by multiple teams in developing and marketing those solutions: architects, marketers, designers, branders, etc. This decision-making framework is valuable because it puts to work the understanding of the needs and concerns of the customer group, captured in the field observations. It persists beyond a specific project, providing value long after an engagement.</p>
                        </div>
                    </div>
                    <div className="grid-right-photo">
                        <div className="subtitle">
                            Design and Evaluate                        
                        </div>
                        <div className="subtitle">
                            Envision, Prioritize and Rank Opportunity Concepts
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            A key value that an experience strategy delivers 
                            is a set of new ideas for serving customers. The information distilled from the previous techniques and the company’s strategic requirements comes together in an Opportunities Matrix that clearly lays out a set of options for improving the experience of the user base to increase their engagement and satisfaction. </p>

                            <p className="content-text-18">
                            To generate the ideas, WDS teams collaborate with product and executive teams to brainstorm concepts for innovation and improvement. Together, the combined team prioritizes the opportunities based on the difficulty of implementation, the feasibility for the business to deliver and the impact that each solution concept may have on users.</p>
                        </div>
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Establish an Experience-DRIVEN PRODUCT ROADMAP
                        </div>
                        <div className="subtitle">
                            A Way Forward, with Customers in Mind
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Experience-Driven Product Roadmaps give the needs of customers a seat at the table, helping to ensure that what is released is what customers will value. We collaborate with product teams to incorporate the understanding and strategy developed in the Revealing Reality phase into the plan for how to group and sequence capabilities in an application. This includes the selection of features for the minimum viable product – an MVP that users and customers will be eager to adopt because it is developed with their needs in mind.</p>
                            
                            <p className="content-text-18"> 
                            An Experience-Driven Product Roadmap provides a way forward to head in the direction established by the experience strategy. Having deep user understanding enables the cadence of releases to be structured to appeal to users, providing a built-in incentive to update an application. This is how we build a holistic experience that addresses customers’ and business’ goals and positively impacts the company’s value.</p>    
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={finding_truth7}  alt="Review" /> 
                    </div>
                </div>
                    
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header margin-bottom-100">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            START EARLY AND ESTABLISH YOUR PROJECT PLAN                       
                        </div>
                        <div className="subtitle margin-top-25">
                            Identify How to Drive Engagement with the Solutions
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            The Revealing Reality phase is an investment in understanding how to create an experience that resonates with customers. One dividend of the investment is that these insights can now feed directly into the strategy for enabling customers to become aware of and engage with the planned experiences, and the organization as a whole.</p>

                            <p className="content-text-18"> 
                            This plan uses experience insights, as well as market data, to determine the channels, content, messages and cadences that are right for specific personas at specific points in their journeys. This enables companies to build relationships with their customers that extend beyond transactions to build value. It ensures that great experiences find an audience in a world full of offerings. </p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={finding_truth8}  alt="Review" /> 
                    </div>
                </div>
                <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-50 flex-layout-column">
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

export default branding;