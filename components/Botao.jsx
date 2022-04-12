import React from 'react'

export default function Botao({onclick , text}) {
  return (
        <button 
          type="button" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 ml-5"
          onClick={onclick}
        >
            {text}
        </button>
  )
}
