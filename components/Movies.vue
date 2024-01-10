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
          <div @mouseover="hoverStateProfileIcon = true" @mouseleave="hoverStateProfileIcon = false" class="user-icon">
            <img src="../assets/profile.jpg" alt="">
            <NuxtLink class="logoutButton" v-if="hoverStateProfileIcon" @click="logout">Logout</NuxtLink>
          </div>
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
          <PopularMovies :movies="movies" :hoverState="hoverState" :toggleHover="toggleHover"/>
          <MostVotedMovies :movies="movies" :hoverState="hoverState" :toggleHover="toggleHover"/>
          <NewMovies :movies="movies" :hoverState="hoverState" :toggleHover="toggleHover"/>
      </div>
      <!-- CARDS END -->
    </div>
  </div>
</template>

<script setup>
const loggedIn = useCookie('loggedIn')

const {data} = await useFetchMovies();

const movies = ref({
  hero: data.value.results[4],
  popular: data.value.results.slice(0, 6),
  voted: data.value.results.slice(6, 12),
  new: data.value.results.slice(12, 18),
})

const hoverStateProfileIcon = ref(false);
const hoverState = ref(Array(data.value.length).fill(false));

function toggleHover(index, state) {
  hoverState.value[index] = state;
}

const logout = () => {
  loggedIn.value = false;
  navigateTo('/')
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

.user-icon {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user-icon img{
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}
.logoutButton {
  color: #000;
  text-shadow: 0 0 3px #fff;
  text-decoration: none;
  padding-top: 0.4rem;
  /* margin-left: -9px; */
  font-size: 1.1rem;
  cursor: pointer;
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