import React,{useState} from 'react'

export default function HomePage(props) {
  
    const [fullName,setFullName] = useState('')

    const valid = ()=>{
        if(fullName.length == 0){
            alert('please enter your name');
        }
        else{
            props.changePage(fullName,2)
        }
    }

    return (
    <div>
        <h1>Ready for war</h1>
        <input onChange={(element)=>{setFullName(element.target.value)}} type="text" placeholder='enter your name' /><br />
        <button onClick={()=>{valid()}}>START</button>
    </div>
  )
}
