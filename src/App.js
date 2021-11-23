import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import './Styles/_typography.scss';
import Index from './Pages/Dashboard/index';

import Layout from "./Layout/Layout";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/home" component={Index} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
