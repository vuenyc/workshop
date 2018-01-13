<template>
  <div class="PlayerEntry">
    <!-- game image -->
    <h1>Welcome to Werewolf</h1> 
    <h3>Enter your name</h3>
    <input v-model="playerName"/>
    <button :disabled="isDisabled" @click="enterGame">Join</button>
  </div>
</template>

<script>
export default {
  props: ['currentPlayer'],
  data() {
    return {
      playerName: ''
    }
  },
  methods: {
    enterGame() {
      this.$emit('playerJoined', {
        ...this.currentPlayer,
        name: this.playerName
      });
    }
  },
  computed: {
    isDisabled() {
      return this.playerName.length < 1;
    }
  }
}
</script>

<style scoped>
  .PlayerEntry {
    background-color: yellow;
    height: 100%;
  }
</style>

