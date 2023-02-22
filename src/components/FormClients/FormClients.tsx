import React, {useContext, useState , useEffect} from 'react';
import { TaagClients } from "../../context/TaagClients";
import {MdOutlinePersonalInjury} from "react-icons/md";
import {MdConstruction} from "react-icons/md";
import './formclients.sass';
import FormInput from "../../components/FormInput/FormInput";
import { ButtonTaag } from "../../components/ButtonTaag/ButtonTaag";
import { status } from '../../status';


const FormClients = () => {

    const [name, setName] =  useState<string>("");
    const [email, setEmail] =  useState<string>("");
    const [phone, setphone] =  useState<string>("");
    const [address, setAddress] =  useState<string>("");
    const [cep, setCep] =  useState<string>("");
    const [city, setCity] =  useState<string>("");
    const [state, setState] =  useState<string>("");
    const [description , setDescription] =  useState<string>("");
    const [department, setDepartment] =  useState<string>("");
    const [responsible, setResponsible] =  useState<string>("");
    const [number, setNumber] =  useState<string>("");
    const [work, setWork] =  useState<any>(); //corrigirr type

    const {sendClient} = useContext(TaagClients);

    const data = {
        name, email, phone, address, cep, city, state, number,
        description, department, responsible, work
    };

    function sendNewClient(){

        if(name && email && phone && address && cep && city && state && number && description && department && responsible && work)
        {
            sendClient(data);
            console.log(data);
            return
        }
           
        alert("Preencha todos os campos");
    } 

    useEffect(() => {
        if(cep.length === 8){
           try{
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                setAddress(data.logradouro);
                setCity(data.localidade);
                setState(data.uf); 
                setCep(data.cep);
            })
           }catch(err){
               console.log("Erro ao buscar cep" + err);
           }
        }
    }, [cep]);

    return (
        <>
            <section className="form-container">
                <section className="form-client">
                    <div className="container-inputs">    

                        <div className="form-title">
                            <MdOutlinePersonalInjury style={{color: "#000"}}/>
                            <h1>Dados Pessoais</h1> 
                        </div>   

                        <div className="form-input" >
                            <FormInput type="text" id="nome" onChange={setName} width="100%">Nome</FormInput>
                            <FormInput type="text" id="phone" onChange={setphone} width="100%">Telefone</FormInput>
                        </div>
                        <FormInput type="email" id="email" onChange={setEmail} width="100%">Email</FormInput>
                            
                        <div className="form-input">
                            <FormInput value={address} type="text" id="address" onChange={setAddress} width="100%">Endereço</FormInput>
                            <FormInput type="text" id="number" onChange={setNumber} width="100%">Numero</FormInput>
                        </div>

                        <div className="form-input">
                            <FormInput value={city} type="text" id="city" onChange={setCity} width="100%">Cidade</FormInput>
                            <FormInput value={state} type="text" id="state" onChange={setState} width="100%">UF</FormInput>
                            <FormInput value={cep} type="text" id="cep" onChange={setCep} width="100%">Cep</FormInput>
                        </div>
                    </div>
                </section>

                <section className="form-client">
                    <div className="container-inputs">
                        <div className="form-title">
                            <MdConstruction style={{color: "#000"}}/>
                            <h1>Status Obras</h1>
                        </div>
                        <div>
                            <div className="form-input-status" >
                                <FormInput type="text" id="description" onChange={setDescription} width="60%">Descrição</FormInput>
                                <FormInput type="text" id="department" onChange={setDepartment} width="54%">Departamento</FormInput>
                                <FormInput type="text" id="responsible" onChange={setResponsible} width="56.5%">Responsavel</FormInput>
                                
                                <label className='select-status'  htmlFor="work">Status Obra
                                    <select name='work' onChange={(e) => {setWork(e.target.value)}} >
                                        {status.map((e) =>(
                                            <option 
                                            value={e.name} 
                                            key={e.id}>
                                                {e.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                
                            </div>
                        </div>
                    </div>  
                </section>
            </section>

            <ButtonTaag onclick={sendNewClient}>Salvar</ButtonTaag>
        </>
    )
}
export default FormClients;