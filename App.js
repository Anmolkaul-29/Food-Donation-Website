// App.js

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import VenueContainer from "./VenueContainer";
import About from "./About";
import NewVenueForm from "./NewVenueForm";
import Donate from "./Donate"; 
import Dashboard from "./Dashboard"; 



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [venues, setVenues] = useState([]);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <NavBar />
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Switch>
        <Route exact path="/">
          <VenueContainer venues={venues} setVenues={setVenues} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/new">
          <NewVenueForm />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/donate"> {/* Add a new route for Donate component */}
          <Donate />
        </Route>
      </Switch>
     
    </div>

  );
}

export default App;
