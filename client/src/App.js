import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Navigator from './components/Nav/Navigator';
import Route from './components/Route/Route'

const styles = theme => ({ 
  body: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '5px',
    display: 'block'
  }
});

class App extends Component {  

  render() {
    return (
      <div>      
      <Route />  
      Home  
      </div>
    );
  }
}

export default (withStyles)(styles)(App);
