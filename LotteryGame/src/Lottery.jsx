import React , {useState} from 'react'
import Ticket from './Ticket';
import { genTicket , sum } from './helper';

function Lottery({n , winninSum}) {
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winninSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
  return (
    <div>
        <h1>Lottery Game</h1>
        <Ticket ticket={ticket}/>
        <br></br>
        <button onClick={buyTicket}>Buy new Ticket</button>
        <br></br>
        <h3>{isWinning && "Congratulation you won the game!"}</h3>
    </div>
  )
}

export default Lottery