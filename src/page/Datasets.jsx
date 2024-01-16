import React, { Fragment } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import ContentsHeader from '../components/Layout/ContentsHeader';

const Datasets = () => {
    function createData(Name, Owner, LastModified) {
        return { Name, Owner, LastModified };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Eclair', 262, 16.0),
        createData('Cupcake', 305, 3.7),
        createData('Gingerbread', 356, 16.0),
    ];
    return (
        <>
            <ContentsHeader title="Datasets" sortButton={false} ButtonIs={true} ButtonName="New Dataset" />

            <Table className="py-4" size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.Name} className="last:border-0">
                            <TableCell component="th" scope="row">
                                {row.Name}
                            </TableCell>
                            <TableCell align="right">{row.Owner}</TableCell>
                            <TableCell align="right">{row.LastModified}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Datasets;
