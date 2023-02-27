import React, {createContext, useEffect} from 'react';
import { GetClients } from '../server/clients';
import { DataClient } from '../types/DataClient';
import { TableProduct } from '../types/TableProduct';

interface TaagClientsInterface {
    sendClient: (clients: DataClient) => Promise<void>;
    sendFile: (file: DataClient) => Promise<void>;
    result: DataClient[];
    setResult: (result: DataClient[]) => void;
    resultProduct: any;
    setResultProduct: (resultProduct: any) => void;
    tableProduct: TableProduct[];
    clientsAll: any;
    deleteClients: any;
    setDeleteClients: (deleteClients: any) => void;
}
interface Data {
    client: string;
    dpt: string;
    obs: string ;
    supervison: string ; 
}


export const TaagClients = createContext<TaagClientsInterface>(null!);

export const TaagClientsProvider = ({ children }: { children: JSX.Element }) => {

    const data =  GetClients();

    const tableProduct =  [
        {product: 'nobleak', model: 'Nobreak sm 1200va Bivolt', marca:'SMS', nserie: '123456789', heritage:'TAAg', invoice:'notafiscal', nota:'produto ok', order:'1234', status: '' },
        {product: 'Power Balun', model: 'Onix Hd 8000 4k 8 Canais', marca:'NIX', nserie: '123456789', heritage:'TAAg', invoice:'notafiscal', nota:'produto ok', order:'1234', status: '' },
    ];

    const [deleteClients, setDeleteClients] = React.useState<DataClient>({} as DataClient);


    const [clientsAll , setClientsAll] = React.useState<DataClient[]>([]);
    const [result, setResult] = React.useState<DataClient[]>([]);
    const [resultProduct, setResultProduct] = React.useState<Data[]>([]);

    useEffect(() => {
        async function clients (){
            const  tableClients = await data.findClients();
            return setClientsAll(tableClients);
        }

        clients();
    }, []);

    
    async function sendFile (file: DataClient) {
        try{
            console.log(file);
            const excel  = await data.sendFile(file);
            return excel;

        } catch(err){
            console.log(err);
        }
    }
    
    async function sendClient(clients: DataClient)  {
        try{
            const response = await data.sendClients(clients);
            console.log(response);
            alert(response);
        }catch(err){
            console.log(err);
        }   
    }

    return (
        <TaagClients.Provider 
            value={{
                sendClient,
                sendFile,
                result,
                setResult,
                tableProduct,
                resultProduct,
                setResultProduct,
                clientsAll,
                deleteClients,
                setDeleteClients
            }}>

            {children}

        </TaagClients.Provider>
    )
}