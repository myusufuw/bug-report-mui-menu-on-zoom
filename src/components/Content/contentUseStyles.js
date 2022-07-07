// VALUES
import { values } from "constants/values";

// MUI STYLES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: values.appBarHeight,
    flex: 1,
    overflowY: "auto"
  }
}));

export default useStyles;
