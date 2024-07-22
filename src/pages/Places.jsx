import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/Navbar'; // Ensure NavBar is in the same folder
import Restaurants from '../components/Restaurants';
import Malls from '../components/Malls';
import BarsClubs from '../components/BarsClubs';
import GamesFuns from '../components/GamesFuns';
import Museums from '../components/Museums';
import Nature from '../components/Nature';

const Places = () => {
  return (
    <Router>
      <NavBar /> {/* Add NavBar here if you want it to be part of the Places component */}
      <Switch>
        <Route path="/Places/restaurants" component={Restaurants} />
        <Route path="/Places/malls" component={Malls} />
        <Route path="/Places/bars-clubs" component={BarsClubs} />
        <Route path="/Places/games-funs" component={GamesFuns} />
        <Route path="/Places/museums" component={Museums} />
        <Route path="/Places/nature" component={Nature} />
      </Switch>
    </Router>
  );
};

export default Places;
