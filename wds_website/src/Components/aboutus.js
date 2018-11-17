import React, { Component } from 'react' ;
import backgroundServices from '../images/couple.png';
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class aboutus extends Component {
    render () {
        return(
            <div className="flex-container-default"> 
                <div className="flex-containertop">
                    <div className="sevices-background-section1">
                        <img className="couple-img" src={backgroundServices}  alt="couple" /> 
                        <div className="content-right-center">
                            <div className="content-header">
                                <div className="title">About US</div>
                            </div>
                            <div className="content-text">
                                <p> End to end design, we take care of it all, from initial UX focus groups to marketing on the web.</p>
                            </div>
                    </div>
                 </div>
                </div>  
            <div className="flex-container100 purple">
                <div className="dots">
                    <div className="flex-container50 content-center marginleft50"> <img src={mike} alt="mike"/> 
                        <div className="content-center marginleft30"> 
                            <div className="content-text">
                                <div className="content-header">
                                    <div className="title">Michael Waterman</div>
                                    <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container50 content-center marginleft50"> <img src={terri} alt="terri"/> 
                        <div className="content-center marginleft30"> 
                            <div className="content-text">
                                <div className="content-header">
                                    <div className="title">Terri Waterman</div>
                                    <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                    <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                    <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        
                    
                </div> 
            </div>
            
        
        )
    }
}

export default aboutus;