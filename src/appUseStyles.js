// VALUES
import { values } from "constants/values";

// MUI STYLES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "lightgray"
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "padding-left 0.25s ease-in-out",
    padding: 20,
    marginLeft: values.drawerWidth
  }
}));

export default useStyles;
