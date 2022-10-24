// mettre en commun les selectors


// selectionner l'avantage du joueur
export const selectPlayerHasAdvantage = (playerId) => { 
  return  (state) => state.advantage === playerId
}


export const selectPlayerWin = (playerId) => {
  return (state) => state.history.filter((item) => item.winner === playerId).length
}



export const selectPlayer = (playerId) => {
  return (state) => state[playerId]
}