import React, { Component } from 'react' ;
import backgroundAboutus from '../images/background-aboutus.png';
import mike from '../images/mike-cartoon.png';
import terri from '../images/terri-cartoon.png';

class aboutus extends Component {
    render () {
        return(
            <div className="flex-container-default"> 
                <div className="flex-containertop">
                    <div className="aboutus-background-section1">
                        <img className="backgroundAboutus" src={backgroundAboutus}  alt="about us" /> 
                        <div className="content-right-center">
                            <div className="content-header">
                                <div className="title">About US</div>
                            </div>
                                <div className="content-text">
                                    <p>Authentic. Empathetic. Diplomatic. Credibility to the max.</p><p> We are advocates for the user. End to end design, we take care of it all, from initial UX focus groups to marketing on the web.</p>

                                </div>
                        </div>
                    </div>
                </div>  
                    <div className="container-justifyRow-center purple bottom-border">
                        <div className="flex-container50 content-top "> 
                            <div className="container-image-block-center margintop50"> 
                                        <div className="textblock width-70 offwhite border-3px">
                                           
                                                <img className="aboutuspic floatleft" src={mike} alt="mike"/>
                                           
                                                <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                            
                                        </div>
                            </div>
                        </div>
                        <div className="flex-container50 content-top "> 
                            <div className="container-image-block-center margintop50"> 
                                        <div className="textblock width-70 offwhite border-3px"><img className="aboutuspic floatleft" src={terri} alt="terri"/> 
                                            <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                        </div> 
                                    
                                
                            </div>
                        </div> 
                    </div>
                </div>
            
        
        )
    }
}

export default aboutus;