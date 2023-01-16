// React
import { useRef, useEffect, ReactNode } from "react";

// CSS
import "./AboutMe.css"

// Bootstrap
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

// AOS
import Aos from "aos";
import "aos/dist/aos.css";


export default function AboutMe(){
    useEffect(() => {
        Aos.init({ duration: 1100 });
    }, []);

 return(
    <section className="d-flex justify-content-center align-items-center" id="about">
        <section id="about-me" className="d-flex justify-content-center align-items-center">
            <aside id="about-me_img" className="d-none d-sm-block"
>
                <img 
                    src="/IMG/about_me.png"
                    alt="foto sobre mim"
                    className=""
                    id="about-me_img-photo"
                />
            </aside>

            <article id="about-me_div" className="d-flex flex-column justify-content-start">
                <div className="d-flex flex-column" id="about-me_about">
                    <div id="about-me_textfield">
            
                        <h1 data-aos="fade-down" data-aos-anchor-placement="top-botton" id="about-me_title" className="tracking-in-expand-fwd">Who am i<span id="about-me_title-span" className="bounce">.</span></h1>
                        <p id="about-me_txt">Empreendedora desde sempre, idealizei e executei a operação de três empresas.
                            Apaixonada por aprender com background em produção cultural e capacidade de organizar e liderar equipes multifuncionais. Experiência em planejamento e desenvolvimento de empresas desde o início. <br/><br/>

                            Sempre tive um lado muito criativo e por isso decidi mergulhar na área de UX - permitindo que todas as minhas habilidades se fundissem. <br/><br/>

                            Sou também a mãe de um garotinho lindo de 2 anos, amo ir para a praia, bichinhos e pintar as minhas unhas com a maior quantidade de cores possíveis! 🌈</p>
                    </div>
                    <div className="mt-4" id="social-media">
                        <ul className="d-flex flex-row" id="social-media_icons">
                            <li> 
                                <a href="https://www.instagram.com/beatrizcastello/"  id="logo_instagram">
                                    <img
                                        src="/IMG/instagram.svg"
                                        alt="Logo do Instagram"
                                        height="40"
                                        id="logo_instagram-img">
                                    </img>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACQbzeoBFI6KUlPb22NOEUUeRnc2SrsZaT8&keywords=beatriz%20castello&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ed0ff779-843e-4353-8260-f5a115bcec59&sid=iPr"  id="logo_linkedin">
                                    <img
                                        src="/IMG/linkedin.svg"
                                        alt="Logo do LinkedIn"
                                        height="40"
                                        className="bounce-top"
                                        id="logo_linkedin-img">
                                    </img>
                                </a>
                            </li>

                            <li>
                                <Alert.Link id="logo_behance">
                                    <img
                                        src="/IMG/behance.svg"
                                        alt="Logo do Behance"
                                        height="40"
                                        className="bounce-top"
                                        id="logo_behance-img">
                                    </img>
                                </Alert.Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            <aside id="about-me_img-sm" className="d-md-none"
>
                <img 
                    src="/IMG/about_me.png"
                    alt="foto sobre mim"
                    className=""
                    id="about-me_img-photo-sm"
                />
            </aside>

        </section>        
    </section>
 )
};