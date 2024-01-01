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
          <h1>Your Title</h1>
          <p>Your description or other content...</p>
        </div>
      </div>
      <!-- HERO END -->
      <!-- CARDS STARTS -->
      <div class="cards-container">
        <div class="gradient-overlay-bottom"></div>
        <div>
          <p class="cards-category">Most Popular on Movieflix</p>
          <div class="cards-container-popular">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
          </div>
        </div>
        <div>
          <p class="cards-category">Most Popular on Movieflix</p>
          <div class="cards-container-popular">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
          </div>
        </div>
        <div>
          <p class="cards-category">Most Popular on Movieflix</p>
          <div class="cards-container-popular">
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
}

/* Style for the logo */
.logo {
  font-weight: bold;
  font-size: 1.5rem;
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
  text-align: center;
  color: white;
}

/* Styles for the card container */
.cards-container {
  position: absolute;
  width: 100%;
  z-index: 1;
  color: rgb(255, 255, 255);
  margin-top: -5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.cards-category {
  /* display: flex; */
  /* justify-content: start; */
  padding-left: 5%;
  padding-bottom: 20px;
  padding-top: 20px
}
.cards-container-popular {
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  padding: 0 5%;
}
/* Styles for individual cards */
.card {
  z-index: 1;
  width: 200px;
  height: 150px;
  border: 1px solid #ccc;
  /* margin: 10px; */
}

@media screen and (max-width: 600px) {
  .hero {
    height: 55vh;
  }
  .hero-image {
  min-height: 55vh;
  max-height: 55vh;
}
}
</style>