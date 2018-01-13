<template>
  <div class="VotingState">

    <Time />

    <template v-for="(player, idx) in allPlayers">
      <SinglePlayerCard :player="player" :key="idx" />
    </template>

    <button v-if="voteSubmitted">Vote</button>
    <button v-else>Change vote</button>

  </div>
</template>

<script>
import Time from './Time'
import Instructions from './Instructions'
import SinglePlayerCard from './SinglePlayerCard'

export default {
  components: {
    Time,
    Instructions,
    SinglePlayerCard,
  },
  props: {
    allPlayers: {
      type: Array,
      required: true
    },
    numVotes: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      voteSubmitted: false,
      player: {
          team: 'Werewolf',
          imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg',
          name: 'pringo',
          role: 'popping',
          description: 'once you pop you can\'t stop'
      }
    }
  }

}
</script>

<style scoped>
</style>
