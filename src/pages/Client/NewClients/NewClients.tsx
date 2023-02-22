import React, {useEffect , useState, useContext} from "react";
import NavBar from "../../../components/NavBar/NavBar";
import BarrTaag from "../../../components/BarrTaag/BarrTaag";
import FormClients from "../../../components/FormClients/FormClients";
import {SiMicrosoftexcel} from "react-icons/si";

import "./newclients.sass";

import { Link } from "react-router-dom";
import { TaagClients } from "../../../context/TaagClients";
import { DataClient } from "../../../types/DataClient";


function NewClients() {

    const [execlFile, setExeclFile] = useState<FileList | null>(null);
    const {sendFile} = useContext(TaagClients);
    


    useEffect(() => {
        async function readerFile () {  

            const csvFile = execlFile?.item(0);
            const reader = new FileReader();

            reader.onload = async (e: ProgressEvent<FileReader>) => {
                const text = e.target?.result;
                const lines = text?.toString().split("\n");

                const [header, ...linesArray] = lines || [];

                for (let line of linesArray) {
                    const splitFiles = line.split(",").map((item) => item.slice(1, -1));

                    const data: DataClient  = {
                        name: splitFiles[0],
                        email: splitFiles[1],
                        phone: splitFiles[2],
                        address: splitFiles[3],
                        cep: splitFiles[4],
                        city: splitFiles[5],
                        state: splitFiles[6],
                        number: splitFiles[7],
                        department: splitFiles[8],
                        work: splitFiles[9],
                        description: splitFiles[10],
                        responsible: splitFiles[11],
                    }

                    sendFile(data);
                }
            };
            reader.readAsText(csvFile!);
        }

        function handleFile() {
            if (execlFile) readerFile();
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