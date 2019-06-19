import React, { Component } from 'react' ;
import bg_video from '../images/backgrounds/bg-video.png';
import services from '../images/graphic-services.svg';
import video_s1 from '../images/photos/photo-video-s1.png';
import video_s2 from '../images/photos/photo-video-s2.png';
import video_s3 from '../images/photos/photo-video-s3.png';
import video_s4 from '../images/photos/photo-video-s4.png';

class video_production extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    Video Production</div>
                <img className="flex-image-container" src={bg_video}  alt="Why WDS background" /> 
            </div>
            <div className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                Videos drive action in your marketing strategy on social media
                </div>
            </div>
            <section className="flex-layout-section-full photo-content-color align-items-center" style={{height:'670px'}}> 
                <div className=" grid-2col-text-photo align-items-center margin-tb-100 width-70">
                <div className="content-block 2col-text">
                    <div className="callout-text text-align-left text-white">Video can tell a story in a way that is unmatched by any other media. It is what your users relate to the most.</div>
                             
                </div>
                <div className="2col-photo width-100 grid-placeself-center">
                    <img className="container-photo-callout" src={video_s1}  alt="Video" /> 
                </div>
                </div>
            </section>
                
            
    
         
            <div className="flex-layout-section-full flex-layout-center-center margin-top-100 flex-layout-column">
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                        Video marketing tells your brand’s story
                        </div>
                        <div className="subtitle">
                        Everyone’s doing it
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Video is one of the most versatile and profitable digital marketing tools. It can lead directly to sales. Studies show that 74% of users watching explainer videos actually buy the product. It is one of the highest provider of a good return on investment.</p>
                        </div>
                    </div>
                    <div className="2col-photo grid-placeself-center">
                        <img className="photo-container" src={video_s2}  alt="Video Content" /> 
                        <p className="caption">Image by Bruno Glätsch from Pixabay </p>
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                        What kind of video content is best?
                        </div>
                        <div className="subtitle">
                        The kind that shows empathy and connection
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            Most people are put off by videos that don’t explain the product clearly enough. In order to build trust with your user base, it needs to provide useful and interesting information. </p>
                        </div>
                    </div>
                    <div className="2col-photo grid-placeself-center">
                        <img className="photo-container" src={video_s3}  alt="Video Content" /> 
                        <p className="caption">Photo by Perry Grone on Unsplash</p>
                    </div>     
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 margin-bottom-100" style={{ width: '75%' }}>
</div>
                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left flex-layout-section-full">
                        <div className="title">
                        Trust is the foundation for your brand
                        </div>
                        <div className="subtitle">
                        Building long term relationships
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-25">
                            <p className="content-text-18"> Video content is engaging and ignites emotions. YouTubers are the most powerful social media figures promoting brands. 
Effective marketing videos have a conversational tone. It creates an individual approach and more confidence to buy online.</p>           
                        </div>
                    </div>
                    <div className="2col-photo grid-placeself-center">
                        <img className="photo-container" src={video_s4}  alt="Video Content" /> 
                        <p className="caption">Photo by Form on Unsplash</p>
                    </div>      
                </section>

                <section className="content-header flex-layout-column flex-layout-center-center border-tb-5 margin-top-100 grey padding">
                   
                        <p className="callout-text-lg">“The new era demands a focus on ignition, not just content, on trust, not just traffic, and on the elite people in your audience who are spreading and advocating your content.” <br></br>
- Mark Schaefer, the Executive Director of Schaefer Marketing Solutions</p>
                    
                </section>
                  
        </div>
        </div>
        )
    }
}

export default video_production;