import React, { useState, useEffect, useRef } from 'react';

// COMPONENTS
import DataGridFilters from '../DataGridFilter/DataGridFilters';

// CUSTOM COMPONENTS
import CustomDataGridPro from '../Customs/CustomDataGridPro';
import CustomSwitch from 'components/Customs/CustomSwitch';

// DATA
import vehiclesTableData from './vehiclesTableData';

// MUIS
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// STYELS
import pageStyles from './layoutMainPageUseStyles';
import useStyles from './vehiclesUseStyles';

const Vehicles = () => {
    const pageClasses = pageStyles();
    const classes = useStyles();

    const pageRef = useRef();

    const initialColumns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 200,
        },
        {
            field: 'lastUpdate',
            headerName: 'Last Update',
            flex: 1,
            minWidth: 200,
        },
        {
            field: 'place',
            headerName: 'Place',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'status',
            headerName: 'Status',
            headerAlign: 'center',
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <Box className={classes.columnStatus}>
                    <CustomSwitch
                        className={classes.switch}
                        checked={params.value}
                        onClick={(event) =>
                            handleStatusSwitchClick(event, params)
                        }
                    />
                </Box>
            ),
        },
    ];

    const [search, setSearch] = useState('');
    const [tableData, setTableData] = useState([]);
    const [dialogAddOrEditVehicle, setDialogAddOrEditVehicle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedColumnList, setSelectedColumnList] =
        useState(initialColumns);
    const [dialogChangeStatus, setDialogChangeStatus] = useState(null);

    const handleDownloadIconButtonClick = () => {};

    const handleStatusSwitchClick = (inputEvent, inputParams) => {
        inputEvent.stopPropagation();
        setDialogChangeStatus(inputParams);
    };

    useEffect(() => {
        setTableData(vehiclesTableData);
    }, []);

    return (
        <Box className={pageClasses.pageRoot} ref={pageRef}>
            {/* CONTENT */}
            <>
                {/* DATA GRID FILTERS */}
                <DataGridFilters
                    isWithTabs={false}
                    title={'Vehicle List'}
                    selectedTab={null}
                    setSelectedTab={null}
                    tabItemList={null}
                    handleDownloadIconButtonClick={
                        handleDownloadIconButtonClick
                    }
                    isWithCustomizeColumn={true}
                    columns={initialColumns}
                    selectedColumnList={selectedColumnList}
                    setSelectedColumnList={setSelectedColumnList}
                    isWithDateRange={false}
                    dateRangeValue={null}
                    setDateRangeValue={null}
                />

                {/* TABLE */}
                <CustomDataGridPro
                    columns={selectedColumnList}
                    rows={tableData}
                    onRowClick={() => console.log('oke')}
                />
            </>
        </Box>
    );
};

export default Vehicles;
