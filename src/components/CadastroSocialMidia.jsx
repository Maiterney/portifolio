import React from 'react'

export default function (props) {
    console.log(props)
    return (
        <li><a href={ props.mediaLink } target="_blank"><img src={ props.imgMedia } alt=""/></a></li>
    )
}
    