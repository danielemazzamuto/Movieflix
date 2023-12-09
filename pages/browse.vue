<template>
  <div>
    <div id="container">
      <div class="preview">

      </div>
      <div class="movies">

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
}
.preview {
  background-color: red;
  height: 600px;
  width: 100%;
}
.movies {
  background-color: black;
  height: 600px;
  width: 100%;
}
</style>