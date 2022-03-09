import Hero from "../componentes/website/Hero";
import Image from 'next/image'


export default function Home() {
  return (
    <div className="spacing bg-slate-100 w-full h-screen">
      
      <Hero/>

      <div className="flex flex-row mt-96 ml-20 mr-20">
          <input type="text" id="curso" name="curso" className="border border-slate-600 rounded w-3/4 h-10 px-5 " placeholder="Curso"/>
          <button type="button" className="border border-slate-600 rounded w-1/4 h-10 ml-5">Click Me!</button>
      </div>
    

    </div>    

  )
}
