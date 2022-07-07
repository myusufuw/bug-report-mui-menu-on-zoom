// CONSTANTS
import { colors } from 'constants/colors'

// MUIS
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

const CustomTooltipBlack = styled(({ className, ...props }) => (
  <Tooltip 
    {...props} 
    classes={{ popper: className }} 
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: colors.boulder,
    color: 'white',
    fontSize: 14,
    borderRadius: 0,
  },
}))

export default CustomTooltipBlack