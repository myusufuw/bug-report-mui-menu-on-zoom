import React, { useState, useContext } from 'react'

// COMPONENTS
import DialogAddOrEdit from 'components/DialogAddOrEdit/DialogAddOrEdit'
import DialogUploadImage from '../DialogUploadImage/DialogUploadImage'

// CONSTANTS
import { values } from 'constants/values'

// CONTEXTS
import { MainLayoutContext } from 'contexts/MainLayoutContext'

// CUSTOM COMPONENTS
import CustomDialogActions from 'components/Customs/CustomDialogActions'
import CustomDialogActionButton from 'components/Customs/CustomDialogActionButton'
import CustomDialogContent from 'components/Customs/CustomDialogContent'
import CustomDialogTitle from 'components/Customs/CustomDialogTitle'
import CustomInput from 'components/Customs/CustomInput'
import CustomInputLabel from 'components/Customs/CustomInputLabel'
import CustomMenuItem from 'components/Customs/CustomMenuItem'

// MUIS
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconAddAPhoto from '@mui/icons-material/AddAPhoto'
import IconArrowDropDown from '@mui/icons-material/ArrowDropDown'
import IconAnimation from '@mui/icons-material/Animation'
import IconChromeReaderMode from '@mui/icons-material/ChromeReaderMode'
import IconClose from '@mui/icons-material/Close'
import IconEventNote from '@mui/icons-material/EventNote'
import IconLabel from '@mui/icons-material/Label'
import IconLanguage from '@mui/icons-material/Language'
import IconLocalGasStation from '@mui/icons-material/LocalGasStation'
import IconNearMe from '@mui/icons-material/NearMe'

// STYLES
import useStyles from './dialogAddOrEditVehicleUseStyles'

