import {useSelector} from 'react-redux'
import {selectPlayerHasAdvantage} from './selectors.js'


export function PlayerScore({playerId, playerName}) {
  
  const score = useSelector((state) => state[playerId])
  const hasAvantage = useSelector(selectPlayerHasAdvantage(playerId))
 // déplacer la logique dans le selector

  return (
    <div className="player-score">
        <p>{playerName}</p>
        {hasAvantage? <p>Avantage</p> : null }
        <p>{score}</p>
    </div>
  )
}