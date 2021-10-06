import React, {useContext} from "react";
import { Route, Switch } from "react-router-dom";

import Entry from '../Entry';
import Search from '../Search';
import Error from '../Error';
import Home from '../Home';
import Form from '../NewPoke';



const Main = () => {


  return (
    <main>
      <Switch>
        <Route path='/' component={Entry} exact />
        <Route path='/home' component={Home} />
        <Route path='/new' component={Form} />
        <Route path='/search' component={Search} />
        <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
