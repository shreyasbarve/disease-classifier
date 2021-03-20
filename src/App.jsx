import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import ResponsiveDrawer from "./components/Drawer/Drawer";
import Login from "./views/Authentication/Login";
import Diabetes from "./views/DrawerItems/Diabetes";
import Fractures from "./views/DrawerItems/Fractures";
import Home from "./views/DrawerItems/Home";
import Pneumonia from "./views/DrawerItems/Pneumonia";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <ResponsiveDrawer>
          <Route exact path="/home" component={Home} />
          <Route exact path="/diabetes" component={Diabetes} />
          <Route exact path="/pneumonia" component={Pneumonia} />
          <Route exact path="/fractures" component={Fractures} />
        </ResponsiveDrawer>
      </Switch>
    </Router>
  );
}
