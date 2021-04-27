// core
import React from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";

// icons
import {
  AccessTime as TimeIcon,
  Menu as MenuIcon,
  BlurOn as VirusIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@material-ui/icons";

// firebase
import { auth } from "../../firebase";

// navigation
import { useHistory } from "react-router-dom";

// styles
import clsx from "clsx";
import drawerStyles from "./styles";
import { delete_cookie, read_cookie } from "sfcookies";

export default function MyDrawer(props) {
  // styles
  const classes = drawerStyles();

  const uid = read_cookie("uid");

  const [open, setOpen] = React.useState(true);
  const [titleName, setTitleName] = React.useState("DISEASE CLASSIFIER");
  const handleDrawerToggle = () => setOpen(!open);

  // navigation
  const history = useHistory();

  const googleSignout = () => {
    auth.signOut().then(() => {
      delete_cookie("uid");
      delete_cookie("name");
      history.replace("/");
    });
  };

  const homeItems = [
    {
      name: "Home",
      icon: <TimeIcon color="primary" />,
      link: `/home/${uid}`,
      tooltip: "Home",
      title: "Home",
    },
  ];

  const diabetesItems = [
    {
      name: "Diabetes",
      icon: <VirusIcon color="primary" />,
      link: `/diabetes/${uid}`,
      tooltip: "Diabetes",
      title: "Diabetes",
    },
    {
      name: "Prevention",
      icon: <VirusIcon color="primary" />,
      link: `/diabetes/prevention/${uid}`,
      tooltip: "Diabetes Prevention",
      title: "Diabetes Prevention",
    },
    {
      name: "Cure",
      icon: <VirusIcon color="primary" />,
      link: `/diabetes/cure/${uid}`,
      tooltip: "Diabetes Cure",
      title: "Diabetes Cure",
    },
  ];

  const pneumoniaItems = [
    {
      name: "Pneumonia",
      icon: <VirusIcon color="primary" />,
      link: `/pneumonia/${uid}`,
      tooltip: "Pneumonia",
      title: "Pneumonia",
    },
    {
      name: "Prevention",
      icon: <VirusIcon color="primary" />,
      link: `/pneumonia/prevention/${uid}`,
      tooltip: "Pneumonia Prevention",
      title: "Pneumonia Prevention",
    },
    {
      name: "Cure",
      icon: <VirusIcon color="primary" />,
      link: `/pneumonia/cure/${uid}`,
      tooltip: "Pneumonia Cure",
      title: "Pneumonia Cure",
    },
  ];

  const fractureItems = [
    {
      name: "Fractures",
      icon: <VirusIcon color="primary" />,
      link: `/fractures/${uid}`,
      tooltip: "Fractures",
      title: "Fractures",
    },
  ];

  const drawer = (
    <div>
      <List>
        {homeItems.map((item, index) => (
          <Tooltip title={item.tooltip} key={index}>
            <ListItem
              button
              onClick={() => {
                setTitleName(item.title);
                document.title = item.title;
                history.replace(`${item.link}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
            </ListItem>
          </Tooltip>
        ))}
      </List>

      <Divider />

      <List>
        {diabetesItems.map((item, index) => (
          <Tooltip title={item.tooltip} key={index}>
            <ListItem
              button
              onClick={() => {
                setTitleName(item.title);
                document.title = item.title;
                history.push(`${item.link}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
            </ListItem>
          </Tooltip>
        ))}
      </List>

      <Divider />

      <List>
        {pneumoniaItems.map((item, index) => (
          <Tooltip title={item.tooltip} key={index}>
            <ListItem
              button
              onClick={() => {
                setTitleName(item.title);
                document.title = item.title;
                history.push(`${item.link}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
            </ListItem>
          </Tooltip>
        ))}
      </List>

      <Divider />

      <List>
        {fractureItems.map((item, index) => (
          <Tooltip title={item.tooltip} key={index}>
            <ListItem
              button
              onClick={() => {
                setTitleName(item.title);
                document.title = item.title;
                history.push(`${item.link}`);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap className={classes.title}>
            {titleName}
          </Typography>
          <Tooltip title="logout">
            <Button variant="text" color="inherit" onClick={googleSignout}>
              Logout
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div>
            <div>
              <Typography variant="subtitle1">{read_cookie("name")}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                {read_cookie("email")}
              </Typography>
            </div>
          </div>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{drawer}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
