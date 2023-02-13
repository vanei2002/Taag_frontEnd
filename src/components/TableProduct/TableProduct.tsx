import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TaagClients } from '../../context/TaagClients';
import { statusProduct } from '../../status';
import { columnsProduct } from '../../status';

import './tableproduct.sass';

const TableProduct = () => {

    const {resultProduct} = React.useContext(TaagClients);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tableSelect, setTableSelect] = React.useState('product');

    const handleChangePage = (event: unknown, newPage: number) =>  setPage(newPage);
 
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <Paper className='conatiner-dashclient' sx={{borderRadius: '1em'}} >
            <TableContainer className='table-container' sx={{borderRadius: '1em'}}>
                <Table className='table-dashclient'>
                    <TableHead className='header-dashclient'>
                        <TableRow>
                            {columnsProduct.map((column) => (
                            <TableCell
                                key={column.label}
                                align={column.align}
                                style={{ minWidth: column.minWidth,  }}
                            >
                                <h3>{column.label}</h3>
                            </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>                      
                        {resultProduct.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) .map((row: any) =>
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.client}>
                                {columnsProduct.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell  key={column.id} align={column.align}>
                                            {value}
                                            {column.id === 'status' && (
                                                
                                                
                                                <select className='select-status' onChange={ e => {setTableSelect(e.target.value) }}>
                                                    {statusProduct.map((status) => (
                                                        <option 
                                                        key={status.id} 
                                                        value={status.id}
                                                        >
                                                            {status.status}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        )}

                        {resultProduct.length === 0 && ( 
                            <TableRow>
                                <TableCell colSpan={9} align='center'>
                                    <h3>Nenhum cliente encontrado</h3>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]} component="div"
                count={resultProduct.length} rowsPerPage={rowsPerPage}
                page={page} onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            
        </Paper>
    )
}

export default TableProduct;