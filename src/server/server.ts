import axios from "axios"

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
    }

})