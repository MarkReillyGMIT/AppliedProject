import React from 'react';
import  Home  from './components/Home';
import  About  from './components/About';
import  NavBar  from './components/NavBar/Navbar';
import Radar from './components/Radar';
import App from '../src/App';
import { Route, Switch, Redirect } from 'react-router-dom';
/**
 * 
 * This class manages the routes for the project.
 */

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Radar" component={Radar} />
        <Route exact path="/App" component={App} />
      </Switch>
    </div>
  );
};