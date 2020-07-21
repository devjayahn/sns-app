import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigator from '../Nav/Navigator'
import FeedContainer from '../Feed/FeedContainer'
import Home from '../../pages/Home'


export default () => (
    <Router>      
      <Navigator />
      <Route exact path="/home" component={Home} />
      <Route path="/feeds" component={FeedContainer} />       
    </Router>
  )