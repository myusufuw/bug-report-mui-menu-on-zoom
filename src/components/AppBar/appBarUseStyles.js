// CONSTANTS
import { values } from "constants/values";

// MUI STYLES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    backgroundColor: "white",
    width: "100%",
    height: values.appBarHeight,
    zIndex: theme.zIndex.appBar,
    boxShadow: "0 4px 40px rgba(0, 0, 0, 0.08)",
    color: theme.palette.text.primary,
    left: values.drawerWidth
  },
  toolbar: {
    width: "100%",
    height: "100%"
  }
}));

export default useStyles;
