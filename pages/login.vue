<template>
  <div class="container">
    <form>
      <h3>Accedi</h3>
      <input type="email">
      <input type="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>
h3 {
  color: aliceblue;
}
.container {
  background-color: black;
  max-width: 50%;
  margin: 3rem auto;
  padding: 3rem 2rem;
  opacity: 80%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
}
</style>