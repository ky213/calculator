import React from 'react'


export default (props) => {
    return (
    <div id={'keypad'}>
        <div>
            <button>AC</button>
            <button>CE</button>
            <button>/</button>
            <button>x</button>
        </div>
        <div >
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
        </div>
        <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
        </div>
        <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button style={{height:'120px', float:'right'}}>=</button>
        </div>
        <div>
            <button style={{width:'120px'}}>0</button>
            <button>.</button>
        </div>
    </div>
)
}