
import { autoPlay} from './actions'
import {useStore} from 'react-redux'


export function PlayPauseButton() {

  const store = useStore();

  return (
    <button className="button"
    onClick={
        () => { 
          autoPlay(store);
        }
    }   
    >Pause /  Reprendre</button>
  )
 /*  return (<button className="button" 
  onClick={() =>   dispatch(playPause()) } >
    Pause 
  </button> ) */
}