import './App.css';
import Post from './Components/Post.jsx'



export default function App() {
  
  const data = [
    {imgSrc:'https://via.placeholder.com/600/771796',title:'a',description:'aaa',price:60,numbers:[1,2,3]},
    {imgSrc:'https://via.placeholder.com/600/24f355',title:'b',description:'bbb',price:80,numbers:[4,-4]},
    {imgSrc:'https://via.placeholder.com/600/d32776',title:'c',description:'ccc',price:200,numbers:[50,100,200,350]},
  ]
 
  return (
    <div className="App">
      {data.map((element,index)=>{
        return <Post key={index} arr={element.numbers} title={element.title} info={element.description} price={element.price} src={element.imgSrc}/>
      })}

    </div>
  );
}


