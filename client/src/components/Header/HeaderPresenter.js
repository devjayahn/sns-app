import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        justifyContent: 'left',
        marginRight: '40px'
      },
      body: {
        width: '50%',
        alignItems: 'center',        
        margin: 'auto',
        marginTop: '5px',        
        padding: '10px',
        display: 'flex',
        marginBottom: '44px'        
      },     
      text: {
        justifyContent: 'flex-end'
      }    
  });

class HeaderPresenter extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.body}>
                <div>
                   <Avatar src={this.props.profile_image} alt={this.props.user_id} className={classes.large}/> 
                </div>
                <div className={classes.text}>
                    <div>
                        {this.props.user_id}
                    </div>
                    <div>
                        follower
                    </div>
                    <div>
                        follow
                    </div>
                    <div>
                        {this.props.introduce}
                    </div>
                </div>
            </div>
        )
    }
}

export default (withStyles)(styles)(HeaderPresenter);