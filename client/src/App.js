import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Navigator from './components/Nav/Navigator';
import Route from './components/Route/Route'


export default class App extends Component {  

  render() {
    return (         
      <Route />      
    );
  }
}


