import React, { Component } from 'react' ;
import offerings from '../images/bg-core-studies.png';
import terri from '../images/terri.png';

class core_offerings extends Component {
    render () {
        return(
            <div className="flex-layout-column">
            <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-layout-center-center flex-item-bottom">
                        <h1 className="image-text title text-white">Core Offerings</h1>
                        <img className="flex-image-container image-size-100 container" src={offerings}  alt="Why WDS background" /> 
                     </div>
                </div> 
            </div>
                    <div className="container-justifyRow-center purpledots">
                        <div className="flex-container50 content-top "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="content-header textblock  lightpurple"><img className="aboutuspic" src alt="mike"/> 
                                            <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-container50 content-top "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="content-header textblock lightpurple"><img className="aboutuspic" src alt="terri"/> 
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

export default core_offerings;