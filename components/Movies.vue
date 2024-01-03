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
         <img class="hero-image" src="https://images.unsplash.com/photo-1703717101037-132d2c3fdd03?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image">
        
        <div class="hero-content">
          <h1 class="hero-content-title">Your Title</h1>
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
            <div v-for="(card, index) in cards" :key="index" class="card" @mouseover="toggleHover(index, true)" @mouseleave="toggleHover(index, false)">
              <div class="card-content">
                <img class="card-image" src="https://images2-wpc.corriereobjects.it/ozy7ThtK3UcnQI9gP4hI8RIOX-M=/fit-in/1200x800/style.corriere.it/assets/uploads/2023/05/fast-x-1200.jpg" alt="">
                <h3 class="card-title">Title card</h3>
              </div>
              <div v-if="hoverState[index]">Like</div>
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

const {data: movies, refresh} = await useFetchMovies();
console.log(movies);

const cards = ref([
  { title: 'Card 1' },
  { title: 'Card 2' },
  { title: 'Card 3' },
  // Add more card data as needed
]);
const hoverState = ref(Array(cards.value.length).fill(false));
console.log(hoverState);
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
  border: 1px solid #ccc;
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
  bottom: 30%;
  left: 10%;
  width: 100%;
  font-size: 1.5rem;
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
    display: none;
  }
}
</style>