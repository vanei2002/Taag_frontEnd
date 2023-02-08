import React from "react";
import BarrTaag from "../../components/BarrTaag/BarrTaag";
import NavBar from "../../components/NavBar/NavBar";

import '../Employees/employees.sass'


function Employees (){

    return (
        <main className="container-employees">
            <NavBar/>

            <section className="employees">
                <BarrTaag children="Funcionarios"/>
                <h1> Employees</h1>
            </section>


            <footer>
                &copy; 2023 Taag Experince
            </footer>
            
        </main>
    )
}

export default  Employees;