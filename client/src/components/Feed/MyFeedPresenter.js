import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const styles = theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),  
        textDecoration: 'none',
        color: 'black'      
      },
    },    
    like: {
      fontWeight: 'bold'
    },
    create_at: {
      fontSize: '10px'
    },
    id: {
      paddingTop: '8px'
    },
    body: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      marginTop: '5px',
      display: 'block',
      backgroundColor: 'white',
      padding: '10px'
    },
    spanId: {
      marginRight: '10px',      
      fontWeight: 'bold'
    },
    spanContext: {
      
    },
    img: {
      maxWidth: '100%',
      height: '200px',
      maxHeight: '100%'
    }
  });

class MyFeedPresenter extends Component {
    render() {
        const { classes } = this.props;
        return(
          <div className={classes.body}>                
            <div className={classes.root}>                                  
            <Link to={location => `/${this.props.user_id}`}
                className={classes.root}><Avatar alt="profile_image" src={this.props.profile_image} /><p className={classes.id}>{this.props.user_id}</p></Link>
            </div>
            <hr/>
            <img src={this.props.feed_image} alt={this.props.user_id} className={classes.img}></img>
            <div>
            <IconButton aria-label="likeit" color="secondary">
             <FavoriteIcon />           
            </IconButton>
            <IconButton aria-label="comment" color="primary">
             <CommentIcon />          
            </IconButton>
            </div>
            <p className={classes.like}>좋아요 {this.props.likeit}개</p>
            <span className={classes.spanId}>{this.props.user_id}</span><span>{this.props.context}</span>
            <p className={classes.create_at}><TimeForToday create_at={this.props.create_at}/></p>        
        </div>
    )}
}

 function TimeForToday({create_at}) {  
    const today = new Date();
    const timeValue = new Date(create_at);
    
    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
        return `${betweenTime}분 전`;
    }
  
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간 전`;
    }
  
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일 전`;
    }
  
    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  }
  
  export default withStyles(styles)(MyFeedPresenter);