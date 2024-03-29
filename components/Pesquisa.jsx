import React from 'react'
import Botao from './Botao'


export default function Pesquisa(){
  const onClick =  () =>{
    console.log('Click')
}  
  
  return( 
    <div className="spacing">
      <div className="flex flex-row mt-56 ml-20 mr-20">
          <input type="text" id="curso" name="curso" className="border border-slate-600 rounded w-3/4 h-10 px-5 " placeholder="Curso"/>
          <Botao onclick={onClick} text="Pesquisar"/>
      </div>
    </div> 

    )
}