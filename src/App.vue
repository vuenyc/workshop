<template>
  <div id="app" class="container">
    <PlayerEntry :thisPlayer="thisPlayer" @playerJoined="addNewPlayer" v-if="step == 0"/>
    <Lobby :thisPlayer="thisPlayer" :players="players" v-else-if="step == 1"/>
    <PendingState v-else-if="step == 2"/>
    <!-- <PlayerProfile v-else-if="step == 2"/> -->
  </div>
</template>

<script>
import PlayerEntry from './components/PlayerEntry'
import Lobby from './components/Lobby'
import PendingState from './components/PendingState'
import VotingState from './components/VotingState'
import EndGame from './components/EndGame'
import PlayerProfile from './components/PlayerProfile'

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
  filters: {
    allCaps(str) {
      return str.toUpperCase()
    }
  },
  components: {
    PlayerEntry,
    Lobby,
    PlayerProfile,
    PendingState,
    VotingState
  }
};
</script>

<style>
  #app {
    max-width: 1200px;
    margin: 0 3vw;
  }
</style>

