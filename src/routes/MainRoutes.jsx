import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import { Provider } from "react-redux";
import store from "../store";
import Nutrient from "../pages/FoodNutrient";
import ResultChat from "../pages/ResultChat";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/nutrient" component={Nutrient} />
          <Route exact path="/result" component={ResultChat} />
          <Route exact path="/news-keyword/:keyword" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default MainRoutes;
