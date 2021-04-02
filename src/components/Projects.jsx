import Misec from '../assets/imgs/misecLogo.png'
import Avezoo from '../assets/imgs/avezoo.png'
import Ipetis from '../assets/imgs/ipetisLogo.png'

import './Projects.scss'
import React from 'react'
import CardsProjects from './cards/CardsProjects'

export default props =>
    <div className="projects" id="projects">
        <div className="title">
            <h2>Projects</h2>
        </div>
        <div className="cards-projects">
            <CardsProjects 
                cardImg={ Misec } 
                titleProject="Misec" 
                description="O Misec e um site que busca a transformação do setor de Engenharia e Construção" 
                codeProject=""
                siteProject="https://misec.org.br/"
            />
            <CardsProjects 
                cardImg={ Avezoo } 
                titleProject="Avezoo" 
                description="Vendas de rações para aves" 
                codeProject=""
                siteProject="https://avezoo.com.br/"
            />
            <CardsProjects 
                cardImg={ Ipetis } 
                titleProject="Ipetis" 
                description="O Marketplace das Petshops." 
                codeProject=""
                siteProject="https://ipetis.com.br/"
            />
        </div>
    </div>