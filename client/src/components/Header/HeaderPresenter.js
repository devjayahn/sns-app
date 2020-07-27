import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PostAdd from '../Modal/PostAdd';

const styles = theme => ({
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        justifyContent: 'left',
        marginLeft: '10px',
        marginRight: '100px'
      },
      body: {
        width: '50%',
        alignItems: 'center',        
        margin: 'auto',
        marginTop: '15px',        
        padding: '20px',
        display: 'flex',
        marginBottom: '44px'        
      },     
      text: {
        justifyContent: 'flex-end'
      },
      id: {
          fontSize: '25px',
          marginBottom: '20px'
      },
      introduce: {
          marginTop: '20px'
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
                    <div className={classes.id}>
                        {this.props.user_id}
                    </div>
                    <div>
                        <p>Follower 0 Follow 0</p>
                    </div>                   
                    <div className={classes.introduce}>
                        {this.props.introduce}                        
                    </div>
                </div> 
                <PostAdd />              
            </div>
        )
    }
}

export default (withStyles)(styles)(HeaderPresenter);