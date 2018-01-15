<template>
  <div id="app">
    <PlayerEntry :thisPlayer="thisPlayer" @playerJoined="addNewPlayer" v-if="step == 0"/>
    <Lobby :thisPlayer="thisPlayer" :players="players" v-else-if="step == 1"/>
    <single-player-card />
    <PendingState />
  </div>
</template>

<script>
import PlayerEntry from './components/PlayerEntry'
import Lobby from './components/Lobby'
import PendingState from './components/PendingState'
import VotingState from './components/VotingState'
import EndGame from './components/EndGame'
import SinglePlayerCard from './components/SinglePlayerCard'

export default {
  data() {
    return {
      step: 0,
      thisPlayer: {
        name: '',
        ready: false
      },
      players: []
    }
  },
  methods: {
    addNewPlayer(player) {
      this.thisPlayer = player;
      this.players.push(player);
      this.step++;
    }
  },
  components: {
    PlayerEntry,
    Lobby,
    SinglePlayerCard,
    PendingState,
    VotingState
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

