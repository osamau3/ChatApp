import React from 'react'

import { AvatarSC } from "../styled";

export default function Avatar(props) {
    return (
        <AvatarSC direction={props.direction}>
            <img src={props.imageURL}/>
            {props.userName && (<span>{props.userName}</span>)}
        </AvatarSC>
    )
}
