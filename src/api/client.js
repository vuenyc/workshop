import io from 'socket.io-client';

const socket = io('http://localhost');

const r = () => Symbol();

const ASK_TO_JOIN = r();
const OK_TO_JOIN = r();
const ERR_USER_NAME_TAKEN = r();
const ALL_PLAYERS_JOINED = r();
const START_GAME = r();
const GAME_STARTED = r();
const VOTE_TO_KILL = r();
const VOTE_TO_SAVE = r();
const VOTE_TO_SEE = r();

const PLAYER_KILLED = r();
const PLAYER_SAVED = r();
const SEER_SEES = r();

class Client {

  constructor(store, router) {
    this.store = store;
    this.router = router;
  }

  listen() {
    socket.on(OK_TO_JOIN, () => {
      // go to lobby
    });
    socket.on(ERR_USER_NAME_TAKEN, () => {
      // ask user to re-enter username
    });
    socket.on(ALL_PLAYERS_JOINED, () => {
      // enable start button
    });
    socket.on(GAME_STARTED, (players, role) => {
      // populate players
      // set role
      // go to proper view
      //  werewolf ? vote view (kill) : pendingview 
    });
    socket.on(PLAYER_KILLED, player => {
      // set player state as killed
    });
    socket.on(PLAYER_SAVED, player => {

    });
    socket.on(SEER_SEES, (player, isWolf) => {
      // only happens if seer
      // set player is wolf 
    });
  }

  joinGame(username) {
    socket.emit(ASK_TO_JOIN, username);
  }

  startGame() {
    socket.emit(START_GAME);
  }

  voteToKill(playerName) {
    socket.emit(VOTE_TO_KILL, playerName);
  }

  voteToSave(playerName) {
    socket.emit(VOTE_TO_SAVE, playerName);
  }
  
  voteToSee(playerName) {
    socket.emit(VOTE_TO_SEE, playerName);
  }

  seeIfWolf

  install(Vue) {
    Vue.prototype.$client = this;
  }
  


}
