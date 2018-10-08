import React, { Component } from 'react' ;
import badHairCut from '../images/badhaircut.gif';

class clients extends Component {
    render () {
        return(
            <div className="flex-container"> 
            <div className="flex-container100" style={{background: "red"}}>
               <div>
                1st section
                </div>
            </div>  
        <div className="flex-container100" style={{background: "blue"}}>
        
            <div className="logo">
                <div> 2nd section </div>
             <img src={badHairCut} alt="bad hair cut"/> 
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

export default clients;