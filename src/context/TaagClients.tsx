import React, {createContext} from 'react';
import { GetClients } from '../server/clients';
import { NewClient } from '../types/NewClient';

interface TaagClientsInterface {
    sendClient: (clients: NewClient) => Promise<void>;
    sendFile: (file: FileList) => Promise<void>;
}

export const TaagClients = createContext<TaagClientsInterface>(null!);

export const TaagClientsProvider = ({ children }: { children: JSX.Element }) => {
    
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
            }}>

            {children}

        </TaagClients.Provider>
    )
}