import React from 'react'
import { CodeIcon, TimeIcon } from '../svg/Svg'

const frameworks = props =>
    <React.Fragment>
        <li>
            <span><TimeIcon /></span> <p>{props.timeFramework}</p>
        </li>
        <li>
            <span><CodeIcon /></span> <p>{props.projectsFramework}</p>
        </li>
    </React.Fragment>

export default frameworks;