<template>
  <div id="app">
    <PlayerEntry :thisPlayer="thisPlayer" @playerJoined="addNewPlayer" v-if="step == 0"/>
    <Lobby :thisPlayer="thisPlayer" :players="players" v-else-if="step == 1"/>
    <PendingState v-else-if="step == 2"/>
    <!-- <SinglePlayerCard v-else-if="step == 2"/> -->
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
      this.thisPlayer = player
      this.players.push(player)
      this.step++
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
  /* Grid system container */
  #app {
    max-width: 1600px;
    margin: 0 3vw;
  }
</style>

