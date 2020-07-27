import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigator from '../Nav/Navigator';
import FeedContainer from '../Feed/FeedContainer';
import Home from '../../pages/Home';
import UserInfo from '../../pages/UserInfo';
import MyFeedContainer from '../Feed/MyFeedContainer';



export default () => (
    <Router>      
        <Navigator />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/feeds" component={FeedContainer} />    
        <Route exact path="/:id"  component={UserInfo} />
        <Route path="/feed/:id"  component={MyFeedContainer} />
      </Switch>
    </Router>
  )