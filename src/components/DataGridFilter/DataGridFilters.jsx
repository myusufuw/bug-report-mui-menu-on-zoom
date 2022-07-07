import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
// import DateRangeAndTimePicker from 'components/DateRangeAndTimePicker/DateRangeAndTimePicker'

// CUSTOM COMPONENTS
import CustomInput from 'components/Customs/CustomInput'
import CustomMenuItem from 'components/Customs/CustomMenuItem'
import CustomTooltipBlack from 'components/Customs/CustomTooltipBlack'

// MUIS
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Menu from '@mui/material/Menu'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconEventOutlined from '@mui/icons-material/EventOutlined'
import IconSaveAltOutlined from '@mui/icons-material/SaveAltOutlined'
import IconSettingsOutlined from '@mui/icons-material/SettingsOutlined'

// STYLES
import useStyles from './dataGridFiltersUseStyles'

const DataGridFilters = (props) => {
  const { 
    isWithTabs,
    title,
    selectedTab,
    setSelectedTab,
    tabItemList,
    handleDownloadIconButtonClick,
    isWithCustomizeColumn,
    columns,
    selectedColumnList,
    setSelectedColumnList,
    isWithDateRange,
    dateRangeValue,
    setDateRangeValue,
  } = props

  const classes = useStyles()

  const [ columnsMenuAnchor, setColumnsMenuAnchor ] = useState(null)
  const [ isDateRangePickerOpen, setIsDateRangePickerOpen ] = useState(false)

  const handleColumnsMenuItemClick = (inputItem, inputIndex) => {
    let tempSelectedColumnList = [...selectedColumnList]
    tempSelectedColumnList[inputIndex].hide = !tempSelectedColumnList[inputIndex].hide
    setSelectedColumnList(tempSelectedColumnList)
  }

  return (
    <Box className={classes.root}>
      {isWithTabs ?
      // TABS
      <Tabs
        value={selectedTab}
        onChange={(event, newValue) => setSelectedTab(newValue)}
        className={classes.tabs}
      >
        {tabItemList.map((item, index) => (
          <Tab 
            key={index}
            label={item.title}
            className={classes.tabItem}
          />
        ))}
      </Tabs> :
      // TITLE
      <Typography 
        variant='subtitle1'
        className={classes.title}
      >
        {title}
      </Typography>}

      {/* DATE RANGE AND TIME PICKER INPUT */}
      {isWithDateRange &&
      <FormControl 
        variant='standard' 
        className={classes.dateRangePicker}
      >
        <CustomInput
          value={null}
          onClick={(e) => setIsDateRangePickerOpen(true)}
          startAdornment={
            <InputAdornment position='start'>
              <IconEventOutlined 
                className={classes.dateRangePickerIcon}
                onClick={() => setIsDateRangePickerOpen(true)}
              />
            </InputAdornment>
          }
        />
      </FormControl>}

      {/* DATE RANGE AND TIME PICKER */}
      {isWithDateRange &&
      <Dialog 
        open={isDateRangePickerOpen}
        onClose={() => setIsDateRangePickerOpen(false)} 
        className={classes.dateRangePickerDialog}
      >
        {/* <DateRangeAndTimePicker
          value={dateRangeValue}
          setValue={setDateRangeValue}
          setOpen={setIsDateRangePickerOpen}
          isWithTimePicker={false}
        /> */}
      </Dialog>}

      {/* DOWNLOAD ICON */}
      <CustomTooltipBlack
        title='Download'
        placement='top'
      >
        <IconButton 
          className={classes.iconButton}
          onClick={handleDownloadIconButtonClick}
        >
          <IconSaveAltOutlined className={classes.iconAction}/>
        </IconButton>
      </CustomTooltipBlack>

      {/* CUSTOMIZE COLUMNS ICON */}
      {isWithCustomizeColumn &&
      <CustomTooltipBlack 
        title='Customize Columns' 
        placement='top'
      >
        <IconButton 
          className={classes.iconButton}
          onClick={(event) => setColumnsMenuAnchor(event.currentTarget)}
        >
          <IconSettingsOutlined className={classes.iconAction}/>
        </IconButton>
      </CustomTooltipBlack>}

      {/* CUSTOMIZE COLUMNS MENU */}
      <Menu
        anchorEl={columnsMenuAnchor}
        open={Boolean(columnsMenuAnchor)}
        onClose={() => setColumnsMenuAnchor(null)}
        className={classes.columnsMenuRoot}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* TITLE */}
        <Typography
          variant='subtitle2'
          className={classes.columnsMenuTitle}
        >
          Columns
        </Typography>

        {/* COLUMN ITEMS */}
        {columns.map((item, index) => (
          (item.field !== 'actions') &&
          <CustomMenuItem 
            key={index}
            className={classes.columnsMenuItem}
            onClick={() => handleColumnsMenuItemClick(item, index)}
          >
            {/* CHECKBOX */}
            <Checkbox checked={!selectedColumnList[index].hide}/>

            {/* TEXT */}
            <Typography
              variant='subtitle2'
              className={classes.columnsMenuText}
            >
              {item.headerName}
            </Typography>
          </CustomMenuItem>
        ))}
      </Menu>
    </Box>
  )
}

DataGridFilters.defaultProps = {
  isWithTabs: true,
  title: '',
  selectedTab: 0,
  isWithCustomizeColumn: true,
  columns: [],
  tabItemList: [],
  selectedColumnList: [],
  isWithDateRange: true,
  dateRangeValue: [],
}

DataGridFilters.propTypes = {
  isWithTabs: PropTypes.bool.isRequired,
  title: PropTypes.string,
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
  tabItemList: PropTypes.array,
  handleDownloadIconButtonClick: PropTypes.func.isRequired,
  isWithCustomizeColumn: PropTypes.bool.isRequired,
  columns: PropTypes.array.isRequired,
  selectedColumnList: PropTypes.array.isRequired,
  isWithDateRange: PropTypes.bool.isRequired,
  dateRangeValue: PropTypes.array,
  setDateRangeValue: PropTypes.func,
}

export default DataGridFilters
