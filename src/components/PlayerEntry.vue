<template>
  <div class="PlayerEntry">
    <!-- game image -->
    <div class="header">
      <h1>{{ 'Welcome to Werewolf' | toUpperCase }}</h1>
    </div>

    <div class="player-info">
      <h2>Enter your name:</h2>

      <div class="player-input">
        <input v-model="playerName"/>
        <button :disabled="isDisabled" @click="joinGame">Join</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['thisPlayer'],
  data() {
    return {
      playerName: ''
    }
  },
  methods: {
    ...mapActions(['joinGame'])
  },
  computed: {
    isDisabled() {
      return this.playerName.length < 1;
    }
  }
}
</script>

<style scoped>
  .player-input {
    padding: 0 5vw;
  }
  input {
    width: 70%;
    font-size: 1em;
  }

  /* columns */
  h1, .player-info, .player-input {
    /* flex-basis: 100%; */
    padding: 3vw;
  }
  @media screen and (min-width: 800px) {
    /* rows */
    .header, .player-info, input, button {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
    /* columns */
    h1, h2, .player-input {
      flex: 1;
    }
    h2 {
      text-align: right;
    }
  }
</style>

