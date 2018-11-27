import React, { Component } from 'react' ;
import backgroundClients from '../images/clients-pic.png';
import pi from '../images/pi.png';
import terri from '../images/terri.png';

class aboutus extends Component {
    render () {
        return(
            <div className="flex-container-default"> 
                <div className="flex-containertop">
                    <div className="sevices-background-section1">
                        <img className="clients-pic" src={backgroundClients}  alt="clients-pic" /> 
                        <div className="content-right-center">
                            <div className="content-header">
                                <div className="title">Clients</div>
                            </div>
                                <div className="content-text">
                                    <p>Everybody loves us! We service businesses with all kinds of backgrounds from corporations to small startups. </p>

                                </div>
                        </div>
                    </div>
                </div>  
                    <div className="container-justifyRow-center offwhitedots">
                        <div className="flex-container100 content-top "> 
                            <img className="clientlogo" src={pi}  alt="pi"/>
                        </div>
                    </div>
                </div>
            
        
        )
    }
}

export default aboutus;