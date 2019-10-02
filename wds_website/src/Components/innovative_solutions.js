import React, { Component } from 'react';
import Helmet from 'react-helmet';
import innovation from '../images/backgrounds/bg-innovation.png';
import innovation1 from '../images/photos/photo-innovation-s1.png';
import innovation2 from '../images/photos/photo-innovation-s2.png';
import innovation3 from '../images/photos/photo-innovation-s3.png';
import innovation4 from '../images/photos/photo-innovation-s4.png';
import innovation5 from '../images/photos/photo-innovation-s5.png';
import innovation6 from '../images/photos/photo-innovation-s6.png';
import didyouknow from '../images/graphic-didyouknow.svg';


class innovative_solutions extends Component {
    render () {
        return(
        <div>
            <Helmet>
                <meta name="description" content=" WDS has designed applications used by energy sectors, including nuclear reactors. They have the focus, insight and experience to solve the most difficult design and business problems on the worlds most intricate products and applications user interfaces. WDS innovative solutions have been successful for motorola, StubHub and OsiSoft." />
                <meta charSet="utf-8" />
                <title>Innovative Solutions</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/innovative_solutions" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Innovative Solutions
                    </div>
                        <img className="flex-image-container width-100" src={innovation}  alt="WDS Innovative Solutions" />     
                </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                 “Every solution to every problem is simple.<br/> It's the distance between the two where the mystery lies.” <br/> ― Derek Landy
                </div>
            </section>

            <section className="grid-callout photo-content-color border-bottom-5 border-border-top-5" > 
                <div className="grid-placeself-center content-block-75   flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15" >
                    WDS has designed applications used by energy sectors, including nuclear reactors. They have the focus, insight and experience to solve the most difficult design and business problems on the worlds most intricate products and applications user interfaces.  </div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout" src={innovation1}  alt="Innovation" /> 
                    </div>
                
            </section>

            
    
            <section className="flex-layout-center-center flex-layout-column margin-top-75">
                <div className="title text-align-center content-block-60">
                     WDS Innovative Solutions are our differentiating factor
                </div>
                
                    <p className="subtitle text-align-center flex-layout-center-center margin-left-15 content-block-60 margin-top-25"> 
                    WDS solutions are as unique as the business and users that are provided for. It includes three factors: Understanding, Empathy and Experience.  </p>
                
            </section>

             <div className="thin-hr width-70 align-self-center hrline-spacing width-70"></div>
             
                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            User Scenarios
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                            Foundation of the backlog
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <p className="content-text-18"> 
                        <div className="float-right">
                        <img className="photo-container"  src={innovation2}  alt="User Scenerios" /> 
                        </div>
                            Narrative User Scenarios enable WDS teams to avoid the trap of focusing on prescriptive solutions too early in the process because it limits the innovation space before it is explored. They are based on personas and used to imagine the ideal experience for a specific user or customer persona.</p>
                            
                            <p className="content-text-18"> In creating User Scenarios, WDS first defines the solutions at a high level in the context of their use. As the story is written about a person interacting with the application in the course of their day, WDS grounds the scenario in reality by keeping the details of the features and interactions out. This enables designers to imagine the best possible solution. The User Scenarios have the added importance of containing the key user interactions, in story form, that the solution must support. With further definition, these are used as the inputs to the epics and user stories that are the beginning stages of a product backlog.</p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing width-70"></div>

                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Hypothesis and Concepts                        
                        </div>
                        <div className="subtitle content-block-60 margin-top-10">
                            Establish high-level concepts based on user scenarios
                        </div>

                        <div className="content-block-60 content-text-18 margin-top-15">
                            <p className="content-text-18"><div className="float-right">
                        <img className="photo-container" src={innovation3}  alt="Hypothesis and Concepts" /> 
                    </div> 
                            To generate new concepts, WDS efficiently and imaginatively explores multiple options for solving each design challenge to ensure that it is arriving at the best solutions. Brainstorming a problem with multiple disciplines allows WDS to explore fresh ideas. </p>

                            <p className="content-text-18">
                            In this activity, customer’s goals are taken as defined in the written user scenarios, and sketched how that user will accomplish their tasks through the interface of the application. A carefully focused  interaction flow across screens leads to designs built to enable users to efficiently accomplish their goals in ways that feel natural to them. </p>

                        </div>   
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing width-70"></div>
                
                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Construct an Interaction Model based on users
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                            Establish Frameworks and Workflow Concepts</div>
                    <div className="content-block-60 content-text-18 "><div className="float-right">
                        <img className="photo-container" src={innovation4}  alt="Construct user model" /> 
                    </div> 
                        <p className="content-text-18 margin-top-15">Technology is dramatically changing the way marketers work. With thousands of software solutions to assist with automation, personalization and optimization, knowing where to start or how to get the most out of your investments is challenging.</p> 

                            <p className="content-text-18">By understanding your business goals and your users' expectations, the WDS team will help you make the right investments and capture value.</p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing width-70"></div>

                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Reinforce Success
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                            Validate Concepts and Frameworks with Users                        
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15"><div className="float-right">
                        <img className="photo-container" src={innovation5}  alt="Reinforce Success" /> 
                    </div>    
                            <p className="content-text-18"> Rather than developing a product that WDS hopes will serve the user at this stage, vast amounts of resources are saved by presenting concepts to users for validation before any building takes place. A set of design concepts are created and ensured that they meet the intended goals. </p>
                            
                            <p className="content-text-18">
                            Questions asked: <br></br>Does a concept work for the people who will use it? <br></br>Does it appeal to them? <br></br>Where is there room for improvement? <br></br>Is this concept supporting the user on both a practical and emotional level? <br></br>This is how WDS ensures that the design direction is the correct one and will tune it accordingly.</p> 
                     </div>
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing width-70"></div>

                <section className="float-left flex-layout-section-full align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Brand - Establish a Product Identity
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                            Establish Frameworks and Workflow concepts</div>
                        <div className="content-block-60 content-text-18 margin-top-15"> <div className="float-right">
                        <img className="photo-container" src={innovation6}  alt=" Brand - Establish a Product Identity" /> 
                    </div>     
                            <p className="content-text-18"> A key component of any solution is the visual appearance of the interface,  an important representation of the brand, and needs to support three objects of the company: branding, user workflows and interaction models. Collectively, this can be referred to as a company’s design language. </p>
                            
                            <p className="content-text-18">
                            The design language is needed to drive consistency across applications and touchpoints, delivering a more cohesive and singular experience of the company. To develop a design language, WDS carries out a visual exploration initiative so the team can iterate on ideas, refine them and determine the final outcome: style guides, pattern libraries and design systems. 
                            </p>
                        </div>
                </section>

             
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="container-image-500 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS Specializes in Data Visualization Application Design.<p className="text-align-center margin-top-25" ></p>  </p>
                    </div>
                </div>
            </section>    
                
        </div>
               
            </div>
        )
    }
}

export default innovative_solutions;