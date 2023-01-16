import { useEffect } from 'react';

// Boostrap 
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';

// Framer motion
import { motion, useAnimation, Variants, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// CSS
import './Inicio.css'
import '../../Components/baseCss.css'


const boxVariant = {
    visible: { opacity:1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
};


export default function Inicio() {
    const { scrollYProgress } = useScroll();
    
    return(
        <>
            <section className="" id="Home"
                style={{ 
                backgroundImage: "url(/IMG/flor_um.svg)" ,
                backgroundRepeat:"no-repeat",
                backgroundSize: "13rem",  
                backgroundPosition: "-2.2rem -1rem"
                }}>
                <div style={{ 
                    backgroundImage: "url(/IMG/flor_dois.svg)" ,
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "12rem",
                    backgroundPosition: "100% 100%"
                }}>
                
                
                    <div className="d-flex align-items-center justify-content-center" id="inicio_md_div">
                        <article id="inicio_md" className="d-flex flex-column justify-content-start mt-4">
                            <span id="inicio_md_span">Hey there! 👋🏻</span> 
                                <motion.div 
                                    className="box"
                                    variants={boxVariant}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        default: {
                                        duration: 0.3,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    },
                                        scale: {
                                            type: "spring",
                                            damping: 5,
                                            stiffness: 100,
                                            restDelta: 0.001
                                        }
                                    }}> 
                                    <h1 id="inicio_md_title">I'm <span id="inicio_md_name">Beatriz Castello</span></h1>
                                </motion.div>
                                
                                <motion.div
                                    className="box"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01]
                                    }}>
                                <p id="inicio_md_txt">I'm a <span className="fw-semibold">UX/UI designer</span> that uses my background in business to create <br /> meaningful digital experiences.</p>
                                </motion.div>

                                

                                <div id="inicio_md_btn">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.2,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }}
                                        >
                                        <Alert.Link id="inicio_md_btn__contact">Contact</Alert.Link> 
                                        <Alert.Link id="inicio_md_btn__project">Projects</Alert.Link>
                                    </motion.div>
                                </div>
                            </article>  
                        </div>
                </div>
            </section>
        </>

    )
};