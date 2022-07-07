// CONSTANTS
import { entLacakColors } from 'constants/colors'

// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    backgroundColor: entLacakColors.backgroundPage,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 24,
    position: 'relative',
  },
}))

export default useStyles