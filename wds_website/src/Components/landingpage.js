import React, { Component } from 'react' ;
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render () {
        return(
            <div style={{backgroundColor: "ff0000"}}>
                <Grid className="flex-container100">
                    <Cell col={1}></Cell>
                </Grid>
            <div className="flex-container100">
                    Hello
            </div>
            </div>
        )
    }
}

export default Landing;