const DialogAddOrEditVehicle = (props) => {
  const { 
    dialogType,
    dialogAddOrEditVehicle, 
    setDialogAddOrEditVehicle,
    pageRef,
  } = props

  const classes = useStyles()
  
  const { changeSnackbarObject } = useContext(MainLayoutContext)

  const initialDialogParams = {
    vehicleName: '',
    site: '',
    gpsId: '',
    licenseNumber: '',
    type: '',
    year: '',
    fuel: '',
  }

  const [ dialogParams, setDialogParams ] = useState(initialDialogParams)
  const [ siteMenuAnchor, setSiteMenuAnchor ] = useState(false)
  const [ isDialogUploadImageShown, setIsDialogUploadImageShown ] = useState(null)
  const [ selectedImage, setSelectedImage ] = useState(null)

  const handleDialogParamsChange = (event) => {
    setDialogParams({
      ...dialogParams,
      [event.target.name]: event.target.value,
    })
  }

  const handleSiteMenuItemClick = (inputItem, inputIndex) => {
    setSiteMenuAnchor(null)
    setDialogParams({
      ...dialogParams,
      site: inputItem,
    })
  }

  const handleSaveButtonClick = (event) => {
    changeSnackbarObject({
      open: true,
      severity: 'success',
      message: 'Successfully creating a new vehicle',
    })
    setDialogAddOrEditVehicle(null)
  }

  return (
    <DialogAddOrEdit
      open={Boolean(dialogAddOrEditVehicle)}
      containerRef={pageRef}
    >
      {/* DIALOG TITLE */}
      <CustomDialogTitle className={classes.dialogTitle}>
        {/* CLOSE ICON */}
        <IconClose
          className={classes.iconClose}
          onClick={() => setDialogAddOrEditVehicle(false)}
        />

        {/* TITLE */}
        <Typography className={classes.titleText}>
          {dialogType === 'add' && 'Add a New Vehicle'}
          {dialogType === 'edit' && 'Edit a Vehicle'}
        </Typography>

        {/* UPLOAD PHOTO */}
        <Box 
          className={classes.uploadPhotoContainer}
          onClick={() => setIsDialogUploadImageShown(true)}
        >
          {selectedImage ? 
          <Box
            component='img'
            src={selectedImage}
            alt=''
            className={classes.uploadPhotoImage}
          /> : 
          <Box className={classes.uploadPhoto}>
            <IconAddAPhoto/>
          </Box>}
        </Box>
      </CustomDialogTitle>

      {/* DIALOG UPLOAD IMAGE */}
      <DialogUploadImage
        isDialogUploadImageShown={isDialogUploadImageShown}
        setIsDialogUploadImageShown={setIsDialogUploadImageShown}
        setSelectedImage={setSelectedImage}
      />

      {/* DIALOG CONTENT */}
      <CustomDialogContent>
        {/* MAIN SECTION TEXT */}
        <Typography 
          variant='h6'
          className={classes.sectionText}
        >
          Main Section
        </Typography>

        {/* NAME INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconLabel className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              Vehicle Name
            </CustomInputLabel>
            <CustomInput
              type='text'
              name='vehicleName'
              value={dialogParams.vehicleName}
              onChange={handleDialogParamsChange}
            />
          </FormControl>
        </Box>

        {/* SITE INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconLanguage className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              Site
            </CustomInputLabel>
            <CustomInput
              readOnly
              type='text'
              name='site'
              value={dialogParams.site}
              onChange={handleDialogParamsChange}
              endAdornment={<IconArrowDropDown className={classes.dropDownIcon}/>}
              onClick={(event) => setSiteMenuAnchor(event.currentTarget)}
            />
          </FormControl>
        </Box>

        {/* SITE MENU */}
        <Menu
          anchorEl={siteMenuAnchor}
          open={Boolean(siteMenuAnchor)}
          onClose={() => setSiteMenuAnchor(null)}
          className={classes.siteMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {values.siteOptionList.map((item, index) => (
            <CustomMenuItem 
              key={index}
              onClick={() => handleSiteMenuItemClick(item, index)}
              className={
                dialogParams.site === item ?
                classes.siteMenuItemSelected :
                ''
              }
            >
              {item}
            </CustomMenuItem>
          ))}
        </Menu>

        {/* GPS ID INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconNearMe className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              GPS ID
            </CustomInputLabel>
            <CustomInput
              type='text'
              name='gpsId'
              value={dialogParams.gpsId}
              onChange={handleDialogParamsChange}
            />
          </FormControl>
        </Box>

        {/* LICENSE NUMBER INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconChromeReaderMode className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              License Number
            </CustomInputLabel>
            <CustomInput
              type='text'
              name='licenseNumber'
              value={dialogParams.licenseNumber}
              onChange={handleDialogParamsChange}
            />
          </FormControl>
        </Box>

        {/* TYPE INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconAnimation className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              Type
            </CustomInputLabel>
            <CustomInput
              type='text'
              name='type'
              value={dialogParams.type}
              onChange={handleDialogParamsChange}
            />
          </FormControl>
        </Box>

        {/* YEAR INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconEventNote className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              Year
            </CustomInputLabel>
            <CustomInput
              type='number'
              name='year'
              value={dialogParams.year}
              onChange={handleDialogParamsChange}
            />
          </FormControl>
        </Box>

        {/* FUEL INPUT */}
        <Box className={classes.iconAndFormControlContainer}>
          <IconLocalGasStation className={classes.iconFormControl}/>
          <FormControl 
            variant='standard' 
            className={classes.formControl}
          >
            <CustomInputLabel>
              Fuel
            </CustomInputLabel>
            <CustomInput
              type='text'
              name='fuel'
              value={dialogParams.fuel}
              onChange={handleDialogParamsChange}
            />
          </FormControl>
        </Box>
      </CustomDialogContent>

      {/* DIALOG ACTIONS */}
      <CustomDialogActions>
        {/* CANCEL BUTTON */}
        <CustomDialogActionButton 
          className={classes.cancelButton}
          onClick={() => setDialogAddOrEditVehicle(null)}
        >
          Cancel
        </CustomDialogActionButton>

        {/* OK BUTTON */}
        <CustomDialogActionButton onClick={handleSaveButtonClick}>
          Save
        </CustomDialogActionButton>
      </CustomDialogActions>
    </DialogAddOrEdit>
  )
}

export default DialogAddOrEditVehicle