import React from "react";
import { Route, Switch } from "react-router-dom";

import Entry from '../Entry';
import Home from '../Home'
import Error from '../Error'


const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Entry} exact />
        <Route path='/home' component={Home} />
        <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
