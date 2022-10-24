import {useDispatch} from 'react-redux'
import {pointScored} from './actions'
export function PointScoredButton({player, children}) {


  const dispatch = useDispatch();


  return (
    <div>
      <button className="button player" 
      onClick={ () => (dispatch(pointScored(player))) }
      > {children}</button>
    </div>
  )
}