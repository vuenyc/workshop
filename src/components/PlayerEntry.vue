<template>
  <div class="PlayerEntry">
    <!-- game image -->
    <div class="title">
      <h1>{{ 'Welcome to Werewolf' | toUpperCase }}</h1>
    </div>

    <div class="content">
      <h2>Enter your name:</h2>

      <div class="player-input">
        <input v-model="playerName" @keyup.enter="enterGame"/>
        <button :disabled="isDisabled" @click="enterGame">Join</button>
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
    ...mapActions(['enterGame'])
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
  input, button {
    width: 70%;
    min-width: 200px;
    font-size: 1em;
    display: block;
    margin: 0 auto;
  }

  /* columns */
  h1, .content, .player-input {
    /* flex-basis: 100%; */
    padding: 3vw;
  }
  @media screen and (min-width: 800px) {
    /* rows */
    .title, .content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
    /* columns */
    h1, h2, .player-input {
      flex: 1;
    }
    h2 {
      text-align: right;
    }
    input, button {
      display: inline-block;
    }
    button {
      width: auto;
      min-width: auto;
    }
  }
</style>
