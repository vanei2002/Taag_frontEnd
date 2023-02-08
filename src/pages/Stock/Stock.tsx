import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";

import "./stock.sass";

function Stock (){

    return (
        <main className="container-stock">
            <NavBar/>

            <section className="stock">
                <BarrTaag children="Equipamentos"/>
                <h1> Stock</h1>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default  Stock;