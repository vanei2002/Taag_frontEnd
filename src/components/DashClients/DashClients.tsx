import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


import './dashclients.sass'

interface Data {
    client: string;
    dpt: string;
    obs: string ;
    supervison: string ; 
}

interface Column {
    id: 'client' | 'dpt' | 'obs' | 'supervison' ;
    label: string;
    minWidth?: number;
    align?: 'center' | 'right' | 'left';
}


function createData( client: string, dpt: string, obs: string, supervison: string,): Data {
    return { client, dpt, obs, supervison};
}
  

const columns: readonly Column[] = [
  { id: 'client', label: 'Cliente', minWidth: 70, align: 'center'},
  { id: 'dpt', label: 'Departamento', minWidth: 100, align: 'center'},
  { id: 'obs', label: 'Observações', minWidth: 170, align: 'center'},
  { id: 'supervison', label: 'Responsavel | Atual', minWidth: 100, align: 'center',},
];


const rows = [
  createData('Amanda e Hohan', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('Kaby Shaby (FBV)', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('EXP - Escritorio', 'Programação', 'Retrafit', 'Fabio'),
  createData('Carlos v. Araujo', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('Maisa Maluf', 'Programação', 'Iluminação', 'Fabio'),
  createData('José Reinaldo (FBV) ', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('Alexandre Birman', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('Daniela Arges (MG)', 'Programação', 'Iluminação', 'Fabio'),
  createData('Sergio Renault (FBV)', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('Sergio Benicio ', 'Programação', 'Sistema Completo', 'Fabio'),
  createData('Suite Arquitetos (Apto)', 'Programação', 'Retrofit', 'Fabio'),
  createData('Daniela Ergoni (APTO)', 'Programação', 'Retrofit', 'Fabio'),
  createData('Cidade Jardim', 'Programação', 'Retrofit', 'Fabio'),
];



const DashClients = () => {
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return(
        <Paper className='conatiner-dashclient' sx={{borderRadius: '1em'}} >
            <TableContainer className='table-container' sx={{borderRadius: '1em'}}>
                <Table className='table-dashclient'>
                    <TableHead className='header-dashclient'>
                        <TableRow>
                            {columns.map((column) => (
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
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => 
                       
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.client}>
                                {columns.map((column) => {
                                    const value = row[column.id];

                                    return (
                                        <TableCell  key={column.id} align={column.align}>
                                            {value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]} component="div"
                count={rows.length} rowsPerPage={rowsPerPage}
                page={page} onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            
        </Paper>
    )
}

export default DashClients;