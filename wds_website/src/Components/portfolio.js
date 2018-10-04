import React, { Component } from 'react' ;

class contact extends Component {
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
                {/* <img src={logo} /> */}
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

export default contact;