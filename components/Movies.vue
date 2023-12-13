<template>
  <div>
    <video autoplay muted loop id="preview">
      <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4">
    </video>
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
definePageMeta({
  layout: 'custom'
})

const {data: movies, refresh} = await useFetchMovies();
console.log(movies);
</script>

<style scoped>
video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
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
video:before,video:after{
    content:'';
    position:relative;
    top:5%;
    opacity:0.5;
}
video:before{
    top:0;
    width:20%;
    height:100%;
    -moz-box-shadow: inset 0px 850px 500px -500px #000;
    -webkit-box-shadow: inset 0px 850px 500px -500px #000;
    -o-box-shadow: inset 0px 850px 500px -500px #000;
    box-shadow: inset 0px 850px 500px -500px #000;
}
video:after{
    width:20%;
    height:10%;
    top:100%;
    background:#000;
}
</style>