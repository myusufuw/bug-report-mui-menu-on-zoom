import React from "react";

// MUIS
import Drawer from "@mui/material/Drawer";

// STYLES
import useStyles from "./drawerUseStyles";

const NavigationDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" open={true} className={`${classes.root} zoom`}>
      Just a Drawer component
    </Drawer>
  );
};

export default NavigationDrawer;
