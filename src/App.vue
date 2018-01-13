<template>
  <div id="app">
    <PlayerEntry :currentPlayer="currentPlayer" @playerJoined="addNewPlayer" v-if="step == 0"/>
    <Lobby :currentPlayer="currentPlayer" :players="players" v-else-if="step == 1"/>
    <single-player-card />
  </div>
</template>

<script>
import PlayerEntry from './components/PlayerEntry';
import Lobby from './components/Lobby';
import SinglePlayerCard from "./components/SinglePlayerCard";

export default {
  data() {
    return {
      step: 0,
      currentPlayer: {
        name: '',
        ready: false
      },
      players: []
    }
  },
  methods: {
    addNewPlayer(player) {
      this.currentPlayer = player;
      this.players.push(player);
      this.step++;
    }
  },
  components: {
    PlayerEntry,
    Lobby
    SinglePlayerCard
  }
};
</script>

<style>
  html, body, #app {
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>

