import React, { Component } from 'react';
import HeaderContainer from '../components/Header/HeaderContainer';
import GridContainer from '../components/Grid/GridContainer';

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