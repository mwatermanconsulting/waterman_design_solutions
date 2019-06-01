import React, { Component } from 'react' ;
import innovation from '../images/backgrounds/bg-documentation.png';
import services from '../images/graphic-services.svg';
import together from '../images/photos/photo-why-wds.png';
import innovation1 from '../images/photos/photo-finding-truth-s1.png';
import innovation2 from '../images/photos/photo-innovation-s2.png';
import innovation3 from '../images/photos/photo-innovation-s3.png';
import innovation4 from '../images/photos/photo-innovation-s4.png';
import innovation5 from '../images/photos/photo-innovation-s5.png';


class innovative_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Innovative Solutions</div>
                <img className="flex-image-container" src={innovation}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                 Defining, validating and finding solutions.
                </div>
            </div>
            <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">The documentation phase presents the truth to our clients. It helps them understand and empathize with their customers by introducing personas, use cases and new workflows.</div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={innovation1}  alt="shaking hands" /> 
                </div>
            </div>
    
            <div className="content-header flex-layout-center-center flex-layout-column margin-top-200 ">
                <div className="flex-layout-center-center title text-align-center content-block-60">
                    Our Innovative Solutions is our Differentiating factor. <br/> WDS is hired after others fail.
                </div>
                <div className="content-block margin-top-50 flex-layout-center-center">
                    <p className="subtitle"> Our Solutions are as unique as the business we providing them for<br/> Our solutions come from three factors: Understanding, empathy and experience  </p>
                </div>
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                
                <div className="flex-layout-section thin-hr margin-top-200 margin-bottom-100" style={{ width: '75%' }}></div>

                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="title">
                            User Scenarios
                        </div>
                        <div className="subtitle">
                            Foundation of the backlog
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Narrative User Scenarios enable our teams to avoid the trap of focusing on prescriptive solutions too early in the process which limits the innovation space before it is explored. They are based on personas and used to imagine the ideal experience for a specific user or customer persona.
                            
                            In creating User Scenarios, we first define the solutions at a high level, in the context of their use. As we write out a story of a person interacting with the application in the course of their day, we ground the scenario in reality and, by keeping the details of the features and interactions out of the story, we enable designers to imagine the best possible solutions. The User Scenarios have the added importance of containing the key user interactions, in story form, that the solution must support. With further definition, these are used as the inputs to the epics and user stories that are the beginning stages of a product backlog.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={innovation2}  alt="Stakeholder Interview" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                    <div className="grid-2col-photo-content content-header flex-layout-center-center">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="subtitle">
                            New and Hypothesis and Concepts                        
                        </div>
                        <div className="subtitle">
                            Establish high-level concepts based on user scenarios
                        </div>

                        <div className="content-block-60 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            To generate new concepts, we efficiently and imaginatively explore multiple options for solving each design challenge to ensure that we are arriving at the best solutions. There are usually many ways to solve a problem and we don’t stop at our first good idea. </p>

                            <p className="content-text-18">
                            In this activity, we take the customer’s goals, as defined in the written user scenarios, and sketch how that user will accomplish them through the interface of the application. A careful focus on how the interactions flow across screens leads to designs that enable users to accomplish their goals in ways that feel natural to them. It provides an intuitive feel to an application which is not achieved when the focus is solely on the visual aspects of an interface.</p>

                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={innovation3}  alt="Review" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="title">
                            Construct an Interaction Model for the Users
                        </div>
                        <div className="subtitle">Establish Frameworks and Workflow oncepts</div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> Technology is dramatically changing the way marketers work. With thousands of software solutions at our disposal to assist with automation, personalization and optimization, knowing where to start or how to get the most out of your investments is challenging.</p> 

                            <p className="content-text-18">Whether you choose a Best-in-Class or All-in-One stack, our team will help you make the right investments and capture value.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={innovation4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="title">
                            Reinforce Success
                        </div>
                        <div className="subtitle">
                        validate concepts and frameworks with users                        
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> Rather than developing a product that we hope will serve the user at this stage, vast amounts of resources are saved by presenting concepts to people for validation before any building takes place. Thus, after creating a set of design concepts, we make sure the designs meet the intended goals. </p>
                            
                            <p className="content-text-18">
                            Does a concept work for the people who will use it? Does it appeal to them? Where is there room for improvement? Is this concept supporting the user on both a practical and emotional level? This is how we ensure that the design direction is the correct one and tune it accordingly.</p> 
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={innovation4}  alt="Your Business is Our Joy" /> 
                    </div>     
                </div>
                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <div className="grid-2col-photo-content content-header">
                    <div className="grid-left-45 flex-layout-section-full">
                        <div className="title">
                                Brand - Establish a Product Identity
                        </div>
                        <div className="subtitle">Establish Frameworks and Workflow concepts</div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> A key component of any solution is the visual appearance of the interface. An interface will be an important representation of the brand and needs to support the workflows and interaction models. Collectively, this can be referred to as a company’s design language. </p>
                            
                            <p className="content-text-18">
                            The design language is needed to drive consistency across applications and channels, delivering a  more cohesive and singular experience of the company. To develop a company’s design language, we carry out a visual exploration initiative so the team can iterate on ideas, refine them and determine the final outcome.
                            Whether you choose a Best-in-Class or All-in-One stack, our team will help you make the right investments and capture value.</p>
                        </div>
                    </div>
                    <div className="grid-right container-image-block">
                        <img className="photo-container" src={innovation5}  alt="Your Business is Our Joy" /> 
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
                <img className="flex-image-container" src={services}  alt="Your Business is Our Joy" /> 
            </div>
            </div>   
                

                </div>
            </div>
        )
    }
}

export default innovative_solutions;