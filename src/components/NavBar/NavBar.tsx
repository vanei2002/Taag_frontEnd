import React, {useContext} from "react";
import { Link } from "react-router-dom";

import {BiCameraHome} from 'react-icons/bi'
import {AiOutlineStock} from 'react-icons/ai'
import {FcSalesPerformance} from 'react-icons/fc'
import {HiUsers} from 'react-icons/hi'
import {MdAddBusiness} from 'react-icons/md'
import {TbReportSearch} from 'react-icons/tb'
import {TbUserSearch} from 'react-icons/tb'
import {FcSettings} from 'react-icons/fc'



import Logo from '../../../public/taag_logo.png'
import './navbar.sass'
import { TaagContext } from "../../context/ContextPage";

const NavBar = () => {
    const {statusBar , logout} = useContext(TaagContext)

    return(
        <nav className="navBar" style={!statusBar ? {position: "absolute", left: "-16em"}: {position: "relative"}} >

            <img src={Logo} alt="" className="logo"/>

            <ul>
                <Link to='/home'><BiCameraHome/>Inicio</Link>
                <Link to='/stock'><AiOutlineStock/>Estoque</Link>
                <Link to='/sales'><FcSalesPerformance/>Vendas</Link>
                <Link to='/clients'><HiUsers/>Clientes</Link>
                <Link to='/providers'><MdAddBusiness/>Fornecedores</Link>
                <Link to='/employees'><TbUserSearch/>Funcionarios</Link>
                <Link to='/reports'><TbReportSearch/>Relatorios</Link>
                <Link to='/settings'><FcSettings/>Configurações</Link>
            </ul>

            <button onClick={logout} className="sair">Sair</button>

        </nav>
    )
}


export default NavBar;