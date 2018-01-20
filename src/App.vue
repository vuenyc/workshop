<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import PlayerEntry from './components/PlayerEntry'
import Lobby from './components/Lobby'
import GameSession from './components/GameSession'
import GameEnd from './components/GameEnd'
import SinglePlayerCard from './components/SinglePlayerCard'
import AllPlayersGrid from './components/AllPlayersGrid'

export default {
  components: {
    PlayerEntry,
    Lobby,
    SinglePlayerCard,
    AllPlayersGrid,
    GameSession,
    GameEnd
  }
};
</script>

<style>
  /* Grid system container */
  #app {
    margin: 0 3vw;
  }
</style>

