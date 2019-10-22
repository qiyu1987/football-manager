import React from 'react'
export default function TeamDetails(props) {
    if (props.team) {
        return(<div>
            <h1>{props.team.id}</h1>
            <p>{props.team.name}</p>
            <button onClick={props.onClick}>DELETE</button>
        </div>)
    }
    return 'Loading...'
}