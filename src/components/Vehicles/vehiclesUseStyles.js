// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  columnVehicleImage: {
    width: 28,
    height: 28,
    borderRadius: 2,
  },
  columnVehicle: {
    width: '100%',
  },
  columnVehicleTextPrimary: {
    fontSize: 'inherit',
    color: theme.palette.text.primary,
  },
  columnVehicleTextSecondary: {
    fontSize: 'inherit',
    color: theme.palette.text.secondary,
  },
  columnStatus: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}))

export default useStyles