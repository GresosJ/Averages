import React from 'react'

const lei = [ 
              [
              {
                "ects" : 5 ,
                "nome" : "Álgebra Linear para Engenharia"
              }, 
              {
                "ects" : 5 ,
                "nome" : "Cálculo para Engenharia"
              },
              {
                "ects" : 5 ,
                "nome" : "Laboratórios de Informática I"
              },
              {
                "ects" : 5 ,
                "nome" : "Programação Funcional"
              },
              {
                "ects" : 5 ,
                "nome" : "Tópicos de Matemática Discreta"
              },
              {
                "ects" : 5 ,
                "nome" : "Opção UMinho"
              },
              {
                "ects" : 5 ,
                "nome" : "Análise Matemática para Engenharia"
              },
              {
                "ects" : 5 ,
                "nome" : "Elementos de Probabilidades e Teoria de Números"
              },
              {
                "ects" : 5 ,
                "nome" : "Laboratórios de Informática II"
              },
              {
                "ects" : 5 ,
                "nome" : "Lógica"
              },
              {
                "ects" : 5 ,
                "nome" : "Programação Imperativa"
              },
              {
                "ects" : 5 ,
                "nome" : "Sistemas de Computação"
              },
            ]
          ]



export default  function Curso() {  
  return (
    <div className="flex flex-row justify-start pt-6 spacing">
        {lei.map((elem, key) => {
          return (
           <div key={key} className="flew flew-row justify-start pt-10">
                <div className="font-medium text-gray-600">
                  1ºano
                </div>
                {elem.map((cadeira, i) => {
                    return (
                      <a key={i}>
                        <div className="font-medium text-gray-600">
                            {cadeira.nome}
                        </div>
                        <input type="text" id={cadeira.nome} name="cadeira" className="border border-slate-600 rounded w-1/4 h-6 px-5 " placeholder="Nota"/>
                      </a>
                    );
                  })}
           </div>
          );
        })}
    </div>
  )
}
