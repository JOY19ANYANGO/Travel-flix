import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Landing from './pages/Landing'
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services";
import Places from "./pages/Places";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/AboutUs"  component={AboutUs} />
        <Route path="/Services"  component={Services} />
        <Route path="/Places"  component={Places} />
       
      </Switch>
    </Router>
    </>
  );
}

export default App;
