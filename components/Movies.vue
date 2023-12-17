<template>
  <div>
    <!-- <video autoplay muted loop id="preview">
      <source src="https://www.youtube.com/embed/n8TaX9y1MMU?autoplay=1" type="video/mp4">
    </video> -->
    <div class="video-background">
      <iframe 
      allow="autoplay; fullscreen"
      src="https://www.youtube.com/embed/0L38Z9hIi5s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0"
      frameborder="0"/>
    </div>
    <div class="nav_container">
      <header>
        <h1>
          <p class="customLogo">MOVIEFLIX</p>
        </h1>
      </header>
    </div>
    <div id="container">
      <div class="movies">
       
      </div>
    </div>
  </div>
</template>

<script setup>

const {data: movies, refresh} = await useFetchMovies();
console.log(movies);
</script>

<style scoped>
.video-background {
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
iframe {
  position: relative;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.nav_container {
  position: relative;
  top: 0;
  z-index: 10;
  width: 100%;
}
header {
  display: flex;
  position: relative;
  max-width: 95%;
  padding: 1.5rem 2rem;
}
.customLogo {
  color: red;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 0 0 5px #000000;
  font-family: Arial, Helvetica, sans-serif;
}
#container {
  position: relative;
  background-color: red;
  top: 25rem;
  left: -5;
  width: 100%;
  height: 100vh;
}

@media (min-aspect-ratio: 16/9) {
  .video-background iframe {
    /* height = 100 * (9 / 16) = 56.25 */
    height: 56.25vw;
  }
}
@media (max-aspect-ratio: 16/9) {
  .video-background iframe {
    /* width = 100 / (9 / 16) = 177.777777 */
    width: 177.78vh;
  }
}
</style>