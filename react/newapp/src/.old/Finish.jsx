import React from 'react'

export default function Finish(props) {
  
    const showDetails = ()=>{
        return (
            <div>
                <span>{props.player.win}</span> - 
                <span>{props.player.lose}</span>
            </div>
        )
    }

    const showWinOrLose = ()=>{
        if(props.score > 0){
            return <div>WIN</div>
        }
        else{
            return <div>LOSE</div>
        }
    }
    return (
    <div>
        {showWinOrLose()}
        {showDetails()}
        <button>again?</button>
    </div>
  )
}
