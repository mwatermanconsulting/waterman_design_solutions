import React, { Component } from 'react' ;
import bg_ui from '../images/backgrounds/bg-ui.png';
import services2 from '../images/photos/photo-services-s2.png';
import motorola from '../images/photos/photo-motorola-beforeafter.png';
import motorola_logo from '../images/motorola_logo.svg'
import stubhub_logo from '../images/icon-logo-stubhub.svg'
import stubhub from '../images/photos/photo-stubhub-before-after.png'
import didyouknow from '../images/graphic-didyouknow.svg';
import ui_s1 from '../images/photos/photo-ui-s1.png';


class ui_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    User Interface Design</div>
                <img className="flex-image-container" src={bg_ui}  alt="User Interface" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    “Simplicity is the ultimate sophistication.” – Leonardo da Vinci

                </div>
            </section>
            <section className="grid-callout photo-content-color border-bottom-5 height-670"> 
                <div className="grid-callout-text grid-placeself-center padding content-block-75 content-header flex-layout-column">
                    <div className="callout-title margin-top-15">
                             The "aha" Moment
                    </div>
                    <div className="callout-text text-align-left margin-top-15" >
                       We live for the comment "why didn't we think of that" usually expressed by stakeholders and managers during our design reveal. Our for passion for the last 20 years is solving problems on complex user interfaces and creating simple solutions. 
                    </div>    
                </div>
                <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={ui_s1}  alt="shaking hands" /> 
                <p classname="caption">Image by Avi Chomotovski from Pixabay</p> </div>
            </section>
            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <p className="title margin-top-75">
                We have provided UI solutions to the some of the world's largest brands</p>
                <p className="subtitle text-align-center content-block-65  margin-top-15">
                Our passion is to simplify websites, products and software interfaces. 
                    
                    Our designs has simplified interfaces for applications used by critical industries such as used energy sector using our designed software to monitor nuclear reactors.
                </p>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            UI Design & Development
                        </div>
                        <div className="subtitle margin-top-15">
                            Websites, Products and Applications
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                                 <img className="container-photo-callout" src={services2}  alt="UX" /> 
                                <p className="caption">Photo by Frank on Unsplash</p>
                            </div>
                        <div className="margin-top-15">  
                            <p className="content-text-18"> 
                            WDS honed its UI design skills by designing websites in 1998. Over the years we have designed and developed complicated healthcare websites to solving difficult UI problems on critical applications. Our current data visualization designs are being used on oil rigs, nuclear reactors and pharmaceutical drug plants.  
                            </p>
                            <p className="content-text-18">
                            WDS can take care of the front-end development including CSS & HTML development, working on-site with your team or creating GIT build-packages complete with custom CSS solutions, patterns libraries, style guides, best of practice documentation and design strategies, ensuring and enforcing original design and solutions.
                            </p>      
                            
                            </div>  
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            Low Fidelity Design
                        </div>
                        <div className="subtitle margin-top-15">
                            Mock-ups and Wireframes
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                                 <img className="container-photo-callout" src={services2}  alt="UX" /> 
                                <p className="caption">Photo by Frank on Unsplash</p>
                            </div>
                        <div className="margin-top-15">  
                       
                            <p className="content-text-18"> 
                            Known as low-tech, is a simple and easy translation of the product and design concepts. It’s used to turn the design ideas into testable and tangible artifacts, collecting and analyzing the user demands at the early stage.
                            </p>
                            <p className="content-text-18">
                            The low-fidelity prototype focuses on function, structure, process, and provide the most simple framework and elements; In the early stages of product design, it can format plan quickly, discuss quickly and adjust quickly. Designers can focus on the core of the product structure and frame layer. The biggest advantage of it is time-saving, efficient; relatively, because of its prototype fast, not pay attention to the details of the interface, it will be more annoying to communicate with users.
                            </p>      
                            <p className="content-text-18">
                            Low fidelity prototyping can help discover the issues of design and get them resolved at the early stage,with much less time and efforts invested in it. An interesting and proven phenomenon is the low-fi prototyping has become a preferred choice for both new-born start-ups and giant brands.
                            </p>      
                            
                            </div>  
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            Hi-Fidelity Designs
                        </div>
                        <div className="subtitle margin-top-15">
                            Representing the Final Product
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                                 <img className="container-photo-callout" src={services2}  alt="UX" /> 
                                <p className="caption">Photo by Frank on Unsplash</p>
                            </div>
                        <div className="margin-top-15">  
                       
                            <p className="content-text-18"> 
                            High fidelity design are quite close to the final product, with lots of functionality and details included. This is often used in the later usability evaluation to discover the potential issues that may exist in the workflow, interactivity and so on.
                            </p>
                            <p className="content-text-18">
                            Most low-fidelity wireframes communicate function well, but communicate form poorly. This is especially the case for mobile applications that have standard interface components with a consistent look and feel. A high-fidelity wireframe of a mobile application will communicate the user interface form and function better because the wireframe better resembles the standard interface components that users are familiar with.</p>

                            <p className="content-text-18"> On a high-fidelity wireframe, there’s also no question to clients about what’s a button or text field because the gradient detail on the elements tell them that. Low-fidelity wireframes don’t give the gradient detail that clients need to tell what each interface element is and how they function. Both form and function are key to the user experience. Reducing the form of your user interface too much could impact how clients view your wireframes.
                            </p>      
                            
                            </div>  
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            Concept Validation
                        </div>
                        <div className="subtitle margin-top-15">
                            Ensuring your Design Success
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                            <img className="container-photo-callout" src={services2}  alt="UX" /> 
                            <p className="caption">Photo by Frank on Unsplash</p>
                        </div>
                        <div className="margin-top-15">  
                       
                            <p className="content-text-18"> 
                            WDS provides design support for businesses. Many of our clients still have developers designing hi-fidelity designs. It does not matter to us whether we have created the design or your business currently has a design. Our team of experience designers can critique current designs before the testing to help identify design and usability problems.  
                            </p>
                            <p className="content-text-18">
                            
                            The design critique is an expert analysis that examines the current site or application screens in comparison to industry standards and established best practices. This helps to point out areas of opportunity that can be addressed during the design process in an effort to best the competition. This critique results in a presentation of findings that includes both areas of opportunities and concrete recommendations.
                            
                            </p>      
                            
                            </div>  
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            Consolidated Workflows
                        </div>
                        <div className="subtitle margin-top-15">
                            The "aha" Moment
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                            <img className="container-photo-callout" src={services2}  alt="UX" /> 
                            <p className="caption">Photo by Frank on Unsplash</p>
                        </div>
                        <div className="margin-top-15">  
                            <p className="content-text-18"> 
                            When an engagement centers on a complex tool for the enterprise, the Consolidated Workflow Diagram captures activity across organizational roles and provides stakeholders a single view of all of the work accomplished in and around a tool. This diagram gives stakeholders an “aha!” moment as, for the first time, they have a picture of the duties employees or customers accomplish in their work lives. Through the use of a consolidated workflow diagram, we see how a user moves through tasks and we extrapolate from here to the various cognitive states a user inhabits while engaged with the solution or process. These cognitive states represent a model of what is in people’s minds as they do their work: their mental model. This understanding has implications for both design and marketing.
                            </p> 
                        </div>  
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            HTML and CSS Build-Kits
                        </div>
                        <div className="subtitle margin-top-15">
                            Business Tailored UI Design Kits
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                                 <img className="container-photo-callout" src={services2}  alt="UX" /> 
                                <p className="caption">Photo by Frank on Unsplash</p>
                            </div>
                        <div className="margin-top-15">  
                       
                            <p className="content-text-18"> 
                             UI kits are comprehensive resource sets that allow you to plan your design’s structure properly without having to sacrifice your creative and original ideas. A UI kit generally contains an assortment of graphic files including UI components (buttons, check boxes, progress bars, etc.) for the purpose of user interface design. They allow designers to create outstanding visuals in reasonable timeframes. So instead of wasting time figuring out how to implement components, UI kits let you focus on what you do best: creating great designs.
                            </p>
                            <p className="content-text-18">
                            Our UI solutions are lightweight containing only the visual elements and CSS needed. The value of our tailored UI kit is one it helps solve the consistency businesses face when teams are fractured. These teams need design guidance and support. A solution that will support the developers with a starting point with all the design elements included, removing the need to design. We provide guidance with a living style guide or design system which including best pf practice documentation. </p>     
                            
                            </div>  
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-65">
                        <div className="title">
                            Prototypes
                        </div>
                        <div className="subtitle margin-top-15">
                            Testing UI and Features
                        </div> 
                        <div className="float-right callout-photo grid-placeself-center">
                                 <img className="container-photo-callout" src={services2}  alt="UX" /> 
                                <p className="caption">Photo by Frank on Unsplash</p>
                            </div>
                        <div className="margin-top-15">  
                       
                            <p className="content-text-18"> 
                                Testing before development begins is crucial to the success of any project. Observing users actions on the prototype can provide insight into what's working and what needs to be discarded or rethought.
                            </p>
                            <p className="content-text-18">
                            One of the most important aspect of the product building process is to gather feedback. With prototyping you can observe the user, test the work flow consolidation and collect reviews at every stage of developing the product. Prototypes are extremely helpful when adding new features or redesigning parts of the product. Test what is working for the audience and what is not.
                            </p>      
                            
                            </div>  
                        </div>
                    </section>
                
                <div className="flex-layout-section thin-hr  margin-tb-100" ></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center ">
                <div className="float-left content-block-60">
                        <div className="title">
                            Design is not about being pretty or aesthetically pleasing. It is about simplicity.
                        </div>
                        <div className="content-text-24 margin-top-25">
                        WDS has been designing user Interfaces for over twenty years. We originally designed user interfaces for websites, but that changed with our first complicated industrial user interface we designed for Motorola. Since then our UI design services expanded to all consumer facing touchpoints including software, mobile, SaaS and Kiosk. 

                        </div> 
                   
                    </div>
                </section> 

                <div className="flex-layout-section thin-hr  margin-tb-100" ></div>

                <section className="flex-layout-section-full align-items-center">
                    <div className="flex-layout-column">
                        <div className="title flex-layout-center">
                                Customer Success Spotlight</div>
                        <div className="content-block width-100 margin-top-10">
                            <p className="subtitle text-align-center">
                                 Our favorite case study stories including the methodology and the solutions that made each project a success</p>
                        </div> 
                    </div>
                </section>


                <section className="grid-cs-card flex-layout-center-center flex-layout-section-full margin-top-50 margin-bottom-100">
                <div className="cs-card-1 card-case-studies content-header flex-layout-column flex-sh-500"  >
                    <div className="container-image-block">
                            <img className="width-100" src={motorola}  alt="motorola before and after" /> 
                    </div> 
                    <div className="content-block-auto"> 
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black" >
                                Motorola</p>
                            <img className="width-20" src={motorola_logo}  alt="motorola logo" /> 
                        </div>
                        <div className="flex-card-content" style={{marginTop: '-40px'}}>
                            <div className="content-block">
                                <p><i> Industry: Products</i></p>
                                <p className="content-text-18 content-block">
                                    High Volume of returns plaguing Motorola Gateway Router Product Line. After two failed attempts by UX/UI developers, a frustrated management group decided they needed a UX designer to solve the problems.</p>
                                <p><a href="./case_study_1" > Read More....</a> </p>  
                            </div>
                        </div>
                        </div>
                </div>
                
                <div className="cs-card-2 card-case-studies content-header flex-layout-column flex-sh-500">
                    <div className="container-image-block">
                        <img className="width-100" src={stubhub}  alt="StubHub" /> 
                    </div>
                    <div className="content-block-auto">
                        <div className="flex-card-content flex-layout-center-center flex-layout-row flex-layout-justified-sb">
                            <p className="subtitle text-black" >
                                StubHub</p>
                            <img className="width-20" src={stubhub_logo} style={{width: '15%'}}  alt="StubHub logo" /> 
                        </div>    
                        <div className="flex-card-content" style={{marginTop: '-40px'}}>
                            <div className="content-block">
                                <p><i> Industry: Ecommerce</i></p>
                                    <p className="content-text-18 content-block" >
                                        StubHub was finding it difficult to gain user traction for their data reporting tool
                                        After two failed attempts by UX/UI developers, a frustrated management group decided they needed a designer to make their modem app easier to use.</p>
                                    <p><a href="./case_study_2"  target="_blank">Read More....</a>  </p> 
                            </div>
                        </div>
                    </div>
                </div>
        </section>
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="content-block-55 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">  WDS designed UI solutions for data display software that worked with nuclear reactors. <p className="text-align-center margin-top-25" ><button onclick="location.href='./case_study_3';" type="button" value="Learn More" className="button-white margin-top-50 font-size-24">Learn More</button></p>  </p>
                    </div>
                </div>
            </section>  
        </div>
        )
    }
}

export default ui_design;