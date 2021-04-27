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
  ListSubheader,
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

  const data = [
    {
      listTitle: "Home",
      details: [
        {
          name: "History",
          icon: <TimeIcon color="primary" />,
          link: `/home/${uid}`,
        },
      ],
    },
    {
      listTitle: "Diabetes",
      details: [
        {
          name: "Home",
          icon: <VirusIcon color="primary" />,
          link: `/diabetes/${uid}`,
        },
        {
          name: "Prevention",
          icon: <VirusIcon color="primary" />,
          link: `/diabetes/prevention/${uid}`,
        },
        {
          name: "Cure",
          icon: <VirusIcon color="primary" />,
          link: `/diabetes/cure/${uid}`,
        },
      ],
    },
    {
      listTitle: "Pneumonia",
      details: [
        {
          name: "Home",
          icon: <VirusIcon color="primary" />,
          link: `/pneumonia/${uid}`,
        },
        {
          name: "Prevention",
          icon: <VirusIcon color="primary" />,
          link: `/pneumonia/prevention/${uid}`,
        },
        {
          name: "Cure",
          icon: <VirusIcon color="primary" />,
          link: `/pneumonia/cure/${uid}`,
        },
      ],
    },
    {
      listTitle: "Fractures",
      details: [
        {
          name: "Home",
          icon: <VirusIcon color="primary" />,
          link: `/fractures/${uid}`,
        },
      ],
    },
  ];

  const drawer = (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <List
            subheader={
              <ListSubheader>{open ? item.listTitle : ""}</ListSubheader>
            }
          >
            {item.details.map((detail, index) => (
              <Tooltip title={`${item.listTitle} ${detail.name}`} key={index}>
                <ListItem
                  button
                  onClick={() => {
                    setTitleName(`${item.listTitle} > ${detail.name}`);
                    history.replace(`${detail.link}`);
                  }}
                >
                  <ListItemIcon>{detail.icon}</ListItemIcon>
                  <Typography variant="body1" color="textSecondary">
                    {detail.name}
                  </Typography>
                </ListItem>
              </Tooltip>
            ))}
          </List>
          <Divider />
        </div>
      ))}
    </>
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
