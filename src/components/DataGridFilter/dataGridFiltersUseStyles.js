// CONSTANTS
import { colors } from 'constants/colors'

// MUIS
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  tabs: {
    height: '100%',
  },
  tabItem: {
    '&.MuiTab-root': {
      height: 68,
    },
  },
  title: {
    marginLeft: 16,
    marginRight: 'auto',
    fontWeight: 600,
  },
  iconButton: {
    marginRight: 8,
  },
  iconAction: {
    color: colors.iconDark,
  },
  columnsMenuRoot: {
    '& .MuiList-root': {
      padding: '12px 4px',
      width: 250,
    },
  },
  columnsMenuTitle: {
    fontWeight: 600,
    padding: '0px 18px 6px',
  },
  columnsMenuItem: {
    display: 'flex',
    padding: '0px 16px 0px 6px',
  },
  columnsMenuText: {
    color: colors.boulder,
    fontWeight: 400,
  },
  dateRangePicker: {
    marginLeft: 'auto !important',
    marginRight: 16,
    width: 200,
  },
  dateRangePickerIcon: {
    color: colors.iconDark,
    cursor: 'pointer',
  },
  dateRangePickerDialog: {
    '& .MuiPaper-root': {
      maxWidth: 'unset',
    },
  },
}))

export default useStyles