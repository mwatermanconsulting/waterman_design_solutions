import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import { Layout, Textfield, Header, Navigation, Drawer, Content } from 'react-mdl';
import contactus from '../images/backgrounds/bg-contact.svg';

class contact extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="Waterman Design Solutions is located at 331 York Ave. Lansdale Pa. Waterman Design contact is Terri and Michael Waterman offers design services for website design, application design, UX Design and graphic design. WDS is located in the Philadelphia suburbs. Waterman Design works nationally and globally. We can reached at 484-477-5193."  />
                <meta charSet="utf-8" />
                <title>Finding the Truth</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/finding_the_truth" />
            </Helmet>
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
            <p className="content-text-21 text-align-center margin-20">Need design support for enterprise level applications, products or websites? Or are you a startup that wants to incorporate design correctly from the beginning? Contact us if you would like to hear more about design solutions for your business. </p>
            <p className="subtitle text-black">484-477-5193</p>
            <p className="subtitle ">
            <a className="greenlink " href="mailto: inquiries@watermandesignsolutions.com"> inquiries@watermandesignsolutions.com</a></p>
               
                
    
  </div>
    </div>
    </div>
        )
    }
}

export default contact;