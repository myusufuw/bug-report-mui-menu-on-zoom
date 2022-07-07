import { useState } from "react";

// HOOKS
import useWindowDimensions from "hooks/useWindowDimension";

// MUIS
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

// MUI ICONS
import DeleteIcon from "@mui/icons-material/Delete";

// STYLES
import useStyles from "./contentUseStyles";

const Content = () => {
  const classes = useStyles();

  const { height, width } = useWindowDimensions();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      {/* INFORMATION */}
      Main Content
      <br />
      width: {width}px ~ height: {height}px
      <br />
      zoom is {height < 500 ? "on" : "off"}
      <br />
      {/* MENU */}
      <Button
        onClick={(event) => setMenuAnchorEl(event.currentTarget)}
        variant="contained"
      >
        Just a Menu Button
      </Button>
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <MenuItem onClick={handleMenuClose}>Just a Menu Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Just a Menu Item 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Just a Menu Item 3</MenuItem>
      </Menu>
      <br />
      {/* TOOLTIP */}
      <Tooltip title="Just a Tooltip">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Content;
