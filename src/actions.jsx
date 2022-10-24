// Les actions creators

// mettre en pause / reprendre le jeu
//export const playPause = () => ({ type: "playPause" });

export const autoPlay = (store) => { 
  
const isPlaying = store.getState().playing
          if(isPlaying) {
            return;
          }
          store.dispatch(setPlaying(true));
          window.setInterval(() => {
            if(store.getState().playing === false) {
              return; 
            }
            const pointWinner = Math.random() > 0.5 ? "player1" : "player2";
            store.dispatch(pointScored(pointWinner));
            store.dispatch(setPlaying(false));
          }, 2000)


}


export const setPlaying = (playing) => ({ type: "setPlaying", payload: playing });

// redémarrer le jeu
export const restartGame = () => ({ type: "restart" });

// un joueur a marqué un point
// on passe en paramètre le joueur qui a marqué
export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player }
});

export const nbWin = (win) => ({ 
  type: 'nbWin',
  payload: {win: win} 
  });