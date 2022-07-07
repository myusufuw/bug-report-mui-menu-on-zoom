// CONSTANTS
import { colors } from 'constants/colors'

// MUIS
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    '& .MuiPaper-root': {
      borderRadius: 2,
    },
  },
  dialogTitle: {
    padding: '20px 24px',
  },
  dialogContent: {
    padding: '16px 24px',
  },
  dialogActions: {
    padding: '16px 24px',
  },
  cancelButton: {
    color: colors.icon,
    '&:hover': {
      backgroundColor: alpha(colors.icon, 0.1),
    },
  },
}))

export default useStyles