import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Home from '../page/home';
import One from '../page/one';
import From from '../page/from';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path={`/`} component={Home} />
          <Route path={`/one`} component={One} />
          <Route path={`/from`} component={From} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;