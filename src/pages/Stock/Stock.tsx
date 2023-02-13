import React, { useState, useEffect, useContext} from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import {SiMicrosoftexcel} from "react-icons/si";

import "./stock.sass";
import TableProduct from "../../components/TableProduct/TableProduct";
import { TaagClients } from "../../context/TaagClients";

function Stock (){

    const {tableProduct, setResultProduct} = useContext(TaagClients);

    function searchStock(text: string){
       const result = tableProduct.filter((product) => {
            return product.product.toLowerCase().includes(text.toLowerCase());
        })

        setResultProduct(result);
    }

    useEffect(() => {
        setResultProduct(tableProduct);
    }, []); 

    return (
        <main className="container-stock">
            <NavBar/>

            <section className="stock">
                <BarrTaag children="Equipamentos"/>

                <section className="subnave-stock">
                    <div className="stock-nav">
                        <Link className="button-stock" to="/stock/newProduct">Novo Produto</Link>

                        <button className="button-stock">
                            <SiMicrosoftexcel  size={20} color="#03460e" />
                            <span>Exportar</span> 
                        </button>
                    </div>

                    <input type="search" 
                    placeholder="Search Product"
                    className="search-stock" 
                    onChange={ e => searchStock(e.target.value) }/>
                    
                    <button className="button-save">
                        <span>Salvar</span>
                    </button>
                </section>
                <TableProduct/>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default  Stock;