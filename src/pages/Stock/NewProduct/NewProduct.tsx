import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import BarrTaag from '../../../components/BarrTaag/BarrTaag';
import NavBar from '../../../components/NavBar/NavBar';
import {SiMicrosoftexcel} from "react-icons/si";
import { DataProduct } from '../../../types/TableProduct';

import "../NewProduct/newproduct.sass";
import FormProduct from '../../../components/FormProduct/FormProduct';
import { TaagContext } from '../../../context/TaagContext';

function NewProduct(){

    const [execlFile, setExeclFile] = useState<FileList | null>(null);
    const {} = useContext(TaagContext);

    useEffect(() =>{
        async function readerFile () {  

            const csvFile = execlFile?.item(0);
            const reader = new FileReader();

            reader.onload = async (e: ProgressEvent<FileReader>) => {
                const text = e.target?.result;
                const lines = text?.toString().split("\n");

                const [header, ...linesArray] = lines || [];
                const arr = []

                for (let line of linesArray) {
                    const splitFiles = line.split(",").map((item) => {
                        return item.replace(/"/g, "");
                    });

                    const data: DataProduct  = {
                        product: splitFiles[0],
                        model: splitFiles[1],
                        marca: splitFiles[2],
                        nserie: splitFiles[3],
                        heritage: splitFiles[4],
                        invoice: splitFiles[5],
                        nota: splitFiles[6],
                        order: splitFiles[7],
                        status: splitFiles[8],
                    }

                    arr.push(data);
                    
                    // setInterval(() => {
                    //     document.location.reload();
                    // } ,2000);
                }

                console.log(arr);
            };
            reader.readAsText(csvFile!);
        }

        function handleFile() {
            if (execlFile) readerFile();
        }
        
        handleFile();
    },[execlFile])

    return (
        <main className='container-newproduct'>

            <NavBar/>

            <section className='new-product'>
                <BarrTaag children='Novo Produto'/>
                
                <div className='buttons-product'>
                    <Link className='button-newproduct' to="/stock">Voltar</Link>

                    <button className="button-excel" >
                        <label htmlFor="file">
                            <SiMicrosoftexcel  size={20} color="#03460e" />
                            <span>Importar</span>
                            <input type="file" id="file" onChange={e => setExeclFile(e.target.files)}/>
                        </label>
                    </button>
                </div>

                <FormProduct/>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default NewProduct;