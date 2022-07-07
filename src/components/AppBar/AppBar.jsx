// MUIS
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// STYLES
import useStyles from "./appBarUseStyles";

const Appbar = () => {
  const classes = useStyles();

  return (
    <MuiAppBar className={`${classes.appBarRoot} zoom`}>
      <Toolbar className={classes.toolbar}>Just an App Bar component</Toolbar>
    </MuiAppBar>
  );
};

export default Appbar;
