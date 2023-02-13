import React from 'react';
import { Link } from 'react-router-dom';
import BarrTaag from '../../../components/BarrTaag/BarrTaag';
import NavBar from '../../../components/NavBar/NavBar';
import {SiMicrosoftexcel} from "react-icons/si";

import "../NewProduct/newproduct.sass";

function NewProduct(){
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
                            <input type="file" id="file" />
                        </label>
                    </button>

                </div>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default NewProduct;