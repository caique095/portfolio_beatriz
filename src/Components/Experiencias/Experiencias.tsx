// CSS
import '../Experiencias/Experiencias.css';

// React
import { useState } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

// JSON
import experiencias from './experiencias.json';

// Components
import ExperienciasLista from './ExperienciasLista/ExperienciasLista';

type Props = typeof experiencias[0];


// CAROUSEL
function ExpCarousel(props: Props) {
  const { exp_title, exp_srcImg, exp_description, exp_srcImg_slide_um, exp_srcImg_slide_dois, exp_srcImg_slide_tres } = props;
  return(
<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exp_srcImg_slide_um}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exp_srcImg_slide_dois}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exp_srcImg_slide_tres}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}


// MODAL 
function ExpModal(props: Props) {
  const { exp_title, exp_srcImg, exp_description, exp_subtitle, exp_srcImg_slide_um, exp_srcImg_slide_dois, exp_srcImg_slide_tres } = props;

  const [show, setShow] = useState(false);

  return(
    <>
<Button id="exp_modal-btn" onClick={() => setShow(true)}>
  Saiba mais
</Button>

<Modal
  show={show}
  onHide={() => setShow(false)}
  dialogClassName="modal-90w"
  aria-labelledby="example-custom-modal-styling-title"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      <article className="exp_modal_title">
        <h3>{exp_title}</h3>
        <h3>({exp_subtitle}) </h3>
      </article>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <aside>
      <ExpCarousel 
        exp_description={exp_description} 
        exp_srcImg={exp_srcImg} 
        exp_title={exp_title} 
        exp_subtitle={exp_subtitle}
        exp_srcImg_slide_um={exp_srcImg_slide_um}
        exp_srcImg_slide_dois={exp_srcImg_slide_dois}
        exp_srcImg_slide_tres={exp_srcImg_slide_tres}
      />
    </aside>

    <article className="modal_text-description">
      {
        exp_description.split("<br>").map(desc =>
          (<p className="modal-text">{desc}</p>)
        )
      }
    </article>
  </Modal.Body>
</Modal>
</>
)
}


export default function Experiencias(props: Props) {
  const { exp_title, exp_srcImg, exp_description, exp_subtitle, exp_srcImg_slide_um, exp_srcImg_slide_dois, exp_srcImg_slide_tres } = props;
  
  return (
    <section className="experiencias_card" id="Experiencias"> 
      <Card style={{ width: '18rem', border: 'none' }}>
        <Card.Img variant="top" src={exp_srcImg} style={{ borderBottom: '1px solid #e1e1e1' }} />
        <Card.Body>
          <Card.Title>{exp_title}</Card.Title>
          <Card.Text>
            {exp_subtitle}
          </Card.Text>
            <ExpModal 
              exp_srcImg={exp_srcImg} 
              exp_title={exp_title} 
              exp_description={exp_description} 
              exp_subtitle={exp_subtitle} 
              exp_srcImg_slide_um={exp_srcImg_slide_um}
              exp_srcImg_slide_dois={exp_srcImg_slide_dois}
              exp_srcImg_slide_tres={exp_srcImg_slide_tres}
              />
        </Card.Body>
      </Card>
    </section>
  );
}
