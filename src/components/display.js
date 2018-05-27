import React from 'react'


export default ({data}) => {
    return (
    <div id={'display'}>
        <h1>{data.number}</h1>
        <h4>{data.activity.join('')}</h4>
    </div>
)
}