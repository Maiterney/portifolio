import logo from '../assets/imgs/logo.png'
import './Header.scss'
import React from 'react'


export default () => 
    <header>
        <div className="header">
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="nav-menu">
                <ul className="menu">
                    <li><a href="#stacks">Stacks</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About me</a></li>
                </ul>
                <div className="contact">
                    <button className="btn btn-first"><a href="tel:+31-989-248-978">Contact</a></button>
                </div>
            </div>
        </div>
    </header>