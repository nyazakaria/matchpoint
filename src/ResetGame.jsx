import {useDispatch} from 'react-redux'
import {restartGame} from './actions'

export function ResetGame() {

  const dispatch = useDispatch();

  return (
    <div>
      <button className="button reset"
        onClick={ () => dispatch(restartGame()) }
      >
        Remettre à zero

      </button>
    </div>
  )
}