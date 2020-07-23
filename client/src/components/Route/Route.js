import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigator from '../Nav/Navigator';
import FeedContainer from '../Feed/FeedContainer';
import Home from '../../pages/Home';
import HeaderContainer from '../Header/HeaderContainer';
import GridContainer from '../Grid/GridContainer';
import UserInfo from '../../pages/UserInfo';


export default () => (
    <Router>      
        <Navigator />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/feeds" component={FeedContainer} />    
        <Route path="/:id"  component={UserInfo} />
      </Switch>
    </Router>
  )