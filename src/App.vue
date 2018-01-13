<template>
  <div>
    <!-- <PlayerEntry /> -->
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
  components: {
    PlayerEntry,
    Lobby,
    SinglePlayerCard,
    PendingState,
    VotingState
  }
};
</script>
