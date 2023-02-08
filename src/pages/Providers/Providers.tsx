import React from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";

import "./providers.sass";

function Providers (){
    return (
        <main className="container-providers">
            <NavBar/>

            <section className="providers">
                <BarrTaag children="Fornecedores"/>
                <h1> Providers</h1>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default  Providers;