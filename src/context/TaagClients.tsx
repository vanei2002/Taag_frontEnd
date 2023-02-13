import React, {createContext, useEffect} from 'react';
import { GetClients } from '../server/clients';
import { NewClient } from '../types/NewClient';
import { TableProduct } from '../types/TableProduct';
import {statusProduct} from '../status';

interface TaagClientsInterface {
    sendClient: (clients: NewClient) => Promise<void>;
    sendFile: (file: FileList) => Promise<void>;
    rows:  Data[];
    result: Data[];
    setResult: (result: Data[]) => void;
    resultProduct: any;
    setResultProduct: (resultProduct: any) => void;
    tableProduct: TableProduct[];
}
interface Data {
    client: string;
    dpt: string;
    obs: string ;
    supervison: string ; 
}




export const TaagClients = createContext<TaagClientsInterface>(null!);

export const TaagClientsProvider = ({ children }: { children: JSX.Element }) => {

    function createData( client: string, dpt: string, obs: string, supervison: string,): Data {
        return { client, dpt, obs, supervison};
    } 

    const tableProduct =  [
        {product: 'nobleak', model: 'Nobreak sm 1200va Bivolt', marca:'SMS', nserie: '123456789', heritage:'TAAg', invoice:'notafiscal', nota:'produto ok', order:'1234', status: '' },

        {product: 'nobleak', model: 'Nobreak sm 1200va Bivolt', marca:'SMS', nserie: '123456789', heritage:'TAAg', invoice:'notafiscal', nota:'produto ok', order:'1234', status: '' },
        

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

    const product = [
        {id: 1, name: 'Lâmpada'},
    ];

    const [result, setResult] = React.useState<Data[]>([]);
    const [resultProduct, setResultProduct] = React.useState<Data[]>([]);
   

    const data =  GetClients();
    
    async function sendFile (file: FileList) {
        try{

            const excel  = await data.sendFile(file.item(0));
            return excel;

        } catch(err){
            console.log(err);
        }
    }
    
    async function sendClient(clients: NewClient)  {
        try{
            const response = await data.sendClients(clients);
            console.log(response);

        }catch(err){
            console.log(err);
        }   
    }

    return (
        <TaagClients.Provider 
            value={{
                sendClient,
                sendFile,
                rows,
                result,
                setResult,
                tableProduct,
                resultProduct,
                setResultProduct,
            }}>

            {children}

        </TaagClients.Provider>
    )
}