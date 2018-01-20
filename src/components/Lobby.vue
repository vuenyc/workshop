<template>
  <div class="Lobby">

    <div class="room-info">
      <h1>Game Lobby</h1>
      <p>{{ playersLeft }} more players needed to begin game</p>
    </div>

    <AllPlayersGrid :players="players" />

    <button :disabled="playersLeft" @click="ready">start game</button>

  </div>
</template>

<script>
import AllPlayersGrid from './AllPlayersGrid'

export default {
  components: {
    AllPlayersGrid,
  },
  // props: ['players', 'thisPlayer'],
  data() {
    return {
      playersLeft: 2,
      players: [
        {
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
  methods: {
  }
}
</script>

<style scoped>
  .SinglePlayerCard {
    flex-basis: 100%;
    padding: 3vw;
  }
  .room-info {
    margin-bottom: 5vh;
  }

  @media screen and (min-width: 800px) {
    button {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    h1, p {
      flex: 1;
      text-align: center;
    }
    button {
      margin: 0 auto;
      padding: 2vh 5vw;
      text-align: center;
      font-size: 2rem;
    }
  }
</style>

