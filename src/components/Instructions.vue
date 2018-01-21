<template>
  <div class="Instructions">
    <p>{{instruction}}</p>
  </div>
</template>

<script>
export default {
  props: {
    instruction: {
      type: String, 
      required: true
    }
  }
}
</script>

<style>

</style>
