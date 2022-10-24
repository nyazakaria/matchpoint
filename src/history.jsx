//import {useSelector} from 'redux'
import {store} from './store.js'

export function History({player1, player2, winner, advantage}) {
 let history = []
 store.subscribe(() => { return history.push(store.getState())})


  // faire une boucle pour afficher tout le store 
  console.log(history, 'tab')
  return <div>
    <ul>
     { history.map( (state) => {
        <li>joueur 1:{state.player1} - joueur 2 : {state.player2}
       - Avantage : {state.winner} - winner : {state.advantage}</li>
      })
    }
    </ul>
  </div>
}
