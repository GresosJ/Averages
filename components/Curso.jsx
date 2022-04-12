import React from 'react'
import { useState } from "react";

const lei = [
                [
                    {
                        "ects" : 5 ,
                        "cadeira" : "Analise"
                    }
                ],
                [
                    {
                        "ects" : 5 ,
                        "cadeira" : "Fisica Moderna"
                    }
                ]
            ]



export default  function Curso() {
  
  const val = useState (0);

  return (
    <div className="flex flex-col justify-center pt-10 sm:pt-20 lg:flex-row">
        {lei[val].map((elem, key) => {
          return (
           <div/>
          );
        })}
    </div>
  )
}
