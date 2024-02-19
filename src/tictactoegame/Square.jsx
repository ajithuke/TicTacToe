import react from 'react'

function Square(props){
    return (
        <div onClick={props.onclick} className="board-col">
            <h1>{props.value}</h1>
        </div>
    )
}

export default Square