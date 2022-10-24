import {createStore} from 'redux'
// import { configureStore } from '@reduxjs/toolkit' mise à jour de redux
import produce from "immer"


// Le state
const initialState = {
  // Le score de chacun des joueurs
  player1: 0,
  player2: 0,
  // Si il y a 40-40 quel joueur a l'avantage
  // On utilise null si pas d'avantage
  advantage: null,
  // Qui a gagné ?
  // Si la partie est en cours on utilise null
  winner: null,
  // La partie est-elle en cours ?
  playing: false,
  history: [
    // { player1: 15, player2: 40, winner: "player2" }
  ],
};


// le reducer contient la logique
// c'est une fonction qui reçoit le state et une action
function reducer(state, action) {
  // si l'action est de type "restart"
  if (action.type === "restart") {
    // on retourne le state initial
    return produce(state, (draft) => {
      // si le match est terminé, on ajoute un élément à l'historique
      if (draft.winner) {
        draft.history.push({
          player1: draft.player1,
          player2: draft.player2,
          winner: draft.winner,
        });
      }
      // puis on reset les autres propriétés
      draft.player1 = 0;
      draft.player2 = 0;
      draft.advantage = null;
      draft.winner = null;
      draft.playing = true;
    });
  }
  // si l'action est de type "playPause"
  if (action.type === "setPlaying") {
    // on retourne un nouvel objet
 if (state.winner) {
      return state;
    }
  return produce(state, (nextState) => { 
    nextState.playing = action.payload
    })



  /*  return {
      // qui est une copie du state
      ...state,
      // mais on replace la propriété playing
      playing: !state.playing
    }; */
  }

  // lorsqu'un joueur marque un point
  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";
    if (state.winner) {
      // le jeu est fini, on ne peut pas marquer
      // on retourne le state
      return state;
    }
    if (state.playing === false) {
      // le jeu est en pause, on ne peut pas marquer
      // on retourne le state
      return state;
    }
     return produce(state, (draft) => {
      const currentPlayerScore = draft[player];
      if (currentPlayerScore <= 15) {
        // 0 ou 15 => on ajoute 15
        draft[player] += 15;
        return;
      }
      if (currentPlayerScore === 30) {
        draft[player] = 40;
        return;
      }
      if (currentPlayerScore === 40) {
        if (draft[otherPlayer] !== 40) {
          // Le joueur à gagné
          draft.winner = player;
          return;
        }
        if (draft.advantage === player) {
          // Le joueur à gagné
          draft.winner = player;
          return;
        }
        if (draft.advantage === null) {
          // Le joueur a maintenant l'avantage
          draft.advantage = player;
          return;
        }
        // L'autre joueur a perdu l'avantage
        draft.advantage = null;
        return;
      }
    });
  }
    /*
    const currentPlayerScore = state[player];
    if (currentPlayerScore <= 15) {
      // le joueur qui a marqué est à 0 ou 15 => on ajoute 15
      return produce(state, (nextState) => {
        nextState[player] =  currentPlayerScore + 15
      })
     // return { ...state, [player]: currentPlayerScore + 15 };
    }
    if (currentPlayerScore === 30) {
      // le joueur qui a marqué est à 30 => on passe à 40
      return produce(state, (nextState) => {
        nextState[player] = 40
      })
     // return { ...state, [player]: 40 };
    }
    // si le joueur est déjà à 40
    if (currentPlayerScore === 40) {
      // si l'autre joueur n'est pas à 40
      if (state[otherPlayer] !== 40) {
        // le joueur a gagné !
        return produce(state, (nextState) => {
          nextState.winner = player
        })
      //  return { ...state, winner: player };
      }
      // si le joueur a l'avantage
      if (state.advantage === player) {
        // le joueur a gagné !
        return produce(state, (nextState) => {
          nextState.winner = player;
        })
        // return { ...state, winner: player };
      }
      // si personne n'as l'avantage
      if (state.advantage === null) {
        // le joueur a maintenant l'avantage !
        return produce(state, (nextState) => {
          nextState.advantage = player
        })
       // return { ...state, advantage: player };
      }
      // sinon c'est l'autre joueur qui a l'avantage
      // l'autre joueur perd l'avantage
      return produce(state, (nextState) => {
        nextState.advantage = null
      })
    //  return { ...state, advantage: null };
    }
  } */
  return state;
}

// on crée le store
export const store = createStore(reducer, initialState);

/* store.subscribe(() => {
    console.log("Nouveau state:");
    console.log(store.getState());
}); */

// créer un historique sur le coté du jeu 

