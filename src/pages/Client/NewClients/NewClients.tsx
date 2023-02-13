import React, {useEffect , useState, useContext} from "react";
import NavBar from "../../../components/NavBar/NavBar";
import BarrTaag from "../../../components/BarrTaag/BarrTaag";
import FormClients from "../../../components/FormClients/FormClients";
import {SiMicrosoftexcel} from "react-icons/si";

import "./newclients.sass";

import { Link } from "react-router-dom";
import { TaagClients } from "../../../context/TaagClients";


function NewClients() {

    const [execlFile, setExeclFile] = useState<FileList | null>();

    const {sendFile} = useContext(TaagClients);
    
    useEffect(() => {
        function handleFile() {
            if (execlFile) sendFile(execlFile);
        }
        
        handleFile();
    }, [execlFile]);
    
    return (

        <main className="container-newclients">
            <NavBar/>
            <section className="new-clientes">
                <BarrTaag children="Novo Cliete"/>         
                    
                <div className="newClient-nav">
                    <Link className="button-newclient" to="/clients">Voltar</Link>
                    
                    <button className="button-excel" >
                        <label htmlFor="file">
                            <SiMicrosoftexcel  size={20} color="#03460e" />
                            <span>Importar</span>
                            <input type="file" id="file" onChange={(e)=> setExeclFile(e.target.files)}/>
                        </label>
                    </button>
                </div>

                <FormClients/>
            </section>
       
            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
  )
}

export default NewClients;