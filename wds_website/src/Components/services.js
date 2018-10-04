import React, { Component } from 'react' ;
import backgroundServices from '../images/background-services.svg';

class Services extends Component {
    render () {
        return(
            <div className="flex-container"> 
                <div className="flex-container100">
                   <img src={backgroundServices} className="services_img" /> 
                </div>  
            <div className="flex-container100" style={{background: "blue"}}>
            
                <div className="logo">
                    <div> 2nd section </div>
              
            </div> 
            </div>

        <div className="flex-container100" style={{background: "yellow"}}>
            <div>
                3rd section 
            </div>
        </div>
        </div>
        )
    }
}

export default Services;