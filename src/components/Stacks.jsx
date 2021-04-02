import SCSS from '../assets/imgs/Sass.svg'
import HTML from '../assets/imgs/html.png'
import JS from '../assets/imgs/JS.png'

import './Stacks.scss'
import React from 'react'
import Card from './cards/Card'

export default props => 
    <div className="stacks" id="stacks">
        <div className="title">
            <h2>Stacks</h2>
        </div>
        <div className="cards">
            <Card img={ HTML } time="4 year" projects="10 projects"/>
            <Card img={ JS } time="3 year" projects="8 projects"/>
            <Card img={ SCSS } time="2 year and 6 months" projects="6 projects"/>
        </div>
    </div>