import React from "react";
import ScriptTag from "react-script-tag";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import * as jQuery from "jquery";
window.$ = jQuery;
window.jQuery = window.$;
import Home from "./Home/Home";
import Categories from "./Categories/Categories";

function App() {
  const isAuth = localStorage.getItem("token");
  console.log("isAuth: ", isAuth);
  const history = useHistory();

  return (
    <>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/abc" component={Categories}></Route>
            </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
