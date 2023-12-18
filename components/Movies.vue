<template>
  <div>
    <div class="main_hero">
      <!-- <iframe 
      allow="autoplay; fullscreen"
      src="https://www.youtube.com/embed/0L38Z9hIi5s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0"
      frameborder="0"/> -->
      <img class="image_background" src="https://images2-wpc.corriereobjects.it/ozy7ThtK3UcnQI9gP4hI8RIOX-M=/fit-in/1200x800/style.corriere.it/assets/uploads/2023/05/fast-x-1200.jpg">
    </div>
    <div class="nav_container">
      <header>
        <h1>
          <p class="customLogo">MOVIEFLIX</p>
        </h1>
      </header>
    </div>
    <div class="hero_content">
      <div class="popolari">
       <p>I più popolari su Movieflix</p>
       <div class="cards">
        <card>image 1</card>
        <card>image 2</card>
        <card>image 3</card>
       </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const {data: movies, refresh} = await useFetchMovies();
console.log(movies);
</script>

<style scoped>
.main_hero {
  position: absolute;
  width: 100vw;
  height: 70%;
}
.main_hero::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%,rgb(0, 0, 0) 95%);
}
.main_hero::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgb(0, 0, 0) 95%);
}
.image_background {
  width: 100%;
  height: 100%;
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
.hero_content {
  position: relative;
  background-color: rgb(0, 0, 0);
  top: 25rem;
  left: -5;
  width: 100%;
  height: 100vh;
}
.popolari {
  color: #fff;
  position: relative;
  bottom: 6%;
  padding-left: 2rem
}
.popolari p {
  font-size: 0.8rem
}
.popolari .cards {
  display: flex;
  gap:10px
}

/* MEDIA QUERY */
@media screen and (max-width: 600px) {
  .main_hero {
  height: 25rem;
  }
  .hero_content {
  top: 20rem;
  }
}
</style>