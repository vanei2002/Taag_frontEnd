import React from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";

import "./settings.sass"

function Settings(){
    return (
        <main className="container-settings">
            <NavBar/>

            <section className="settings">
                <BarrTaag children="Configurações"/>
                <h1> Settings</h1>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
            
        </main>
    )
}

export default  Settings;