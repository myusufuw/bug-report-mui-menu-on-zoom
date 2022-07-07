import React from "react";

// MUIS
import Alert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";

const Snackbar = (props) => {
  const { open, severity, message } = props;

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleToastClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleToastClose}
        severity={severity}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
