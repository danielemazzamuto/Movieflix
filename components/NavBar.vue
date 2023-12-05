
import type { routeLocationKey } from 'vue-router';

import type loginVue from '~/pages/login.vue';

import type { routeLocationKey } from 'vue-router';

import type { routeLocationKey } from 'vue-router';

import type loginVue from '~/pages/login.vue';
<template>
  <div>
    <header>
        <h1>
          <p>MOVIEFLIX</p>
        </h1>
        <NuxtLink to="/login" class="button">Login</NuxtLink>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  max-width: 95%;
  margin: 1.5rem auto 0
}

h1 p {
  color: red;
  font-weight: bold;
  font-size: 2.5rem;
  text-shadow: 0 0 5px #000000;
}

.button {
  background-color: #ff0000; 
  color: white;
  padding: .7em 1.2rem;
  text-decoration: none;
  border: none;
  border-radius: 0.25rem;
  font-weight: 800;
}
</style>