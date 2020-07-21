import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'


export default function NewIncident(){
    return ( <div className="new-incident-container">
    <div className="content">
      <section>
       <img src={logoImg} alt="Be The Hero" />
        <h1>Cadastrar novo caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói que resolva seu problema
        </p>

        <Link to="/profile" className="back-link">
          <FiArrowLeft size={16} color="#e02041" />
         Voltar para a home
        </Link>
      </section>
      <form>
        <input placeholder="Titulo Do Caso" />
        <textarea placeholder="Descrição" />
        <input placeholder="Valor" />

        <button className="button" type="submit">Cadastrar</button>
      </form>
    </div> 
  </div>
)   
}