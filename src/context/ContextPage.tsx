import { User } from "../types/User";
import { DataClient } from '../types/DataClient';
import { DataProduct } from "../types/TableProduct";

export type TaagTypesPages = {
    sing: (user: string, password: string) => void;
    user: User | null;
    setStatusBar: (status: boolean) => void;
    statusBar: boolean;
    onOff: () => void;
    logout: () => void;
    nameUser: string;
    setNameUser: (name: string) => void;
    password: string;
    setPassword: (password: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    sendClient: (clients: DataClient) => Promise<void>;
    sendFile: (file: DataClient) => Promise<void>;
    result: DataClient[];
    setResult: (result: DataClient[]) => void;
    resultProduct: any;
    setResultProduct: (resultProduct: any) => void;
    clientsAll: any;
    deleteClients: any;
    setDeleteClients: (deleteClients: any) => void;
    tableProduct: DataProduct[]
}

