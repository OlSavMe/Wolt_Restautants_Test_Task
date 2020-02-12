import React from 'react';
import './App.css';
import Restaurants from './components/Restaurants';
import RevRestaurants from './components/RevRestaurants';
import {
  BrowserRouter as Router, Route, Switch // Redirect 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <>

          <div>
            <Route path="/" exact component={Restaurants} />
            <Route path="/rev" component={RevRestaurants} />
          </div>

        </>
      </Switch>
    </Router>
  );
}

export default App;
