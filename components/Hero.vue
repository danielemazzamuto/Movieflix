<template>
  <div>
    <div class="bg"></div>
    <div class="nav_container">
      <header>
        <h1>
          <p :class="{homepageLogo: homepageLogo, customLogo: customLogo}">MOVIEFLIX</p>
        </h1>
        <div>
          <NuxtLink to="/login" class="button">Login</NuxtLink>
        </div>
      </header>
    </div>
    <div class="content">
      <h2>
        Film, serie TV e tanto altro, <br>senza limiti
      </h2>
      <p>
        Vuoi guardare Netflix? Abbonarti o riattivare il tuo abbonamento.
      </p>
    </div>
    <div class="bg-darkner"></div>
  </div>
</template>

<script setup>
defineProps({
  homepageLogo: Boolean,
  customLogo: Boolean,
})

</script>

<style scoped>
/* BACKGROUND IMAGE */
.bg {
  background: url("assets/hero.jpeg");
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
/* CONTENT TEXT */
.content {
  position: absolute;
  bottom: 30%;
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  z-index: 10;
  padding: 0 2rem;
}
h2 {
  font-size: 2rem;
  color: #fff;
  font-weight: bold;

}
p {
  margin-top: 0.5rem;
  color: #b3b3b3;
}
/* BACKGROUND IMAGE OPACITY */
.bg-darkner {
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 50%;
}
/* NAVBAR */
.nav_container {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95%;
  margin: 1.5rem auto 0;
}
.homepageLogo {
  color: red;
  font-weight: bold;
  font-size: 2.5rem;
  text-shadow: 0 0 5px #000000;
  font-family: Arial, Helvetica, sans-serif;
}
.customLogo {
  color: red;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 0 0 5px #000000;
  font-family: Arial, Helvetica, sans-serif;
}
.button {
  background-color: #E50A15; 
  color: white;
  padding: .4em 1.1rem;
  text-decoration: none;
  border: none;
  border-radius: 0.2rem;
  font-weight: 600;
  transition: 0.3s
}
.button:hover {
  background-color: #cd0812; 
}
</style>