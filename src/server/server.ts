import axios from "axios"
import { DataClient } from "../types/DataClient";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


export const Server = () => ({

    singUser: async (name: string, password: string) => {
        try{
            const res = await api.post('/login', {name, password})
            console.log(res)
            return res.data

        }catch(err){
            console.log(err)
        }
    },

    validateToken: async (token: string) => {
        try{
            const res = await api.post('/validate', {token})
            return res.data
        }catch(err){
            console.log(err)
        }
    },

    sendFile: async (file: DataClient) => {
        try{
            const response = await api.post("/clients/excel", file);
            return response.data;
        
        }catch(err){
            console.log(err);
        }
    },

    receiveFile : async () => {
        try{
            const response = await api.get("/clients/export");
            return response.data;
        
        }catch(err){
            console.log(err);
        }
    },

    findClients : async () => {
        try{
            const response = await api.get("/clients/clients");
            return response.data;

        }catch(err){
            console.log(err);
        }
    },

    sendClients: async (clients: DataClient) => {
        try{
            const response = await api.post("/clients/newclient", clients);
            return response.data;

        }catch(err){
            console.log(err);
        }
    },    

    deleteClient: async (id: string) => {
        try{
            console.log(id);
            const response = await api.delete(`/clients/delete/${id}`);
            return response.data;

        }catch(err){
            console.log(err);
        }
    }


})