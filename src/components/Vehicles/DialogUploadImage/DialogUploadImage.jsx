import React, { useRef } from 'react'

// CUSTOM COMPONENTS
import CustomDialogContent from 'components/Customs/CustomDialogContent'
import CustomDialogTitle from 'components/Customs/CustomDialogTitle'
import CustomInput from 'components/Customs/CustomInput'

// MUIS
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconAdd from '@mui/icons-material/Add'

// STYLES
import useStyles from './dialogUploadImageUseStyles'

const DialogUploadImage = (props) => {
  const {
    isDialogUploadImageShown, 
    setIsDialogUploadImageShown,
    setSelectedImage,
  } = props

  const classes = useStyles()

  const uploadFileInputRef = useRef(null)

  const handleUploadFileChange = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const selectedFile = event.target.files[0]
    const imageUrl = URL.createObjectURL(selectedFile)
    setSelectedImage(imageUrl)
    setIsDialogUploadImageShown(false)
  }

  return (
    <Dialog 
      open={Boolean(isDialogUploadImageShown)}
      onClose={() => setIsDialogUploadImageShown(false)} 
      className={classes.dialogRoot}
    >
      {/* DIALOG TITLE */}
      <CustomDialogTitle className={classes.dialogTitle}>
        Image
      </CustomDialogTitle>

      <Divider/>

      {/* DIALOG CONTENT */}
      <CustomDialogContent className={classes.dialogContent}>
        <Box>
          {/* SUB TITLE */}
          <Typography
            variant='subtitle2'
            className={classes.subTitle}
          >
            Upload Image
          </Typography>

          {/* CAPTION */}
          <Typography
            variant='subtitle2'
            className={classes.caption}
          >
            Square image no more than 1 MB, JPG,<br/>
            PNG, GIF
          </Typography>
        </Box>

        {/* INVISIBLE UPLOAD INPUT */}
        <CustomInput
          type='file'
          inputRef={uploadFileInputRef}
          className={classes.inputFile}
          onChange={handleUploadFileChange}
        />

        {/* FAB */}
        <Fab 
          color='primary'
          onClick={() => uploadFileInputRef.current.click()}
        >
          <IconAdd/>
        </Fab>
      </CustomDialogContent>
    </Dialog>
  )
}

export default DialogUploadImage