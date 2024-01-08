<template>
  <div>
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
            <div class="card-movie-info-year">{{ `${movie.release_date.split("-")[0]}` }}</div>
            <div v-for="genre in movie.genre_ids" :key="genre" class="card-movie-info-genre">
              <p>{{ genre }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['movies', 'hoverState', 'toggleHover'])

</script>

<style scoped>
.cards-category {
  /* display: flex; */
  /* justify-content: start; */
  padding: 1.5rem 0 1.5rem 2rem;
  font-weight: 400;
}
.cards-container-popular {
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  gap: 5px;
}
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
</style>