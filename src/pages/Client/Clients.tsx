import React, {useState} from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";
import  DashClients  from "../../components/DashClients/DashClients";
import {SiMicrosoftexcel} from "react-icons/si";

import "./clients.sass";
import { Link } from "react-router-dom";
import {ImSearch} from "react-icons/im";


function Clients (){
    const [search, setSearch] = useState<string>("");

    function handleSearch(){
        
        if(search === ""){
            alert("Digite algo para pesquisar");
        }else{
            alert("Pesquisando por: " + search);
        }

    }

    return (

        <main className="container-clients">
            <NavBar/>
            <section className="client">
                <BarrTaag children="Clientes"/>

                <div className="subnave-client">
                    <div className="client-nav">
                        <Link className="button-client" to="/clients/newClient">Novo Cliente</Link>

                        <button className="button-client">
                            <SiMicrosoftexcel  size={20} color="#03460e" />
                            <span>Exportar</span> 
                        </button>
                    </div>

                    <input type="search" className="search-client" onChange={(e) => setSearch(e.target.value)}/>
                    <ImSearch className="search"  onClick={handleSearch}/>

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