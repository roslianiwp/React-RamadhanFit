import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
// import MovieDetail from "../pages/MovieDetail";
import { Provider } from "react-redux";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/film" component={MovieDetail} />
          <Route exact path="/film/:category" component={MovieDetail} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
