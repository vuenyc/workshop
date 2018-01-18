<template>
  <div class="VotingState">
    <!-- <Time /> -->
    <SinglePlayerCard v-for="(player, idx) in otherPlayers" :player="player" :key="idx" />

    <button v-if="!voteSubmitted" v-on:click="vote">Vote</button>
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
      player: {
          team: 'Werewolf',
          imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg',
          name: 'pringo'
      }
    }
  },
  //TODO: Not sure if we want to do computed property? this only need to be called once on mount. 
  computed: {
    otherPlayers() {
      //TODO: thisplayer is not defined. need way to id current user from user obj 
      return this.players.filter(otherPlayer => otherPlayer.id !== this.playerId)
                       .map(otherPlayer => ({
                         imgUrl: otherPlayer.imgUrl,
                         name: otherPlayer.name
                       }))
    }
  }
}
</script>

<style scoped>
</style>
