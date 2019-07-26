import React, { Component } from 'react' ;
import innovation from '../images/backgrounds/bg-innovation.png';
import didyouknow from '../images/graphic-didyouknow.png';
import innovation1 from '../images/photos/photo-finding-truth-s1.png';
import innovation2 from '../images/photos/photo-innovation-s2.png';
import innovation3 from '../images/photos/photo-innovation-s3.png';
import innovation4 from '../images/photos/photo-innovation-s4.png';
import innovation5 from '../images/photos/photo-innovation-s5.png';


class innovative_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Innovative Solutions</div>
                <img className="flex-image-container" src={innovation}  alt="Why WDS background" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                 “Every solution to every problem is simple.<br/> It's the distance between the two where the mystery lies.” <br/> ― Derek Landy, Skulduggery Pleasant
                </div>
            </section>
            <section className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">
                        We bring to light truth that has been uncovered sometimes for years. We take that truth and turn into simple innovative solutions</div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={innovation1}  alt="shaking hands" /> 
                </div>
            </section>
    
            <section className="flex-layout-center-center flex-layout-column margin-top-75">
                <div className="title text-align-center content-block-60 margin-top-75">
                    Our Innovative Solutions is our Differentiating factor. <br/> WDS solves complex problems where others have failed.
                </div>
                
                    <p className="subtitle flex-layout-center-center margin-top-15"> 
                    Our Solutions are as unique as the business and users that we provide them for. <br/> Our solutions come from three factors: Understanding, empathy and experience  </p>
                
            </section>

             <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
             
                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            User Scenarios
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            Foundation of the backlog
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <p className="content-text-18"> 
                        <div className="float-right">
                        <img className="photo-container"  src={innovation2}  alt="Stakeholder Interview" /> 
                        </div>
                    
                            Narrative User Scenarios enable our teams to avoid the trap of focusing on prescriptive solutions too early in the process which limits the innovation space before it is explored.  They are based on personas and used to imagine the ideal experience for a specific user or customer persona.</p>
                            
                            <p className="content-text-18"> In creating User Scenarios, we first define the solutions at a high level, in the context of their use. As we write out a story of a person interacting with the application in the course of their day, we ground the scenario in reality and, by keeping the details of the features and interactions out of the story, we enable designers to imagine the best possible solutions. The User Scenarios have the added importance of containing the key user interactions, in story form, that the solution must support. With further definition, these are used as the inputs to the epics and user stories that are the beginning stages of a product backlog.</p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Hypothesis and Concepts                        
                        </div>
                        <div className="subtitle content-block-60 margin-top-15">
                            Establish high-level concepts based on user scenarios
                        </div>

                        <div className="content-block-60 content-text-18 margin-top-15">
                            <p className="content-text-18"><div className="float-right">
                        <img className="photo-container" src={innovation3}  alt="Review" /> 
                    </div> 
                            To generate new concepts, we efficiently and imaginatively explore multiple options for solving each design challenge to ensure that we are arriving at the best solutions. There are usually many ways to solve a problem and we don’t stop at our first good idea. </p>

                            <p className="content-text-18">
                            In this activity, we take the customer’s goals, as defined in the written user scenarios, and sketch how that user will accomplish them through the interface of the application. A careful focus on how the interactions flow across screens leads to designs that enable users to accomplish their goals in ways that feel natural to them. It provides an intuitive feel to an application which is not achieved when the focus is solely on the visual aspects of an interface.</p>

                        </div>   
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
                
                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Construct an Interaction Model Based on Users
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            Establish Frameworks & <br/> Workflow concepts</div>
                    <div className="content-block-60 content-text-18 "><div className="float-right">
                        <img className="photo-container" style={{marginTop:'-8%'}} src={innovation4}  alt="construct user model" /> 
                    </div> 
                        <p className="content-text-18 margin-top-15">Technology is dramatically changing the way marketers work. With thousands of software solutions at our disposal to assist with automation, personalization and optimization, knowing where to start or how to get the most out of your investments is challenging.</p> 

                            <p className="content-text-18">Whether you choose a Best-in-Class or All-in-One stack, our team will help you make the right investments and capture value.</p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Reinforce Success
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            Validate Concepts & Frameworks with Users                        
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15"><div className="float-right">
                        <img className="photo-container" src={innovation4}  alt="Your Business is Our Joy" /> 
                    </div>    
                            <p className="content-text-18"> Rather than developing a product that we hope will serve the user at this stage, vast amounts of resources are saved by presenting concepts to people for validation before any building takes place. Thus, after creating a set of design concepts, we make sure the designs meet the intended goals. </p>
                            
                            <p className="content-text-18">
                            Does a concept work for the people who will use it? Does it appeal to them? Where is there room for improvement? Is this concept supporting the user on both a practical and emotional level? This is how we ensure that the design direction is the correct one and tune it accordingly.</p> 
                     </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Brand - Establish a Product Identity
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">Establish Frameworks & Workflow concepts</div>
                        <div className="content-block-60 content-text-18 margin-top-15"> <div className="float-right">
                        <img className="photo-container" src={innovation5}  alt="Your Business is Our Joy" /> 
                    </div>     
                            <p className="content-text-18"> A key component of any solution is the visual appearance of the interface. An interface will be an important representation of the brand and needs to support the workflows and interaction models. Collectively, this can be referred to as a company’s design language. </p>
                            
                            <p className="content-text-18">
                            The design language is needed to drive consistency across applications and channels, delivering a  more cohesive and singular experience of the company. To develop a company’s design language, we carry out a visual exploration initiative so the team can iterate on ideas, refine them and determine the final outcome.
                            Whether you choose a Best-in-Class or All-in-One stack, our team will help you make the right investments and capture value.</p>
                        </div>
                </section>

                <section className="flex-layout-section-full flex-layout-column  margin-top-100  grey border-top-5">
                    <div className="width-75 margin-top-50 padding-bottom-100" style={{marginLeft:'-'}}> 
                       <a href="../core_offerings"> <img className="flex-image-container margin-bottom-50 " src={didyouknow}  alt="Ux" /> </a>
                      
                        <p className="content-header text-white content-block-55 flex-layout-column" style={{marginLeft:'30%', marginTop:'-5%'}}>WDS Specializes in Data Visualization Application Design.
                        </p>
    
                    </div>
                </section>    
                

               
            </div>
        )
    }
}

export default innovative_solutions;