import react, { useCallback, useState } from 'react'
import Square from './Square'

function Board(){

    const [state,setState] = useState(Array(9).fill(null))
    const [isxturn,setxturn] = useState(true)
    const [turn,setturn] = useState("X")

    function checkwinner(){
        const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

        for(let i of arr)
        {
            const [a,b,c]=i
            if(state[a]!=null && state[a]==state[b] && state[a]==state[c]){
                return state[a]
            }
        }
        return false
    }

    let iswinner=checkwinner()

    function handleclick(index){
        if(state[index]!=null)
            return
        const copy = [...state]
        if(isxturn){
            setturn("0")
        }
        else{
            setturn("x")
        }
        copy[index] = isxturn?"X":"0"
        setState(copy)
        setxturn(!isxturn)
    }

    const reset =()=>{
        setState(Array(9).fill(null))
    }

    return (
        <div className='board-container'>
            {iswinner ? (<><h1>{iswinner} is Winner</h1><h2>Thank You</h2><button onClick={reset}>Play Again</button></>) :
                <>
                <h3>Now {turn} turn</h3>
                <div className="board-row">
                    <Square onclick={()=>{handleclick(0)}} value={state[0]}/>
                    <Square onclick={()=>{handleclick(1)}} value={state[1]}/>
                    <Square onclick={()=>{handleclick(2)}} value={state[2]}/>
                </div>
                <div className="board-row">
                    <Square onclick={()=>{handleclick(3)}} value={state[3]}/>
                    <Square onclick={()=>{handleclick(4)}} value={state[4]}/>
                    <Square onclick={()=>{handleclick(5)}} value={state[5]}/>
                </div>
                <div className="board-row">
                    <Square onclick={()=>{handleclick(6)}} value={state[6]}/>
                    <Square onclick={()=>{handleclick(7)}} value={state[7]}/>
                    <Square onclick={()=>{handleclick(8)}} value={state[8]}/>
                </div>
                </>
            }
        </div>
    )
}

export default Board