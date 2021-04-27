// core
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import MyDrawer from "./components/Drawer/MyDrawer";

// global items for notifications and loaders
import MySnackbar from "./components/Snackbar/MySnackbar";
import MySpinner from "./components/Spinner/MySpinner";

// Views
import Login from "./views/Authentication/Login";
import Home from "./views/DrawerItems/Home/Home";

// diabetes
import Diabetes from "./views/DrawerItems/Diabetes/Diabetes";
import PreventionDiabetes from "./views/DrawerItems/Diabetes/Prevention";
import CureDiabetes from "./views/DrawerItems/Diabetes/Cure";

// pneumonia
import Pneumonia from "./views/DrawerItems/Pneumonia/Pneumonia";
import PreventionPneumonia from "./views/DrawerItems/Pneumonia/Prevention";
import CurePneumonia from "./views/DrawerItems/Pneumonia/Cure";

// fractures
import Fractures from "./views/DrawerItems/Fractures/Fractures";

export default function App() {
  return (
    <Router>
      <MySpinner />
      <MySnackbar />
      <Switch>
        <Route exact path="/" component={Login} />
        {/* parent drawer on all pages */}
        <MyDrawer>
          <Route exact path="/home/:uid" component={Home} />
          <Route exact path="/diabetes/:uid" component={Diabetes} />
          <Route
            exact
            path="/diabetes/prevention/:uid"
            component={PreventionDiabetes}
          />
          <Route exact path="/diabetes/cure/:uid" component={CureDiabetes} />
          <Route exact path="/pneumonia/:uid" component={Pneumonia} />
          <Route
            exact
            path="/pneumonia/prevention/:uid"
            component={PreventionPneumonia}
          />
          <Route exact path="/pneumonia/cure/:uid" component={CurePneumonia} />
          <Route exact path="/fractures/:uid" component={Fractures} />
        </MyDrawer>
      </Switch>
    </Router>
  );
}
