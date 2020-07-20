import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigator from '../Nav/Navigator'
import FeedContainer from '../Feed/FeedContainer'


export default () => (
    <Router>      
      <Navigator />
      
      <Route path="/feeds" component={FeedContainer} />       
    </Router>
  )