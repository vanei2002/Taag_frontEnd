import React, {useContext, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { columnsClients } from '../../status';
import { DataClient } from '../../types/DataClient';
import { TaagContext } from '../../context/TaagContext';
import ModalDelete from '../Modal/Modal';


import './dashclients.sass'
import ModalForm from '../ModalFormCliets/ModalForm';
import { Server } from '../../server/server';

const DashClients = () => {

    const {setOpen} = useContext(TaagContext);
    const {deleteClients,setDeleteClients , result} = useContext(TaagContext);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) =>  setPage(newPage);
 
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    function deleteModal(client: DataClient){
        console.log(client)
        setOpen(true)
        setDeleteClients(client)
    }

    async function deleteClient(){
        const data = Server();
        await data.deleteClient(deleteClients._id);
        setOpen(false)
        document.location.reload();
    }
    
    return(
        <section>
            <Paper className='conatiner-dashclient' sx={{borderRadius: '15px', }}>
                <TableContainer className='table-container'sx={{borderRadius: '15px'}}>
                    <Table className='table-dashclient'>
                        <TableHead className='header-dashclient'>
                            <TableRow>
                                {columnsClients.map((column) => (
                                <TableCell
                                    key={column.label}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth,  }}
                                    className='header-dashclient' 
                                >
                                    <h3 >{column.label}</h3>
                                </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>                      
                            {result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) .map((row: DataClient) =>{
                                return (
                                    <TableRow 
                                    hover role="checkbox" tabIndex={-1} key={row.name}>
                                        {columnsClients.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell  
                                                onClick={() => deleteModal(row)}
                                                className='body-dashclient'
                                                key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                )
                            }
                            )}

                            {result.length === 0 && ( 
                                <TableRow>
                                    <TableCell colSpan={20} align='center' className='nullClient'>
                                        <h3>Nenhum cliente encontrado</h3>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]} component="div"
                    count={result.length} rowsPerPage={rowsPerPage}
                    page={page} onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            
            <ModalForm deleteClient={deleteClients}/>
          
            <ModalDelete deleteClient={deleteClient}>
                Deseja apagar ou editar o cliente {deleteClients?.name} ?
            </ModalDelete>
          
           
        </section>
    )
}

export default DashClients;