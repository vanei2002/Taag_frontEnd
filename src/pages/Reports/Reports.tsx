import React from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";

import "./reports.sass";

function Reports (){
    return (
        <main className="container-reports">
            <NavBar/>

            <section className="reports">
                <BarrTaag children="Relatorios"/>
                <h1> Reports</h1>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
            
        </main>
    )
}

export default  Reports;