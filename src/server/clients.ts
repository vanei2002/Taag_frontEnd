import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const GetClients = () => ({

    sendFile : async (file: any) => {
        try{
            const response = await client.post("/clients/excel", file);
            return response.data;
        
        }catch(err){
            console.log(err);
        }
    },

    sendClients  : async (clients: any) => {
        try{
            const response = await client.post("/clients/newclient", clients);
            return response.data;

        }catch(err){
            console.log(err);
        }
    },    

})