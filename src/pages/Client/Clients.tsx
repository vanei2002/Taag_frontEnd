import React, {useEffect, useContext} from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";
import  DashClients  from "../../components/DashClients/DashClients";
import {SiMicrosoftexcel} from "react-icons/si";

import { Link } from "react-router-dom";
import { DataClient } from "../../types/DataClient";

import "./clients.sass";
import { TaagContext } from "../../context/TaagContext";
import { Server } from "../../server/server";




function Clients (){

    const {setResult, clientsAll} = useContext(TaagContext);

    async function search(text: string){
        const result = await clientsAll.filter((row: DataClient) => {
            return row.name.toLowerCase().includes(text.toLowerCase());
        });
      setResult(result);
    }

    async function exportExcel(){
        const file = await Server().findClients();  
        const csv = await file.map((row: DataClient) => {
            return Object.values(row).join(",");
        }   
        ).join("");

        const csvData = new Blob([csv], {type: "text/csv"});
        const csvUrl = URL.createObjectURL(csvData);
        const link = document.createElement("a");

        console.log(csvData);
        link.setAttribute("target", "_blank");
        link.setAttribute("download", "Tabela-MongoDB.csv");
        document.body.appendChild(link);
        
        // link.click();

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
                        <Link className="button-client" to="/clients/newclient" >Novo Cliente</Link>
                        <button className="button-client" onClick={exportExcel}>
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