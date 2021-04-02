import './About.scss'
import React from 'react'
import { CSSIcon, JSIcon, HTMLIcon, ReactIcon } from './svg/Svg'

export default props=>
    <div className="about-us" id="about">
        <div className="title">
            <h2>About us</h2>
        </div>
        <div className="about-description col-md-7">
            <h2>Maiterney Vilela.</h2>
           <div className="box-content">
            <div className="descriptions">
                    <p>
                        Olá, meu nome é Maiterney Vilela. Sou
                        apaixonado por desenvolvimento
                        frontend e trabalho atuo na aréa há 4 anos.
                    </p>
                    <ul className="list-frameworks">
                        <li>HTML5</li>
                        <li>SCSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>PHP</li>
                    </ul>
            </div>
            <div className="icons">
                    <ul className="list-icons">
                        <li><CSSIcon /></li>
                        <li><JSIcon /></li>
                        <li><HTMLIcon /></li>
                        <li><ReactIcon /></li>
                    </ul>
            </div>
           </div>
        </div>
    </div>