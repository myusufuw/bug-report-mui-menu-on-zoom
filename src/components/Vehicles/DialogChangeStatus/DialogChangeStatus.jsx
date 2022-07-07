import React from 'react'

// CUSTOM COMPONENTS
import CustomDialogActions from 'components/Customs/CustomDialogActions'
import CustomDialogActionButton from 'components/Customs/CustomDialogActionButton'
import CustomDialogContent from 'components/Customs/CustomDialogContent'
import CustomDialogTitle from 'components/Customs/CustomDialogTitle'

// MUIS
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './dialogChangeStatusUseStyles'

const DialogChangeStatus = (props) => {
  const {
    dialogChangeStatus, 
    setDialogChangeStatus,
  } = props

  const classes = useStyles()

  const handleDialogClose = (event, reason) => {
    if(reason === 'backdropClick' || reason === 'escapeKeyDown') {
      return false
    }
    else {
      setDialogChangeStatus(false)
    }
  }

  return (
    <Dialog 
      open={Boolean(dialogChangeStatus)}
      onClose={handleDialogClose} 
      className={classes.dialogRoot}
    >
      {/* DIALOG TITLE */}
      <CustomDialogTitle className={classes.dialogTitle}>
        Change Status
      </CustomDialogTitle>

      {/* DIALOG CONTENT */}
      <CustomDialogContent className={classes.dialogContent}>
        <Typography variant='body2'>
          Are you sure you want to change the vehicle status?
        </Typography>
      </CustomDialogContent>

      {/* DIALOG ACTIONS */}
      <CustomDialogActions className={classes.dialogActions}>
        {/* CANCEL BUTTON */}
        <CustomDialogActionButton 
          className={classes.cancelButton}
          onClick={() => setDialogChangeStatus(null)}
        >
          Cancel
        </CustomDialogActionButton>

        {/* OK BUTTON */}
        <CustomDialogActionButton onClick={() => setDialogChangeStatus(null)}>
          Save
        </CustomDialogActionButton>
      </CustomDialogActions>
    </Dialog>
  )
}

export default DialogChangeStatus