import React, { Component } from 'react';
import HeaderContainer from '../components/Header/HeaderContainer';
import HeaderPresenter from '../components/Header/HeaderPresenter';
import GridContainer from '../components/Grid/GridContainer';
import FeedContainer from '../components/Feed/FeedContainer';

class UserInfo extends Component {
    render() {
        return(            
            <div>
            <HeaderContainer id={this.props.match.params.id} />
            <GridContainer id={this.props.match.params.id} />
            </div>
        )
    }
}

export default UserInfo;