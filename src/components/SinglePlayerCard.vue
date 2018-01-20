<template>
  <div :class="['SinglePlayerCard', selected ? 'selected' : '' ]"  @click="$emit('clicked', player)">
    <div class="card-content" :class="{ selected: player.isSelected }">
      <img :src="player.imgUrl" />
      <h3>{{ player.name }}</h3>
      <h4 v-if="player.role">{{ player.role }}</h4>
      <p v-if="player.description">{{ player.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        player: {
            type: Object,
            required: true
        },
        selected: {
            type: Boolean,
            required: false
        }
    }
};
</script>

<style scoped>
    .SinglePlayerCard {
        margin: 0 auto;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      display: inline-block;
      padding: 2vh 5vw;
      margin: 1vh 1vw;
      width: 20vw;
    }
    img {
        border-radius: 50%;
        height: 10vw;
        width: 10vw;
    }
    .selected {
      background-color: #fff;
      position: relative;
      bottom: 3vh;
      filter:drop-shadow(1vw 3vh 1vw rgba(0, 0, 0, 0.5));
    }
</style>
