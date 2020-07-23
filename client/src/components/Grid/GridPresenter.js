import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
    
    body: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '5px',                
        paddingLeft: '10px',                
      },

    feed_image: {
        width:  '25%',
        height: '25%',
        float: 'left',
        marginRight: '27px',
        marginBottom: '27px'
        
    },
    display: {        
        
    }
});


class GridPresenter extends Component {
    render() {
        
        const { classes }  = this.props;
        return(
            <div className={classes.body}>
                <div className={classes.display}> 
                    <img src={this.props.feed_image} className={classes.feed_image} />
                </div>
            </div>
        )
    }
}

export default (withStyles)(style)(GridPresenter);