import React, {createContext, useEffect, useState} from 'react';
import { TaagTypesPages } from './ContextPage';
import { Server } from "../server/server";
import { User } from "../types/User";
import { DataClient } from '../types/DataClient';


interface Data {
    client: string;
    dpt: string;
    obs: string ;
    supervison: string ; 
}

export const TaagContext = createContext<TaagTypesPages>(null!);

export const TaagProvider = ({ children }: { children: JSX.Element }) => {

    //Usuarios //
    const Api = Server();


    const [user, setUser] = useState<User | null>(null)
    const [statusBar, setStatusBar] = useState<boolean>(true);
    const [nameUser, setNameUser] = useState('')
    const [password , setPassword] = useState('')

    const onOff = () => setStatusBar(!statusBar)
    const removeLocalStronge = () => localStorage.removeItem('user_token');
    const setLocalStorage = (token: string) => localStorage.setItem('user_token', token)

    useEffect( () =>{
        const validarwToken = async() => {
            const token = localStorage.getItem('user_token')
            if(token){ 
                const data = await Api.validateToken(token);
                if(data) setUser(data);

                else if(user == null || user == undefined) {
                    removeLocalStronge();
                    setUser(null)
                }
            }
        };
        validarwToken();

        addEventListener('keypress', (e) => {
            if(e.key == 'Enter') {
                sing(nameUser, password);
            }
        });

    });

    useEffect(() => {
        async function clients (){
            const  tableClients = await Api.findClients();
            return setClientsAll(tableClients);
        }

        clients();
    }, []);

    async function sing(user: string, password: string) {
        try{
            const data: User = await Api.singUser(user, password)
            if(data){
                if(data.name == user && data.password == password){
                    setLocalStorage(data.token);
                    setUser(data);
                    window.location.href = '/home';
                }
                return data;
            }
        }catch(err){ console.log(err); }
    };

    function logout() {
        window.location.href = '/';
        removeLocalStronge();
        setUser(null);
    };

    //Clients 

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    
    const [deleteClients, setDeleteClients] = React.useState<DataClient>({} as DataClient);
    const [clientsAll , setClientsAll] = React.useState<DataClient[]>([]);
    const [result, setResult] = React.useState<DataClient[]>([]);
    const [resultProduct, setResultProduct] = React.useState<Data[]>([]);



    async function sendFile (file: DataClient) {
        try{
            console.log(file);
            const excel  = await Api.sendFile(file);
            return excel;

        } catch(err){
            console.log(err);
        }
    }

    async function sendClient(clients: DataClient)  {
        try{
            const response = await Api.sendClients(clients);
            console.log(response);
            alert(response);
        }catch(err){
            console.log(err);
        }   
    }

    //Produto

    const tableProduct =  [
        {product: 'nobleak', model: 'Nobreak sm 1200va Bivolt', marca:'SMS', nserie: '123456789', heritage:'TAAg', invoice:'notafiscal', nota:'produto ok', order:'1234', status: '' },
        {product: 'Power Balun', model: 'Onix Hd 8000 4k 8 Canais', marca:'NIX', nserie: '123456789', heritage:'TAAg', invoice:'notafiscal', nota:'produto ok', order:'1234', status: '' },
    ];

        return (
            <TaagContext.Provider value={{
                sing,
                user,
                statusBar,
                onOff,
                setStatusBar,
                logout,
                nameUser,
                setNameUser,
                password,
                setPassword,
                open,
                setOpen,
                openModal,
                setOpenModal,
                sendClient,
                sendFile,
                result,
                setResult,
                resultProduct,
                setResultProduct,
                clientsAll,
                deleteClients,
                setDeleteClients,
                tableProduct,
            }}>
                {children}
            </TaagContext.Provider>
        )
    }