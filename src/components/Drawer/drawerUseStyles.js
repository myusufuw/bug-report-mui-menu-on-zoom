// CONSTANTS
import { values } from "constants/values";

// MUI STYLES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    "& .MuiDrawer-paper": {
      backgroundColor: "orange",
      border: "none",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.04)",
      zIndex: theme.zIndex.drawer,
      width: values.drawerWidth,
      padding: 20
    }
  }
}));

export default useStyles;
