<template>
  <div class="SinglePlayerCard">
      <img :src="player.imgUrl" />
      <h3>{{ player.name }}</h3>
      <h4 v-if="player.role">{{ player.role }}</h4>
      <p v-if="player.description">{{ player.description }}</p>
  </div>
</template>

<script>
export default {
    // player: {,
    //     imgUrl: 'https://i.pinimg.com/236x/2b/8d/29/2b8d29c19ca209b35b14e91ef60e9100.jpg'
    //     name: 'pringo',
    //     role: 'popping',
    //     description: 'once you pop you can\'t stop'
    // }
    props: {
        player: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
    .SinglePlayerCard {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        border-radius: 50%;
    }
</style>
