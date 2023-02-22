import axios from "axios";
import { DataClient } from "../types/DataClient";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const GetClients = () => ({

    sendFile : async (file: DataClient) => {
        try{
            const response = await client.post("/clients/excel", file);
            return response.data;
        
        }catch(err){
            console.log(err);
        }
    },

    findClients : async () => {
        try{
            const response = await client.get("/clients/clients");
            return response.data;

        }catch(err){
            console.log(err);
        }
    },

    sendClients: async (clients: DataClient) => {
        try{
            const response = await client.post("/clients/newclient", clients);
            return response.data;

        }catch(err){
            console.log(err);
        }
    },    

})