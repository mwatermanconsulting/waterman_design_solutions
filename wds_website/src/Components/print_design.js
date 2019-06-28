import React, { Component } from 'react' ;
import print from '../images/backgrounds/bg-print.png';
import print_s1 from '../images/photos/photo-print-s1.png';
import print_s2 from '../images/photos/photo-print-s2.png';
import wyp from '../images/photos/photo-print-wyp.png';
import guyuaba from '../images/photos/photo-print-guyuaba.png';
import ketchhot from '../images/photos/photo-print-ketchhot.png';
import hcnrg from '../images/photos/photo-print-hcnrg.png';
import bb from '../images/photos/photo-print-bb-brochure.png';
import avandia from '../images/photos/photo-print-avandia.png';
import together from '../images/photos/photo-why-wds.png';
import finding from '../images/photos/photo-documentation-s1.png';
import finding_truth1 from '../images/photos/photo-finding-truth-s1.png';
import finding_truth2 from '../images/photos/photo-finding-truth-s2.png';
import finding_truth3 from '../images/photos/photo-finding-truth-s3.png';
import finding_truth4 from '../images/photos/photo-finding-truth-s4.png';
import finding_truth5 from '../images/photos/photo-finding-truth-s5.png';
import finding_truth6 from '../images/photos/photo-finding-truth-s6.png';
import finding_truth7 from '../images/photos/photo-finding-truth-s7.png';
import finding_truth8 from '../images/photos/photo-finding-truth-s8.png';

class print_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                        Print Design</div>
                <img className="flex-image-container" src={print}  alt="Why WDS background" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                        Print will continue to be valuable where there is a physical customer presence
                </div>
            </section>
            <section className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-left content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">
                        Print ads will be more effective if they are a complement to your digital campaigns already in play and entice readers to interact with your brand online 
                    </div>      
                </div>
                <div className="grid-right-photo container-image-block">
                    <img className="container-photo-callout image-size-100" src={print_s1}  alt="shaking hands" /> 
                </div>
            </section>
            <section className="grid-2col-photo-content" style={{height:'670px'}}> 
                <div className="grid-left content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-black">
                        Print and online marketing brings branding and representation to the goals of your business. Printed materials support online marketing. It covers a larger audience that respond to these marketing tools differently. We take care of each marketing aspect from web design to branding to tangible materials such as business cards, postcards, annual reports, magazines and more. 
                    </div>                     
                </div>
                <div className="grid-right-photo container-image-block">
                    <img className="container-photo-callout image-size-100" src={print_s2}  alt="shaking hands" /> 
                </div>
            </section>

            <div className="flex-layout-section thin-hr  align-self-center margin-bottom-100" style={{ width: '75%' }}></div>
    
            <section className="flex-layout-section-full align-self-center">
                    <div className="grid-2col-text-center width-100" >
                        <div className="grid-title subtitle content-text-24 margin-bottom-20">
                        Print design services include: 
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Business Identity
                        </div>
                        <div className="item content-text-18 margin-top-10">
                            Letterhead 
                        </div>
                        <div className="item content-text-18">
                            Business cards
                        </div>
                        <div className="item content-text-18">
                            Logo design 
                        </div>
                        <div className="item- content-text-18">
                            Postcards
                        </div>
                        <div className="item content-text-18">
                            Brochures
                        </div>
                        <div className="item content-text-18">
                            Promotional products
                        </div>
                        <div className="item content-text-18">
                            Publications
                        </div>
                        <div className="item content-text-18">
                            Tradeshow marketing materials
                        </div>
                        <div className="item content-text-18">
                            Catalogues
                        </div>

                    </div>
                </section>

                <div className="flex-layout-section thin-hr margin-top-100 align-self-center margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="grid-gallery grid-gap-20 content-header align-self-center margin-bottom-50 width-70">
                    <div className="gallery-1 container-image-dd align-self-end">
                        <img className="container-image-dd" src={wyp}  alt="World Team Tennis" /> 
                        <p className="content-block-auto ">
                            Women's Yellow Pages<br></br>
                            Industry: Communication<br></br>
                            Book publishing
                        </p>
                    </div>     
                    <div className="container-image-dd gallery-3 align-self-end">
                        <img className="container-image-dd"  src={ketchhot}  alt="Ketchhot" /> 
                        <p className="content-block-auto ">
                        Ketchhot<br></br>
                        Industry: Food<br></br>
                        Label printing
                        </p>
                    </div>
                    <div className="gallery-4 container-image-dd align-self-end">
                        <img className="container-image-dd"  src={bb}  alt="Body Bouquet" />
                        <p className="content-block-auto ">
                        Body Bouquet<br></br>
                        Industry: Health and Beauty<br></br>
                        Brochures
                        </p>
                    </div> 
                    <div className="gallery-5 container-image-dd align-self-end">
                        <img className="container-image image-size-50" src={avandia}  alt="Avandia" />
                        <p className="content-block-auto ">
                        Avandia<br></br>
                        Industry: Pharmaceuticals<br></br>
                        Label printing
                        </p> 
                    </div> 
                    <div className="gallery-2 container-image-dd align-self-end">
                        <img className="container-image-dd" src={guyuaba}  alt="Guyuaba" />
                        <p className="content-block-auto ">
                        Guyuaba<br></br>
                        Industry: Food<br></br>
                        Label printing
                        </p> 
                    </div> 
                    <div className="gallery-6 container-image-dd align-self-end">
                        <img className="container-image-dd" src={hcnrg}  alt="Hcnrg" />
                        <p className="content-block-auto ">
                        HCNRG<br></br>
                        Industry: Solar Panels<br></br>
                        Presentation materials
                        </p> 
                    </div> 
                </section>
        
            
            </div>
        )
    }
}

export default print_design;