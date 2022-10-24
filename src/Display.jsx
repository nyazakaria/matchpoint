import { useSelector } from "react-redux";
//import {History} from './history'
import {PlayerScore} from './playerScore.jsx'
import {PlayerPoints} from './playerPoints.jsx'
export function Display() {
const gameIsPlaying = useSelector((state) => state.playing)
  const scorePlayer1 = useSelector((state) => state.player1)
  const scorePlayer2 = useSelector((state) => state.player2)
  const winner = useSelector((state) => state.winner)
  const advantage = useSelector((state) => state.advantage) 


  const isWinner = <p>le winner est {winner}</p>;
  const displaying = <p className="player-score">Le score est : {scorePlayer1} - {scorePlayer2}</p>;
  const inPause = <p className="player-games">En pause</p>
  const advantagePlayer = <p>avantage au {advantage}</p>
  return (
    <div>
     {/*   <History player1={scorePlayer1}  
      player2={scorePlayer2}
      winner={winner}
      advantage={advantage} />  */}
      <PlayerPoints playerWin='player1'  playerName='Joueur 1' />
      <PlayerPoints playerWin='player2'  playerName='Joueur 2'/>
     
      <PlayerScore playerId="player1"  playerName='Joueur 1'  />
      <PlayerScore playerId="player2"  playerName='Joueur 2' />
  <div className="display">
    {winner ? isWinner : advantage ? advantagePlayer  : gameIsPlaying ? displaying: inPause }
  </div>
  </div>)
}

