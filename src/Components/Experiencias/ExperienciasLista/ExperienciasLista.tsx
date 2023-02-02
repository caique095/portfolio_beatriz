// CSS
import './ExpLista.css';

// JSON
import experiencias from '../experiencias.json';

// React
import { useState, useEffect } from 'react';

// Components
import Experiencias from '../Experiencias';



interface Props {
    exp_srcImg: string,
    exp_title: string,
    exp_description: string,
    exp_srcImg_slide_um: string,
    exp_srcImg_slide_dois: string, 
    exp_srcImg_slide_tres: string,
}

export default function ProjetoLista(props: Props) {
    const [lista, setLista] = useState(experiencias);

    return (
        <div className="exp_lista">
            <aside>
                <h1 className="exp_lista-title"> Experiências<span className="exp_lista-title_span">.</span> </h1> 
            </aside>
            <article className="exp_lista-cards">
                {lista.map(item => (
                    <Experiencias key={item.exp_title} {...item} />
                ))}
            </article>
        </div>
    )
};