import React from 'react'

// CONSTANTS
import { colors } from '../Constant/colors'

// MUIS
import Switch from '@mui/material/Switch'
import { alpha, styled } from '@mui/material/styles'

const CustomSwitch = styled((props) => (
  <Switch 
    focusVisibleClassName='.Mui-focusVisible' 
    disableRipple 
    {...props} 
  />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,

  // BASE
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: colors.red2,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 
      theme.palette.mode === 'light' ? 
      theme.palette.grey[100] : 
      theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },

  // THUMB
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 15,
    height: 15,
  },

  // TRACK
  '& .MuiSwitch-track': {
    borderRadius: 24 / 2,
    backgroundColor: alpha('#000000', 0.2),
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))

export default CustomSwitch