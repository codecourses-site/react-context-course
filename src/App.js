import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home/Home";
import Dog from "./components/dog/Dog";

import Context from "./context";

import "./index.css";

function App() {
  const [dog, setDog] = useState();

  useEffect(() => {
    initSelectedDog();
  }, []);

  const initSelectedDog = () => {
    const dog = localStorage.getItem("selectedDog");
    if (dog) {
      setDog(dog);
    }
  };

  const context = {
    dog,
    setDog,
  };

  return (
    <Context.Provider value={context}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dog">
            <Dog />
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
