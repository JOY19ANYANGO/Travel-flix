import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Landing from './pages/Landing'
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services";

import Restaurants from "./components/Restaurants";
import Malls from "./components/Malls";
import BarsClubs from "./components/BarsClubs";
import GamesFuns from "./components/GamesFuns";
import Nature from "./components/Nature";
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/AboutUs"  component={AboutUs} />
        <Route path="/Services"  component={Services} />
        
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/malls" component={Malls} />
        <Route path="/bars-clubs" component={BarsClubs} />
        <Route path="/games-funs" component={GamesFuns} />
        
        <Route path="/nature" component={Nature} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
