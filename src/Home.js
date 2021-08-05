import React, {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './components/counter.css';
import logo from './components/home.jpg';


class Home extends Component {
  render(){ 
    return (
      <React.Fragment>
        <h1>Welcome to Fresh Kicks!</h1> 
        <img src={logo} alt="home"></img>
      </React.Fragment>
    );
  }
}
export default Home;
