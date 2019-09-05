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
import donolow from '../images/photos/photo-print-donolow.png';
import wtt from '../images/photos/photo-web-wtt.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class print_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                        Graphic Design</div>
                <img className="flex-image-container" src={print}  alt="Print Design" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                        Graphic design for printed collateral will continue to be valuable where there is a physical customer presence.
                </div>
            </section>
            <section className="grid-2col-photo-content photo-content-color border-bottom-5 height-670"> 
                <div className="grid-left content-block-60 flex-layout-column">
                    <div className="callout-text text-align-left">
                        Print ads are more effective when they are a complement to your digital campaigns, enticing your audience to interact with your brand online. 
                    </div>      
                </div>
                <div className="grid-right-photo container-image-block">
                    <img className="container-photo-callout image-size-100" src={print_s1}  alt="shaking hands" /> 
                </div>
            </section>
            <section className="flex-layout-section-full flex-layout-column align-items-center margin-top-50">
              
                    <div className="title">
                            The Value of Graphic Design
                    </div>
                    <div className="margin-top-25 align-self-center content-block-75">
                        <p className="content-text-24 text-align-center ">
                            Printed materials help brand your business. It supports your social media and ad word marketing.  It covers a larger audience that respond to these marketing tools differently. We take care of each marketing aspect from web design to corporate identity to tangible materials such as business cards, postcards, annual reports, magazines and more. </p>
                    </div>
                
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

             <section className="flex-layout-section-full flex-layout-center-center">
                <div className="align-center align-items-center">
                    <ul className="grid-clients-wrapper align-items-center">
                    <li  className="grid-clients-box image subtitle text-white"  data-content=" Women's Yellow Pages">
                        <img className="width-100" src={wyp}  alt="Women's Yellow Pages" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Ketchhot">
                        <img className="width-100 height-100"  src={ketchhot}  alt="Ketchhot" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Body Bouquet"> 
                        <img className="width-100 height-100" src={bb}  alt="Body Bouquet" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Avandia">
                        <img className="width-100 height-100" src={avandia}  alt="Avandia" />
                        </li>
                    
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Guyuaba">
                        <img className="width-100 height-100" src={guyuaba}  alt="Roos Foods" />
                        </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="HCNRG">
                        <img className="width-100 height-100" src={hcnrg}  alt="HCNRG" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="HCNRG">
                        <img className="width-100 height-100" src={donolow}  alt="Donolow Database" />
                       </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="HCNRG">
                        <img className="width-100 height-100" src={wtt}  alt="World Team Tennis" />
                       </li>
                </ul>
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="flex-layout-section-full   align-self-center">
                    <div className="grid-2col-text-center margin-left-15 margin-top-25" >
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
                            Trade show marketing materials
                        </div>
                        <div className="item content-text-18">
                            Catalogues
                        </div>

                    </div>
                </section>
            
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center       margin-top-100  grey border-top-5">
                    <div className="text-align-center width-75 margin-top-50 align-center margin-bottom-50"> 
                       <a href="../communication_insights"> 
                       <img className="content-block-55  margin-bottom-50" src={didyouknow}  alt="Did You Know?" /> </a>
                      
                    <div className="flex-layout-center-center">
                        <p className="callout-text-white text-align-center">WDS designed and produced a monthly magazine called "Combat Robot"</p>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default print_design;