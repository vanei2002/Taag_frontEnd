import React, {useState , useContext} from 'react'
import { TaagContext } from '../../context/ContextPage'
import Taag from '../../../public//taag_logo.png'
import { ButtonTaag } from '../../components/ButtonTaag/ButtonTaag'
import InputText from '../../components/InputText/InputText'
import { Alert } from '@mui/material'
import {GrClose} from "react-icons/gr"

import './app.sass'


function App() {

  const [nameUser, setNameUser] = useState('')
  const [password , setPassword] = useState('')

  const [validInput, setValidInput] = useState(false)
  const [validUser, setValidUser] = useState(false)

  const {sing} = useContext(TaagContext)

  async function sendUser(){
    if(nameUser === '' || password === '') { 
      setValidInput(true)
      return
    }

    const data: any = await sing(nameUser, password);

    if(typeof data === 'string'){
      setValidUser(true)
      return
    }
  }

  return (
    <main className='main'>

      <section className='AppContainer'>
        <div className='AppLogo'> <img src={Taag} alt="" /> </div>
      
        <InputText children='Name user' type="text"  onChange={setNameUser} id="user"/>
        <InputText children='Password' type="password"  onChange={setPassword} id="passwordUser"/>

        <Alert variant='outlined' severity="error" className='message' sx={{ display: validInput ? 'flex' : 'none', justifyContent: 'center',}}> 
          Campos não preenchidos
          <GrClose onClick={() => setValidInput(false)} className="closeAlert"/>
        </Alert>

        <Alert variant='outlined' severity="warning" className='message' sx={{ display: validUser ? 'flex' : 'none', justifyContent: 'center',}}>
          Usuário não encontrado
          <GrClose onClick={() => setValidUser(false)} className="closeAlert"/>
        </Alert>

        <ButtonTaag onclick={sendUser}>  Entrar </ButtonTaag>
      </section>

    </main>
  )
}

export default App
