// CONSTANTS
import { colors, entLacakColors } from 'constants/colors'

// MUIS
import { grey } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  iconClose: {
    marginRight: 16,
    cursor: 'pointer',
  },
  titleText: {
    fontWeight: 600,
    fontSize: 24,
    marginRight: 'auto',
  },
  uploadPhotoContainer: {
    borderRadius: 4,
    width: 48,
    height: 48,
    cursor: 'pointer',
  },
  uploadPhotoImage: {
    maxWidth: '100%',
    height: '100%',
    borderRadius: 4,
    objectFit: 'cover',
    backgroundColor: grey[200],
  },
  uploadPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: entLacakColors.silver,
    borderRadius: 4,
  },
  sectionText: {
    marginBottom: 8,
    fontWeight: 600,
  },
  iconAndFormControlContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 65,
    width: '100%',
  },
  iconFormControl: {
    marginRight: 12,
    marginBottom: 2,
    color: colors.iconDark,
  },
  formControl: {
    width: '100%',
  },
  siteMenu: {
    '& .MuiPaper-root': {
      width: 368,
    },
  },
  siteMenuItemSelected: {
    color: colors.red1,
  },
  cancelButton: {
    color: colors.icon,
    '&:hover': {
      backgroundColor: alpha(colors.icon, 0.1),
    },
  },
}))

export default useStyles