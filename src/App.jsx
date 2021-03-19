import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import ResponsiveDrawer from "./components/Drawer/Drawer";
import Diabetes from "./views/Diabetes";
import Fractures from "./views/Fractures";
import Home from "./views/Home";
import Pneumonia from "./views/Pneumonia";

export default function App() {
  return (
    <Router>
      <ResponsiveDrawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/diabetes" component={Diabetes} />
          <Route exact path="/pneumonia" component={Pneumonia} />
          <Route exact path="/fractures" component={Fractures} />
        </Switch>
      </ResponsiveDrawer>
    </Router>
  );
}
