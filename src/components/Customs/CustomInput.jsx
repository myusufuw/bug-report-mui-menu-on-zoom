// MUIS
import Input from '@mui/material/Input'
import { styled } from '@mui/material/styles'

const CustomInput = styled(({ className, ...props }) => (
  <Input
    className={className} 
    {...props}
  />
))(({ theme }) => ({
  '& .MuiInput-input': {
    fontSize: 14,
  },
}))

export default CustomInput