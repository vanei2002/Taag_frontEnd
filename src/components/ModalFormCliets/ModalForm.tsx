import { Modal } from "@material-ui/core";
import React, {useContext, useState} from "react";
import { TaagContext } from "../../context/ContextPage";
import { status } from "../../status";
import FormInput from "../FormInput/FormInput";


type ModalType = {
  deleteClient: any
}

import './modalform.sass'

const ModalForm = ({deleteClient}: ModalType) => {
    const {openModal, setOpenModal} = useContext(TaagContext);
  
    const closeModal = () => setOpenModal(false)

    const [name, setName] = useState(deleteClient.name)
    const [email, setEmail] = useState(deleteClient.email)
    const [phone, setPhone] = useState(deleteClient.phone)
    const [address, setAddress] = useState(deleteClient.address)
    const [cep, setCep] = useState(deleteClient.cep)
    const [city, setCity] = useState(deleteClient.city)
    const [state, setState] = useState(deleteClient.state)
    const [description , setDescription] = useState(deleteClient.description)
    const [department, setDepartment] = useState(deleteClient.department)
    const [responsible, setResponsible] = useState(deleteClient.responsible)
    const [number, setNumber] = useState(deleteClient.number)
    const [work, setWork] = useState(deleteClient.work)

    function updateClient() {
        const data = [
          name, email, phone, address, cep, city, state, 
          description, department, responsible, number, work
        ]

        document.location.reload();
    };

    return (
       <Modal
         open={openModal}
         onClose={closeModal}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"

       >
        <section className="container-modalUpdate">

          <div className="title-modal">
            <h1>Editar Dados</h1>

            <p>  Os dados que você alterar aqui, serão alterados no banco de dados. </p>
          </div>

          <section className="form-modal">

            <div className="modal-update">
              <FormInput width="20rem" children="Nome" type="text" value={!name ? deleteClient.name : name} onChange={setName} />
              <FormInput width="100%" children="Telefone" type="text" value={!phone ? deleteClient.phone : phone} onChange={setPhone}/>
            </div>

            <FormInput width="100%" children="Email" type="text" value={!email ? deleteClient.email : email} onChange={setEmail}/>

            <div className="modal-update">
              <FormInput width="18.5rem" children="Endereço" type="text" value={!address ? deleteClient.address : address} onChange={setAddress}/>
              <FormInput width="10rem" children="Numero" type="text" value={!number ? deleteClient.number : number} onChange={setNumber}/>
            </div>

            <div className="modal-update">
              <FormInput width="100%" children="Cep" type="text" value={!cep ? deleteClient.cep : cep} onChange={ setCep}/>
              <FormInput width="100%" children="Cidade" type="text" value={!city ? deleteClient.city : city} onChange={setCity}/>
              <FormInput width="100%" children="Estado" type="text" value={!state ? deleteClient.state : state} onChange={setState}/>
            </div>

            <div>
              <FormInput width="100%" children="Descrição" type="text" value={!description ? deleteClient.description : description} onChange={setDescription}/>
              <FormInput width="100%" children="Departamento" type="text" value={!department ? deleteClient.department : department} onChange={setDepartment}/>
            </div>
            
            <div className="modal-update">
              <FormInput width="14rem" children="Responsaveel" type="text" value={!responsible ? deleteClient.responsible : responsible} onChange={setResponsible}/>

              <label className="selectForm" htmlFor="name">Status Obra
                <select  name="cars" id="cars" value={!work ? deleteClient.work : work } onChange={e => setWork(e.target.value)}>
                    <option value="">{deleteClient.work}</option>
                    {status.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
                </select>
              </label>
            </div>

          </section>

          <div className="buttons">
            <button className="cancel" onClick={closeModal}>Cancelar</button>
            <button className="update" onClick={updateClient}>Salvar</button>
          </div>

        </section>
        
       </Modal>
    )
}

export default ModalForm