import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from "react-router-dom";
import './components/counter.css';

import Home from './Home.js'
import Reserve from './Reserve.js'
import NavBar from './components/navbar'


function App(props){
  return(
    <div>    
    <NavBar />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/reserve' component={Reserve} />   
    </Switch>
    </div>

  )
}
export default App;


