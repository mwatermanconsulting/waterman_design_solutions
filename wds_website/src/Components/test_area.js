import React, { Component } from 'react' ;
import wdslogofull from '../images/backgrounds/wds-logo-full.svg';
import pee from '../images/photos/pee.jpg';
import woo from '../images/photos/woo1).gif';


class test_area extends Component {
    render () {
        return(
        <div className="flex-layout-section-full" style={{height:'1000px'}}>
            <div className="flex-layout-column-full">
                <p className="choo">peepoo agree or disagree<br/><br/>
            </p>
              </div>
              <div>
               <p className="chooch">here some choccy milk becuz your ebic</p>   
              </div>
              <div>
               <img src={pee} />
              </div>
              
              <div>
               <p className="woo">i'm the ed sheeran of lacrosse  
              
              <div>
               <img src={woo} />
              </div></p> 
            </div>
                 
        </div>  
                                     
                            )
                        }
                    }
export default test_area;