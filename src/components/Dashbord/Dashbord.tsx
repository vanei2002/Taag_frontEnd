import React, { useEffect , useContext, useState } from "react";
import { TaagClients } from "../../context/TaagClients";
import { status } from "../../status";
import { DataClient } from "../../types/DataClient";

import "./dashbord.sass";



const Dashbord = () => {

    const {clientsAll} = useContext(TaagClients);
    const [client, setClient] = useState(status);

    const [openOne, setOpenOne] = useState(true);
    const [openTwo, setOpenTwo] = useState(true);
    const [openThree, setOpenThree] = useState(true);

    function handleOpen (id: number){
        id === 1 ? setOpenOne(!openOne) : null
        id === 2 ? setOpenTwo(!openTwo) : null
        id === 3 ? setOpenThree(!openThree) : null
    };


    useEffect(() => {

        function dashStatus (){
            clientsAll.map((client: DataClient) => {
                status.map((status) => {
                    if(client.work === status.name){
                        const value = clientsAll.filter((client: DataClient) => client.work === status.name).length
                        return status.value = value
                    }
                })
            })
        };

        dashStatus();
        setClient(status);

    },[clientsAll]);


    return (
            <section className="dashbord-items">

                {status.map((item) => (
                    <div className="item" key={item.id} style={{borderLeft: `8px solid ${item.color}`}}> 

                        <h1 className="item-title">{item.name}</h1>
                        
                        <button className="item-button" onClick={() =>handleOpen(item.id)} key={item.id}>
                            <span className="item-value" style={{color: item.color}}>
                                {client.map((status) => { if(status.name === item.name) return status.value })}
                            </span>
                        </button>
                        
                        <section className="nameClient" style={ 
                            openOne && item.id == 1 || 
                            openTwo && item.id == 2 || 
                            openThree && item.id == 3? 
                            {display: ' block'}:{display: ' none'}}>

                            {clientsAll.map( (client: DataClient) => (
                                client.work === item.name && (
                                    <div key={client.name} className="status">
                                        <p className="text">{client.name}</p>
                                    </div>
                                ))
                            )}
                        </section>

                    </div>
                ))}
            </section>
        )
}


export default Dashbord;