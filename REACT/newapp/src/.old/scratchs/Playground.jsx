import React,{useState} from 'react'

export default function Playground(props) {
  
    const [index,setIndex] = useState(0);
    const [score,setScore] = useState(0);


    const nextRound=()=>{

        if(props.computer.deck[index]<props.player.deck[index]){
            setScore(score+1);
        }
        else if(props.computer.deck[index]>props.player.deck[index]){
            setScore(score-1);
        }
        if(index < 25){
            setIndex(index+1)
        }
        else{
            props.finishDetails(score,3)
        }
    }

    return (
    <div>
        <div>{props.computer.name}</div>
        <div>{props.computer.deck[index]}</div>
        <div>{props.player.deck[index]}</div>
        <div>{props.player.name}</div>
        <button onClick={()=>{nextRound()}}>next</button>
    </div>
  )
}
