import React, { Component } from 'react' ;
import bg_video from '../images/backgrounds/bg-video.png';
import video_s1 from '../images/photos/photo-video-s1.png';
import video_s2 from '../images/photos/photo-video-s2.png';
import video_s3 from '../images/photos/photo-video-s3.png';
import video_s4 from '../images/photos/photo-video-s4.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class video_production extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Video Production
                    </div>
                        <img className="flex-image-container width-100" src={bg_video}  alt="Case Studies" />     
                </section>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    Videos drive action in your marketing strategy on social media.
                </div>
            </div>

            <section className="grid-2col-photo-content photo-content-color border-bottom-5 height-670" > 
                <div className="grid-left content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left">
                        Overall, 73% of consumers worldwide prefer seeing videos on social media that are "entertaining." WDS can tell your story.
                    </div>      
                </div>
                <div className="grid-right-photo container-image-block">
                    <img className="container-photo-callout image-size-100" src={video_s1}  alt="Video Production" /> 
                </div>
            </section>

            <section className="content-header flex-layout-center-center flex-layout-column margin-top-100">
                <div className="flex-layout-center-center title text-align-center content-block-60">
                    Engage your customers and earn their trust

                </div>
                <div className="margin-top-25 content-block-55">
                    <p className="subtitle flex-layout-center-center"> 
                    WDS has a team with extensive post-production knowledge.
                    Professional video production is the most effective way to get a message across for corporate, instructional or marketing purposes. </p>
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>
           
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
            
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                            Videos should tell a story
                        </div>
                        <div className="subtitle margin-top-10">
                            Stories add value to your message
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Video is one of the most versatile and profitable  digital marketing tools that can lead directly to sales. Studies show that 74% of users watching explainer videos actually buy the product. It is one of the highest provider of a good return on investment.</p>
                        </div>
                    </div>
                    
                    <div className="grid-right">
                        <img className="photo-container" src={video_s2}  alt="Video Content" /> 
                        
                    </div>     
                </section>



                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title content-block-85">
                        What kind of video content is best?
                        </div>
                        <div className="subtitle margin-top-15 ">
                        The kind that shows empathy and connection
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Most people are put off by videos that don’t explain the product clearly enough. In order to build trust with your user base, it needs to provide useful and interesting information. </p>
                        </div>
                    </div>
                    <div className="grid-right">
                        <img className="photo-container" src={video_s3}  alt="Video Content" /> 
                       
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title content-block-85">
                        Trust is the foundation for your brand
                        </div>
                        <div className="subtitle margin-top-15">
                        Building long term relationships
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> Video content is engaging and ignites emotions. YouTubers are the most powerful social media figures promoting brands. 
Effective marketing videos have a conversational tone. It creates an individual approach and more confidence to buy online.</p>           
                        </div>
                    </div>
                    <div className="grid-right">
                        <img className="photo-container" src={video_s4}  alt="Video Content" /> 
                        
                    </div>      
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-section-full flex-layout-center-center">
                <div className="subtitle margin-top-15">
                        Small sampling of video work
                        </div>
                <div className="align-center align-items-center margin-top-25">
                    <ul className="grid-clients-wrapper align-items-center  width-70">
                    <li  className="grid-clients-box "  data-content="ACD">
                    <iframe title="Surreal Video" className="width-100 height-100" src="https://www.youtube.com/embed/Us_1q7_nbLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                    <li  className="grid-clients-box "  data-content="White Wolf Consulting"> 
                    <iframe title="White Wolf Consulting" className="width-100 height-100" src="https://www.youtube.com/embed/2PjgxbyNKdI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </li>
                    <li  className="grid-clients-box "  data-content="Kinetix">
                    <iframe title="Kinetix" className="width-100 height-100" src="https://www.youtube.com/embed/Us_1q7_nbLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                    
                    <li  className="grid-clients-box "  data-content="Norwood Company">
                    <iframe title="Norwood"  className="width-100 height-100" src="https://www.youtube.com/embed/Pr6iJJCwswM" frameborder="0" allow="accelerometer; autoplay;  picture-in-picture" allowfullscreen></iframe>
                        </li>
                    <li  className="grid-clients-box "  data-content="Pierre and Carlo">
                    <iframe title="Pierre and Carlo" className="width-100 height-100" src="https://www.youtube.com/embed/_y_Ut3PQ4_M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </li>
                    
                </ul>
                </div>
            </section>      
        </div>

        <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

        <section className="flex-layout-section-full align-self-center">
                    <div className="grid-2col-text-center width-100" >
                        <div className="grid-title subtitle content-text-24 margin-bottom-20">
                        Video Services Include: 
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Video Production
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Post Production
                        </div>
                        <div className="item content-text-18">
                            B2B Video
                        </div>
                        <div className="item content-text-18">
                            Social Media
                        </div>
                        <div className="item content-text-18">
                            Animation 
                        </div>
                       
                           
                           
                        </div>
                    
                </section>
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="photo-container margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                    <div className="flex-layout-center-center">
                    <p className="callout-text text-white text-align-center"> The first video WDS produced was created on the Amiga 4000 and Video Toaster!</p>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default video_production;