import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from "react-router-dom";
import FindBands from "./pages/FindBands";
function AppRouter(){
    return(
        <Router>
                <Route path="/" component={FindBands} />
        </Router>
    )
}
export default AppRouter