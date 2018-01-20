<template>
  <div class="VotingState">
    <Time :time="time"/>
    <div class="PlayerSelection">
      <SinglePlayerCard v-for="(player, idx) in otherPlayers" :player="player" :key="idx" />
    </div>
    <button v-if="!voteSubmitted" v-on:click="vote">Vote</button>
  </div>
</template>

<script>
import Time from './Time'
import Instructions from './Instructions'
import SinglePlayerCard from './SinglePlayerCard'
import { mapActions, mapState, mapGetters } from "vuex"

export default {
  components: {
    Time,
    Instructions,
    SinglePlayerCard,
  },
  props: {
    players: {
      type: Array,
      required: true
    },
    playerId: {
      type: String, 
      required: true
    },
    numVotes: {
      type: Number,
      required: true
    }
  },
  methods: {
    vote() {
      this.$emit('vote')
    }
  },
  data() {
    return {
      voteSubmitted: false,
    }
  },
  computed: {
    ...mapState(["allPlayers", "time"]),
    ...mapGetters(["currentPlayer", "otherPlayers"]),
  }
}
</script>

<style scoped>
.VotingState {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.PlayerSelection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
}
</style>
