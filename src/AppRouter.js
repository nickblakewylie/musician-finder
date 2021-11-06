import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from "react-router-dom";
import FindBands from "./pages/FindBands";
import Register from "./pages/Register";
function AppRouter(){
    return(
        <Router>
                <Route path="/" component={FindBands} />
                <Route path="/" component={Register} />
        </Router>
    )
}
export default AppRouter