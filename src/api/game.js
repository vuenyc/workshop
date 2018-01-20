export default class Game {

  constructor() {
    this.players = [];
  }

  startGame() {
    console.log('starting the game?');
  }

  // Returns true on success, false on failure
  addPlayer(player) {
    if (!this.players.find(p => p.username === player.username)) {
      this.players.push(player);
      return true;
    }
    return false;
  }

  removePlayer(player) {
    this.players = this.players.filter(p => p.username !== player.username)
  }

}
