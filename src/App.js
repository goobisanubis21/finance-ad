import React from "react";
import Home from "./pages/Home/Home";
import RoysLogo from "./components/Royslogo/RoysLogoImg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThankYou from "./components/Thank/ThankYou"

function App() {
  return (
    <div className="App">
      <RoysLogo />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/thankyou' component={ThankYou} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
