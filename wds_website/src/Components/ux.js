import React, { Component } from 'react' ;
import ux_bg from '../images/bg-ux.png'
import ux_s1 from '../images/photos/photo-ux-s1.png'
import services from '../images/graphic-services.svg';
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class ux extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-items-align-center"> 
                <div className="flex-section-fixed-head flex-layout-center-center  image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        UX Design
                    </div>
                        <img className="flex-image-container" src={ux_bg}  alt="Why WDS background" /> 
                </div> 
                <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text"> 
                        UX is user interaction with ANY product. It is not a checkbox in the process, it IS the process. It rules over all decisions.
                    </div>
                </div>
                
                <div className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                    <div className="item-a-nb content-block-60 content-header flex-layout-column">
                    <div className="subtitle margin-top-15">
                            UX WITHOUT USER RESEARCH ISN'T REALLY UX
                    </div>
                        <div className="callout-text text-align-left text-white margin-top-15" style={{marginLeft:'3%'}}>
                            Our UX Design practice delivers a seamless experience needed for the connected world. Our strategy of observing and discovering insights ensures we’re solving the right problems, and our UX Design team will make sure customers and users love the outcome. You’ll be able to measure our impact on your business results.
                        </div>
                    </div>
                    <div className="grid-item-b container-image-block">
                        <img className="container-photo-callout" src={ux_s1}  alt="shaking hands" /> 
                    </div>
                </div>
                
                <div className="flex-layout-section-full flex-layout-center-center margin-top-100">
                    <div className="subtitle margin-top-15">
                        UX WITHOUT USER RESEARCH ISN'T REALLY UX
                    </div>
                    <div className="content-block-60 margin-top-25">
                        <p className="content-text-18">WDS discovers the patterns and themes that provide actionable, deeper and more valuable perspectives on your customers' wants, needs and motivations.</p>
                        <p className="content-text-18">The most meaningful insights for experience strategy are developed with behavior-based understanding of users. Our experience strategists observe people in context - where they work, play or live - to understand their goals, needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve..</p>
                    </div>         
            </div>
        </div>
        )
    }
}

export default ux;