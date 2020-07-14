import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const styles = theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    body: {
      padding: '10px'
    }
  });

class Feed extends Component {
    render() {
    const { classes } = this.props;
     return(
        <div className={classes.body}>
            <div className={classes.root}>            
            <Avatar alt="profile_image" src="http://placeimg.com/180/180/1" />{this.props.user_id}      
            </div>
            <hr/>
            <img src={this.props.feed_image} alt={this.props.user_id}></img>
            <div>
            <IconButton aria-label="likeit" color="secondary">
             <FavoriteIcon />           
            </IconButton>
            <IconButton aria-label="comment" color="primary">
             <CommentIcon />          
            </IconButton>
            </div>
            <p>좋아요 {this.props.likeit}개</p>
            <p>{this.props.context}</p>
            <p>{this.props.create_at}</p>        
        </div>        
        )
    }
}

export default withStyles(styles)(Feed);