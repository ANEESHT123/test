import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './Pages/Service'
// import Header from './components/Header/Header';
import Home from './Pages/Home';


class Routes extends Component {
  render() {
    return (
      <Router >
      {/* <div>
          <Header></Header>
      </div> */}
          <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/Services' component={Service}></Route>

          </Switch>
      </Router>
    );
  }
}

export default Routes;