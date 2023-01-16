// React 
import { useEffect } from 'react';

// CSS
import './Projetos.css';
import '../../Components/baseCss.css';

// JSON
import projetos from './projetos.json';

// Bootstrap
import Button from 'react-bootstrap/Button';

//AOS
import Aos from "aos";
import "aos/dist/aos.css";


type Props = typeof projetos[0];

export default function Projetos(props: Props) {
        useEffect(() => {
        Aos.init({ duration: 1100 });
    }, []);
    
    const { title, srcImg, srcImg_mobile, description, subtitle, url } = props;

    return(
        <>
            <div className="d-none d-sm-block" id="Projetos">
                <section id="all-projects" className="d-flex justify-content-center my-5">
                    <div data-aos="fade-right">
                    <section id="card" className="d-flex mb-3">
                
                        <aside id="card-img">  
                            <img
                                src={srcImg}
                                alt="Foto do projeto"
                                id="card-img_photo">                            
                            </img>
                        </aside>
                        <article id="card-textfield" className="d-flex flex-column justify-content-center align-items-start m-5">
                            <h1 id="card-title">{title}</h1>
                            <h2 id="card-subtitle">{subtitle}</h2>
                            <p id="card-txt">{description}</p>
                            <a href={url} id="card-btn"> Acessar projeto </a>
                        </article>
                    </section>
                    </div>
                </section>
            </div>
            
            <div data-aos="fade-right">
                <section className="d-block d-sm-none" id="body-card">
                    <section id="card-sm" className="mx-4">
                        <aside id="card-sm_img">
                            <img
                                src={srcImg_mobile}
                                alt="Foto do projeto"
                                id="card-sm_img_photo">                            
                            </img>
                        </aside>
                    
                        <article id="card-sm_textfield" className="d-flex flex-column justify-content-center aligm-items-center">
                            <h1 id="card-sm_title">{title}</h1>
                            <p id="card-sm_txt">{description}</p>
                            <Button id="card-sm_btn"> Acessar Projeto </Button>
                        </article>
                    </section>
                </section>
            </div>
        </>
    )
};