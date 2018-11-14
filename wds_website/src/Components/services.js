import React, { Component } from 'react' ;
import backgroundServices from '../images/couple.png';

class Services extends Component {
    render () {
        return(
            <div className="flex-container-default"> 
                <div className="flex-container100">
                    <div className="sevices-background-section1">
                        <img className="couple-img" src={backgroundServices}  alt="couple" /> 
                        <div className="content-right-center">
                            <div className="content-header">
                            <div className="title">SERVICES</div>
                            </div>
                        <div className="content-text">
                            <p> End to end design, we take care of it all, from initial UX focus groups to marketing on the web.</p>
                        </div>
                    </div>
                 </div>
                </div>  
            <div className="flex-container100 lightgreen">
            
                <div className="logo">
                    <div className="dots">  
                        <div className="flex-container50" background src="../images/bloatware.gif" ></div>
                    </div>
            </div> 
            </div>
            <div className="flex-container"> 
                <div className="flex-container100" style={{background: "yellow"}}>
            <div>
                3rd section 
            </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Services;