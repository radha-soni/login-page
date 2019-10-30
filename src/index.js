import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import {
//   Route,
//   withRouter,
//   Link,
//   BrowserRouter as Router
// } from "react-router-dom";
import App from "./App";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Welcome from "./Components/Welcome";

import * as serviceWorker from "./serviceWorker";

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={Login} />
//       <Route path="/login" component={Login} />
//       <Route path="/register" component={Register} />
//       <Route path="/Welcome" component={Welcome} />
//     </div>
//   </Router>
// );

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
