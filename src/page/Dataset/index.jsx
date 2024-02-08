import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ContentsHeader from '../../components/Layout/ContentsHeader';

const Datasets = () => {
    function createData(Name, Owner, LastModified) {
        return { Name, Owner, LastModified };
    }

    const rows = [
        createData('People overview', 'Me', '7 days ago'),
        createData('Sales Pipeline', 'Me', '7 days ago'),
        createData('Business Review', 'Me', '7 days ago'),
        createData('Web and Social Media Analysis', 'Me', '7 days ago'),
    ];
    return (
        <Box component={'article'}>
            <ContentsHeader title="Datasets" sortButton={false} ButtonIs={true} ButtonName="New Dataset" />
            <Box className="px-4 py-2">
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className="group: font-extrabold">
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Owner</TableCell>
                            <TableCell align="right">Last Modified</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.Name} className="last:border-0">
                                <TableCell component="th" scope="row">
                                    {row.Name}
                                </TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    {row.Owner}
                                </TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    {row.LastModified}
                                </TableCell>
                                <TableCell component="th" scope="row" align="center"></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};

export default Datasets;
