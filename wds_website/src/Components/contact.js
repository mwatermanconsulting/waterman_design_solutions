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
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column margin-top-100 margin-bottom-100 padding">
            <p className="title-homepage text-align-center padding-20">We'd love to hear from you</p>
            <p className="content-text-21 text-align-center margin-20">Whether you have a question about features, pricing, or would like to get together to explore solutions, we are more than happy to help!</p>
            <p className="subtitle text-black">484-477-5193</p>
            <p className="subtitle ">
            <a className="greenlink " href="mailto: inquiries@watermandesignsolutions.com"> inquiries@watermandesignsolutions.com</a></p>
               
                
    
  
    </div>
    </div>
        )
    }
}

export default contact;