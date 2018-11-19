import React, { Component } from 'react' ;
import backgroundServices from '../images/enchilada.png';
import bloatware from '../images/bloatware.gif';

class Services extends Component {
    render () {
        return(
            <div className="flex-container-default"> 
                <div className="flex-containertop">
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
                <div className="dots">
                    <div className="flex-container50 content-top marginleft50"> 
                        <div className="content-top marginleft30 margintop50"> 
                            <div className="content-text">
                                <div className="content-header textblock purple"><img src={bloatware} alt="bloatware"/> 
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container50 content-top marginleft50"> 
                        <div className="content-top marginleft30 margintop50"> 
                            <div className="content-text">
                                <div className="content-header  lightgreen">
                                        <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="flex-container"> 
                <div className="flex-container100 lightgreen">
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