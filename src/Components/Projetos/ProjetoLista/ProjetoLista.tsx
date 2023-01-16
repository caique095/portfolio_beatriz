// JSON
import projetos from '../projetos.json';

// React
import { useState, useEffect } from 'react';

// Components
import Projetos from '../Projetos';

interface Props {
    srcImg: string,
    title: string,
    description: string,
    url: string
}

export default function ProjetoLista(props: Props) {
    const [lista, setLista] = useState(projetos);

    return (
            <div className="">
                {lista.map(item => (
                    <Projetos key={item.title} {...item} />
                ))}
            </div>
    )
};