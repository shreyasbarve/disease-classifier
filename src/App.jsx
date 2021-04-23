import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import MyDrawer from "./components/Drawer/MyDrawer";
import MySnackbar from "./components/Snackbar/MySnackbar";

// Views
import Login from "./views/Authentication/Login";
import Diabetes from "./views/DrawerItems/Diabetes/Diabetes";
import Fractures from "./views/DrawerItems/Fractures";
import Home from "./views/DrawerItems/Home";
import Pneumonia from "./views/DrawerItems/Pneumonia";

export default function App() {
  return (
    <Router>
      <MySnackbar />
      <Switch>
        <Route exact path="/" component={Login} />
        {/* parent drawer on all pages */}
        <MyDrawer>
          <Route exact path="/home" component={Home} />
          <Route exact path="/diabetes" component={Diabetes} />
          <Route exact path="/pneumonia" component={Pneumonia} />
          <Route exact path="/fractures" component={Fractures} />
        </MyDrawer>
      </Switch>
    </Router>
  );
}
