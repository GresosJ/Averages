import Hero from "../components/Hero";
import Pesquisa from "../components/Pesquisa";
import Curso from "../components/Curso";
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
