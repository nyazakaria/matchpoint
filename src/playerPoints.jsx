import { useSelector } from "react-redux"
import {selectPlayerWin} from './selectors.js'



export function PlayerPoints({playerWin, playerName}) {

const playerPoints = useSelector(selectPlayerWin(playerWin));

  return (
    <div className="player-games">
      <p>{playerName}</p>
       <p>
        {playerPoints === 0
          ? "Aucun jeu gagné"
          : playerPoints === 1
          ? "1 jeu gagné"
          : `${playerPoints} jeux gagnés`}`
          {
             () => {} 
          }
      </p>
    </div>
  )
}