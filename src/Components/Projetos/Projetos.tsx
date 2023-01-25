// React 
import { useEffect } from 'react';

// CSS
import './Projetos.css';
import '../../Components/baseCss.css';

// JSON
import projetos from './projetos.json';

// Bootstrap
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

//AOS
import Aos from "aos";
import "aos/dist/aos.css";

// Modal
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



type Props = typeof projetos[0];

// ========== CAROUSSEL ==========

function ModalCaroussel(props: Props) {
  const { title, srcImg, srcImg_mobile, description, subtitle, url, modal_title, modal_description, modal_img_um, modal_img_dois, modal_img_tres } = props;
  
    return (
    <Carousel slide={false} variant="dark">
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center">
            <img
            className="d-block w-50"
            src={modal_img_um}
            alt="First slide"
            />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center">
            <img
                className="d-block w-50"
                src={modal_img_dois}
                alt="Second slide"
            />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center">
            <img
            className="d-block w-50"
            src={modal_img_tres}
            alt="Third slide"
            />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

// ========= MODAL =========

function Example(props: Props) {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const { title, srcImg, srcImg_mobile, description, subtitle, url, modal_title, modal_description, modal_img_um, modal_img_dois, modal_img_tres } = props;

  return (
    <>
      <Button onClick={() => setLgShow(true)} id="card-btn">Saiba mais</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <section className="modal-container">
                <aside className="modal-slide">
                    <ModalCaroussel 
                        title={title} 
                        srcImg={srcImg} 
                        srcImg_mobile={srcImg_mobile}
                        description={description} 
                        subtitle={subtitle} 
                        url={url} 
                        modal_title={modal_title} 
                        modal_description={modal_description} 
                        modal_img_um={modal_img_um}
                        modal_img_dois={modal_img_dois}
                        modal_img_tres={modal_img_tres}
                    />
                </aside>
                <article className="modal-fieldtext">
                    <h1 className="modal-title">{modal_title}</h1>
                    {
                        modal_description.split("<br>").map(desc =>
                            (<p className="modal-text">{desc}</p>)
                        )
                    }

                </article>
            </section>
        </Modal.Body>
        <div className="modal_footer-btn">
            <Modal.Footer>
                <a href={url} id="modal-btn"> Acessar projeto completo </a>
            </Modal.Footer>
        </div>
      </Modal> 
    </>
  );
}

// ========== PROJETOS =========

export default function Projetos(props: Props) {
        useEffect(() => {
        Aos.init({ duration: 1100 });
    }, []);
    
    const { title, srcImg, srcImg_mobile, description, subtitle, url, modal_title, modal_description, modal_img_um, modal_img_dois, modal_img_tres} = props;

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
                            <Example 
                                title={title} 
                                srcImg={srcImg} 
                                srcImg_mobile={srcImg_mobile}
                                description={description} 
                                subtitle={subtitle} 
                                url={url} 
                                modal_title={modal_title} 
                                modal_description={modal_description} 
                                modal_img_um={modal_img_um}
                                modal_img_dois={modal_img_dois}
                                modal_img_tres={modal_img_tres}
                            />
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
                            <Example 
                                title={title} 
                                srcImg={srcImg} 
                                srcImg_mobile={srcImg_mobile}
                                description={description} 
                                subtitle={subtitle} 
                                url={url} 
                                modal_title={modal_title} 
                                modal_description={modal_description} 
                                modal_img_um={modal_img_um}
                                modal_img_dois={modal_img_dois}
                                modal_img_tres={modal_img_tres}
                            />
                        </article>
                    </section>
                </section>
            </div>
        </>
    )
};