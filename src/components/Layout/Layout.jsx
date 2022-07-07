import React from 'react'

// MUIS
import { Box } from '@mui/material'

// COMPONENTS
import Drawer from "components/Drawer/Drawer";

import useStyles from '../../appUseStyles';

const Layout = ({children}) => {
  const classes = useStyles()
  return (
    <Box className={`${classes.root} no-zoom`}>
    {/* DRAWER */}
    <Box component="nav">
      <Drawer />
    </Box>

    <Box component="main" className={`${classes.contentContainer} zoom`}>
      {children}
    </Box>
  </Box>
  )
}

export default Layout