import  Modal  from "react-modal";
import React, {useContext} from "react";
import { TaagContext } from "../../context/TaagContext";
import {AiOutlineCloseCircle} from 'react-icons/ai'

import './modal.sass'

type ModalType = {
    children: any
    deleteClient: () => void
}


Modal.setAppElement('#root');

const ModalDelete = ({children, deleteClient}: ModalType) => {

    const {open, setOpen, setOpenModal} = useContext(TaagContext);

    function nextModal() {
        setOpen(false)
        setOpenModal(true)
    }

    const closeModal = () => setOpen(false)

    return (
        <section >
            <Modal
            
                isOpen={open}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal"
                overlayClassName="overlay"
            >
                <div className='modal-delete'>
                    <h1>{children}</h1>
                    <div className='modal-buttons'>
                        <button className='cancel' onClick={nextModal}>Editar</button>
                        <button className='delete' onClick={deleteClient}>Apagar</button>
                    </div>
                </div>

                <AiOutlineCloseCircle className="closeModal" fontSize="1em" onClick={closeModal}/>
            </Modal>
        </section>
    );
};

export default ModalDelete;