import './CardsProjects.scss'
import React from 'react'
import { GitHub, SitePage } from '../svg/Svg'



export default props => 
    <div className="card">
        <div className="card-header">
            <span className="yellow"></span>
            <span className="red"></span>
            <span className="green"></span>
        </div>
        <div className="card-img">
            <img src={ props.cardImg } alt=""/>
        </div>
        <div className="card-content">
            <h4>{ props.titleProject }</h4>
            <p>{ props.description }</p>
        </div>
            <div className="card-redirect">
                <a href={ props.codeProject } target="blank" className={props.codeProject ? '' : 'd-none' }>
                    { props.codeProject ? <GitHub /> : '' }
                </a>
                <a id="siteproject" target="blank" href={ props.siteProject } className={props.siteProject ? '' : 'd-none' }>
                    {props.siteProject ? <SitePage /> : '' }
                </a>
            </div>
    </div>