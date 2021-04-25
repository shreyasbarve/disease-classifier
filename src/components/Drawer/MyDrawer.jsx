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
import { read_cookie } from "sfcookies";

export default function MyDrawer(props) {
  const classes = drawerStyles();
  const [open, setOpen] = React.useState(true);
  const [titleName, setTitleName] = React.useState("DISEASE CLASSIFIER");
  const uid = read_cookie("uid");
  const handleDrawerToggle = () => setOpen(!open);

  const drawerItems = [
    {
      name: "Home",
      icon: <HomeIcon color="primary" />,
      link: `/home/${uid}`,
      tooltip: "Home",
      title: "Home",
    },
    {
      name: "Diabetes",
      icon: <VirusIcon color="primary" />,
      link: `/diabetes/${uid}`,
      tooltip: "Diabetes",
      title: "Diabetes",
    },
    {
      name: "Pneumonia",
      icon: <VirusIcon color="primary" />,
      link: `/pneumonia/${uid}`,
      tooltip: "Pneumonia",
      title: "Pneumonia",
    },
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
        {drawerItems.map((item, index) => (
          <Link
            to={`${item.link}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <Tooltip title={item.tooltip}>
              <ListItem
                button
                onClick={() => {
                  setTitleName(item.title);
                  document.title = item.title;
                }}
              >
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
            {titleName}
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
