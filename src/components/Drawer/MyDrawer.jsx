// core
import React from "react";
import {
  AppBar,
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
  Menu as MenuIcon,
  BlurOn as VirusIcon,
  HomeOutlined as HomeIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@material-ui/icons";

// navigation
import { Link } from "react-router-dom";

// styles
import clsx from "clsx";
import drawerStyles from "./styles";

export default function MyDrawer(props) {
  const classes = drawerStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => setOpen(!open);

  const drawerItems = [
    {
      name: "Home",
      icon: <HomeIcon color="primary" />,
      link: "/home",
      tooltip: "Home",
    },
    {
      name: "Diabetes",
      icon: <VirusIcon color="primary" />,
      link: "/diabetes",
      tooltip: "Diabetes",
    },
    {
      name: "Pneumonia",
      icon: <VirusIcon color="primary" />,
      link: "/pneumonia",
      tooltip: "Pneumonia",
    },
    {
      name: "Fractures",
      icon: <VirusIcon color="primary" />,
      link: "/fractures",
      tooltip: "Fractures",
    },
  ];

  const drawer = (
    <div>
      <List>
        {drawerItems.map((item, index) => (
          <Link
            to={`${item.link}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <Tooltip title={item.tooltip}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="body1" color="textSecondary">
                  {item.name}
                </Typography>
              </ListItem>
            </Tooltip>
          </Link>
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
            DISEASE CLASSIFIER
          </Typography>
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
