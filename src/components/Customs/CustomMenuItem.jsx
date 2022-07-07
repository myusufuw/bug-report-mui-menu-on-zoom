// MUIS
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

const CustomMenuItem = styled(({ className, ...props }) => (
  <MenuItem
    className={className} 
    {...props}
  />
))(({ theme }) => ({
  width: '100%',
  fontSize: 14,
}))

export default CustomMenuItem