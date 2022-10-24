import {History} from './history.jsx'
import {Display} from './Display'
import {PlayPauseButton} from './pauseGame.jsx'
import {ResetGame} from './ResetGame.jsx'
import {PointScoredButton} from './PointScored.jsx'

function App() {
  return (
    <div id="root">
     
      <Display />
      <div className="buttons-row "> 
      <PointScoredButton  player='player1' >Point Joueur 1</PointScoredButton>
      <PointScoredButton  player='player2' >Point Joueur 2</PointScoredButton>
      </div>
      <div className="buttons-row">
      <PlayPauseButton/>
      <ResetGame/>
      </div>
    </div>
  )
}

export default App;
