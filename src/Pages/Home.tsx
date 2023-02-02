import React, { ReactNode, useRef, useState } from 'react';
import logo from './logo.svg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from "../Components/Header/Header";
import Inicio from "../Components/Inicio/Inicio";
import AboutMe from "../Components/aboutMe/aboutMe";
import Reveal from '../Components/Inicio/Inicio';
import Projetos from '../Components/Projetos/Projetos';
import ProjetoLista from '../Components/Projetos/ProjetoLista/ProjetoLista';
import Footer from '../Components/Footer/Footer';
import Contato from '../Components/Contato/Contato';
import ExperienciasLista from '../Components/Experiencias/ExperienciasLista/ExperienciasLista';


// Framer motion
import { motion, useAnimation, Variants, useScroll, useInView } from 'framer-motion';


// JSON
import experiencias from '../Components/Experiencias/experiencias.json';


interface Props {
  children?: ReactNode
}

export interface Projeto{
  srcImg: string,
  title: string,
  description: string
}

function Section({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
        >
          { children }
        </span>
      </section>
    );
  }

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [srcImg, setSrcImg] = useState("");
  const [url, setUrl] = useState("");

  const [exp_srcImg, setExp_srcImg] = useState("");
  const [exp_title, setExp_title] = useState("");
  const [exp_description, setExp_description] = useState("");
  const [exp_subtitle, setExp_subtitle] = useState("");
  const [exp_srcImg_slide_um, setExp_srcImg_slide_um] = useState("");
  const [exp_srcImg_slide_dois, setExp_srcImg_slide_dois] = useState("");
  const [exp_srcImg_slide_tres, setExp_srcImg_slide_tres] = useState("");

 
  return (
    <>
    <div id="main">
      <Header />
      <Inicio />
      <AboutMe />
      <ProjetoLista 
        srcImg={srcImg} 
        title={title} 
        description={description} 
        url={url}/>

      <ExperienciasLista 
        exp_srcImg={exp_srcImg} 
        exp_title={exp_title} 
        exp_description={exp_description} 
        exp_srcImg_slide_um={exp_srcImg_slide_um} 
        exp_srcImg_slide_dois={exp_srcImg_slide_dois} 
        exp_srcImg_slide_tres={exp_srcImg_slide_tres} 
      />
      <Contato />
      <Footer />
    </div>
    </>
  );
};


