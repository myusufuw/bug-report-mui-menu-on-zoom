import React, { useState } from 'react'

// CONSTANTS
import { colors } from '../Constant/colors'

// MUIS
import { DataGridPro } from '@mui/x-data-grid-pro'
import { styled } from '@mui/material/styles'

const CustomMuiDataGridPro = styled(({ className, componentsProps, ...props }) => (
  <DataGridPro
    checkboxSelection
    rowHeight={48}
    headerHeight={48}
    pagination
    rowsPerPageOptions={[ 10, 25, 50, 100 ]}
    disableColumnMenu
    componentsProps={{
      ...componentsProps,
      pagination: {
        SelectProps: {
          MenuProps: {
            sx: {
              '& .MuiMenuItem-root': {
                fontSize: 12,
              },
            },
          },
        },
      },
    }}
    {...props}
    className={className} 
  />
))(({ theme }) => ({
  border: 'none',
  fontSize: 12,
  color: 'black',

  // HEADER
  '& .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-sortIcon': {
    color: colors.red1,
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    padding: 0,
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 600,
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },

  // CELL
  '& .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },

  // PAGINATION
  '& .MuiTablePagination-selectLabel': {
    fontSize: 12,
  },
  '& .MuiTablePagination-select': {
    fontSize: 12,
  },
  '& .MuiTablePagination-displayedRows': {
    fontSize: 12,
  },
  '& .MuiIconButton-root': {
    padding: 8,
  },
}))

const CustomDataGridPro = (props) => {
  const [ pageSize, setPageSize ] = useState(50)

  return (
    <CustomMuiDataGridPro
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      {...props}
    />
  )
}

export default CustomDataGridPro