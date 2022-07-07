import React from "react";

// MUIS
import MuiGlobalStyles from "@mui/material/GlobalStyles";

const GlobalStyles = () => {
  const zoomValue = 0.85;
  const noZoomValue = 1 / zoomValue;

  return (
    <MuiGlobalStyles
      styles={(theme) => ({
        // ALL ELEMENTS
        "*, *::before, *::after": {
          boxSizing: "border-box"
        },

        // ZOOM
        "@media only screen and (max-height: 500px)": {
          body: {
            zoom: zoomValue
          },
          ".zoom": {
            zoom: zoomValue
          },
          ".no-zoom": {
            zoom: noZoomValue
          }

          // MENU COMPONENT
          // ".MuiMenu-paper": {
          //   zoom: noZoomValue,
          //   ".MuiMenu-list": {
          //     backgroundColor: "orange !important",
          //     zoom: zoomValue
          //   }
          // }
        }
      })}
    />
  );
};

export default GlobalStyles;
