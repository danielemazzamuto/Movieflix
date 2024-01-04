<template>
  <div>
    <div class="container">
      <!-- <iframe 
      allow="autoplay; fullscreen"
      src="https://www.youtube.com/embed/0L38Z9hIi5s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0"
      frameborder="0"/> -->
      <!-- HERO STARTS -->
      <div class="hero">
        <div class="navbar">
          <div class="logo">MOVIEFLIX</div>
          <div class="user-icon">User Icon</div>
        </div>
        <div class="gradient-overlay-top"></div>
         <img class="hero-image" :src="`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${movies.hero.poster_path}`" alt="Hero Image">
        
        <div class="hero-content">
          <h1 class="hero-content-title">{{ movies.hero.title }}</h1>
          <div class="hero-content-buttons">
            <button class="hero-content-play"><span>►</span>Play</button>
            <button class="hero-content-moreinfo"><span>ⓘ</span>More info</button>
          </div>
        </div>
      </div>
      <!-- HERO END -->
      <!-- CARDS STARTS -->
      <div class="cards-container">
        <div class="gradient-overlay-bottom"></div>
        <div>
          <p class="cards-category">Most Popular on Movieflix</p>
          <div class="cards-container-popular">
            <div v-for="movie in movies.popular" :key="movie.id" class="card" @mouseover="toggleHover(movie.id, true)" @mouseleave="toggleHover(movie.id, false)">
              <div class="card-content">
                <img class="card-image" :src="`https://www.themoviedb.org/t/p/w500${movie.poster_path}`" alt="">
                <h3 class="card-title">{{ movie.title }}</h3>
              </div>
              <div v-if="hoverState[movie.id]" class="card-movie-info-container">
                <div class="card-movie-info-buttons">
                  <i class="fa-solid fa-circle-play"></i>
                  <div class="card-movie-info-like">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <i class="fa-regular fa-thumbs-down"></i>
                  </div>
                </div>
                <div class="card-movie-info-year">2004</div>
                <div class="card-movie-info-genre">Chrime - Drama - Thriller</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="cards-category">Most Voted</p>
          <div class="cards-container-mostvoted">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
          </div>
        </div>
        <div>
          <p class="cards-category">Featured</p>
          <div class="cards-container-featured">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
          </div>
        </div>
      </div>
      <!-- CARDS END -->
    </div>
  </div>
</template>

<script setup>
const randomNum = Math.floor(Math.random() * 17);

const {data, refresh} = await useFetchMovies();
const movies = ref({
  hero: data.value.results[0],
  popular: data.value.results.slice(0, 6),
    voted: data.value.results.slice(6, 12),
    featured: data.value.results.slice(12, 18),
})

console.log(randomNum);

const hoverState = ref(Array(data.value.length).fill(false));

function toggleHover(index, state) {
  hoverState.value[index] = state;
}
</script>

<style scoped>
.container {
  position: relative;
}

/* Styles for the navbar */
.navbar {
  position: absolute;
  top: 20px; /* Adjust top positioning */
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white; /* Color for navbar content */
  padding: 10px 20px;
  z-index: 2;
}

/* Style for the logo */
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: red;
}

.hero {
  position: relative;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
}

/* Style for the hero image */
.hero-image {
  min-width: 100%;
  max-width: 100%;
  max-height: 90vh;
  object-fit: cover;
}
/* Gradient overlay for top fading effect */
.gradient-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
}

/* Gradient overlay for bottom fading effect */
.gradient-overlay-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 34%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
}
/* Style for the hero content */
.hero-content {
  position: absolute;
  top: 50%;
  left: 10%;
  color: white;
}
.hero-content-title {
  font-size: 3rem;
  padding-bottom: 1.5rem;
  text-transform: uppercase;
}
.hero-content-buttons {
  display: flex;
  align-items: stretch;
  gap: 0.8rem;
}
.hero-content-buttons button {
  font-size: 1.3rem;
  border-radius: 4px;
  border-style: none;
  padding: 5px 10px;
  cursor: pointer;
}
.hero-content-buttons span {
  padding-right: 0.6rem;
}
.hero-content-play:hover {
  opacity: 0.8;
}
.hero-content-moreinfo {
  background-color: rgba(109,109,110,0.8);
  color: #fff;
}
.hero-content-moreinfo:hover {
  background-color: rgba(109,109,110,0.7);
}

/* Styles for the card container */
.cards-container {
  position: absolute;
  width: 100%;
  z-index: 2;
  color: rgb(255, 255, 255);
  margin-top: -5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.cards-category {
  /* display: flex; */
  /* justify-content: start; */
  padding: 1.5rem 0 1.5rem 2rem;
  font-weight: 400;
}
.cards-container-popular {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
}
.cards-container-mostvoted {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
}
.cards-container-featured {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
}
/* Styles for individual cards */
.card {
  z-index: 1;
  flex: 1 1 150px;
  min-height: 8.5rem;
  /* border: 1px solid #ccc; */
  margin: 10px;
  transition: flex 0.3s, min-height 0.5s;
}
.card:hover {
  flex: 1 1 250px;
  min-height: 9.5rem;
}
.card-content {
  position: relative;
}
.card-image {
  width: 100%;
}
.card-title {
  position: absolute;
  bottom: 20%;
  left: 1rem;
  width: 60%;
  font-size: 1em;
  max-height: 80%;
  text-shadow: 1px 1px 2px black;
}

.card-movie-info-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.2rem 1.2rem;
  font-size: 2.2rem;
}
.card-movie-info-buttons .fa-circle-play{
  cursor: pointer;
}
.card-movie-info-buttons .fa-thumbs-up{
  cursor: pointer;
}
.card-movie-info-buttons .fa-thumbs-down{
  cursor: pointer;
}
.card-movie-info-like {
  display: flex;
  justify-content: space-between;
  gap: 1.2rem
}
.card-movie-info-year {
  padding-left: 1.2rem;
  padding-bottom: 0.5rem;
}
.card-movie-info-genre {
  padding-left: 1.2rem;
  padding-bottom: 0.5rem;
}

@media screen and (max-width: 800px) {
  .hero {
    height: 55vh;
  }
  .hero-image {
  min-height: 55vh;
  max-height: 55vh;
  }
  .card-title {
    font-size: 1.2rem;
  }
}
</style>