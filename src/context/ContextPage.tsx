import { createContext, useEffect, useState } from "react";
import { Server } from "../server/server";
import { User } from "../types/User";

type Taag = {
    sing: (user: string, password: string) => void;
    user: User | null;
    setStatusBar: (status: boolean) => void;
    statusBar: boolean;
    onOff: () => void;
    logout: () => void;
}

export const TaagContext = createContext<Taag>(null!);

export const TaagProvider = ({ children }: { children: JSX.Element }) => {

    const Api = Server();

    const [user, setUser] = useState<User | null>(null)
    const [statusBar, setStatusBar] = useState<boolean>(true);


    const onOff = () => setStatusBar(!statusBar)
    const removeLocalStronge = () => localStorage.removeItem('user_token');
    const setLocalStorage = (token: string) => localStorage.setItem('user_token', token)

    useEffect(()=>{
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
        }

        validarwToken();
    }, [])

    
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
    }

    function logout() {
        window.location.href = '/';
        removeLocalStronge();
        setUser(null);
    }

        return (
            <TaagContext.Provider 
            
            value={{
                sing,
                user,
                statusBar,
                onOff,
                setStatusBar,
                logout,
            }}>

                {children}
            </TaagContext.Provider>
        )
}