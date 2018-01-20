<template>
  <div class="GameEnd">

    <h1>The {{ winningTeam }} won!</h1>

    <h3>Here's who everyone was:</h3>

    <AllPlayersGrid :players="players" />

    <button>play again!</button>

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
  //   winningTeam: {
  //     type: String,
  //     required: true
  //   },
  //   players: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      winningTeam: "werewolves",
      players: [
        {
            imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg',
            name: 'zhangoose',
            role: 'popping',
            description: 'once you pop you can\'t stop',
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
  }
}
</script>

<style scoped>
  .GameEnd {
    text-align: center;
  }
  h1 {
    font-size: 5rem;
    margin-top: 3vh;
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 5vh;
  }
  button {
    margin: 0 auto;
    padding: 2vh 5vw;
    text-align: center;
    font-size: 2rem;
  }
</style>
