import { Avatar } from "@material-ui/core";
import React, { useContext , useState } from "react";

import './barrtaag.sass'
import Perfil from '../../../public/perfil.jpg'
import { TaagContext } from "../../context/TaagContext";

import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

type BarrTaagProps = {
    children: string;
}

const BarrTaag: React.FC <BarrTaagProps> = ({children}) => {

    const {onOff,  statusBar , user} = useContext(TaagContext)

    function description(){
        console.log('description')
    }

    return (
        <div className="container-barrtaag">
            <div className="title">
               {statusBar ? 
               <BsFillArrowLeftCircleFill onClick={onOff} className="arrow" />:
                <BsFillArrowRightCircleFill onClick={onOff} className="arrow" />
               }
                <h1>{children}</h1>
            </div>

            <div className="avatar">
                <h2 style={{marginRight: '.5rem'}}>{user?.name}</h2> 
                <Avatar onClick={description} className="perfil" src={Perfil} />
            </div>
        </div>
    )
}

export default BarrTaag;