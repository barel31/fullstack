import { useState } from 'react';
import './App.css';
import Finish from './Components/Finish';
import HomePage from './Components/HomePage';
import Playground from './Components/Playground';

var com,player;
function App() {
 
  const [page,setPage] = useState(1);
  const [name,setName] = useState('')
  const [score,setScore] = useState(0)
  

  const initPlayers = ()=>{
    const myDeck = new Deck();
    const comDeck = [];
    const playerDeck = [];
    for(let i = 0 ; i < 26 ; i++){
      comDeck.push(myDeck.getCard());
      playerDeck.push(myDeck.getCard());
    }
    com = new Player('computer',comDeck);
    player = new Player(name,playerDeck);



  }

  const changeName = (name,num)=>{
    setName(name);
    setPage(num);
  }

  const finishTheGame = (s,num)=>{
   
    setScore(s)
    setPage(num);
  }

  const showComponent = ()=>{
    if(page === 1){
      return <HomePage changePage={changeName}/>
    }
    else if(page === 2){
      initPlayers();
      return <Playground player={player} computer={com} finishDetails={finishTheGame}/>
    }
    else if(page === 3){
      if(score > 0){
        player.win++;
        com.lose++;
      }
      else{
        com.win++;
        player.lose++;
      }
      com.games++;
      player.games++;
      return <Finish score={score} player={player}/>
    }
  }
 
  return (
    <div className="App">
      {showComponent()}
    </div>
  );
}

export default App;


class Player{
  name=''
  win=0
  lose=0
  games=0
  deck = null

  constructor(name,deck){
    this.name = name;
    this.deck = deck;
  }
}

class Deck{
  cards=[]

  constructor(){
    this.initDeck()
  }

  initDeck(){
    let cardValue = 1;
    for(let i = 0 ; i < 13 ; i++){
      for(let j = 0 ; j < 4 ; j++){
        this.cards.push(cardValue);
      }
      cardValue++;
    }
  }

  getCard(){
    let rnd = Math.floor(Math.random()*this.cards.length);
    let card = this.cards.splice(rnd,1)
    return card[0];
  }




}
