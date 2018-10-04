import React, { Component } from 'react' ;

import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render () {
        return(
            <div style={{backgroundColor: "ff0000"}}>
                <Grid className="flex-container100">
                    <Cell col={12}></Cell>
                </Grid>
            <div className="flex-container100">
                <img src="./images/fontloaf.svg" />
            </div>
            </div>
        )
    }
}

export default Landing;