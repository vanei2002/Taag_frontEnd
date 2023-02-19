import React, {useEffect, useContext} from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";
import  DashClients  from "../../components/DashClients/DashClients";
import {SiMicrosoftexcel} from "react-icons/si";

import "./clients.sass";
import { Link } from "react-router-dom";
import { TaagClients } from "../../context/TaagClients";
import { DataClient } from "../../types/DataClient";


function Clients (){

    const {setResult, clientsAll} = useContext(TaagClients);

    async function search(text: string){
        const result = await clientsAll.filter((row: DataClient) => {
            return row.name.toLowerCase().includes(text.toLowerCase());
        });
      setResult(result);
    }

    useEffect(() => {
        setResult(clientsAll);
    }, [clientsAll]);

    return (
        <main className="container-clients">
            <NavBar/>
            <section className="client">
                <BarrTaag children="Clientes"/>

                <div className="subnave-client">
                    <div className="client-nav">
                        <Link className="button-client" to="/clients/newclient">Novo Cliente</Link>
                        <button className="button-client">
                            <SiMicrosoftexcel  size={20} color="#03460e" />
                            <span>Exportar</span> 
                        </button>
                    </div>

                    <input type="search" placeholder="Search Client" className="search-client"  onChange={ e => search(e.target.value) }/>
                </div>
                <DashClients/>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default  Clients;