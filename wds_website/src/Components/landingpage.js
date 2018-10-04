import React, { Component } from 'react' ;

//import { Grid, Cell } from 'react-mdl';
import logo from '../images/WDS-logo.svg';

class Landing extends Component {
    render () {
        return(
            <div className="flex-container"> 
                <div className="flex-container100" style={{background: "red"}}>
                   <div>
                    whaT
                    </div>
                </div>
                    
            <div className="flex-container100" style={{background: "blue"}}>>
            
                <div className="logo">
                <img src={logo} />
            </div> 
            
            </div>

    <div className="flex-container100" style={{background: "yellow"}}>
        <div>
            whaT
        </div>
    </div>
    </div>
        )
    }
}

export default Landing;