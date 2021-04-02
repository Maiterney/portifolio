import './Card.scss'
import React from 'react'
import Framework from './framework'

export default props =>
    <div className="card-stacks">
        <div className="card-header">
            <img src={props.img} alt=""/>
        </div>
        <div className="card-content">
            <ul className="description">
                <Framework 
                    timeFramework={ props.time} 
                    projectsFramework={ props.projects }
                />
            </ul>
        </div>
    </div>