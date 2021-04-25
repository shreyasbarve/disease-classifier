import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import MyDrawer from "./components/Drawer/MyDrawer";
import MySnackbar from "./components/Snackbar/MySnackbar";
import MySpinner from "./components/Spinner/MySpinner";

// Views
import Login from "./views/Authentication/Login";
import Home from "./views/DrawerItems/Home/Home";
import Diabetes from "./views/DrawerItems/Diabetes/Diabetes";
import Pneumonia from "./views/DrawerItems/Pneumonia/Pneumonia";
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
          <Route exact path="/pneumonia/:uid" component={Pneumonia} />
          <Route exact path="/fractures/:uid" component={Fractures} />
        </MyDrawer>
      </Switch>
    </Router>
  );
}
