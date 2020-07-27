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
        
    }    
});


class GridPresenter extends Component {
    render() {        
        const { classes }  = this.props;
        return(            
            <div>                        
            <div className={classes.body}>
                <div>
                    <img src={this.props.feed_image} className={classes.feed_image} alt={this.props.user_id}/>
                </div>
            </div> 
            </div>             
        )
    }
}

export default (withStyles)(style)(GridPresenter);