import React from 'react'

export default function Botao({onclick}) {
  return (
        <button 
          type="button" 
          className="border border-slate-600 rounded w-1/4 h-10 ml-5 font-iregular hover:bg-primary hover:text-white"
          onClick={onclick}
        >
            Pesquisar
        </button>
  )
}
