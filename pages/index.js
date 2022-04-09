import Hero from "../componentes/Hero";
import Pesquisa from "../componentes/Pesquisa";
import Curso from "../componentes/Curso";
import Image from 'next/image'


export default function Home() {
  return (
  <>
    <Hero/>
    <Pesquisa/>
    <Curso/>
  </>
  );
}
