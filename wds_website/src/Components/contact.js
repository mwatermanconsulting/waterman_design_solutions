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
                <div className="flex-layout-section-full flex-layout-column margin-top-50">
                <form className="grid-2col-text flex-layout-center-center flex-layout-column" action="/action_page.php">
                <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
                <div>
                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
                <div>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" />
                </div>

                <div>
                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </div>
                <div className="flex-layout-center-center margin-top-15" style={{marginLeft:'95%'}}>
                <input type="submit" value="Submit" />
                </div>
                </form>
    </div>
  
    </div>
    </div>
        )
    }
}

export default contact;