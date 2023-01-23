// React
import React from 'react';

//CSS
import './Footer.css';

//React Scroll
import * as ReactScroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Bootstrap
import Nav from 'react-bootstrap/Nav';

// Logo
import logo from '../../logo.svg';


const RedirectPage = () => {
    React.useEffect(() => {
        window.open('https://www.google.com', '_blank');
    }, [])
  }

export default function Footer() {
    return(
        <>
            <section id="footer" className="d-flex justify-content-around align-items-center">
                <article>
                    <Nav.Link 
                    as={Link} to="Home" spy={true} smooth={true} offset={-90} duration={800}>
                        <img 
                            src={logo}
                            alt="foto sobre mim"
                            height="40"
                            className=""
                            id="footer-img-photo"
                        />
                    </Nav.Link>
                    </article>
                    
                    <aside className="d-flex justify-content-center align-items-center"> 
                    <ul className="d-flex" id="footer-lista">
                        <li>
                            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACQbzeoBFI6KUlPb22NOEUUeRnc2SrsZaT8&keywords=beatriz%20castello&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ed0ff779-843e-4353-8260-f5a115bcec59&sid=iPr"> 
                                <img 
                                    src="/IMG/linkedin.svg"
                                    alt="Icone do linkedin"
                                    height="35"
                                    className=""
                                    id="footer-linkedin-photo"
                                />
                            </a>
                        </li>

                        <li>
                            <img 
                                src="/IMG/behance.svg"
                                alt="Icone do behance"
                                height="35"
                                className=""
                                id="footer-behance-photo"
                            />
                        </li>

                        <li>
                           <a href="https://www.instagram.com/beatrizcastello/"> 
                                <img 
                                    src="/IMG/instagram.svg"
                                    alt="Icone do instagram"
                                    height="35"
                                    className=""
                                    id="footer-instagram-photo"
                                />
                            </a>
                        </li>
                    </ul>
                </aside>
            </section>
        </>
    )
};