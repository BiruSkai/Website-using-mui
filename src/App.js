import React from 'react';
import "./App.css";
import LoginPage from "./loginPage/LoginPage";
import HeaderArea from "./headerArea/HeaderArea";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/loginPage" exact={true} component={LoginPage}/>
        <Route path="/headerArea" component={HeaderArea}/>
      </Switch>
    </div>
  )
}

export default App