import React from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Error404 from './components/Error404';
import Articulo from './components/Articulo';
import DashBoard from './components/Dashboard';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registro from './components/Registro';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/login/" component={Login} />
          <Route path="/registro/" component={Registro}/>
          <Route path="/articulo/" component={Articulo}/>
          <Route path="/dashboard/" component={DashBoard}/>
          <Route component={Error404}/>
         </Switch>
    </Router>
  );
}

export default App;
