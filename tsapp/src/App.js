import React, { useState } from 'react'
 import Form from './Pages/Login/Form.js'
import Dashboard from './Pages/Developer-dashboard/Dashboard.js'
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
const App = () => {
    const [loggedIn, setloggedIn] = useState(false);
    function callbackFunction(childData) {
      setloggedIn(childData);
    }
    return (
      <Router>
        <Switch>
          <Route path="/Dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to=" /" />}
          </Route>
          <Route path="/">
            {loggedIn ? (
              <Redirect to="/Dashboard" />
            ) : (
              <Form parentCallback={callbackFunction} />
            )}
          </Route>
        </Switch>
      </Router>
    );
  };
  export default App;