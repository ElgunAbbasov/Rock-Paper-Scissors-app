import './App.css';
import { useState } from 'react';
import './components/rock-component/rock-styles.css'
import './components/paper-component/paper-styles.css'
import './components/scissors-component/scissors-styles.css'
import { FaHandScissors } from "react-icons/fa";
import {FaHandPaper} from "react-icons/fa"
import {FaHandRock} from "react-icons/fa"

const App=()=> {
  const arr=["rock","paper","scissors"]

  const [ticket,setTicket]=useState(5);
  const [score,setScore]=useState(0);

  const ticketSaver=()=>{
    if(ticket===0){
      return alert("hakkiniz doldu");
    }
    setTicket((ticket-1));
  }

  const select=()=>{
    const aISelect=arr[Math.floor(Math.random()*arr.length)];
    return aISelect;
  }
  const rock=()=>{
    const display=document.querySelector(".meRock");
    display.style="display:inline-block !important"
    setTimeout(()=>{
      display.style="display:none !important";

    },4000)
  }
  const obstruct=()=>{
    const btn=document.querySelectorAll("button");
    btn.disabled=true;
  }
  const onRockClick=()=>{
    ticketSaver();
    rock();
    vs()
    obstruct()
    const selectedEvent=select()
      if(selectedEvent==="rock"){
        console.log("b")
        setScore((score+0))
        return "b";
      }
      if(selectedEvent==="paper"){
        console.log("m")
        setScore((score-1))
        return "m";
      }
      if(selectedEvent==="scissors"){
        console.log("q")
        setScore((score+1))
        return "q";
      }
  };
  const paper=()=>{
    const display=document.querySelector(".mePaper");
    display.style="display:inline-block !important"
    setTimeout(()=>{
      display.style="display:none !important";
    },4000)
  }
  const onPaperClick=()=>{
      ticketSaver();
      paper();
      vs();
      obstruct()
      const selectedEvent=select()
      if(selectedEvent==="rock"){
        console.log("q")
        setScore((score+1))
        return "q";
      }
      if(selectedEvent==="paper"){
        console.log("b")
        setScore((score+0))
        return "b";
      }
      if(selectedEvent==="scissors"){
        console.log("m")
        setScore((score-1))
        return "m";
      };
  };
  const scissors=()=>{
    const display=document.querySelector(".meScissors");
    display.style="display:inline-block !important"
    setTimeout(()=>{
      display.style="display:none !important";
    },4000)
  }
  const onScissorsClick=()=>{
    ticketSaver();
    scissors();
    vs();
    obstruct();
    const selectedEvent=select()
      if(selectedEvent==="rock"){
        console.log("m")
        setScore((score-1))
        return "m";
      }
      if(selectedEvent==="paper"){
        console.log("q")
        setScore((score+1))
        return "q";
      }
      if(selectedEvent==="scissors"){
        console.log("b")
        setScore((score+0))
        return "b";
      };
  }
  const vs=()=>{
    const vs=document.querySelector(".vs")
    vs.style="display:inline-block !important";
    setTimeout(()=>{
      vs.style="display:none !important"; 
    },4000)
  }

  return (
    <div className="App">
      <div className='body'>
        <div className='bars'>
        <p className='ticketBar'>Ticket sayi: {ticket}</p>
        <p className='scoreBar'>Score sayi:{score}</p>
        </div>
        <div className='game-buttons'>
          <button className='rock-btn'onClick={onRockClick}>
           <FaHandRock/> Rock
          </button>
          <button className='paper-btn' onClick={onPaperClick}>
           <FaHandPaper/> Paper
          </button>
          <button className='scissors-btn' onClick={onScissorsClick}>
          <FaHandScissors/>  Scissors
          </button>
        </div>
        <div className='fight-section'>
        <div className='mePaper' style={{display:'none'}}><FaHandPaper className='paperLogo'/></div>
        <diV className='meRock' style={{display:'none'}}><FaHandRock className='rockLogo'/></diV>
        <div className='meScissors' style={{display:'none'}}><FaHandScissors className='scissorsLogo'/></div>
        <div className='vs' style={{display:"none"}}>VS</div>
        <div className='enemy'>{select}</div>
        </div>
      </div>
    </div>
  );
}

export default App;


