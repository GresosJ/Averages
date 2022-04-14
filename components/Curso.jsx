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
  
  const val = 0;

  return (
    <div className="flex flex-row justify-center pt-10 sm:pt-20">
        {lei[val].map((elem) => {
          return (
           <div/>
          );
        })}
    </div>
  )
}
