import React, { Component } from 'react' ;
import backgroundServices from '../images/enchilada.png';
import uxdesignrelief from '../images/uxdesignrelief.png';
import uipic from '../images/ui-pic.png';
import marketingpic from '../images/marketing-pic.png';
import consultingpic from '../images/consulting-pic.png';

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
        {/* UX DESIGN */}
                <div className="container-justifyRow-center pinkdots bottom-border">
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="content-header "><img className="servicespic" src={uxdesignrelief} alt="uxdesignrelief"/> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="textblock pink">
                                            <div className="title">UX Design</div>
                                            <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
        {/* UI DESIGN */}
                    <div className="container-justifyRow-center bluedots bottom-border">
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="textblock blue">
                                            <div className="title">UI Design</div>
                                            <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="content-header "><img className="services-ui-pic" src={uipic} alt="ui-pic"/> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
        {/* MARKETING*/}
                    <div className="container-justifyRow-center purpledots bottom-border">
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="content-header "><img className="marketingpic" src={marketingpic} alt="marketing-pic"/> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="textblock lightpurple">
                                            <div className="title">Marketing</div>
                                            <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
        {/* CONSULTING */}
        <div className="container-justifyRow-center offwhitedots bottom-border">
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="textblock offwhite">
                                            <div className="title">Consulting</div>
                                            <p> fjsi;fu fisu foi;srlf as;ilfj slfj slkfj slkfj slkfj salf ja;lskfj lskrg iurgkj dfvoirugselkrhgieru giier ger gordhg v;ekr hgerg rgh hoeirg ivoeirgjeurgh oeirgh oeirg heroih  </p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-container50 content-center "> 
                            <div className="container-image-block-center margintop50"> 
                                <div className="content-header">
                                    <div className="content-text">
                                        <div className="content-header "><img className="consulting-pic" src={consultingpic} alt="consulting-pic"/> 
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

export default Services;