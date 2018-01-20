<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import PlayerEntry from './components/PlayerEntry'
import Lobby from './components/Lobby'
import GameSession from './components/GameSession'
import EndGame from './components/EndGame'
import SinglePlayerCard from './components/SinglePlayerCard'

export default {
  components: {
    PlayerEntry,
    Lobby,
    SinglePlayerCard,
    GameSession,
    EndGame
  }
};
</script>

<style>
  /* Grid system container */
  #app {
    margin: 0 3vw;
  }
</style>

