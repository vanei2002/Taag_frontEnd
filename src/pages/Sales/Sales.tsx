

import React from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";

import "./sales.sass";

function Sales (){
    return (
        <main className="container-sales">
            <NavBar/>
            
            <section className="sales"> 
                <BarrTaag children="Historico vendas"/>
                <h1> Sales</h1>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default  Sales;