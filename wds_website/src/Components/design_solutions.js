import React, { Component } from 'react' ;
import { Button } from 'react-mdl';
import design from '../images/bg-design.svg';

class design_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-layout-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container container image-size-100" src={design}  alt="Why WDS background" /> 
                    </div>
                </div> 
            </div>
            <div className="flex-layout-section-full align-items-center">
                <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                    <div className="content-header flex-layout-column">    
                        <h3 className="subtitle flex-layout-center">Design</h3>
                    <div className="content-block width-100">
                        <p className=" flex-layout-center-center "> As design has evolved, it’s become more cross-functional. Physical, digital, service design have all converged. And that’s great for the end user. 
                                        But from an organizational point of view, that’s very challenging, indeed, to manage. And because all these different forces have come together at once, it 
                                        means that that act of making ] stand-out products and services that really delight customers is harder than ever before for many companies out there. <br/>
                                        good design is good for business <br/>
                                        Empathizing with a user or customer is the key method or the key activity in great design that I don’t think is really translatable to data or analytics or 
                                        any of those things. Design brings empathy into the problem-solving process. That’s the qualitative intangible. <br/>
                                        Design "no longer a luxury"</p>
                    </div>
                    <div className="content-header flex-layout-center-center">
                         <h1 className="margin-top-100">We Design for the user with your business in mind!</h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex-layout-column flex-layout-justified-sb">
                <div className="flex-layout-row flex-items-justified-center margin-top-50 flex-align-top"> 
                    <div className="content-header flex-layout-column flex-sh-500">
                        <h3>Design Systems</h3>
                    <div className="content-block">
                        <p className="content-text-18 content-block-why">Understanding not only the what, but the why, behind the design of a system is critical to creating an exceptional user experience. Defining and adhering to standards is how we create that understanding. Doing so removes the subjectivity and ambiguity that often creates friction and confusion within product teams.
                                        Standards encompass both design and development. Standardizing things like naming conventions, accessibility requirements, and file structure will help teams work consistently and prevent errors.
                                        Visual language is a core part of your design standards. Defining the purpose and style of color, shape, type, icons, space, and motion is essential to creating a brand aligned and consistent user experience. Every component in your system incorporates these elements, and they play an integral role in expressing the personality of your brand.

                            </p>
                            <Button type="button" className="margin-top-50">Read More...</Button>
                    </div>
                    </div>
                    <div className="flex-layout-column">
                        <div className="content-header flex-layout-column flex-items-justified-center">
                            <h3>Branding</h3>
                        <div className="content-block">
                            <p className="content-text-18 content-block-why">Recognition and attention for your brand is a valued support for your company to enforce. Branding makes everything intuitive and familiar.
                                        Visual language is a core part of your design standards. Defining the purpose and style of color, shape, type, icons, space, and motion is essential to creating a brand aligned and consistent user experience. 
                                        Every component in your system incorporates these elements, and they play an integral role in expressing the personality of your brand.
                            </p>
                                <Button type="button" className="margin-top-50">Read More...</Button>
                        </div>
                        </div>   
                    </div>
                </div> 
            </div>
            <div className="flex-layout-column flex-layout-justified-sb">
                <div className="flex-layout-row flex-items-justified-center margin-top-50"> 
                    <div className="content-header flex-layout-column flex-sh-500">
                        <h3>Marketing</h3>
                    <div className="content-block">
                        <p className="content-text-18 content-block-why">The WDS Digital Marketing team researches, ideates, implements and optimizes sophisticated web marketing solutions tailored to the specific goals and objectives of each of our clients. 
                                        What sets us apart is a genuine understanding of your users. Combining proven digital marketing strategies and user observations, we create and run organized digital marketing campaigns that deliver. Our team cuts through the clutter to create and measure impactful strategies. 
                                        We ensure your digital marketing campaigns align with your business objectives, and leverage opportunities for innovation and differentiation.
                        </p>
                            <Button type="button" className="margin-top-50">Read More</Button>
                    </div>
                    </div>
                <div className="flex-layout-column">
                    <div className="content-header flex-layout-column">
                        <h3>Consultation</h3>
                    <div className="content-block">
                        <p className="content-text-18 content-block-why">Recognition and attention for your brand is a valued support for your company to enforce. 
                                        Branding makes everything intuitive and familiar, as long as you take your customers into account.
                        </p>
                             <Button type="button" className="margin-top-50">Read More...</Button>
                    </div>
                    </div>   
                </div>
                </div> 
            </div>
            <div className="flex-layout-row flex-layout-center-center margin-top-50 yellow"> 
                <div className="content-header flex-layout-column flex-layout-center-center">
                    <h3 className="subtitle-reverse">"We relieve the burden programmers <br/> face trying to design with CSS"</h3>
                </div>
            <div className="flex-layout-column">
                <div className="container-image-block image_customer_first">
                    <img className="image_customer_first"  style={{}} alt="Your Business is Our Joy" /> 
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default design_solutions;