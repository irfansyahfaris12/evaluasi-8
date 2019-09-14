import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../container/Home";
import Detail from "../container/Detail";
import Navbar from "../component/Navbar";

const Notfound = () => {
    return(
        <h1>404 page not found</h1>
    )
}
function Routes () {
    return(
       <Router>
           <h2>MEDIUM</h2>
           <Navbar />
           <Route exact path="/" component={Home} />
           <Route path="/detail/:id" component={Detail} />
           <Route component={Notfound} />
       </Router>
    )
}

export default Routes;