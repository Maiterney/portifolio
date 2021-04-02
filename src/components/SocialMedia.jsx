import './SocialMedia.scss'
import React from 'react'
import CadastroSocialMidia from './CadastroSocialMidia'
import Linkedin from '../assets/imgs/linkedin.svg'
import Instagram from '../assets/imgs/instagram.svg'

export default props => 
    <div className="social-box">
        <ul className="list-medias">
            <CadastroSocialMidia mediaLink="http://www.linkedin.com/in/maiterney-vilela-15607214a" imgMedia={ Linkedin } />
            <CadastroSocialMidia mediaLink="https://www.instagram.com/maiterneyvilela/" imgMedia={ Instagram } />
        </ul>
    </div>