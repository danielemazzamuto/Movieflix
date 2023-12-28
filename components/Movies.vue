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
    <div class="main_hero_content">
      <div id="main_hero_title">
        <h1>Title</h1>
      </div>
      <div class="main_hero_buttons">
        <div>
          <button id="main_hero_play_btn"><span>icon</span>Play</button>
        </div>
        <div>
          <button id="main_hero_info_btn"><span>icon</span>More info</button>
        </div>
      </div>
    </div>
    <div class="hero_content">
      <div class="popolari">
       <p>I più popolari su Movieflix</p>
       <div class="popolari_cards">
        <div class="popolari_card">
          <img class="popolari_card_image" src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1610441807/post_images/new-york-1/Dyker-Heights1.jpg">
          <div class="popolari_card_info"> 
            like
          </div>
        </div>
        <div class="popolari_card">
          <img class="popolari_card_image" src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1610441807/post_images/new-york-1/Dyker-Heights1.jpg">
          <div class="popolari_card_info"> 
            like
          </div>
        </div>
        <div class="popolari_card">
          <img class="popolari_card_image" src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1610441807/post_images/new-york-1/Dyker-Heights1.jpg">
          <div class="popolari_card_info"> 
            like
          </div>
        </div>
        <div class="popolari_card">
          <img class="popolari_card_image" src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_768/v1610441807/post_images/new-york-1/Dyker-Heights1.jpg">
          <div class="popolari_card_info"> 
            like
          </div>
        </div>
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
  min-width: 100%;
  height: 700px;
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
  background-size: cover;
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
  max-width: 100%;
  padding: 1.5rem 2rem;
}
.customLogo {
  color: red;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 0 0 5px #000000;
  font-family: Arial, Helvetica, sans-serif;
}
.main_hero_content {
  position: relative;
  color: #fff;
  margin-left: 2rem; /* Use margin instead of left */
  top: 16rem;
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.main_hero_buttons {
  display: flex;
  gap: 20px
}
.main_hero_content button {
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
}
#main_hero_play_btn {
  border: none
}
#main_hero_play_btn:hover {
  opacity: 0.8;
}
#main_hero_info_btn {
  background: #444444;
  border: none;
  opacity: 0.8;
  color: #ffffff;
}
#main_hero_info_btn:hover {
  opacity: 0.7;
}
.hero_content {
  position: relative;
  background-color: rgb(0, 0, 0);
  top: 30rem;
  left: 0;
  width: 100%;
  max-height: 900px;
}
.popolari {
  color: #fff;
  position: relative;
  bottom: 6%;
  padding: 0rem 2rem
}
.popolari p {
  font-size: 0.8rem;
  font-weight: bold
}
.popolari_cards {
  display: flex;
  justify-content: space-between;
  gap: 10px
}
.popolari_card {
  flex: 1 1 250px;
}
.popolari_card_image {
  width: 100%;
  height: auto;
  padding: 1rem 0rem;

}

/* MEDIA QUERY */
@media screen and (max-width: 800px) {
  .main_hero {
  height: 25rem;
  }
  .hero_content {
  top: 14.5rem;
  }
  .main_hero_content{
    z-index: 1;
    top: 8rem
  }
  .main_hero_content button {
    font-size: 0.5rem
  }
  .main_hero_content {
    gap: 3rem;
  }
}
</style>