import React, {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


class Reserve extends Component {
  render(){ 
    return (
      <React.Fragment>
          <main className="container">
            <Counters/>
          </main> 
      </React.Fragment>
    );
  }
}
export default Reserve;
