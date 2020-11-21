import React from 'react'


export function Show(props){

    return <div className="list">
        {props.id}
        {props.title} {props.content}
        <button>edit</button>
    </div>
}