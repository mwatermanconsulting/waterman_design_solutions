import React, { Component } from 'react' ;
import { Layout, Textfield, Header, Navigation, Drawer, Content } from 'react-mdl';
import contactus from '../images/backgrounds/bg-contact.svg';

class contact extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
            <div className="flex-layout-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container container image-size-100" src={contactus}  alt="Why WDS background" /> 
                    </div>
                </div> 
            </div>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column margin-top-100 margin-bottom-100">
            <p className="title">Contact US</p>
            <p className="subtitle">484-477-5193</p>
               
                
    
  
    </div>
    </div>
        )
    }
}

export default contact;