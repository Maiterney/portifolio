import imgTop from '../assets/imgs/image-top.png'
import './Introduction.scss'
import React from 'react'

const introduction = props =>
    <div className="introduction">
        <div className="col-md-4">
            <h4>Desenvolvedor Frontend</h4>

            <h1>Maiterney Vilela</h1>
            <p>
                Bem vindo(a) ao meu mundo. Aqui é onde mostro
                todas as minhas experiências e minha paixão, que é
                desenvolver. Bora trocar conhecimentos!
            </p>

            <button className="btn btn-first"><a href="http://www.linkedin.com/in/maiterney-vilela-15607214a" target="blanck">My CV</a></button>
        </div>
        <div className="col-md-6 bg-introduction">
            <div className="bg">
                <img src={ imgTop } alt=""/>
            </div>
        </div>
    </div>

export default introduction;