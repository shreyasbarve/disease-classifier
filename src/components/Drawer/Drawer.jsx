// core
import React from "react";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@material-ui/core";

// navigation
import { Link } from "react-router-dom";

// icons
import {
  Menu as MenuIcon,
  BlurOn as VirusIcon,
  HomeOutlined as HomeIcon,
} from "@material-ui/icons";

// styles
import drawerStyles from "./styles";

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = drawerStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = [
    { name: "Home", icon: <HomeIcon color="secondary" />, link: "/" },
    {
      name: "Diabetes",
      icon: <VirusIcon color="secondary" />,
      link: "/diabetes",
    },
    {
      name: "Pneumonia",
      icon: <VirusIcon color="secondary" />,
      link: "/pneumonia",
    },
    {
      name: "Fractures",
      icon: <VirusIcon color="secondary" />,
      link: "/fractures",
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerItems.map((item, index) => (
          <Link
            to={`${item.link}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="caption" noWrap>
            DISEASE CLASSIFIER
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
