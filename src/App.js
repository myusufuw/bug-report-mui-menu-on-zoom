// COMPONENTS
import AppBar from "components/AppBar/AppBar";
import Content from "components/Content/Content";
import Drawer from "components/Drawer/Drawer";
import Snackbar from "components/Snackbar/Snackbar";

// MUIS
import Box from "@mui/material/Box";

// STYLES
import useStyles from "./appUseStyles";
import "./styles.css";

export default function App() {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} no-zoom`}>
      {/* DRAWER */}
      <Box component="nav">
        <Drawer />
      </Box>

      {/* APP BAR */}
      <AppBar />

      <Box component="main" className={`${classes.contentContainer} zoom`}>
        <Content />
      </Box>

      {/* SNACKBAR */}
      <Snackbar
        open={true}
        severity={"success"}
        message={"Just a Snackbar component"}
      />
    </Box>
  );
}
