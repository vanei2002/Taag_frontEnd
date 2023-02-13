import { useEffect } from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import Dashbord from "../../components/Dashbord/Dashbord";
import NavBar from "../../components/NavBar/NavBar";

import './home.sass'

function Home (){

   useEffect(()=>{
        const local = localStorage.getItem('user_token')
        if(!local) window.location.href = '/'
   })

    return (
        <main className="container-home">
            <NavBar/>

            <section className="dashbord">
                <BarrTaag children="Dashbord"/>
                <Dashbord/>
            </section>

            <footer>
                &copy; 2023 Taag Experince
            </footer>
        </main>
    )
}

export default Home;