import React from 'react'
import './Post.css';

export default function Post(props) {
  
    const avg = ()=>{
        let res = 0;
        props.arr.forEach((val)=>{
            res+=val
        })
        res /= props.arr.length;
        return res;

    }
  
    return (
    <div className='mainPost'>
        <h1>{props.title}</h1>
        <div className='middle'>
            <img src={props.src} alt="logo" />
            <p>{props.info}</p>
            <div>
                <div>{props.price}</div>
                <div>{avg()}</div>
            </div>

        </div>
        
        
    </div>
  )
}
