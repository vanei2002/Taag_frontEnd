import React, { useEffect , useContext, useState } from "react";

import "./dashbord.sass";

const clients = [
    {client: 'Amanda e Hohan', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio' , status: 'Obras em andamentos'},
    {client: 'Kaby Shaby (FBV)', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio' , status: 'Obras em andamentos'},
    {client: 'EXP - Escritorio', dpt: 'Programação', obs: 'Retrafit', supervison: 'Fabio' , status: 'Obras em andamentos'},
    {client: 'Carlos v. Araujo', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio' , status: 'Obras em andamentos'},
    {client: 'Maisa Maluf', dpt: 'Programação', obs: 'Iluminação', supervision: 'Fabio', status: 'Vistorias'},
    {client: 'José Reinaldo (FBV) ', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio', status: 'Vistorias'},
    {client: 'Alexandre Birman', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio', status: 'Vistorias'},
    {client: 'Daniela Arges (MG)', dpt: 'Programação', obs: 'Iluminação', supervision: 'Fabio', status: 'Vistorias'},
    {client: 'Sergio Renault (FBV)', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio', status: 'Obras concluidas'},
    {client: 'Sergio Benicio ', dpt: 'Programação', obs: 'Sistema Completo', supervision: 'Fabio' ,status: 'Obras concluidas'},
    {client: 'Suite Arquitetos (Apto)', dpt: 'Programação', obs: 'Retrofit', supervision: 'Fabio', status: 'Obras concluidas'},
    {client: 'Daniela Ergoni (APTO)', dpt: 'Programação', obs: 'Retrofit',supervision:  'Fabio', status: 'Obras concluidas'},
    {client: 'Cidade Jardim', dpt: 'Programação', obs: 'Retrofit', supervision: 'Fabio', status: 'Obras concluidas'},
];

const Dashbord = () => {

    const status = [
        {id: 1, name: 'Obras em andamentos', value: 0, color: 'red'},
        {id: 2, name: 'Vistorias', value: 0, color: 'blue' },
        {id: 3, name: 'Obras concluidas', value: 0, color: '#008000'},
    ]

    const [client, setClient] = useState(status)
    
    useEffect(() => {
        const detail = () => {
            clients.map((client) => {
                status.map((status) => {
                    if(client.status === status.name){
                        const value = clients.filter((client) => client.status === status.name).length
                        return status.value = value
                    }
                })
            })
        }


        detail()
        setClient(status)
        setObras(status[0].value)
    },[])

    const [obras, setObras] = useState(0)

    console.log(obras)

    const [openOne, setOpenOne] = useState(true)
    const [openTwo, setOpenTwo] = useState(true)
    const [openThree, setOpenThree] = useState(true)

    const handleOpen = (id: number) => {
        id === 1 ? setOpenOne(!openOne) : null
        id === 2 ? setOpenTwo(!openTwo) : null
        id === 3 ? setOpenThree(!openThree) : null
    }
    
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
                            {display: ' block',}:{display: ' none',}}>

                            {clients.map( client => (
                                client.status === item.name && (
                                    <div key={client.client} className="status">
                                        <p className="text">{client.client}</p>
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