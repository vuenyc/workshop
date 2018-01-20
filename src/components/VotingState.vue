<template>
  <div class="VotingState">
    <Time :time="time" />

    <AllPlayersGrid :players="otherPlayers" />

    <button v-if="selectedPlayer" @click="vote">Vote</button>
  </div>
</template>

<script>
import Time from './Time'
import Instructions from './Instructions'
import AllPlayersGrid from './AllPlayersGrid'

export default {
  components: {
    Time,
    Instructions,
    AllPlayersGrid,
  },
  // props: {
  //   time: {
  //     type: String,
  //     required: true,
  //   },
  //   players: {
  //     type: Array,
  //     required: true,
  //   },
  //   playerId: {
  //     type: String,
  //     required: true,
  //   },
  //   numVotes: {
  //     type: Number,
  //     required: true,
  //   }
  // },
  methods: {
    vote() {
      this.$emit('vote')
    }
  },
  data() {
    return {
      voteSubmitted: false,
      selectedPlayer: true,

      time: 'day',
      thisPlayer: {
          name: 'pringo'
      },
      players: [
        {
            imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg',
            name: 'zhangoose',
            role: 'popping',
            description: 'once you pop you can\'t stop',
            isSelected: true,
        }, {
            imgUrl: 'https://www.ald.softbankrobotics.com/sites/aldebaran/files/images/en_savoir_plus_sur_nao_2.png',
            name: 'justin',
            role: 'popping',
            description: 'once you pop you can\'t stop'
        }, {
            imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg',
            name: 'pringo',
            role: 'popping',
            description: 'once you pop you can\'t stop'
        }, {
            imgUrl: 'https://www.ald.softbankrobotics.com/sites/aldebaran/files/images/en_savoir_plus_sur_nao_2.png',
            name: 'justin',
            role: 'popping',
            description: 'once you pop you can\'t stop'
        }, {
            imgUrl: 'https://www.ald.softbankrobotics.com/sites/aldebaran/files/images/en_savoir_plus_sur_nao_2.png',
            name: 'justin',
            role: 'popping',
            description: 'once you pop you can\'t stop'
        },
      ]
    }
  },
  computed: {
    otherPlayers() {
      return this.players.filter(otherPlayer => otherPlayer.name !== this.thisPlayer.name)
    }
  }
}
</script>

<style scoped>
  .VotingState {
    text-align: center;
  }
  .AllPlayersGrid {
    margin-bottom: 3vh;
  }
  button {
    margin: 0 auto;
    padding: 2vh 5vw;
    text-align: center;
    font-size: 2rem;
  }
</style>
