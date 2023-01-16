// React
import { useEffect, useState } from 'react';

// Bootstrap
import { Button, Container, ProgressBar, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// Email JS
import emailjs from '@emailjs/browser';


// CSS
import './Contato.css';

export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function enviarEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);

        if(name === '' || email ==='' || message ===''){
            alert("Por favor, preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

           emailjs.send("service_2gdojch", "template_osqolcs", templateParams, "fzluVoeHh9Sz3ZVVw")
           .then((response) => {
               setIsLoading(false);

               console.log("EMAIL ENVIADO", response.status, response.text)
               setName('')
               setEmail('')
               setMessage('')

           }, (erro) => {
               console.log("ERRO: ", erro)
               setIsLoading(false);
           })
       }
      
    return (

        <section className="form-contato" id="contato">
            <Container>
                
                <Form className="form d-flex justify-content-center align-items-center flex-column" onSubmit={enviarEmail}>
                    <h1 className="form-title mb-3">Ready to kickstart your idea? <br /> Drop me a line. ✌️</h1>
                    <input 
                    className="input"
                    type="text"
                    placeholder="Seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />   

                    <input 
                    className="input"
                    type="text"
                    placeholder="Seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />

                    <textarea 
                    className="textarea"
                    placeholder="Mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    />
{/* 
                    <input className="button" type="submit" value="Enviar" />

                    {isLoading && (
                        <Spinner animation="border" size="sm" id="spinner" />
                    )} */}


                    <div id="btn-loading" className="d-flex justify-content-center align-items-center">

                    <Button className="button mx-3" type="submit" id="button">
                      Enviar
                    {isLoading && (
                        <Spinner animation="border" size="sm" id="spinner-loading" className="mx-2" />
                    )}
                    
                    </Button>

                    </div>  
    
                </Form>

            </Container>
        </section>
    )
    };
