// MUIS
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    '& .MuiPaper-root': {
      borderRadius: 2,
      width: 440,
    },
  },
  dialogTitle: {
    padding: '20px 24px',
  },
  dialogContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
  },
  subTitle: {
    fontWeight: 600,
    marginBottom: 8,
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.text.secondary,
  },
  inputFile: {
    display: 'none',
  },
}))

export default useStyles